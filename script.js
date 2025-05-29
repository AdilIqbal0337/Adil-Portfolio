// Animate skill bars when the skills section comes into view
let skillsAnimated = false;
window.addEventListener("scroll", function () {
  const skillsSection = document.getElementById("skills");
  const rect = skillsSection.getBoundingClientRect();

  if (rect.top < window.innerHeight && !skillsAnimated) {
    document.querySelectorAll(".skill-fill").forEach((bar) => {
      const percent = bar.getAttribute("data-percent");
      bar.style.width = percent;
    });
    skillsAnimated = true;
  }
});

// Animate sections on scroll using Intersection Observer
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // Animate once
      }
    });
  },
  {
    threshold: 0.15,
  }
);

// Target elements to animate
document.querySelectorAll(".my-section, .slide-in-left, .slide-in-right, .fade-in-up, .zoom-in").forEach((el) => {
  el.classList.add("my-section"); // ensures it's hidden initially
  observer.observe(el);
});
document.querySelectorAll(".slide-in-left, .slide-in-right, .fade-in-up, .zoom-in").forEach((el) => {
  el.classList.add("hidden");
});