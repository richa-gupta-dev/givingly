// JavaScript to toggle mobile navbar on click
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');  //Gives the first element, if exists.

// Toggle the navbar links when the hamburger menu is clicked
hamburger.addEventListener('click', () => {      //addEventListener('click', () => { ... }): This method attaches an event listener to the hamburger element.
  navLinks.classList.toggle('active');   //classList: This property gives you access to the list of classes that the element has.
});   //toggle('active'): This method either adds or removes the active class from the navLinks element.
// Typically, the active class is used to control the visibility or styling of the navigation links, such as changing from a collapsed state (mobile) to an expanded state (desktop or menu opened).

// Get the search button and input
const searchButton = document.querySelector('.search-icon');
const searchInput = document.querySelector('.search-input');

// Add event listener for the search button click
searchButton.addEventListener('click', function() {
  const query = searchInput.value.trim();
  if (query) {
    alert('Searching for: ' + query);
    // Here you could perform an actual search, like redirecting or fetching search results
  } else {
    alert('Please enter a search query');
  }
});

// Optionally, allow pressing Enter to trigger the search
searchInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    searchButton.click();
  }
});

function startToday() {
  alert('Start-today button clicked!');
}

function seeHowItWorks() {
  alert('See-how-it-works button clicked!');
}

const buttons = document.querySelectorAll('.category');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        buttons.forEach(btn => btn.classList.remove('active'));

        // Add active class to the clicked button
        button.classList.add('active');

        // Handle category selection logic (optional)
        const selectedCategory = button.getAttribute('data-category');
        console.log(`Selected category: ${selectedCategory}`);
    });
});

const shareButton = document.getElementById('share-button');
const sharePopup = document.getElementById('sharePopup');
const closeBtn = document.querySelector('.close-btn');
shareButton.addEventListener('click', ()=> {
  sharePopup.style.display = 'block';
});
closeBtn.addEventListener('click', ()=> {
  sharePopup.style.display = 'none';
});

/*
// Close the popup when the user clicks outside of it
window.addEventListener('click', (event) => {
    if (event.target !== shareButton && !sharePopup.contains(event.target)) {
        sharePopup.style.display = 'none';
    }
});
*/

// Get the pay-with-card element
const toggleButton = document.getElementById('pay-with-card');
// Add a click event listener
toggleButton.addEventListener('click', () => {
    // Toggle the 'dark' class on the button
    toggleButton.classList.toggle('dark');
});

document.getElementById('pay-with-card').addEventListener('click', function() {
  const fieldset = document.getElementById('card-details');
  var cardStatus = fieldset.disabled;
  fieldset.disabled = !cardStatus;  // Enable the fieldset
});

  // Check if form is valid
  document.getElementById('get-data-btn').addEventListener('click', function() {
      const form = document.getElementById('card-details');
      const cardNumber = document.getElementById('card-number').value;
      const userName = document.getElementById('username').value;
      const expiryDate = document.getElementById('expiry-date').value;
      const cvv = document.getElementById('cvv').value;

      console.log("Card Number:", cardNumber);
      console.log("Username:", userName);
      console.log("Expiry Date:", expiryDate);
      console.log("CVV:", cvv);

      if (!cardNumber || !userName || !expiryDate || !cvv) {
        alert('Please fill in all fields.');
        return;
      }else if(cardNumber.length<16 || cardNumber.length>19){
        alert('Please fill in all fields appropriately.');
        return;
      }else if(cvv.length!=4){
        alert('Please fill in all fields appropriately.');
        return;
      }else if(expiryDate<'2025-01'){
        alert('Please fill in all fields appropriately.');
        return;
      }
    
      // Display the data (optional)
      alert(`Card Number: ${cardNumber}\nUsername: ${userName}\nExpiry Date: ${expiryDate}\nCVV: ${cvv}`);
  });

  function reset() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
      input.value = '';
      console.log(input.value);
    });
  }
  document.getElementById('resetButton').addEventListener('click', reset);

