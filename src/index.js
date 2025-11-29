const imageCarouselAttribute = 'data-image-carousel';

function init(root = document) {
    const imageCarousels = root.querySelectorAll(`[${imageCarouselAttribute}]`);
}

const imageCarousel = {
    init,
};

export default imageCarousel;
