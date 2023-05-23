import { galleryItems } from "./gallery-items.js";

// Change code below this line

const ul = document.querySelector(".gallery");

const galleryList = galleryItems
  .map(
    ({ preview, original, description }) =>
      ` <li class="gallery__item">
    <a class="gallery__link" href=${original}>
    <img
    class="gallery__image"
    src=${preview}
    data-source=${original}
    alt=${description}
    />
    </a>
    </li>`
  )
  .join("");

ul.insertAdjacentHTML("beforeend", galleryList);

ul.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const currentImage = e.target.getAttribute("data-source");

  const instance = basicLightbox.create(`
    <img src="${currentImage}" >`);

  instance.show();
  ul.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      instance.close();
    }
  });
});
