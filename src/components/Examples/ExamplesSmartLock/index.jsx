import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Grid from '../ExamplesGrid';
import ExamplesWrap from '../ExamplesWrap';

const Examples = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {relativeDirectory: {eq: "smart-locks"}}) {
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

  return (
    <ExamplesWrap>
      <Grid images={images} />
    </ExamplesWrap>
  );
};

export default Examples;
