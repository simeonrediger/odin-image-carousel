const imageCarouselAttribute = 'data-image-carousel';

function init(root = document) {
    const instances = Array.from(
        root.querySelectorAll(`[${imageCarouselAttribute}]`),
    );
}

const imageCarousel = {
    init,
};

export default imageCarousel;
