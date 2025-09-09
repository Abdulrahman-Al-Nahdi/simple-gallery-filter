let worksLis = document.querySelectorAll(".switcher li");
let worksImages = document.querySelectorAll(".gallery img");

worksLis.forEach((li) => {
  li.addEventListener("click", deleteActive);
  li.addEventListener("click", filterImages);
});
function deleteActive() {
  worksLis.forEach((li) => {
    li.classList.remove("active");
  });
  this.classList.add("active");
}
function filterImages() {
  worksImages.forEach((img) => {
    img.style.display = "none";
  });
  document.querySelectorAll(`${this.dataset.cat}`).forEach((ele) => {
    ele.style.display = "block";
  });
}
