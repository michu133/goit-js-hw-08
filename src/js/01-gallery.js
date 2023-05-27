import SimpleLightbox from 'simplelightbox';

console.log(SimpleLightbox);
// Add imports above this line
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

function createGalleryItem(item) {
  const galleryItem = document.createElement('div');

  const link = document.createElement('a');
  link.classList.add('gallery__item');
  link.href = item.original;

  const image = document.createElement('img');
  image.classList.add('gallery__image');
  image.src = item.preview;
  image.alt = item.description;

  link.appendChild(image);
  galleryItem.appendChild(link);

  return galleryItem;
}

function createGallery() {
  const galleryContainer = document.querySelector('.gallery');

  galleryItems.forEach(element => {
    galleryContainer.appendChild(createGalleryItem(element));
  });

  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom',
  });

  galleryContainer.addEventListener('click', event => {
    event.preventDefault();
    lightbox.open();
  });
}

createGallery();
