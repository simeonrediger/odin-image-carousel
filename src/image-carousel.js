export default class ImageCarousel {
    static CLASSES = Object.freeze({
        container: 'image-carousel-container',
        imagesContainer: 'image-carousel-images-container',
        image: 'image-carousel-image',
        currentImage: 'image-carousel-current-image',
    });

    #container;
    #imagesContainer;
    #currentImage;

    constructor(containerElement) {
        this.#container = containerElement;
        this.#build();
    }

    #build() {
        this.#container.classList.add(ImageCarousel.CLASSES.container);

        const images = Array.from(this.#container.children);
        this.#validateImages(images);
        this.#addClassToImages(images);
        this.#imagesContainer = this.#createImagesContainer(images);
        const firstImage = this.#imagesContainer.children[0];
        this.#setCurrentImage(firstImage);

        this.#container.append(this.#imagesContainer);
    }

    #setCurrentImage(image) {
        this.#currentImage?.classList.remove(
            ImageCarousel.CLASSES.currentImage,
        );

        this.#currentImage = image;
        this.#currentImage.classList.add(ImageCarousel.CLASSES.currentImage);
    }

    #addClassToImages(images) {
        for (const image of images) {
            image.classList.add(ImageCarousel.CLASSES.image);
        }
    }

    #createImagesContainer(images) {
        const imagesContainer = document.createElement('div');
        imagesContainer.classList.add(ImageCarousel.CLASSES.imagesContainer);
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
