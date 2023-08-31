document.addEventListener("DOMContentLoaded", function () {
  const benefitTitles = document.querySelectorAll(".benefit-title");

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
});
