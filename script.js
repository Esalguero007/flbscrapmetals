$(document).ready(function () {
  $(".reviews-slides").slick({
    autoplay: true,
    arrows: true,
  });

  $(".backgrounds-fade").slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    speed: 1000,
    fade: true,
    arrows: false,
    cssEase: "linear",
  });

  const nav = document.querySelector("nav");
  const heroSection = document.querySelector("#home");
  const heroObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) {
          nav.classList.add("scrolled");
        } else {
          nav.classList.remove("scrolled");
        }
      });
    },
    {
      threshold: 0.7,
    }
  );

  heroObserver.observe(heroSection);

  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      navLinks.forEach((l) => {
        l.classList.remove("active");
      });
      e.target.classList.add("active");
    });
  });
});
