import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const ul = document.querySelector(".gallery");

const galleryList = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
    <a href="${original}" class="gallery__link">
    <img class="gallery__image" src="${preview}" alt="${description}">
    </a>
    </li>`;
  })
  .join("");

ul.insertAdjacentHTML("beforeend", galleryList);

const gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
