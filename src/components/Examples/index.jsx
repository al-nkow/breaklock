import React, { useState, useMemo } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Title from '../Title';
import Button from '../Button';

const BUTTONS = [
  { id: 'ex1', title: 'Вскрытие замков' },
  { id: 'ex2', title: 'Установка замков' },
  { id: 'ex3', title: 'Замена замков' },
]

const Examples = () => {
  const [active, setActive] = useState(BUTTONS[0].id);
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {relativeDirectory: {eq: "examples"}}) {
        edges {
          node {
            relativePath
            id
            base
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);

  const images = data.allFile.edges;
  const imgMap = useMemo(() => images.reduce((acc, item) => {
    const key = item.node.base.split('_')[0];
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {}), [images]);

  return (
    <div className="lg:py-16 py-12 px-6 text-center" id="examplesSection">
      <Title className="mb-10">Примеры работ</Title>
      <div className="mb-16">
        {BUTTONS.map(({ id, title }) => (
          <Button
            key={id}
            type={active === id ? 'fill' : 'borderRed'}
            onClick={() => setActive(id)}
            className="m-3 md:my-0"
          >
            {title}
          </Button>
        ))}
      </div>
      <div className="grid gap-4 grid-cols-4 grid-rows-2 max-w-screen-xl mx-auto">
        {imgMap[active].map((image) => (
          <div key={image.node.id} style={{ height: '100%' }}>
            <GatsbyImage
              className="rounded"
              placeholder="blurred"
              image={getImage(image.node)}
              src={image.node.childImageSharp.fluid.src}
              formats={["auto", "webp", "avif"]}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Examples;

