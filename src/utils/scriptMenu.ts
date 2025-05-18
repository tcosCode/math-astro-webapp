document.addEventListener("astro:page-load", () => {
  const menu = document.getElementById("menu");
  const navbar = document.getElementById("navbar");

  if (menu && navbar) {
    let touchStartX = 0;
    let touchEndX = 0;

    menu.addEventListener("click", () => {
      navbar.classList.toggle("open");
    });

    document.addEventListener("click", (event: MouseEvent) => {
      if (
        !navbar.contains(event.target as Node) &&
        !menu.contains(event.target as Node)
      ) {
        navbar.classList.remove("open");
      }
    });

    // Touch events for mobile
    document.addEventListener("touchstart", (event: TouchEvent) => {
      touchStartX = event.changedTouches[0].screenX;
    });

    document.addEventListener("touchmove", (event: TouchEvent) => {
      if (navbar.classList.contains("open")) {
        event.preventDefault(); // Block the horizontal scroll when menu is open
      }
      touchEndX = event.changedTouches[0].screenX;
    });

    document.addEventListener("touchend", () => {
      const threshold = 50; //  Minimum drag pixels to activate
      const screenWidth = window.innerWidth;
      const menuWidth = navbar.offsetWidth;

      // Left Swipe (close)
      if (
        touchStartX - touchEndX > threshold &&
        navbar.classList.contains("open")
      ) {
        navbar.classList.toggle("open");
      }
      // Rigth Swipe (open)
      else if (
        touchEndX - touchStartX > threshold &&
        !navbar.classList.contains("open")
      ) {
        navbar.classList.toggle("open");
      }
    });
  }
});
