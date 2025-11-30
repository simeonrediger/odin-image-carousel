import ImageCarousel from './image-carousel.js';
import imageCarouselStyle from './style.js';

const imageCarouselAttribute = 'data-image-carousel';

function init({ root = document, cycleIntervalInMs } = {}) {
    const rootIsValid = [Element, Document, DocumentFragment].some(
        constructor => root instanceof constructor,
    );

    if (!rootIsValid) {
        throw new Error(
            'root must be an Element, Document or DocumentFragment',
        );
    }

    const cycleIntervalIsValid =
        !ImageCarousel.cycleIntervalIsValid(cycleIntervalInMs);

    if (cycleIntervalIsValid) {
        console.error(
            'cycleIntervalInMs must be a non-negative number or null.',
            `Defaulting to ${ImageCarousel.defaultCycleIntervalInMs}.`,
        );
    }

    injectStyle(imageCarouselStyle);
    const imageCarousels = root.querySelectorAll(`[${imageCarouselAttribute}]`);

    for (const imageCarousel of imageCarousels) {
        new ImageCarousel(imageCarousel, cycleIntervalInMs);
    }
}

function injectStyle(style) {
    document.head.append(style);
}

const imageCarousel = {
    init,
};

export default imageCarousel;
