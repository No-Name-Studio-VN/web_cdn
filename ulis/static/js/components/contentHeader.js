(() => {
  const createBreadcrumbItem = (text, href) => {
    const item = document.createElement('li');
    item.className = 'breadcrumb-item';
    item.innerHTML = `<a class="fs-4 text-decoration-none fw-bold" 
      style="color: #2F5D62; padding: 0.25rem 0.75rem; border-radius: 4px; transition: all 0.2s ease-in-out;" 
      onmouseover="this.style.backgroundColor='rgba(47, 93, 98, 0.1)'; this.style.boxShadow='0 2px 4px rgba(47, 93, 98, 0.2)'" 
      onmouseout="this.style.backgroundColor='transparent'; this.style.boxShadow='none'" 
      href="${href}">${text}</a>`;
    return item;
  };

  const generateBreadcrumbs = () => {
    const breadcrumbContainer = document.getElementById("breadcrumbContainer");
    if (!breadcrumbContainer) return;

    const pathParts = window.location.pathname.split("/").filter(Boolean);
    const [p1, p2, p3] = pathParts;

    if (!p1) return;

    if (p1 !== 'dashboard') {
      breadcrumbContainer.appendChild(createBreadcrumbItem(
        p1.charAt(0).toUpperCase() + p1.slice(1),
        `/${p1}`
      ));
      
      if (p2) {
        breadcrumbContainer.appendChild(createBreadcrumbItem(
          p2.charAt(0).toUpperCase() + p2.slice(1),
          `/${p1}/${p2}`
        ));
      }
    } else if (p2) {
      breadcrumbContainer.appendChild(createBreadcrumbItem(
        (p3 || p2).charAt(0).toUpperCase() + (p3 || p2).slice(1),
        `/dashboard/${p2}${p3 ? '/' + p3 : ''}`
      ));
    }
  };

  try {
    generateBreadcrumbs();
  } catch (err) {
    if (typeof logger !== 'undefined') {
      logger.warn("Nothing to show, we can safely ignore this.");
    }
  }
})();