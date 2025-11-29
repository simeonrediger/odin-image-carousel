import ImageCarousel from './image-carousel.js';

const styleString = `

.${ImageCarousel.CLASSES.container} {
  display: grid;
  justify-content: center;
  justify-items: center;
  align-items: center;
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
