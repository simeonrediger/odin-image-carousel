const imageCarouselAttribute = 'data-image-carousel';

let instances;

function init(root = document) {
    instances = Array.from(
        root.querySelectorAll(`[${imageCarouselAttribute}]`),
    );
}

const imageCarousel = {
    init,
};

export default imageCarousel;
