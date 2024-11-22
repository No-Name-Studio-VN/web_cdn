(() => {
  const definedSidebarType = {
    full: "full",
    mini: "mini-sidebar",
  };

  $(function () {
    const cachedLocation = window.location;
    const cachedPathname = cachedLocation.pathname;
  
    const sideBarType = getLocalSidebarType();
    setLocalSidebarType(sideBarType);
    setBodySidebarType(sideBarType);
  
    const mainWrapper = $("#main-wrapper");
    // append after mainWrapper a div
    mainWrapper.after(
      $('<div>', {
        class: "dark-transparent sidebartoggler"
      })
    );
  
    mainWrapper.AdminSettings({
      ThemeBg: "purple_theme",
      SidebarType: sideBarType, // You can change it full / mini-sidebar
    });
  
    /** Create event handler for sidebar toggler */
    function handleSidebar() {
      document.querySelectorAll(".sidebartoggler").forEach(function (element) {
        element.addEventListener("click", function () {
          document.querySelectorAll(".sidebartoggler").forEach(function (el) {
            el.checked = true;
          });
          document
            .getElementById("main-wrapper")
            .classList.toggle("show-sidebar");
          document.querySelectorAll(".sidebarmenu").forEach(function (el) {
            el.classList.toggle("close");
          });
          const dataTheme = document.body.getAttribute("data-sidebartype");
          if (dataTheme === definedSidebarType.full) {
            setBodySidebarType(definedSidebarType.mini);
            setLocalSidebarType(definedSidebarType.mini);
          } else {
            setBodySidebarType(definedSidebarType.full);
            setLocalSidebarType(definedSidebarType.full);
          }
        });
      });
    }
  
    handleSidebar();
  
    // Intialize sidebar menu
    const isSidebar = document.getElementsByClassName("side-mini-panel");
    if (isSidebar.length > 0) {
      // const url = window.location + "";
      // const path = url.replace(window.location.protocol + "//" + window.location.host + "/", "");
  
      //****************************
      // This is for
      //****************************
  
      function findMatchingElement() {
        const currentUrl = window.location.href;
        const anchors = document.querySelectorAll("#sidebarnav a");
  
        for (let i = 0; i < anchors.length; i++) {
          if (anchors[i].href === currentUrl) {
            return anchors[i];
          }
        }
  
        return null; // Return null if no matching element is found
      }
  
      const elements = findMatchingElement();
  
      if (elements) {
        // Do something with the matching element
        elements.classList.add("active");
      }
  
      //****************************
      // This is for the multilevel menu
      //****************************
      document.querySelectorAll("#sidebarnav a").forEach(function (link) {
        link.addEventListener("click", function (e) {
          const isActive = this.classList.contains("active");
          const parentUl = this.closest("ul");
  
          if (!isActive) {
            // hide any open menus and remove all other classes
            parentUl.querySelectorAll("ul").forEach(function (submenu) {
              submenu.classList.remove("in");
            });
            parentUl.querySelectorAll("a").forEach(function (navLink) {
              navLink.classList.remove("active");
            });
  
            // open our new menu and add the open class
            const submenu = this.nextElementSibling;
            if (submenu) {
              submenu.classList.add("in");
            }
  
            this.classList.add("active");
          } else {
            this.classList.remove("active");
            parentUl.classList.remove("active");
            const submenu = this.nextElementSibling;
            if (submenu) {
              submenu.classList.remove("in");
            }
          }
        });
      });
  
      document
        .querySelectorAll("#sidebarnav > li > a.has-arrow")
        .forEach(function (link) {
          link.addEventListener("click", function (e) {
            e.preventDefault();
          });
        });
  
      //****************************
      // This is for show menu
      //****************************
  
      const closestNav = elements?.closest("nav[class^=sidebar-nav]");
      const menuid = (closestNav && closestNav?.id) || "menu-right-mini-1";
      const menu = menuid[menuid.length - 1];
  
      document
        .getElementById("menu-right-mini-" + menu)
        .classList.add("d-block");
      document.getElementById("mini-" + menu).classList.add("selected");
  
      //****************************
      // This is for mini sidebar
      //****************************
      document
        .querySelectorAll("ul#sidebarnav ul li a.active")
        .forEach(function (link) {
          link.closest("ul").classList.add("in");
          link.closest("ul").parentElement.classList.add("selected");
        });
      document
        .querySelectorAll(".mini-nav .mini-nav-item")
        .forEach(function (item) {
          item.addEventListener("click", function () {
            const id = this.id;
            document
              .querySelectorAll(".mini-nav .mini-nav-item")
              .forEach(function (navItem) {
                navItem.classList.remove("selected");
              });
            this.classList.add("selected");
            document
              .querySelectorAll(".sidebarmenu nav")
              .forEach(function (nav) {
                nav.classList.remove("d-block");
              });
            document
              .getElementById("menu-right-" + id)
              .classList.add("d-block");
            setBodySidebarType(definedSidebarType.full);
          });
        });
    }
  
    logger.info("Sidebar initialized with type:", sideBarType);
  });
  
  $.fn.AdminSettings = function (config) {
    const fixedheader = "fixed";
    const absoluteheader = "absolute";
  
    const myid = this.attr("id");
    // General option for vertical header
    const defaults = {
      Theme: true, // this can be true or false ( true means dark and false means light ),
      SidebarPosition: false, // it can be true / false
      HeaderPosition: true, // it can be true / false
      BoxedLayout: false, // it can be true / false
      ThemeBg: "aqua_theme",
    };
    const settings = $.extend({}, defaults, config);
    // Attribute functions
    const AdminSettings = {
      // Settings INIT
      AdminSettingsInit: function () {
        AdminSettings.ManageSidebarType();
        AdminSettings.ManageSidebarPosition();
        // Enable Sidebar
        // $("#sidebarloader").remove();
        // $("#guildsidebardetail").css("display", "");
      },
  
      /** Manage theme layout */
      ManageSidebarType: function () {
        switch (settings.SidebarType) {
          //****************************
          // If the sidebar type has full
          //****************************
          case definedSidebarType.full:
            setBodySidebarType(definedSidebarType.full);
            setLocalSidebarType(definedSidebarType.full);
            //****************************
            /* This is for the mini-sidebar if width is less then 1170*/
            //****************************
            const setsidebartype = function () {
              const width =
                window.innerWidth > 0 ? window.innerWidth : this.screen.width;
              if (width < 1300) {
                setBodySidebarType(definedSidebarType.mini);
                setLocalSidebarType(definedSidebarType.mini);
              } else {
                setBodySidebarType(definedSidebarType.full);
                setLocalSidebarType(definedSidebarType.full);
              }
            };
            window.addEventListener("DOMContentLoaded", setsidebartype);
            window.addEventListener("resize", setsidebartype);
            break;
  
          //****************************
          // If the sidebar type has mini-sidebar
          //****************************
          case definedSidebarType.mini:
            setBodySidebarType(definedSidebarType.mini);
            setLocalSidebarType(definedSidebarType.mini);
            break;
  
          default:
        }
      },
      /** Manage sidebar position */
      ManageSidebarPosition: function () {
        const sidebarposition = settings.SidebarPosition;
        const headerposition = settings.HeaderPosition;
        switch (settings.Layout) {
          case "vertical":
            if (sidebarposition === true) {
              $("#" + myid).attr("data-sidebar-position", fixedheader);
            } else {
              $("#" + myid).attr("data-sidebar-position", absoluteheader);
            }
            if (headerposition === true) {
              $("#" + myid).attr("data-header-position", fixedheader);
            } else {
              $("#" + myid).attr("data-header-position", "relative");
            }
            break;
          case "horizontal":
            if (sidebarposition === true) {
              $("#" + myid).attr("data-sidebar-position", fixedheader);
            } else {
              $("#" + myid).attr("data-sidebar-position", absoluteheader);
            }
            if (headerposition === true) {
              $("#" + myid).attr("data-header-position", fixedheader);
            } else {
              $("#" + myid).attr("data-header-position", "relative");
            }
            break;
          default:
        }
      },
    };
    AdminSettings.AdminSettingsInit();
  };

  /** Get sidebar type from localStorage */
  function getLocalSidebarType() {
    return localStorage.getItem("sidebartype") || definedSidebarType.full;
  }

  /** Set sidebar type in localStorage
   * @param {String} type
   */
  function setLocalSidebarType(type) {
    localStorage.setItem("sidebartype", type);
  }

  /** Set sidebar type in document.body
   * @param {String} type
  */
  function setBodySidebarType(type) {
    document.body.setAttribute("data-sidebartype", type);
  }
})();