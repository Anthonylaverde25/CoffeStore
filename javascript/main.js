const menuToggle = document.querySelector(".menutoggle");
const overlayContainerMenu = document.querySelector(".overlay");
const imageHeader = document.querySelector(".img_main");
const imagesThumb = document.querySelectorAll(".image_thumb");

let isOpen = true;

menuToggle.addEventListener("click", (e) => {
  if (isOpen) {
    menuToggle.src = "/image/iconos/icons8-eliminar-30.png";
    overlayContainerMenu.style.display = "block";

    isOpen = false;
  } else {
    menuToggle.src = "image/iconos/menu-burger (1).svg";
    overlayContainerMenu.style.display = "none";
    isOpen = true;
  }
});

imagesThumb.forEach((image) => {
  image.addEventListener("click", (e) => {
    let image = e.target.src;
    imageHeader.src = image;
  });
});
