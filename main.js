document.addEventListener("DOMContentLoaded", function () {
  const benefitTitles = document.querySelectorAll(".benefit-title");
  const header = document.getElementById("header");

  benefitTitles.forEach((title) => {
    title.addEventListener("click", function () {
      const description = this.nextElementSibling;
      if (
        description.style.display === "none" ||
        description.style.display === ""
      ) {
        description.style.display = "inline";
      } else {
        description.style.display = "none";
      }
    });
  });

  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
      header.style.background = "rgba(33, 158, 188)";
    } else {
      header.style.background =
        "linear-gradient(to bottom, var(--primary-blue), var(--light-blue))";
    }
  });
});
