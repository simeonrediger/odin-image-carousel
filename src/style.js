import ImageCarousel from './image-carousel.js';

const styleString = `

.${ImageCarousel.CLASSES.container} {
  display: grid;
  justify-content: center;
  justify-items: center;
  align-items: center;
  gap: 1rem;

  grid-template-areas:
    '. .      .'
    '. navbar .';
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

.${ImageCarousel.CLASSES.navbar} {
  grid-area: navbar;
}

.${ImageCarousel.CLASSES.navList} {
  display: flex;
  gap: 1rem;
}

.${ImageCarousel.CLASSES.navItemButton} {
  border-radius: 1rem;
  height: 1rem;
  width: 1rem;
}

.${ImageCarousel.CLASSES.selectedNavItemButton} {
  background-color: #6af;
}

`;

const style = document.createElement('style');
style.textContent = styleString;

export default style;
