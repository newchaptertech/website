// New Chapter — progressive enhancements: mobile menu and footer year.
(function () {
  var header = document.querySelector("[data-site-header]");
  var toggle = header && header.querySelector(".nav-toggle");
  var nav = header && header.querySelector("#site-nav");

  if (toggle && nav) {
    var setOpen = function (open) {
      toggle.setAttribute("aria-expanded", String(open));
      header.classList.toggle("is-open", open);
    };

    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) setOpen(false);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && header.classList.contains("is-open")) {
        setOpen(false);
        toggle.focus();
      }
    });

    var desktop = window.matchMedia("(min-width: 761px)");
    var onChange = function (event) {
      if (event.matches) setOpen(false);
    };
    if (desktop.addEventListener) desktop.addEventListener("change", onChange);
    else if (desktop.addListener) desktop.addListener(onChange);
  }

  var year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());
})();
