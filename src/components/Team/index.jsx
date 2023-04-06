import React, { useMemo } from 'react';
import AliceCarousel from 'react-alice-carousel';
import { StaticImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Title from '../Title';

const data = [
  {
    name: 'Дмитрий Семенов',
    position: 'мастер',
    desc: 'Дмитрий занимается замками с 2017 г. Специализируется на вскрытии входных дверей',
    image: 'team/rower1.png',
  },
  {
    name: 'Олег Зарубин',
    position: 'мастер',
    desc: 'За весь период работы поменял и установил более 1300 запирающих устройств',
    image: 'team/rower2.png',
  },
  {
    name: 'Иван Константинов',
    position: 'Старший мастер',
    desc: 'Специалист широкого профиля. Опыт работы 10 лет',
    image: 'team/rower3.png',
  },
  {
    name: 'Андрей Савельев',
    position: 'мастер',
    desc: 'Андрей открывает все типы сейфов и любые автомобили, даже с дополнительными блокировками',
    image: 'team/rower4.png',
  },
];

const Team = () => {
  const photos = useStaticQuery(graphql`
    query {
      allFile(filter: {relativeDirectory: {eq: "team"}}) {
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

  const photosMap = useMemo(() => {
    return photos.allFile.edges.reduce((acc, item) => {
      acc[item.node.relativePath] = item;
      return acc;
    }, {});
  }, []);
  
  return (
    <div className="lg:py-16 py-12 px-6">
      <Title className="mb-10">Наша команда</Title>
      <AliceCarousel
          responsive={{
            0: { items: 1 },
            568: { items: 2 },
            820: { items: 3 },
            1140: { items: 4 },
          }}
          mouseTracking
          disableButtonsControls
          items={
            data.map(({ image, name, position, desc }) => (
              <div key={image} className="p-4">
                <div
                  className="relative overflow-hidden relative rounded shadow-md max-w-[360px] mx-auto flex items-center justify-center"
                >
                  <GatsbyImage
                    className="rounded"
                    placeholder="blurred"
                    image={getImage(photosMap[image].node)}
                    src={photosMap[image].node.childImageSharp.fluid.src}
                    formats={["auto", "webp", "avif"]}
                    alt=""
                  />
                  <StaticImage
                    className="absolute bottom-0 left-0 right-0"
                    placeholder="blurred"
                    src="./images/rect.png"
                    formats={["auto", "webp", "avif"]}
                    alt=""
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white font-gilroyLight min-h-[154px]">
                    <div className="font-semibold text-xl mb-1">{name}</div>
                    <div className="mb-3">{position}</div>
                    <div className="text-sm">{desc}</div>
                  </div>
                </div>
              </div>
          ))}
        />
    </div>
  )
}

export default Team;

