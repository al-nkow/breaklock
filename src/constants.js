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
      { id: 6, title: 'Умного замкa', link: '/install-smart-lock', price: 900 },
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

export const SAFE_BRANDS = [
  'AIKO',
  'Bordogna Group',
  'Chubb Safes',
  'Diplomat Safe',
  'Format',
  'Kaso',
  'MDTB',
  'Safetronics',
  'Safewood',
  'SMP Security',
  'StahlKraft',
  'Technomax',
  'Valberg',
  'Waldis Tresore AG',
  'Контур',
  'Меткон',
  'Оnix',
  'Промет',
];

export const AUTO_BRANDS = [
  'Alfa Romeo',
  'Aston Martin',
  'Audi',
  'Bentley',
  'BMW',
  'Bugatti',
  'BYD',
  'Cadillac',
  'Chery',
  'Chevrolet',
  'Chrysler',
  'Citroën',
  'Daewoo',
  'Datsun',
  'Dodge',
  'Ferrari',
  'Fiat',
  'Ford',
  'GAZ',
  'Geely',
  'General Motors',
  'Great Wall',
  'Honda',
  'Hummer',
  'Hyundai',
  'Infiniti',
  'Jaguar',
  'Jeep',
  'Kia',
  'Lada',
  'Lamborghini',
  'Land Rover',
  'Lexus',
  'Lifan',
  'Maserati',
  'MAZ',
  'Mazda',
  'Mercedes-Benz',
  'Mini',
  'Mitsubishi',
  'Moskvich',
  'Mustang',
  'Nissan',
  'Opel',
  'Peugeot',
  'Pontiac',
  'Porsche',
  'Renault',
  'Rolls-Royce',
  'SEAT',
  'Škoda',
  'Smart',
  'SsangYong',
  'Subaru',
  'Suzuki',
  'Tesla',
  'Toyota',
  'UAZ',
  'Volkswagen',
  'Volvo',
  'ZAZ',
];

export const LOCK_BRANDS = [
  'Эльбор',
  'Гардиан',
  'МЕТТЭМ',
  'BORDER',
  'DoorLock',
  'APECS',
  'Mul-T-Lock',
  'Kale Kilit',
  'Нора-М',
  'Fuaro',
  'CISA',
  'Kerberos',
  'АЛЛЮР',
  'Зенит',
  'SibrTec',
];

export const SMART_LOCK_BRANDS = [
  'Kaadas', 'Samsung', 'AQARA', 'Xiaomi',
];

export const FAQ_MAIN = [
  {
    qstn: 'Как быстро мастер может приехать в мой район Санкт-Петербурге, если мне срочно нужно вскрыть замок на входных дверях квартиры?',
    resp: 'Мастеры обычно приезжают в любой район Санкт-Петербурга в течение 60 минут после вашего вызова, чтобы оперативно решить проблему вскрытия замка.',
  }, {
    qstn: 'Какова стоимость срочного вызова мастера для вскрытия замка на входных дверях, и есть ли какие-то скрытые доплаты?',
    resp: 'Стоимость зависит от сложности задачи и времени суток, но мастер предоставит вам четкую ценовую оценку до начала работ, и скрытых доплат не будет.',
  }, {
    qstn: 'Какие виды замков вы специализируетесь на вскрытии, и какие гарантии на качество работ вы предоставляете?',
    resp: 'Мы вскрываем различные виды замков, включая цилиндровые, сувальные, «Барьер» и прочие виды. Мы предоставляем гарантию на качество работ и это означает, что, если возникнут проблемы, мы их исправим бесплатно.',
  }, {
    qstn: 'Какие меры безопасности принимают мастера при вскрытии замка на автомобиле, чтобы избежать повреждения машины?',
    resp: 'Мастера используют специализированные инструменты и техники, чтобы минимизировать повреждения автомобиля в процессе вскрытия замка.',
  }, {
    qstn: 'Что делать, если у меня возникли сложности с замком гаражных ворот, и какая стоимость вскрытия?',
    resp: 'Если у вас есть проблемы с замком гаражных ворот, вызовите мастера. Стоимость зависит от характера проблемы и сложности решения.',
  }, {
    qstn: 'Какие методы взлома замков мастера используют, и насколько они эффективны?',
    resp: 'Мастера используют различные методы вскрытия, в зависимости от типа и сложности замка. Методы подбираются с учетом минимального повреждения и максимальной эффективности.',
  }, {
    qstn: 'Что мне делать, если я не могу открыть замок на входных дверях офиса, и какие гарантии на открытие вы предоставляете?',
    resp: 'Если вы не можете открыть замок, вызовите нашего мастера. Мы предоставляем гарантии на успешное открытие и решение проблемы.',
  }, {
    qstn: 'Каковы ваши цены на услуги вскрытия замков, и есть ли разница в ценах в ночное время?',
    resp: 'Цены на услуги вскрытия замков различаются в зависимости от сложности и наличия ключа или войной блокировки. В ночное время может быть дополнительная плата, но мы предоставим вам точные цены при заказе.',
  }, {
    qstn: 'Могу ли я оставить оценку или отзыв о вашей работе после того, как мастер помог мне вскрыть замок?',
    resp: 'Да, мы всегда приветствуем обратную связь от наших клиентов. Вы можете оставить оценку или отзыв, чтобы помочь нам улучшить качество наших услуг.',
  },
];
