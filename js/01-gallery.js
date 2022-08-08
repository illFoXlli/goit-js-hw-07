import { galleryItems } from "./gallery-items.js";
// Change code below this line

// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
// Реализация делегирования на div.gallery и получение url большого изображения.
// Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.
// Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
// Замена значения атрибута src элемента <img> в модальном окне перед открытием. Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.

// Ссылка на оригинальное изображение должна храниться в data-атрибуте source на элементе <img>, и указываться в href ссылки. Не добавляй другие HTML теги или CSS классы кроме тех, что есть в этом шаблоне.

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

divGallery.addEventListener("click", noGalleryClick);

function noGalleryClick(eve) {
 eve.preventDefault();
 document.addEventListener("keydown", onListenerEscapeKeydown);
 const srcBigImages = eve.target.dataset.fox;
 const bigImges = basicLightbox.create(`
    <img src="${srcBigImages}" >
`);
   
   bigImges.show();
   
 if (eve.target.nodeName !== "IMG") return;

 function onListenerEscapeKeydown(event) {
  console.log(event.key);
  if (event.key === "Escape") bigImges.close();

  document.removeEventListener("keydown", onListenerEscapeKeydown);
 }
}
