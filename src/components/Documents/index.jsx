import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Wrap from '../Wrap';
import { ANIMATION_PROPS } from '../../constants';

const data = [
  { id: '01', text: 'Паспорт с регистрацией' },
  { id: '02', text: 'Свидетельство о праве собственности' },
  { id: '03', text: 'Свидетельство о праве на наследство' },
  { id: '04', text: 'Выписка из ЕГРН' },
  { id: '05', text: 'Договор аренды, заверенный у нотариуса' },
  { id: '06', text: 'Технический паспорт на автомобиль' },
  { id: '07', text: 'Договор купли продажи' },
  { id: '08', text: 'Доверенность на право управления автомобилем, заверенная у нотариуса' },
];

const Documents = () => (
  <Wrap extClassName="py-12 lg:py-16" intClassName="md:flex" id="docsSection">
    <div {...ANIMATION_PROPS}>
      <h3 className="mb-5 text-2xl sm:text-3xl font-gilroyMedium">Необходимые документы<br />для вскрытия замка</h3>
      <div className="w-32 h-1 bg-blred-500 rounded mb-5" />
      <div className="p-4 mb-5 md:hidden text-center">
        <StaticImage
          placeholder="blurred"
          width={320}
          src="./images/man.png"
          formats={['auto', 'webp', 'avif']}
          alt=""
        />
      </div>
      <p className="mb-5">
        После прибытия нашего специалиста, для вскрытия замка, необходимо подтвердить
        право собственности на квартиру, автомобиль, гараж и другие помещения
      </p>
      <div
        className="
          grid gap-4 mb-5
          grid-cols-1
          lg:grid-cols-2
          xl:grid-cols-3
        "
      >
        {data.map(({ id, text }) => (
          <div key={id} className="flex items-center">
            <div className="text-base flex-none bg-blred-700 w-12 h-12 rounded-full flex items-center justify-center text-white mr-5">
              {id}
            </div>
            {text}
          </div>
        ))}
      </div>
      <p>
        Документы необходимо подготовить заранее! Если документов нет, вскрытие осуществляется
        в присутствии участкового
      </p>
    </div>
    <div {...ANIMATION_PROPS} className="flex-none md:w-[50%] lg:w-[35%] pl-8 hidden md:block">
      <StaticImage
        placeholder="blurred m-4"
        width={468}
        src="./images/man.png"
        formats={['auto', 'webp', 'avif']}
        alt=""
      />
    </div>
  </Wrap>
);

export default Documents;
