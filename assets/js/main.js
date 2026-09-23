document.addEventListener("DOMContentLoaded", function () {
  var obs = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal").forEach(function (el) {
    obs.observe(el);
  });

  var year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }
});