import ImageCarousel from './image-carousel.js';
import imageCarouselStyle from './style.js';

const imageCarouselAttribute = 'data-image-carousel';

function init(root = document) {
    injectStyle(imageCarouselStyle);
    const imageCarousels = root.querySelectorAll(`[${imageCarouselAttribute}]`);

    for (const imageCarousel of imageCarousels) {
        new ImageCarousel(imageCarousel);
    }
}

function injectStyle(style) {
    document.head.append(style);
}

const imageCarousel = {
    init,
};

export default imageCarousel;
