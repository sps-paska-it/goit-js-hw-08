import { galleryItems } from "./gallery-items";
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";

const divGallery = document.querySelector('.gallery');

const htmlGallery = galleryItems.map(({ preview, original, description }) => {
  return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
}).join('');

divGallery.insertAdjacentHTML('beforeend', htmlGallery);

new SimpleLightbox('.gallery a', {
    captionType: 'attr',
    captionsData: 'alt',
    captionDelay: 250,
});