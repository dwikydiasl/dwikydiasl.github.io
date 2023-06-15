'use strict'
// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


// ========= Theme JS =========
const toggleSwitch = document.querySelector('#darkModeToggle');
// Check for saved dark mode preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

// Function to toggle between light and dark mode
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}
// Event listener for the toggle switch
toggleSwitch.addEventListener('change', switchTheme, false);


// ========= Custom JS =========
'use strict';
//aff scroll on body
window.addEventListener("scroll", function() {
    var body = document.querySelector("body");
    if (window.scrollY > 0) {
      body.classList.add("scrolled");
    } else {
      body.classList.remove("scrolled");
    }
});

//loader
window.addEventListener('load', function() {
  var loader = document.getElementById('loader');
  var content = document.getElementById('frontpage');

  // Simulate a delay to showcase the loading page
  setTimeout(function() {
    loader.style.display = 'none';
    content.style.display = 'block';
  }, 2500); // Change the delay time (in milliseconds) as needed
});

//scroll menu

// Get all the menu links
var menuLinks = document.querySelectorAll('nav a');

// Attach click event listeners to each menu link
menuLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    // Prevent the default scroll-to behavior
    event.preventDefault();

    // Remove the 'active' class from all menu links
    menuLinks.forEach(function(link) {
      link.classList.remove('active');
    });

    // Add the 'active' class to the clicked menu link
    this.classList.add('active');

    // Get the target section's ID from the link's href attribute
    var targetId = this.getAttribute('href');

    // Use the target section's ID to select the corresponding element
    var targetElement = document.querySelector(targetId);

    // Get the offset position of the target section
    var offsetPosition = targetElement.offsetTop - 100; // Adjust the offset value as needed

    // Scroll smoothly to the target section with the offset
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
});

function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;

    var time = hours + ":" + minutes ;
    document.getElementById("clock").innerText = time;

    setTimeout(updateClock, 1000); // Update every 1 second
  }

  updateClock(); // Initial call


// Fetch the data from the API
fetch('http://127.0.0.1:8080/api.json')
  .then(response => response.json())
  .then(data => {
    // Get the container element where you want to insert the HTML
    const container = document.getElementById('listedProject');

    // Generate the HTML markup for each item in the data array
    const html = data.map(item => `
      <div class="col-12 col-sm-6 col-md-3 list--item">
        <div class="item__card">
          <div class="card--header">
            <img src="${item.image}" alt="Image">
          </div>
          <div class="card--body">
             ${item.tech.map(techItem => `<span class="tech">${techItem.name}</span>`).join('')}
          </div>
        </div>          
      </div>
    `).join('');

    // Insert the generated HTML into the container element
    container.insertAdjacentHTML('beforeend', html);
  })
  .catch(error => {
    console.error('Error:', error);
  });


  // Fetch the data from the API
fetch('http://127.0.0.1:8080/api.json')
.then(response => response.json())
.then(data => {
  // Get the container element where you want to insert the HTML
  const container = document.getElementById('listedProject__Company');
  const filteredData = data.filter(item => item.category === 'Company Profile');
  // Generate the HTML markup for each item in the data array
  const html = filteredData.map(item => `
    <div class="col-12 col-sm-6 col-md-3 list--item">
      <div class="item__card">
        <div class="card--header">
          <img src="${item.image}" alt="Image">
        </div>
        <div class="card--body">
           ${item.tech.map(techItem => `<span class="tech">${techItem.name}</span>`).join('')}
        </div>
      </div>          
    </div>
  `).join('');

  // Insert the generated HTML into the container element
  container.insertAdjacentHTML('beforeend', html);
})
.catch(error => {
  console.error('Error:', error);
});


  // Fetch the data from the API
  fetch('http://127.0.0.1:8080/api.json')
  .then(response => response.json())
  .then(data => {
    // Get the container element where you want to insert the HTML
    const container = document.getElementById('listedProject__Other');
    const filteredData = data.filter(item => item.category === 'Other');
    // Generate the HTML markup for each item in the data array
    const html = filteredData.map(item => `
      <div class="col-12 col-sm-6 col-md-3 list--item">
        <div class="item__card">
          <div class="card--header">
            <img src="${item.image}" alt="Image">
          </div>
          <div class="card--body">
             ${item.tech.map(techItem => `<span class="tech">${techItem.name}</span>`).join('')}
          </div>
        </div>          
      </div>
    `).join('');

    // Insert the generated HTML into the container element
    container.insertAdjacentHTML('beforeend', html);
})
    .catch(error => {
    console.error('Error:', error);
});  