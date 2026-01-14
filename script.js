let availableNumbers = [];
let usedNumbers = [];

// Initialize numbers 1–155
for (let i = 1; i <= 155; i++) {
  availableNumbers.push(i);
}

function generateNumber() {
  const numberBox = document.getElementById("number");

  if (availableNumbers.length === 0) {
    numberBox.textContent = "DONE";
    alert("All numbers have been generated!");
    return;
  }

  numberBox.textContent = "🎲";

  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * availableNumbers.length);
    const selectedNumber = availableNumbers.splice(randomIndex, 1)[0];

    usedNumbers.push(selectedNumber);
    numberBox.textContent = selectedNumber;
  }, 600);
}

function toggleHistory() {
  const historyDiv = document.getElementById("history");

  if (historyDiv.classList.contains("hidden")) {
    historyDiv.classList.remove("hidden");
    historyDiv.innerHTML = "<b>Used Numbers:</b><br>" + usedNumbers.join(", ");
  } else {
    historyDiv.classList.add("hidden");
  }
}

function showHowTo() {
  const modal = document.getElementById("howToModal");
  modal.style.display = "block";
}

function closeHowTo() {
  const modal = document.getElementById("howToModal");
  modal.style.display = "none";
}

// Close modal when clicking outside
window.onclick = function(event) {
  const modal = document.getElementById("howToModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
