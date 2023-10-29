import React from 'react';
import Wrap from '../Wrap';
import Title from '../Title';

const FAQ = ({ data }) => (
  <Wrap extClassName="py-12 lg:py-16 bg-[#f9f9f9]">
    <Title>Частые вопросы наших клиентов и ответы мастеров</Title>
    {data.map((item) => (
      <div key={item.qstn} className="mb-4 bg-[#ffffff] p-8 rounded max-w-[960px] mx-auto">
        <div className="font-gilroyBold text-lg mb-2">{item.qstn}</div>
        <div>{item.resp}</div>
      </div>
    ))}
  </Wrap>
);

export default FAQ;
