(() => {
  const refs = {
    openMenuBtn: document.querySelector("[data-menu-open]"),
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    menu: document.querySelector("[data-menu]"),
  };

  refs.openMenuBtn.addEventListener("click", toggle-Menu);
  refs.closeMenuBtn.addEventListener("click", toggle-Menu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
  }
})();