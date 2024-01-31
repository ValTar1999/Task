document.getElementById('mob-list').addEventListener('click', function() {
  var mobLink = document.getElementById('mob-links');
  if (mobLink.style.display === 'none') {
      mobLink.style.display = 'flex'; // Show the div
  } else {
      mobLink.style.display = 'none'; // Hide the div
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const cards = document.querySelectorAll('.card');
  let delay = 0;

  cards.forEach(card => {
    setTimeout(() => {
      card.classList.remove('hidden');
      card.style.opacity = 1;
    }, delay);
    delay += 500; // Задержка между появлением каждой карты (в миллисекундах)
  });
});


const priceButtons = document.querySelectorAll('.price-valut');

// Get all price values
const priceValues = document.querySelectorAll('.price-number');

// Get all price time buttons
const priceTimeButtons = document.querySelectorAll('.price-time');

// Add click event listener to each price button
priceButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Change currency symbol
    if (button.textContent === '$') {
      button.textContent = '₽'; // Change to ruble symbol
      // Convert prices to rubles
      priceValues.forEach(value => {
        value.textContent = Math.round(parseInt(value.textContent) * 70); // Assuming conversion rate of 1 USD = 70 RUB
      });
    } else if (button.textContent === '₽') {
      button.textContent = '€'; // Change to euro symbol
      // Convert prices to euros
      priceValues.forEach(value => {
        value.textContent = Math.round(parseInt(value.textContent) * 0.85); // Assuming conversion rate of 1 USD = 0.85 EUR
      });
    } else {
      button.textContent = '$'; // Change to dollar symbol
      // Convert prices to dollars
      priceValues.forEach(value => {
        value.textContent = Math.round(parseInt(value.textContent) / 70); // Assuming conversion rate of 1 USD = 70 RUB
      });
    }
  });
});

// Add click event listener to each price time button
priceTimeButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Change time period and recalculate prices
    if (button.textContent === '/Months') {
      button.textContent = '/Days';
      // Convert prices to per day
      priceValues.forEach(value => {
        value.textContent = Math.round(parseInt(value.textContent) / 30);
      });
    } else {
      button.textContent = '/Months';
      // Convert prices back to per month
      priceValues.forEach(value => {
        value.textContent = Math.round(parseInt(value.textContent) * 30);
      });
    }
  });
});