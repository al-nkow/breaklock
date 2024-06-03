import React from 'react';
import Wrap from '../../Wrap';
import Title from '../../Title';

const ExamplesWrap = ({ children }) => (
  <Wrap extClassName="py-12 lg:py-16 text-center" id="examplesSection">
    <Title className="mb-5 sm:mb-10">Примеры работ</Title>
    {children}
  </Wrap>
);

export default ExamplesWrap;
