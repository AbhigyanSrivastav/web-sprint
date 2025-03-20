// Get elements
const strapSelect = document.getElementById('strap');
const engravingInput = document.getElementById('engraving');
const priceDisplay = document.getElementById('price');

// Create dark mode button
const toggleBtn = document.createElement('button');
toggleBtn.textContent = 'Toggle Dark Mode';
toggleBtn.classList.add('toggle-mode');
toggleBtn.onclick = () => document.body.classList.toggle('dark-mode');
document.body.appendChild(toggleBtn);

// Timer container at the top with "Hurry up!" message
const timerContainer = document.createElement('div');
timerContainer.classList.add('timer-container');
document.body.prepend(timerContainer); // Moves timer to the top

const hurryUpText = document.createElement('h2');
hurryUpText.textContent = '🔥 Hurry up! Limited-time offer 🔥';
hurryUpText.classList.add('hurry-text');
timerContainer.appendChild(hurryUpText);

const timerDisplay = document.createElement('div');
timerDisplay.classList.add('timer');
timerContainer.appendChild(timerDisplay);

// Timer function
let countdown = 10800; // 3 hours in seconds

function updateTimer() {
    const hours = Math.floor(countdown / 3600);
    const minutes = Math.floor((countdown % 3600) / 60);
    const seconds = countdown % 60;

    timerDisplay.textContent = `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    countdown--;

    if (countdown < 0) {
        clearInterval(timerInterval);
        timerDisplay.textContent = 'Offer expired';
        hurryUpText.textContent = '😔 Too late! Offer expired';
        hurryUpText.style.color = 'red';
    }
}

// Start timer on page load
const timerInterval = setInterval(updateTimer, 1000);

// Price calculation
const basePrice = 8000;
const engravingCost = 100;
const strapCost = {
    leather: 500,
    steel: 1000
};

function updatePrice() {
    let totalPrice = basePrice;

    if (strapSelect.value) totalPrice += strapCost[strapSelect.value] || 0;
    if (engravingInput.value.trim() !== '') totalPrice += engravingCost;

    priceDisplay.textContent = totalPrice;
}

// Event listeners for price updates
strapSelect.addEventListener('change', updatePrice);
engravingInput.addEventListener('input', updatePrice);

// Initial price setup
updatePrice();
