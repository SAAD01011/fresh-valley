function includeHTML() {
  const includeElements = document.querySelectorAll("[data-include]");
  includeElements.forEach((el) => {
    const file = el.getAttribute("data-include");
    console.log(file);
    fetch(file)
      .then((response) => response.text())
      .then((data) => {
        el.innerHTML = data;
        el.removeAttribute("data-include");
        includeHTML();
      })
      .catch((err) => console.log("Error loading file:", err));
  });
}
document.addEventListener("DOMContentLoaded", includeHTML);
