document.addEventListener("astro:page-load", () => {
  const accordionItems = document.querySelectorAll<HTMLDivElement>(".accordion__item");
  accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector(".accordion__header");
    accordionHeader?.addEventListener("click", () => {
      const openItem = document.querySelector(".accordion-open") as HTMLDivElement;
      toggleItem(item);
      if (openItem && openItem !== item) {
        toggleItem(openItem);
      }
    });
  });
  const toggleItem = (item: HTMLDivElement) => {
    const accordionContent = item.querySelector(".accordion__content") as HTMLDivElement | null;
    if (item.classList.contains("accordion-open")) {
      accordionContent?.removeAttribute("style");
      item.classList.remove("accordion-open");
    } else if (accordionContent) {
      // Ensure accordionContent is defined before accessing scrollHeight
      accordionContent.style.height = accordionContent.scrollHeight + "px";
      item.classList.add("accordion-open");
  }
  };
});
