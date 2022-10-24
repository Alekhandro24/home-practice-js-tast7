// Файл gallery - items.js містить масив galleryItems, який містить об'єкти з інформацією про зображення: маленьке (прев`ю), оригінальне (велике) і опис.
// Ми вже підключили його до кожного з JS - файлів проекту.
// Створи галерею з можливістю кліку по її елементах і перегляду повнорозмірного зображення у модальному вікні.
// Подивися демо відео роботи галереї.
// Виконуй це завдання у файлах 01-gallery.html і 01-gallery.js. Розбий його на декілька підзавдань:

// --Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// ---Реалізація делегування на div.gallery і отримання url великого зображення.
// ---Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
// ---Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// ---Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.

// Розмітка елемента галереї
// Посилання на оригінальне зображення повинно зберігатися в data-атрибуті source на елементі <img>, і вказуватися в href посилання. Не додавай інші HTML теги або CSS класи, крім тих, що містяться в цьому шаблоні.

// Зверни увагу на те, що зображення обгорнуте посиланням, отже по кліку за замовчуванням користувач буде перенаправлений на іншу сторінку. Заборони цю поведінку за замовчуванням.

// Закриття з клавіатури
// Додай закриття модального вікна після натискання клавіші Escape. Зроби так, щоб прослуховування клавіатури було тільки доти, доки відкрите модальне вікно. Бібліотекаи basicLightbox містить метод для програмного закриття модального вікна.

import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// // -------- version 1 --------

// const gallery = document.querySelector(".gallery");
// const items = [];

// galleryItems.forEach((element) => {
//   const galleryItem = document.createElement("div");
//   galleryItem.classList.add("gallery__item");

//   const galleryLink = document.createElement("a");
//   galleryLink.classList.add("gallery__link");
//   galleryLink.href = element.original;

//   const galleryImg = document.createElement("img");
//   galleryImg.classList.add("gallery__image");
//   galleryImg.src = element.preview;
//   galleryImg.setAttribute("data-sorce", element.original);
//   galleryImg.alt = element.description;

//   galleryItem.append(galleryLink);
//   galleryLink.append(galleryImg);
//   items.push(galleryItem);
// });

// gallery.append(...items);
// gallery.addEventListener("click", (e) => {
//   e.preventDefault;
//   if (e.target.nodeName !== "IMG") {
//     return;
//   }

//   const selectedImage = e.target.getAttribute("data-source");
//   const instance = basicLightbox.create(
//     `<img src="${selectedImage}" width="800" height="600">`
//   );

//   instance.show();

//   gallery.addEventListener("keydown", (e) => {
//     if (e.key === "Escape") {
//       instance.close();
//     }
//   });
// });

// // -------- version 2 --------

// const IMG_NODE_NAME = "IMG";
// const ESC_KEY_CODE = "Escape";

// const refs = {
//   gallery: document.querySelector(".gallery"),
// };

// refs.gallery.innerHTML = galleryItems.map(createGalleryItemMarkup).join("");
// refs.gallery.addEventListener("click", handleModalOpen);

// function handleModalOpen(e) {
//   e.preventDefault();
//   const { nodeName, dataset } = e.target;
//   nodeName === IMG_NODE_NAME && showModal(dataset.source);
// }

// function showModal(src) {
//   const handleModalOpen = ({ code }) => {
//     code === ESC_KEY_CODE && showModal.close();
//   };
//   const handleMarkup = `<img src="${src}" width="800" height="600">`;

//   const modalOptions = {
//     onShow: () => {
//       document.addEventListener("keydown", handleModalClose);
//     },
//     onClose: () => {
//       document.removeEventListener("keydown", handleModalClose);
//     },
//   };
//   const modal = basicLightbox.create(modalMarkup, modalOptions);
//   modal.show();
// }

// function createGalleryItemMarkup({ preview, original, description }) {
//   return `
//     <div class="gallery__item">
//       <a class="gallery__link" href="${original}">
//         <img
//           class="gallery__image"
//           src="${preview}"
//           data-source="${original}"
//           alt="${description}"
//         />
//       </a>
//     </div>
//   `;
// }

// // -------- version 3 --------
// const container = document.querySelector(".gallery");
// const pictureMap = createPictureGalleryMarkup(galleryItems);
// const modal = document.querySelector(".js-lightbox");
// const modalImg = modal.querySelector(".lightbox__image");

// let activeIndex = null;

// container.addEventListener("click", onContainerClick);
// container.insertAdjacentHTML("beforeend", pictureMap);
// modal.addEventListener("click", modalClose);

// function createPictureGalleryMarkup(gallery) {
//   return gallery
//     .map(({ preview, original, description }) => {
//       return `<div class="gallery__item">
//         <a class="gallery__link" href="${original}">
//         <img
//         loading="lazy"
//         class="gallery__image lazyload"
//         src="${original}"
//         alt="${description}"
//         />
//         </a>
//         </div>`;
//     })
//     .join("");
// }

// function onContainerClick(e) {
//   e.preventDefault();

//   if (e.target.classList.contains("gallery__img")) {
//     window.addEventListener("keydown", onKeyDown);
//     modal.classList.add("is-open");
//     modalImg.src = e.target.src;
//     galleryItems.forEach((element, index) => {
//       if (element.original === e.target.src) {
//         activeIndex = index;
//       }
//     });
//   }
// }

// function modalClose(e) {
//   if (!e.target.classList.contains("lightbox__image")) {
//     window.removeEventListener("keydown", onKeyDown);
//     modal.classList.remove("is-open");
//     modalImg.src = "";
//   }
// }

// function onKeyDown(e) {
//   if (e.code === "ArrowRight" && activeIndex < galleryItems.length - 1) {
//     activeIndex += 1;
//     modalImg.src = galleryItems[activeIndex].original;
//     return;
//   }
//   if (e.code === "ArrowLeft" && activeIndex > 0) {
//     activeIndex -= 1;
//     modalImg.src = galleryItems[activeIndex].original;
//     return;
//   }
//   if (e.code === "ArrowRight" && activeIndex === galleryItems.length - 1) {
//     activeIndex = 0;
//     modalImg.src = galleryItems[activeIndex].original;
//     return;
//   }
//   if (e.code === "ArrowLeft" && activeIndex === 0) {
//     activeIndex = galleryItems.length - 1;
//     modalImg.src = galleryItems[activeIndex].original;
//     return;
//   }
// }

// -------- version 4 --------
// зарендерить разметку с имейджами з обьекта +
//  повесить слущатель собитий на див галери  +
// при нажатии на фото открьівать модалку с большим фото из обьекта  +

const getGalleryRef = document.querySelector(".gallery");
const listGalleryMarkup = galleryItems
  .map(
    ({ preview, description, original }) =>
      `<div class='gallery__item'><a class='gallery__link' href='${original}' ><img class='gallery__image' src='${preview}' alt='${description}' data-source="${original}"> </a> </div>`
  )
  .join("");

getGalleryRef.innerHTML = listGalleryMarkup;

getGalleryRef.addEventListener("click", (e) => {
  e.preventDefault();
  //   checkClickImage(e);
  const isGalleryImage = e.target.nodeName !== "IMG";
  if (isGalleryImage) {
    return;
  }
  openBigImageWithModal(e);
});

/*
function checkClickImage(e) {
  const isGalleryImage = e.target.nodeName !== 'IMG';
  if (isGalleryImage) {
    return;
  }
}
*/

function openBigImageWithModal(e) {
  const getAttributeSelectedImage = e.target.getAttribute("data-source");
  const instance = basicLightbox.create(
    `<img src="${getAttributeSelectedImage}" width="800" height="600" >`
  );
  instance.show();
  closeBigImageKeyEsc(intence);
}

function closeBigImageKeyEsc(intence) {
  window.addEventListener("keydown", (e) => {
    const isKeyEscape = e.key === "Escape";
    if (isKeyEscape) {
      instance.close();
      window.removeEventListener();
    }
  });
}
