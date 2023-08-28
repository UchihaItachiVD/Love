// JavaScript code for special effects
// Add your amazing and unique functionality here

// Example: Falling Hearts Effect
function createFallingHearts() {
    const heart = document.createElement("span");
    heart.classList.add("heart");
    heart.innerHTML = "&#10084;"; // Use heart symbol or any desired icon
  
    // Set random position for each heart within the viewport
    const randomLeft = Math.floor(Math.random() * window.innerWidth);
    const randomTop = Math.floor(Math.random() * window.innerHeight);
  
    // Set initial position of heart
    heart.style.left = `${randomLeft}px`;
    heart.style.top = `${randomTop}px`;
  
    // Append heart to body
    document.body.appendChild(heart);
  
    // Remove heart from body after animation
    heart.addEventListener("animationend", () => {
      document.body.removeChild(heart);
    });
  }
  
  // Create falling hearts at regular intervals
  setInterval(createFallingHearts, 1000); // Adjust the interval duration as desired
  