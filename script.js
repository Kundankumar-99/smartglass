// Sticky Header

window.addEventListener("scroll", function () {

    const header = document.getElementById("header");

    header.classList.toggle("scrolled", window.scrollY > 50);

});

// Mobile Menu

const toggle = document.querySelector(".mobile-toggle");
const menu = document.querySelector(".nav-menu");

toggle.addEventListener("click", () => {

    menu.classList.toggle("active");

});




//     slidesPerView: 3,

//     spaceBetween: 30,

//     loop: true,

//     autoplay: {

//         delay: 3500,

//         disableOnInteraction: false,

//     },

//     pagination: {

//         el: ".swiper-pagination",

//         clickable: true,

//     },

//     breakpoints: {

//         0: {
//             slidesPerView: 1
//         },

//         768: {
//             slidesPerView: 2
//         },

//         1024: {
//             slidesPerView: 3
//         }

//     }

// });


/* =====================================
   Portfolio Filter
===================================== */

const filterButtons = document.querySelectorAll(".portfolio-filter button");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        const filter = button.dataset.filter;

        portfolioItems.forEach(item => {

            if (
                filter === "all" ||
                item.dataset.category === filter
            ) {

                item.style.display = "block";

            } else {

                item.style.display = "none";

            }

        });

    });

});

/* =====================================
   Image Lightbox
===================================== */

const gallery = document.querySelectorAll(".portfolio-item");

const lightbox = document.createElement("div");

lightbox.className = "portfolio-lightbox";

lightbox.innerHTML = `
    <span class="close-lightbox">&times;</span>
    <img src="" alt="">
`;

document.body.appendChild(lightbox);

const lightboxImg = lightbox.querySelector("img");

gallery.forEach(item => {

    item.addEventListener("click", function (e) {

        e.preventDefault();

        lightbox.classList.add("show");

        lightboxImg.src = this.querySelector("img").src;

    });

});

lightbox.addEventListener("click", function () {

    lightbox.classList.remove("show");

});