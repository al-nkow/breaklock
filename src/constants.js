/* eslint-disable object-curly-newline */
export const PHONE = '+7 (812) 718-3016';
export const EMAIL = 'service@pomagaickin.ru';
export const WHATSAPP_NUM = '+7 (950) 011-3271';
export const WHATSAPP_URL = 'https://api.whatsapp.com/send?phone=79500113271';

export const ANIMATION_PROPS = {
  'data-aos': 'fade-up',
  'data-aos-duration': 1000,
  'data-aos-once': true,
};

export const MENU_ITEMS = [
  { id: 'services', title: 'Наши услуги', target: 'servicesSection' },
  {
    id: 'price', title: 'Цены', target: 'examplesSection', link: '/price',
  },
  { id: '2', title: 'Примеры работ', target: 'examplesSection' },
  { id: '3', title: 'Отзывы клиентов', target: 'reviewsSection' },
  { id: '4', title: 'Документы', target: 'docsSection' },
  { id: '5', title: 'Наша команда', target: 'teamSection' },
  { id: '6', title: 'Контакты', target: 'mapSection' },
];

export const SERVICE_DATA = [
  {
    id: 1,
    title: 'Вскрытие',
    width: 30,
    items: [
      { id: 1, title: 'Гаража', link: '/open-garage', price: 1100 },
      { id: 2, title: 'Дверей', link: '/open-doors', price: 1100 },
      { id: 3, title: 'Автомобиля', link: '/open-car', price: 2000 },
      { id: 4, title: 'Капота', link: '/open-hood', price: 2400 },
      { id: 5, title: 'Багажника', link: '/open-trunk', price: 2100 },
      { id: 6, title: 'Сейфов', link: '/open-safe', price: 2600 },
    ],
  }, {
    id: 2,
    title: 'Установка',
    width: 30,
    items: [
      { id: 1, title: 'Дверных доводчиков', link: '/install-closer', price: 2100 },
      { id: 2, title: 'Броненакладок', link: '/install-armor', price: 1500 },
      { id: 3, title: 'Дверного глазка', link: '/install-peephole', price: 900 },
      { id: 4, title: 'Дверных ручек', link: '/install-handle', price: 1200 },
      { id: 5, title: 'Замков', link: '/install-lock', price: 900 },
    ],
  }, {
    id: 3,
    title: 'Услуги по замкам',
    width: 40,
    items: [
      { id: 1, title: 'Врезка замков', link: '/insert-lock', price: 1500 },
      { id: 2, title: 'Замена замков', link: '/replace-lock', price: 1100 },
      { id: 3, title: 'Замена личинки замка', link: '/lock-pick-replacement', price: 1100 },
      { id: 4, title: 'Ремонт дверных замков', link: '/door-lock-repair', price: 800 },
      { id: 5, title: 'Ремонт сейфовых замков', link: '/safe-lock-repair', price: 1700 },
      { id: 6, title: 'Обслуживание сейфов', link: '/safe-service', price: 1100 },
      { id: 7, title: 'Ремонт сейфов', link: '/safe-repair', price: 1100 },
    ],
  },
];
