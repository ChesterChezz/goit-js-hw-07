import { galleryItems } from "./gallery-items.js";

// Change code below this line

const ul = document.querySelector(".gallery");
ul.append(...createGallery());
let lightbox;
function createGallery() {
  return galleryItems.map((element) => {
    const li = document.createElement("li");
    li.classList.add("gallery__item");
    const img = document.createElement("img");
    const a = document.createElement("a");
    img.classList.add("gallery__image");
    img.src = `${element.preview}`;
    img.alt = `${element.description}`;
    img.dataset.source = `${element.original}`;
    a.href = `${element.original}`;
    a.classList.add("gallery__link");
    a.addEventListener("click", (event) => {
      event.preventDefault();
      lightbox = basicLightbox.create(`<img src="${a.href}" alt="${img.alt}">`);
      lightbox.show();
      document.addEventListener("keydown", closeLightBox);
    });
    a.appendChild(img);
    li.appendChild(a);
    return li;
  });
}

//Закриття по натисканню на ESC
function closeLightBox(event) {
  if (event.key === "Escape") {
    lightbox.close();
  }
  //Видалдяю слухача
  document.removeEventListener("keydown", closeLightBox);
}
