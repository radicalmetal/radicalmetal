document.addEventListener("DOMContentLoaded", () => {
  const scroller = document.getElementById("scroller");
  const leftBtn = document.querySelector(".scroll-btn.left");
  const rightBtn = document.querySelector(".scroll-btn.right");
  const items = Array.from(scroller.children);
  const itemWidth = items[0].offsetWidth + 16; // width + gap

  // Set initial index
  let currentIndex = 0;

  function updateButtons() {
    leftBtn.disabled = currentIndex === 0;
    rightBtn.disabled = currentIndex === items.length - 1;
  }

  function scrollOne(direction) {
    // calculate new index
    const newIndex = currentIndex + direction;
    if (newIndex < 0 || newIndex >= items.length) return;

    // Scroll relative to current scrollLeft
    scroller.scrollBy({ left: direction * itemWidth, behavior: "smooth" });

    // Update index
    currentIndex = newIndex;
    updateButtons();
  }

  leftBtn.addEventListener("click", () => scrollOne(-1));
  rightBtn.addEventListener("click", () => scrollOne(1));

  // Initialize buttons
  updateButtons();
});
