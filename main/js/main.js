document.addEventListener("DOMContentLoaded", function () {
    const searchToggle = document.getElementById("searchToggle");
    const mobileSearchToggle = document.getElementById("mobileSearchToggle");
    const searchContainer = document.getElementById("searchContainer");
    const searchInput = document.getElementById("searchInput");
    const navbarMenu = document.getElementById("navbarMenu");
    const menuToggle = document.getElementById("menuToggle");

    function toggleSearch() {
      if (searchContainer.classList.contains("active")) {
        searchContainer.classList.remove("active");
        navbarMenu.classList.remove("hidden");
      } else {
        searchContainer.classList.add("active");
        navbarMenu.classList.add("hidden");
        searchInput.focus();
      }
    }

    // Toggle Search Bar (Desktop)
    searchToggle.addEventListener("click", toggleSearch);

    // Toggle Search Bar (Mobile) and Close Menu
    mobileSearchToggle.addEventListener("click", function () {
      toggleSearch();
      navbarMenu.classList.remove("show"); // Close menu when search opens
    });

    // Toggle Mobile Menu
    menuToggle.addEventListener("click", function () {
      navbarMenu.classList.toggle("show");
    });
  });

  
  

  document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "project-folder/assets/images/Group 1000004277.png",
        "project-folder/assets/images/Group 1000004277.png",
        "project-folder/assets/images/Group 1000004277.png",
        "project-folder/assets/images/Group 1000004277.png"
    ];

    let currentIndex = 0;
    const sliderImage = document.getElementById("sliderImage");
    const dots = document.querySelectorAll(".dot");
    const thumbnails = document.querySelectorAll(".image-thumbnails img");

    function updateSlider(index) {
        currentIndex = index;
        sliderImage.src = images[currentIndex];

        // Update active dot
        dots.forEach(dot => dot.classList.remove("active"));
        dots[currentIndex].classList.add("active");
    }

    // Next Button Click
    document.querySelector(".next").addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateSlider(currentIndex);
    });

    // Previous Button Click
    document.querySelector(".prev").addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateSlider(currentIndex);
    });

    // Click on Dots to Change Image
    dots.forEach(dot => {
        dot.addEventListener("click", function () {
            updateSlider(parseInt(this.dataset.index));
        });
    });

    // Click on Thumbnail to Change Image
    thumbnails.forEach(thumb => {
        thumb.addEventListener("click", function () {
            updateSlider(parseInt(this.dataset.index));
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".counter");

  counters.forEach((counter) => {
    counter.innerText = "0"; // Start from 0
    const target = +counter.getAttribute("data-target");
    const increment = target / 100; // Adjust speed

    const updateCounter = () => {
      const current = +counter.innerText;
      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        setTimeout(updateCounter, 30); // Adjust speed
      } else {
        counter.innerText = target; // Ensure final value is exact
      }
    };

    updateCounter();
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.getElementById('testimonialCarousel');
  const prevButton = document.getElementById('prevTestimonial');
  const nextButton = document.getElementById('nextTestimonial');
  const bsCarousel = new bootstrap.Carousel(carousel);

  prevButton.addEventListener('click', function() {
      bsCarousel.prev();
  });

  nextButton.addEventListener('click', function() {
      bsCarousel.next();
  });
});


document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const toggle = question.querySelector('.faq-toggle');
      
      document.querySelectorAll('.faq-answer').forEach(ans => {
          if (ans !== answer) {
              ans.classList.remove('show');
              ans.style.maxHeight = '0px';
              ans.previousElementSibling.querySelector('.faq-toggle').textContent = '+';
          }
      });

      if (answer.classList.contains('show')) {
          answer.style.maxHeight = '0px';
      } else {
          answer.style.maxHeight = answer.scrollHeight + 'px';
      }

      answer.classList.toggle('show');
      toggle.textContent = answer.classList.contains('show') ? '-' : '+';
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const flavorOptions = document.querySelectorAll('.flavor-option');
  
  flavorOptions.forEach(option => {
      option.addEventListener('click', () => {
          // Remove selected class from all options
          flavorOptions.forEach(opt => opt.classList.remove('selected'));
          
          // Add selected class to clicked option
          option.classList.add('selected');
          
          // Check the radio button
          const radio = option.querySelector('input[type="radio"]');
          radio.checked = true;
      });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const subscriptionBoxes = document.querySelectorAll('.subscriptions-box');

  subscriptionBoxes.forEach(box => {
      const radioButton = box.querySelector('input[type="radio"]');
      const content = box.querySelector('.subscriptions-content');

      // Ensure only the checked radio button's content is visible initially
      if (radioButton.checked) {
          content.classList.add('active');
      } else {
          content.classList.remove('active');
      }

      // Click event to manage selection and content visibility
      box.querySelector('.subscriptions-header').addEventListener('click', () => {
          subscriptionBoxes.forEach(otherBox => {
              const otherContent = otherBox.querySelector('.subscriptions-content');
              const otherRadio = otherBox.querySelector('input[type="radio"]');

              if (otherBox !== box) {
                  otherRadio.checked = false;
                  otherContent.classList.remove('active');
              }
          });

          // Activate the selected option
          radioButton.checked = true;
          content.classList.add('active');
      });
  });
});
