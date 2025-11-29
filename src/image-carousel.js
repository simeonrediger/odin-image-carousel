export default class ImageCarousel {
    static CLASSES = Object.freeze({
        container: 'image-carousel-container',
        advanceImageButton: 'image-carousel-advance-image-button',
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

        this.#setGridDimensions(images);
    }

    #setCurrentImage(image) {
        this.#currentImage?.classList.remove(
            ImageCarousel.CLASSES.currentImage,
        );

        this.#currentImage = image;
        this.#currentImage.classList.add(ImageCarousel.CLASSES.currentImage);
    }

    #showPreviousImage() {
        const images = Array.from(this.#imagesContainer.children);
        const currentImageIndex = images.indexOf(this.#currentImage);

        const previousImageIndex =
            (currentImageIndex - 1 + images.length) % images.length;

        const previousImage = images[previousImageIndex];
        this.#setCurrentImage(previousImage);
    }

    #showNextImage() {
        const images = Array.from(this.#imagesContainer.children);
        const currentImageIndex = images.indexOf(this.#currentImage);
        const nextImageIndex = (currentImageIndex + 1) % images.length;
        const nextImage = images[nextImageIndex];
        this.#setCurrentImage(nextImage);
    }

    #addClassToImages(images) {
        for (const image of images) {
            image.classList.add(ImageCarousel.CLASSES.image);
        }
    }

    #setGridDimensions(images) {
        const [maxImageWidth, maxImageHeight] =
            this.#getMaxElementDimensions(images);

        this.#container.style.gridTemplateColumns = [
            'auto',
            `${maxImageWidth}px`,
            'auto',
        ].join(' ');

        this.#container.style.gridTemplateRows = `${maxImageHeight}px`;
    }

    #getMaxElementDimensions(elements) {
        let maxElementWidth = 0;
        let maxElementHeight = 0;

        for (const element of elements) {
            const [width, height] = this.#getElementDimensions(element);

            if (width > maxElementWidth) {
                maxElementWidth = width;
            }

            if (height > maxElementHeight) {
                maxElementHeight = height;
            }
        }

        return [maxElementWidth, maxElementHeight];
    }

    #getElementDimensions(element) {
        const elementDisplay = element.style.display;
        const elementVisibility = element.style.visibility;

        element.style.visibility = 'hidden';
        element.style.display = 'block';

        const elementRect = element.getBoundingClientRect();

        element.style.display = elementDisplay;
        element.style.visibility = elementVisibility;

        return [elementRect.width, elementRect.height];
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
        button.classList.add(ImageCarousel.CLASSES.advanceImageButton);
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
