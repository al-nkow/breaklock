import React from 'react';
import Title from '../../Title';
import Wrap from '../../Wrap';
import { ANIMATION_PROPS } from '../../../constants';

const AdvantagesBase = ({ items }) => (
  <Wrap extClassName="py-12 lg:py-16 text-center">
    <Title>Почему выбирают нас</Title>
    <div
      {...ANIMATION_PROPS}
      className="grid gap-4 sm:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1
      max-w-6xl mx-auto"
    >
      {items.map(({ id, text, icon }) => (
        <div
          key={id}
          className="
            p-5 pl-28 sm:pt-28 sm:pl-5
            relative w-full shadow-md rounded
            text-left lg:text-lg"
        >
          {icon}
          {text}
        </div>
      ))}
    </div>
  </Wrap>
);

export default AdvantagesBase;
