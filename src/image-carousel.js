export default class ImageCarousel {
    #container;

    constructor(containerElement) {
        this.#container = containerElement;
        this.#build();
    }

    #build() {
        const images = Array.from(this.#container.children);
        this.#validateImages(images);
        this.#addClassToImages(images);
        const imagesContainer = this.#createImagesContainer(images);

        this.#container.append(imagesContainer);
    }

    #addClassToImages(images) {
        for (const image of images) {
            image.classList.add('image-carousel-image');
        }
    }

    #createImagesContainer(images) {
        const imagesContainer = document.createElement('div');
        imagesContainer.classList.add('image-carousel-images-container');
        imagesContainer.append(...images);
        return imagesContainer;
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
