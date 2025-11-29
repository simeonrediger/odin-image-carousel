export default class ImageCarousel {
    #container;

    constructor(containerElement) {
        this.#container = containerElement;
        this.#build();
    }

    #build() {
        const images = Array.from(this.#container.children);
        this.#validateImages(images);
    }

    #validateImages(images) {
        if (images.some(image => image.tagName !== 'IMG')) {
            console.warn(
                'Image carousel contains children that are not <img> elements.',
                'This may result in abnormal behavior.',
                this.#container,
            );
        }
    }
}
