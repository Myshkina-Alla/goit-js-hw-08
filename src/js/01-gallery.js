import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm.js';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
console.log(galleryItems);

const container = document.querySelector('.gallery');
const markup = galleryItems
  .map(
    ({ original, preview, description }) =>
      `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
  )
  .join('');

container.insertAdjacentHTML('beforeend', markup);

container.addEventListener('click', event => {
  event.preventDefault();

  if (event.target.classList.contains('gallery__image')) {
    const imageUrl = event.target.dataset.source;

    const lightbox = basicLightbox.create(`
            <img src="${imageUrl}" alt="Image">
        `);
    lightbox.show();

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        lightbox.close();
      }
    });
  }
});
