document.addEventListener("astro:page-load", () => {
  const menu = document.getElementById("menu");
  const navbar = document.getElementById("navbar");

  if (menu && navbar) {
    menu.addEventListener("click", function () {
      navbar.classList.toggle("open");
    });

    document.addEventListener("click", function (event) {
      if (
        !navbar.contains(event.target as Node) &&
        !menu.contains(event.target as Node)
      ) {
        navbar.classList.remove("open");
      }
    });
  }
});
