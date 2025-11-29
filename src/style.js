import ImageCarousel from './image-carousel.js';

const styleString = `

.${ImageCarousel.CLASSES.container} {
  display: grid;
  justify-content: center;
  justify-items: center;
  align-items: center;
  gap: 1rem;
}

.${ImageCarousel.CLASSES.advanceImageButton} {
  border-radius: 0.5rem;
  font-family: inherit;
  font-size: 3em;
  padding: 0.25rem 0.5rem;
}

.${ImageCarousel.CLASSES.image} {
  border-radius: 0.5rem;
  display: none;
}

.${ImageCarousel.CLASSES.currentImage} {
  display: block;
}

`;

const style = document.createElement('style');
style.textContent = styleString;

export default style;
