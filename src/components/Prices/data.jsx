import React from 'react';

import rect from './images/rect.png';
import suval from './images/suval.png';

export default [
  {
    id: '1',
    title: 'Вскрытие цилиндровых механизмов',
    image: rect,
    description:
  <div>
    Замок под цилиндр - механизм в котором цилиндр является рабочей частью.<br />
    Цилиндровый механизм - это секретная часть замка, приводящая в движение ригель.
    Именно «личинка» обеспечивает секретность.
  </div>,
    price: 1600,
    prices: [{
      title: 'Цена вскрытия',
      amount: '1600',
    }],
  }, {
    id: '2',
    title: 'Вскрытие сувальных замков',
    image: suval,
    description:
  <div>
    Сувальдный замок - это замок, в котором секретная часть состоит из нескольких пластин (сувальд).
    Внутри этих пластин находятся определенные отверстия, соответсвующие бороздке ключа.
    При повороте ключа осуществляется передача кодовой части. Ключ поднимает каждую  сувальду на
    определённую высоту и приводит в движение ригель.
  </div>,
    price: 2050,
    disclaimer: <>Цена вскрытия при отсутсвии ключа - от 3400&nbsp;₽</>,
  }, {
    id: '3',
    title: 'Вскрытие замков «Барьер»',
    image: rect,
    description:
  <div>
    Почти все модели имеют 4 класс взломостойкости, оснащены  круговым кодированием и относятся к
    цилиндровому типу. Замки «Барьер» более чем за 30 лет зарекомендовали себя только с
    положительной стороны. Они максимально защищены от любых механических воздействий.
  </div>,
    price: 1700,
    disclaimer: 'Цена вскрытия без ключа от 3500 ₽',
  }, {
    id: '4',
    title: 'Вскрытие автомобилей',
    image: rect,
    description:
  <div>
    Сел АКБ, ключи остались в салоне, перестал открываться капот или багажник, для наших
    специалистов это не проблема. Мы поможем открыть автомобиль любой марки и модели, а
    при необходимости зарядить аккумулятор.
  </div>,
    price: 2000,
    disclaimer: <>Цена вскрытия авто с двойной блокировкой от 3500&nbsp;₽</>,
  }, {
    id: '5',
    title: 'Вскрытие сейфов',
    image: rect,
    description:
  <div>
    <div className="mb-4">
      Сейф - представляет собой надежный металический шкаф служащий для сохранения материальных
      ценностей, денег и документов.
    </div>
    <div className="font-gilroyMedium mb-1">Сейфы оснащаются следующими замками:</div>
    <div className="italic pr-3">
      - Ключевые замки<br />
      - Кодовые замки<br />
      - Биометрические замки<br />
      - Электронные замки<br />
      - Комбинированные замки<br />
    </div>
  </div>,
    price: 2600,
  }, {
    id: '6',
    title: 'Вскрытие прочих замков',
    image: rect,
    description:
  <div>
    Наши мастера открывают все типы замков. От реечных до умных. Если Вы не нашли свой,
    просто оставьте номер, мы проконсультируем Вас по всем вопросам.
  </div>,
    price: 1700,
  }, {
    id: '7',
    title: 'Замена старого замка',
    image: rect,
    description:
  <div>
    <div className="mb-4">
      Осуществляем замену замков во всех районах Санкт-Петербурга и Ленинградской области.
      Все ходовые позиции всегда в наличии. Замена замков
    </div>
    <div className="font-gilroyMedium mb-1">При каких случаях нужно менять замок:</div>
    <div className="italic pr-3">
      - потеря ключей<br />
      - поломка механизма<br />
      - износ секретной части<br />
      - при переезде<br />
    </div>,
  </div>,
    price: 1700,
  }, {
    id: '8',
    title: 'Установка нового замка',
    image: rect,
    description:
  <div>
    Врезка замка на новое посадочное место довольно непростая задача. Установка
    замка требует определенных знаний и опыта. Помимо прочего, необходим специальный
    инструмент. Выбор замка зависит от материала полотна и задач которые от должен выполнять.
    Наши мастера проведут анализ двери и подберут замки исходя из вашего бюджета.
  </div>,
    price: 3400,
  }, {
    id: '9',
    title: 'Ремонт, перекодировка, замена фурнитуры и прочие услуги',
    image: rect,
    description:
  <div>
    Специалисты фирмы «Помогайкин» с легкостью помогут решить любую задачу связанную с замками,
    ручками, доводчиками. Просто оставьте свой номер телефона нажав на кнопку ниже
  </div>,
    button: true,
  },
];