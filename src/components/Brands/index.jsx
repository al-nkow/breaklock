import React from 'react';
import List from '../List';
import Wrap from '../Wrap';

const Brands = ({ data }) => (
  <Wrap extClassName="py-12 md:text-lg">
    <div className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">
      Некоторые бренды замков, с которыми работают наши мастера:
    </div>
    <List data={data} />
  </Wrap>
);

export default Brands;
