const testimonials = [
  {
    name: "Viezh Robert",
    location: "Warsaw, Poland",
    rating: 4.5,
    comment:
      "I Love south sumatera, I love it because it is very easy to use and has a lot of features.",
    image: "./images/user.png",
  },
  {
    name: "Yessica Christy",
    location: "Shanxi, China",
    rating: 4.5,
    comment:
      "beautiful place, I love it because it is very easy to use and has a lot of features.",
    image: "./images/user2.png",
  },
  {
    name: "Kim Young Jou",
    location: "Seoul, South Korea",
    rating: 4.5,
    comment:
      "this is a great product, I love it because it is very easy to use and has a lot of features.",
    image: "./images/user3.png",
  },
  {
    name: "Michael Chen",
    location: "Singapore",
    rating: 5.0,
    comment:
      "city is beautiful, I love it because it is very easy to use and has a lot of features.",
    image: "./images/user1.png",
  },
  {
    name: "Sarah Williams",
    location: "London, UK",
    rating: 4.8,
    comment:
      "i hope this product will be great, I love it because it is very easy to use and has a lot of features.",
    image: "./images/user2.png",
  },
  {
    name: "Alex Rodriguez",
    location: "Madrid, Spain",
    rating: 4.7,
    comment:
      "I will recommend this product to my friends, I love it because it is very easy to use and has a lot of features.",
    image: "./images/user.png",
  },
  {
    name: "Emma Thompson",
    location: "Sydney, Australia",
    rating: 4.9,
    comment:
      "many features, I love it because it is very easy to use and has a lot of features.",
    image: "./images/user2.png",
  },
];

// Generate testimonial slides
function generateTestimonials() {
  const swiperWrapper = document.querySelector(".swiper-wrapper");

  testimonials.forEach((testimonial) => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide";

    slide.innerHTML = `
        <div class="p-8 border-2 border-gray-200 rounded-2xl hover:border-red-500 transition-all h-full">
          <div class="flex items-center justify-between mb-8">
            <div class="flex items-center gap-4">
              <img src="${testimonial.image}" alt="${testimonial.name}" class="w-12 h-12 rounded-full">
              <div>
                <h4 class="font-medium text-lg">${testimonial.name}</h4>
                <p class="text-gray-400">${testimonial.location}</p>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <span class="font-medium">${testimonial.rating}</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
              </svg>
            </div>
          </div>
          <p class="text-gray-600">"${testimonial.comment}"</p>
        </div>
      `;

    swiperWrapper.appendChild(slide);
  });
}

// Call the function when the document is loaded
document.addEventListener("DOMContentLoaded", () => {
  generateTestimonials();

  // Initialize Swiper after testimonials are generated
  const swiper = new Swiper(".testimonialSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      // when window width is >= 1024px
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
});
