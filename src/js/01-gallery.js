// Add imports above this line
import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);


const gallery = document.querySelector('.gallery')

const listGallery = galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item"><a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"></a> </li>`
}).join('');

gallery.insertAdjacentHTML('beforeend', listGallery)

var lightbox = new SimpleLightbox('.gallery a', { 
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});