import { galleryItems } from "./gallery-items.js";
// Change code below this line
// Сделай такую же галерею как в первом задании, но используя библиотеку SimpleLightbox, которая возьмет на себя обработку кликов по изображениям, открытие и закрытие модального окна, а также пролистывание изображений при помощи клавиатуры. Посмотри демо видео работы галереи с подключенной библиотекой.
// Необходимо немного изменить разметку карточки галереи, используй этот шаблон.

// <a class="gallery__item" href="large-image.jpg">
//   <img class="gallery__image" src="small-image.jpg" alt="Image description" />
// </a>

const divGallery = document.querySelector(".gallery");
galleryItems.map((item) => {
 divGallery.insertAdjacentHTML(
  "afterbegin",
  `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
   <img
    class="gallery__image"
    src="${item.preview}"
    data-fox="${item.original}"
    alt="${item.description}"
   />
  </a>
 </div>`
 );
});
let lightbox = new SimpleLightbox(".gallery a", {
 /* options */
 captionPosition: "bottom",
captionDelay: 250,
 captionsData: "alt",
});

// и добавь отображение подписей к изображениям из атрибута alt. Пусть подпись будет снизу и появляется через 250 миллисекунд после открытия изображения.


