import React, { useMemo } from 'react';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';
import Title from '../Title';
import Slider from '../Slider';
import Wrap from '../Wrap';

const data = [
  {
    name: 'Дмитрий Семенов',
    position: 'Мастер',
    desc: 'Дмитрий занимается замками с 2017 г. Специализируется на вскрытии входных дверей',
    image: 'team/rower1.png',
  },
  {
    name: 'Олег Зарубин',
    position: 'Мастер',
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
    position: 'Мастер',
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

  const photosMap = useMemo(() => photos.allFile.edges.reduce((acc, item) => {
    acc[item.node.relativePath] = item;
    return acc;
  }, {}), []);

  return (
    <Wrap extClassName="py-12 lg:py-16" id="teamSection">
      <Title className="mb-10">Наша команда</Title>
      <Slider
        slides={3}
        responsive={{
          0: { items: 1 },
          568: { items: 2 },
          820: { items: 3 },
          1140: { items: 4 },
        }}
      >
        {data.map(({
          image, name, position, desc,
        }) => (
          <div key={image} className="p-4">
            <div
              className="safarifix relative overflow-hidden relative rounded shadow-md max-w-[360px] mx-auto flex items-center justify-center"
            >
              <div className="z-10">
                <GatsbyImage
                  placeholder="blurred"
                  image={getImage(photosMap[image].node)}
                  src={photosMap[image].node.childImageSharp.fluid.src}
                  formats={['auto', 'avif']}
                  alt=""
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 rounded overflow-hidden safarifix z-20">
                <StaticImage
                  placeholder="blurred"
                  src="./images/rect.png"
                  formats={['auto', 'avif']}
                  alt=""
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white font-gilroyLight min-h-[176px] z-50">
                <div className="font-gilroyMedium text-xl mb-1">{name}</div>
                <div className="opacity-80 mb-3">{position}</div>
                <div className="opacity-80 text-sm">{desc}</div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </Wrap>
  );
};

export default Team;
