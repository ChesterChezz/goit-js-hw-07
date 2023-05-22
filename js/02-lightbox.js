import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const ul = document.querySelector(".gallery");
ul.append(...createGallery());

function createGallery() {
  return galleryItems.map((element) => {
    const li = document.createElement("li");
    li.classList.add("gallery__item");
    const img = document.createElement("img");
    const a = document.createElement("a");
    img.classList.add("gallery__image");
    img.src = `${element.preview}`;
    img.alt = `${element.description}`;
    a.href = `${element.original}`;
    a.classList.add("gallery__link");
    a.addEventListener("click", (event) => {
      event.preventDefault();

      var lightbox = new SimpleLightbox(".gallery a", {
        /* options */
        captionDelay: 250,
        captionsData: "alt",
      });
      lightbox.open();
    });
    a.appendChild(img);
    li.appendChild(a);
    return li;
  });
}
