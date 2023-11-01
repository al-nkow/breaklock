import React from 'react';
import Wrap from '../Wrap';
import Title from '../Title';
import FAQItem from './FAQItem';

const FAQ = ({ data }) => (
  <Wrap extClassName="py-12 lg:py-16 bg-[#f9f9f9]">
    <Title>Частые вопросы наших клиентов и ответы мастеров</Title>
    {data.map((item) => (
      <FAQItem key={item.qstn} resp={item.resp} qstn={item.qstn} />
    ))}
  </Wrap>
);

export default FAQ;
