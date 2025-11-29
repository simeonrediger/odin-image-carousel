import ImageCarousel from './image-carousel.js';

const imageCarouselAttribute = 'data-image-carousel';

function init(root = document) {
    const imageCarousels = root.querySelectorAll(`[${imageCarouselAttribute}]`);

    for (const imageCarousel of imageCarousels) {
        new ImageCarousel(imageCarousel);
    }
}

const imageCarousel = {
    init,
};

export default imageCarousel;
