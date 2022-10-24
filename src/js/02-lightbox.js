// Зроби таку саму галерею як в першому завданні, але використовуючи бібліотеку SimpleLightbox, яка візьме на себе обробку кліків по зображеннях, відкриття і закриття модального вікна, а також гортання зображень за допомогою клавіатури.
// Необхідно трохи змінити розмітку картки галереї, використовуй цей шаблон.

// <a class="gallery__item" href="large-image.jpg">
//   <img class="gallery__image" src="small-image.jpg" alt="Image description" />
// </a>

// Виконуй це завдання у файлах 02-lightbox.html і 02-lightbox.js. Розбий його на декілька підзавдань:
// ---Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї. Використовуй готовий код з першого завдання.
// ---Підключення скрипту і стилів бібліотеки, використовуючи CDN сервіс cdnjs. Необхідно додати посилання на два файли: simple-lightbox.min.js і simple-lightbox.min.css.
// ---Ініціалізація бібліотеки після створення і додання елементів галереї у div.gallery. Для цього ознайомся з документацією SimpleLightbox - насамперед секції «Usage» і «Markup».
// ---Подивися в документації секцію «Options» і додай відображення підписів до зображень з атрибута alt. Нехай підпис буде знизу і з'являється через 250 мілісекунд після відкриття зображення.

import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
// -------- version 1 --------

const refs = {
  gallery: document.querySelector(".gallery"),
};

refs.gallery.innerHTML = galleryItems.map(createGalleryItemMarkup).join("");

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

function createGalleryItemMarkup({ preview, original, description }) {
  return `
    <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
  `;
}

// // -------- version 2 --------
// const gallery = document.querySelector('.gallery');
// const items = [];

// galleryItems.forEach(element => {
//     const galleryLink = document.createElement('a')
//     galleryLink.className = 'gallery__link'
//     galleryLink.href = element.original

//     const galleryImage = document.createElement("img");
//     galleryImage.className = 'gallery__image'
//     galleryImage.src = element.preview
//     galleryImage.setAttribute('title', element.description)
//     galleryImage.alt = element.description

//     galleryLink.append(galleryImage)
//     items.push(galleryLink)
// })
// gallery.append(...items);

// new SimpleLightbox(".gallery a", {
//   captionDelay: 250,
// });

// -------- version 3 --------

// const container = document.querySelector(".gallery");
// const pictureMap = createImgGalleryMap(galleryItems);

// container.insertAdjacentHTML("beforeend", pictureMap);

// function createImgGalleryMap(gallery) {
//   return gallery
//     .map(({ preview, original, description }) => {
//       return `<a class="gallery__item" href="${original}">
//   <img loading="lazy" class="gallery__image lazyload" data-src="${original}" alt="${description}" />
// </a>`;
//     })
//     .join("");
// }

// if ("loading" in HTMLImageElement.prototype) {
//   onLazySizeLoad();
// } else {
//   // Dynamically import the LazySizes library
//   onLazySizesLibraryAdd();
// }

// function onLazySizeLoad() {
//   const lazyImg = document.querySelectorAll('img[loading="lazy"]');
//   lazyImg.forEach((img) => {
//     img.src = img.datdset.src;
//   });
// }

// function onLazySizesLibraryAdd() {
//   const script = document.createElement("script");
//   script.src =
//     "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js";
//   script.integrity =
//     "sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==";
//   script.crossOrigin = "anonymous";
//   document.body.appendChild(script);
// }

// var lightbox = new SimpleLightbox(".gallery a", {
//   /* options */
//   captionsData: "alt",
//   captionDelay: 250,
// });

// // Оригинальная разметка

// // `<a class="gallery__item" href="${original}">
// //   <img loading="lazy" class="gallery__image" src="${preview}" alt="${description}" />
// // </a>`;

// // -------- version 4 --------
// const getGalleryRef = document.querySelector(".gallery");

// const listGalleryMarkup = galleryItems
//   .map(({ preview, description, original }) => {
//     ` <li><a class='gallery__item' href='${original}' ><img class='gallery__image' src='${preview}' alt='${description}' title="${description}"> </a></li> `;
//   })
//   .join("");

// getGalleryRef.innerHTML = listGalleryMarkup;

// new SimpleLightbox(".gallery a ", {
//   captionsData: "alt",
//   captionDelay: 250,
// });
