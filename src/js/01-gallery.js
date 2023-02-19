// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

// console.log(galleryItems);


const galleryContainer = document.querySelector(".gallery");
const markup = createImgMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('afterbegin', markup);

galleryContainer.addEventListener('click', (event) => {
    event.preventDefault();
});

let gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
gallery.on('show.simplelightbox', function () {
    console.log(gallery);
  });

 const imageBigSize = (e).target.getAttribute("data-source");

 const instance = SimpleLightbox.create(`<img src = "${imageBigSize}">`);

 instance.show();

function createImgMarkup (galleryItems){return galleryItems.map(({preview, original, description}) => {
    return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" 
            title="$description" width="340">
            </img>
        </a> 
    </li>`;
}) .join("")
};
