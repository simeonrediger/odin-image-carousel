# Odin Image Carousel

An attribute-driven image carousel wrapper utility.

# Installation

```bash
npm install @simeonrediger/image-carousel
```

# Usage

For each image carousel, create a container element with the `data-image-carousel` attribute and nest your `img` elements as its children.

```html
<div data-image-carousel>
    <img src="image-1.png" />
    <img src="image-2.png" />
    <img src="image-3.png" />
</div>
```

Initialize the image carousels.

```js
import imageCarousel from '@simeonrediger/image-carousel';

imageCarousel.init({ root, cycleIntervalInMs });
```

The image carousel dimensions will be based on the widest image's width and the tallest image's height. Images that are narrower or shorter will be centered in the image carousel.

# Options

## `root`

Default is `document`. Must be an `Element`, `Document`, or `DocumentFragment`. Allows for more specific scoping of image carousel initialization.

## `cycleIntervalInMs`

Default is `5000`. Sets the interval in milliseconds that the image carousel will cycle images. Setting to `null` will disable automatic image cycling.
