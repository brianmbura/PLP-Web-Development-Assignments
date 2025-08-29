/* =====================================================
   🚀 Week 5 Assignment: Mastering JavaScript Fundamentals
   Author: Brian Mbura
   File: script.js
   ===================================================== */

/* ----------------------------
   🎯 Part 1: JavaScript Basics
   ---------------------------- */
// Variables and conditionals
let userName = prompt("Enter your name:");
let userAge = prompt("Enter your age:");

if (userAge >= 18) {
  console.log(`Welcome ${userName}, you are an adult ✅`);
} else {
  console.log(`Hello ${userName}, you are still under 18 ❌`);
}


/* ----------------------------
   ❤️ Part 2: JavaScript Functions
   ---------------------------- */
// Function to calculate total
function calculateTotal(prices) {
  let total = 0;
  for (let price of prices) {
    total += price;
  }
  return total;
}

// Function to toggle visibility of About section
function toggleAbout() {
  const aboutSection = document.getElementById("about");
  if (aboutSection.style.display === "none") {
    aboutSection.style.display = "block";
  } else {
    aboutSection.style.display = "none";
  }
}


/* ----------------------------
   🔁 Part 3: Loops
   ---------------------------- */
// For loop: simulate countdown
console.log("Countdown:");
for (let i = 5; i > 0; i--) {
  console.log(i);
}

// While loop: print first 5 services
let services = ["Photography", "Videography", "Graphics Designing", "Web Development", "SEO"];
let i = 0;
while (i < services.length) {
  console.log("Service:", services[i]);
  i++;
}


/* ----------------------------
   🌐 Part 4: DOM Manipulation
   ---------------------------- */
// 1. Change hero text dynamically
document.querySelector(".hero h2").textContent = "Welcome, JavaScript is running!";

// 2. Add a new service card dynamically
const newCard = document.createElement("div");
newCard.className = "card";
newCard.textContent = "SEO Optimization";
document.querySelector(".grid").appendChild(newCard);

// 3. Add button to toggle About section
const toggleBtn = document.createElement("button");
toggleBtn.textContent = "Toggle About Section";
toggleBtn.style.margin = "1rem";
toggleBtn.onclick = toggleAbout;
document.querySelector(".about").appendChild(toggleBtn);
