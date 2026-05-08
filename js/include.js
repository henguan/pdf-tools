document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll("[data-include]");
  elements.forEach(async (el) => {
    const file = el.getAttribute("data-include");
    const res = await fetch(file);
    const html = await res.text();
    el.outerHTML = html;
  });
});


