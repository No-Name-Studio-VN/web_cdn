(() => {
  InjectCSS(`
  :root,[data-bs-theme="light"] {
    --bd-violet: #712cf9;
    --bd-toc-color: var(--bd-violet);
  }
  [data-bs-theme="dark"] {
    --bd-violet: #9461fb;
    --bd-toc-color: var(--bs-emphasis-color);
  }
  #toc_wrapper {
    z-index: auto!important; top: calc(calc(70px + 18px) + 1rem);
    height: 80vh; overflow-y: auto!important; overflow-x: hidden!important;
  }
  #toc_body a.nav-item {
    display: block;
    color: inherit;
    text-decoration: none;
    border-left: .125rem solid transparent
  }
  #toc_body a.nav-item.active {
    color: var(--bd-toc-color);
    border-left-color: var(--bd-toc-color)
  }
  h1:hover .anchor, h2:hover .anchor, h3:hover .anchor, h4:hover .anchor, h5:hover .anchor, h6:hover .anchor,
  h1 .anchor:focus, h2 .anchor:focus, h3 .anchor:focus, h4 .anchor:focus, h5 .anchor:focus, h6 .anchor:focus {
  visibility: visible;
  }

  h1 .anchor, h2 .anchor, h3 .anchor, h4 .anchor, h5 .anchor, h6 .anchor {
  visibility: hidden;
  }

  p { margin-top: 0.25rem }`);

  const { origin, pathname } = window.location;
  const articleContent = document.querySelector(".articlecontent");

  // add class mt-1 to all headings
  const headings = articleContent.querySelectorAll("h1, h2, h3, h4, h5, h6");
  for (let i = 0; i < headings.length; i++) {
    headings[i].classList.add("mt-3");
  }

  // add nns-toclipboard attribute to all anchors
  const anchors = articleContent.querySelectorAll(".anchor");
  for (let i = 0; i < anchors.length; i++) {
    anchors[i].setAttribute("nns-toclipboard", "");

    const link = origin + pathname + anchors[i].getAttribute("href");
    anchors[i].setAttribute("nns-toclipboard-data", link);
  }

  // Check if there are code blocks in the page and highlight them
  const codeBlocks = articleContent.querySelectorAll("pre code");
  if (codeBlocks.length > 0) {
    codeBlocks.forEach((block) => {
      if (block.className === 'language-ejs') {
        block.className = 'language-html';
      }
    });
    LoadHandler.js("https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js").then(() => {
      LoadHandler.css("https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css");
      hljs.highlightAll();
    });
  }

  const images = articleContent.querySelectorAll("img");
  for (let i = 0; i < images.length; i++) {
    images[i].style.borderRadius = "var(--bs-border-radius-xl)";
  }

  window.addEventListener("DOMContentLoaded", async function () {
    const lightbox = new PhotoSwipeLightbox({
      gallery: '.articlecontent',
      children: 'a',
      initialZoomLevel: 'fit',
      secondaryZoomLevel: 5,
      maxZoomLevel: 10,
      pswpModule: PhotoSwipe
    });
    lightbox.on('uiRegister', function() {
      lightbox.pswp.ui.registerElement({
        name: 'zoom-level-indicator',
        order: 9,
        onInit: (el, pswp) => {
          pswp.on('zoomPanUpdate', (e) => {
            if (e.slide === pswp.currSlide) {
              el.innerText = 'Zoom level is ' + Math.round(pswp.currSlide.currZoomLevel * 100) + '%';
            }
          });
        }
      });
      lightbox.pswp.ui.registerElement({
        name: 'custom-caption',
        order: 9,
        isButton: false,
        appendTo: 'root',
        html: 'Caption text',
        onInit: (el, pswp) => {
          lightbox.pswp.on('change', () => {
            const currSlideElement = lightbox.pswp.currSlide.data.element;
            let captionHTML = '';
            if (currSlideElement) {
              const hiddenCaption = currSlideElement.querySelector('.hidden-caption-content');
              if (hiddenCaption) {
                // get caption from element with class hidden-caption-content
                captionHTML = hiddenCaption.innerHTML;
              } else {
                // get caption from alt attribute
                captionHTML = currSlideElement.querySelector('img').getAttribute('alt');
              }
            }
            el.innerHTML = captionHTML || '';
          });
        }
      });
    });
    lightbox.init();

    const text = articleContent.innerText;
    const wpm = 225;
    const words = text.trim().split(/\s+/).length;
    const time = Math.ceil(words / wpm);
    document.getElementById("readtime").innerText = `${time} min${time > 1 ? "s" : ""} read`;

    // scroll to anchor after 0.5s
    setTimeout(() => {
      const anchorlink = window.UrlHandler.getHash();
      if (anchorlink) {
        const anchor = document.querySelector(`div a[href="${anchorlink}"]`);
        if (anchor) anchor.scrollIntoView({ behavior: 'smooth' });
      }
    }, 500);

    // Initialize an empty object to store the headings
    const headingObj = {};

    // Iterate over each heading
    await headings.forEach((heading, index) => {
      // Get the heading level (1 for h1, 2 for h2, etc.)
      const level = parseInt(heading.tagName.slice(1));
      const href = heading.querySelector(".anchor").getAttribute("href");

      // Initialize an empty object for this heading if it doesn't exist yet
      if (!headingObj[heading.textContent]) {
        headingObj[heading.textContent] = {
          level: level,
          href: href,
          subheadings: {}
        };
      }

      // If the next heading exists and is a subheading of the current one, add it to the current heading's subheadings
      if (headings[index + 1]) {
        const nextLevel = parseInt(headings[index + 1].tagName.slice(1));
        if (nextLevel > level) {
          headingObj[heading.textContent].subheadings[headings[index + 1].textContent] = {
            level: nextLevel,
            href: headings[index + 1].querySelector(".anchor").getAttribute("href"),
            subheadings: {}
          };
        }
      }
    });

    document.querySelector("#toc").innerHTML = (await createNavPills(headingObj)).outerHTML;

    const scrollSpy = new bootstrap.ScrollSpy(articleContent, {
      target: "#toc_body"
    });
    scrollSpy.refresh();
    
    // articleContent.addEventListener('activate.bs.scrollspy', (e) => {
    //   e.relatedTarget.scrollIntoView({ behavior: 'smooth' });
    // });

  });

  function createNavLink(title, level, href) {
    const indent = (level) => {
      if (level === 1) return 0;
      return (level - 1) * 2;
    };

    const a = document.createElement("a");
    a.classList.add("nav-item", `ms-${indent(level)}`, "me-3", "w-100");
    a.style.marginBottom = "-0.15rem";
    a.href = href;

    const span = document.createElement("span");
    span.classList.add("nav-link", "fs-3");
    span.style.wordWrap = "initial";
    span.textContent = title;
    a.appendChild(span);

    return a;
  }

  const createNavPills = async (headingObj) => {
    const navPills = document.createElement("nav");
    navPills.classList.add("nav", "flex-column", "nav-tabs");
    navPills.id = "toc_body";

    Object.entries(headingObj).forEach(([title, heading]) => {
      navPills.appendChild(createNavLink(title, heading.level, heading.href, heading.subheadings));
    });

    return navPills;
  };

})();