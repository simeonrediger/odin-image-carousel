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

        const previousImageButton = this.#createPreviousImageButton();
        const nextImageButton = this.#createNextImageButton();

        this.#container.append(
            previousImageButton,
            this.#imagesContainer,
            nextImageButton,
        );
    }

    #setCurrentImage(image) {
        this.#currentImage?.classList.remove(
            ImageCarousel.CLASSES.currentImage,
        );

        this.#currentImage = image;
        this.#currentImage.classList.add(ImageCarousel.CLASSES.currentImage);
    }

    #showPreviousImage() {}

    #showNextImage() {}

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

    #createPreviousImageButton() {
        const button = this.#createAdvanceImageButton({
            textContent: '⮜',
            ariaLabel: 'Show previous image',
            onClick: this.#showPreviousImage.bind(this),
        });

        return button;
    }

    #createNextImageButton() {
        const button = this.#createAdvanceImageButton({
            textContent: '⮞',
            ariaLabel: 'Show next image',
            onClick: this.#showNextImage.bind(this),
        });

        return button;
    }

    #createAdvanceImageButton({ textContent, ariaLabel, onClick }) {
        const button = document.createElement('button');
        button.textContent = textContent;
        button.ariaLabel = ariaLabel;
        button.addEventListener('click', onClick);
        return button;
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
