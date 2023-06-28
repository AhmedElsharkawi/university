const bar = document.getElementById("bar_btn");

const bar_links = document.querySelector("#bar_links");

bar.addEventListener("click", () => {
  bar_links.classList.toggle("active");
});
