function submitForm() {
  // You can add form validation and submission logic here
  alert("Form submitted! (Note: This is a basic example; implement my logic.)");
}

// JavaScript for auto-advancing slider
let currentIndex = 0;
const slides = document.querySelectorAll('.slider-image');
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

// Auto-advance every 5 seconds (adjust as needed)
setInterval(nextSlide, 5000);


document.getElementById('destination').addEventListener('input', function () {
  var emailField = document.getElementById('email');
  var nameError = document.getElementById('nameError');

  if (this.value.trim() === '') {
    nameError.textContent = 'Please fill in Your Name.';
    emailField.disabled = true;
  } else {
    nameError.textContent = '';
    emailField.disabled = false;
  }
});

document.getElementById('email').addEventListener('focus', function () {
  var destination = document.getElementById('destination').value.trim();
  var nameError = document.getElementById('nameError');

  if (destination === '') {
    nameError.textContent = 'Please fill in Your Name.';
  } else {
    nameError.textContent = '';
  }
});
