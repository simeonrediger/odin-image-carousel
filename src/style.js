import ImageCarousel from './image-carousel.js';

const styleString = `

.${ImageCarousel.CLASSES.container} {
  display: grid;
  justify-content: center;
  justify-items: center;
  align-items: center;
}

.${ImageCarousel.CLASSES.advanceImageButton} {
  border-radius: 0.5rem;
  font-family: inherit;
  font-size: 3em;
  padding: 0.25rem 0.5rem;
}

.${ImageCarousel.CLASSES.image} {
  display: none;
}

.${ImageCarousel.CLASSES.currentImage} {
  display: inline-block;
}

`;

const style = document.createElement('style');
style.textContent = styleString;

export default style;
