import ImageCarousel from './image-carousel.js';

const styleString = `

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
