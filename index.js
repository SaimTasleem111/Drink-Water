 document.addEventListener("DOMContentLoaded", function () {
    // Select all small cups and the remaining liters display
    const smallCups = document.querySelectorAll(".cup-small");
    const remained = document.getElementById("liters");
    const percentage = document.getElementById("percentage");
  
    let totalLiters = 0;
    let percentageFull = 0;
  // Add click event listeners to each small cup
    smallCups.forEach((cup, index) => {
      cup.addEventListener("click", () => {
        if (!cup.classList.contains("full")) {
             // Mark the cup as full and update the total liters
          cup.classList.add("full");
          totalLiters += 0.25;
          updateCupDisplay();
        }
      });
    });
  
    function updateCupDisplay() {
      remained.innerText = `${2 - totalLiters} L`;
      percentageFull = (totalLiters / 2) * 100;
      percentage.style.height = `${percentageFull}%`;
      percentage.innerText = `${percentageFull.toFixed(0)}%`;
    }
  });