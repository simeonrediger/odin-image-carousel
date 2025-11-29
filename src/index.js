const attribute = 'data-image-carousel';

let instances;

function init(root = document) {
    instances = Array.from(root.querySelectorAll(`[${attribute}]`));
}

const imageCarousel = {
    init,
};

export default imageCarousel;
