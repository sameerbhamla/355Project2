
document.addEventListener("DOMContentLoaded", function () {
    const laptopItems = document.querySelectorAll(".laptop");
  
    laptopItems.forEach((item) => {
      item.addEventListener("click", function () {
        moveToCenter(item);
        addFadeBackground();
      });
    });
  
    function moveToCenter(element) {
      const rect = element.getBoundingClientRect();
      const currentTop = rect.top;
      const currentLeft = rect.left;
  
      const moveX = window.innerWidth / 2 - currentLeft - rect.width / 2;
      const moveY = window.innerHeight / 2 - currentTop - rect.height / 2;
  
      element.style.transition = "transform 0.5s ease-in-out";
      element.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
  
    function addFadeBackground() {
      const overlay = document.createElement("div");
      overlay.classList.add("overlay");
      document.body.appendChild(overlay);
  
      setTimeout(() => {
        overlay.style.transition = "opacity 0.5s ease-in-out";
        overlay.style.opacity = "0.5";
      }, 100);

      overlay.addEventListener("click", function () {
        resetLaptopItem();
      });
    }
  
    function resetLaptopItem() {
      const overlay = document.querySelector(".overlay");
      if (overlay) {
        overlay.style.opacity = "0";
        setTimeout(() => {
          overlay.remove();
        }, 500);
      }
  
      laptopItems.forEach((item) => {
        item.style.transition = "transform 0.5s ease-in-out";
        item.style.transform = "none";
      });
    }
  });
  
  
