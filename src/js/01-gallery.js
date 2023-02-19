// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

// console.log(galleryItems);
const galleryContainer = document.querySelector(".gallery");
const markup = createImgMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('afterbegin', markup);

function createImgMarkup (galleryItems){
    return galleryItems.map(({preview, original, description}) => 
           `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" 
                title="$description" width="340">
            </img>
        </a> 
    </li>`
).join('')
}

// run lightbox library
new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

