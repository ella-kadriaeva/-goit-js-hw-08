// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);



function createGalleryMarkup(galleryItems) {
    return galleryItems
    .map(({preview, original, description}) => {
        return `
        <div>
        <a class="gallery__item" href="${original}">
           <img class="gallery__image" src="${preview}" 
           title="${description}" alt="${description}" />
        </a>
        </div>`
        })
        .join('');
}
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

var lightbox = new SimpleLightbox('.gallery a');

galleryContainer.addEventListener('click', lightbox.on('show.simplelightbox', function () {
	lightbox.defaultOptions.captionDelay = 250;
}));