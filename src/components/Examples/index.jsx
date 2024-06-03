import React, { useState, useMemo } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Button from '../Button';
import Grid from './ExamplesGrid';
import ExamplesWrap from './ExamplesWrap';

const BUTTONS = [
  { id: 'ex1', title: 'Вскрытие замков' },
  { id: 'ex2', title: 'Установка замков' },
  { id: 'ex3', title: 'Замена замков' },
];

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
    <ExamplesWrap>
      <div className="min-[510px]:flex min-[750px]:block  mb-8 sm:mb-16">
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
      <Grid images={imgMap[active]} />
    </ExamplesWrap>
  );
};

export default Examples;
