import React from 'react';
import Title from '../Title';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Examples = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {relativeDirectory: {eq: "examples"}}) {
        edges {
          node {
            relativePath
            id
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
    <div className="lg:py-16 py-12 px-6 text-center">
      <Title className="mb-10">Примеры работ</Title>
      <div className="mb-16">
        <button
          className="
            m-3
            md:my-0
            md:text-base
            md:h-[58px]
            md:text-base
            text-sm
            text-white
            w-[210px]
            h-[44px]
            bg-blred-500
            hover:bg-red-700
            rounded-full
            font-gilroyLight
            font-semibold
          "
        >
          Вскрытие замков
        </button>
        <button
          className="
            m-3
            md:my-0
            md:text-base
            md:h-[58px]
            md:text-base
            border-2
            border-blred-500
            text-blred-500
            text-sm
            hover:bg-red-200
            w-[210px]
            h-[44px]
            bg-transparent
            rounded-full
            font-gilroyLight
            font-semibold
          "
        >
          Установка замков
        </button>
        <button
          className="
            m-3
            md:my-0
            md:text-base
            md:h-[58px]
            md:text-base
            border-2
            border-blred-500
            text-blred-500
            text-sm
            hover:bg-red-200
            w-[210px]
            h-[44px]
            bg-transparent
            rounded-full
            font-gilroyLight
            font-semibold
          "
        >
          Замена замков
        </button>
      </div>
      <div className="grid gap-4 grid-cols-4 grid-rows-2 max-w-screen-xl mx-auto">
        {images.map((image) => (
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
        {images.map((image) => (
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

