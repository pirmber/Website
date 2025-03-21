// Sita Ram! 🔥 This script adds some smooth interactivity 😎

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
  
    cards.forEach(card => {
      card.addEventListener("click", () => {
        console.log(`Navigating to ${card.querySelector("h3").textContent}`);
      });
    });
  
    console.log("Blog loaded. Ready to slay 🧠⚡");
  });