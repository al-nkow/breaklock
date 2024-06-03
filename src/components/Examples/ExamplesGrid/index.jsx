import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Grid = ({ images }) => (
  <div
    className="grid gap-2 sm:gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 max-w-screen-xl mx-auto"
  >
    {images.map((image) => (
      <div
        key={image.node.id}
        className="relative rounded h-full overflow-hidden safarifix"
      >
        <GatsbyImage
          placeholder="blurred"
          image={getImage(image.node)}
          src={image.node.childImageSharp.fluid.src}
          formats={['auto', 'webp', 'avif']}
          alt=""
        />
      </div>
    ))}
  </div>
);

export default Grid;
