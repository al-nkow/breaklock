import suval from './images/suvalny.svg';
import perf from './images/perf.svg';
import eng from './images/eng.svg';
import fin from './images/fin.svg';
import tub from './images/tub.svg';
import nokey from './images/nokey.svg';

const DATA = {
  main: {
    blockTitle: 'Что нужно сделать?',
    options: ['openDoor', 'changeLock'],
  },
  // +++++++++++++++++++++++++++++++++++++++
  openDoor: {
    parent: 'main',
    button: 'Открыть дверь',
    options: ['enterDoor', 'autoDoor', 'safeDoor'],
  },
  changeLock: {
    parent: 'main',
    button: 'Поменять, установить замок',
  },
  // +++++++++++++++++++++++++++++++++++++++
  enterDoor: {
    parent: 'openDoor',
    button: 'Входная',
    blockTitle: 'Входная дверь',
    options: ['flat', 'room', 'garage'],
  },
  autoDoor: {
    parent: 'openDoor',
    blockTitle: 'Автомобиль',
    button: 'Авто',
    options: ['salon', 'kapot'],
  },
  safeDoor: {
    parent: 'openDoor',
    button: 'Сейф',
  },
  // +++++++++++++++++++++++++++++++++++++++
  flat: {
    parent: 'enterDoor',
    button: 'Квартира',
    blockTitle: 'Ключи на руках?',
    options: ['haveKeys1', 'noKeys1'],
  },
  room: {
    parent: 'enterDoor',
    button: 'Межкомнатная',
    blockTitle: 'Ключи на руках?',
    options: ['haveKeys2', 'noKeys2'],
  },
  garage: {
    parent: 'enterDoor',
    button: 'Гараж, помещение',
    blockTitle: 'Ключи на руках?',
    options: ['haveKeys3', 'noKeys3'],
  },
  // +++++++++++++++++++++++++++++++++++++++
  // Есть ключи от квартиры?
  haveKeys1: {
    parent: 'flat',
    button: 'Да',
    result: 'Есть ключи от квартиры',
    blockTitle: 'Как выглядел ключ от квартиры?',
    options: ['suvalKey1', 'perfKey1', 'engKey1', 'finKey1', 'tubuKey1', 'otherKey1'],
  },
  noKeys1: {
    parent: 'flat',
    button: 'Нет',
    result: 'Нет ключей от квартиры',
  },
  // +++++++++++++++++++++++++++++++++++++++
  // Есть ключи от комнаты?
  haveKeys2: {
    parent: 'room',
    button: 'Да',
    result: 'Есть ключи от комнаты',
    blockTitle: 'Как выглядеел ключ от комнаты?',
    options: ['suvalKey2', 'perfKey2', 'engKey2', 'finKey2', 'tubuKey2', 'otherKey2'],
  },
  noKeys2: {
    parent: 'room',
    result: 'Нет ключей от комнаты',
    button: 'Нет',
  },
  // +++++++++++++++++++++++++++++++++++++++
  // Есть ключи от гаража?
  haveKeys3: {
    parent: 'garage',
    button: 'Да',
    result: 'Есть ключи от гаража или помещения',
    blockTitle: 'Как выглядеел ключ от помещения или гаража?',
    options: ['suvalKey3', 'perfKey3', 'engKey3', 'finKey3', 'tubuKey3', 'otherKey3'],
  },
  noKeys3: {
    parent: 'garage',
    result: 'Нет ключей от гаража',
    button: 'Нет',
  },
  // +++++++++++++++++++++++++++++++++++++++
  // Ключи от квартиры
  suvalKey1: {
    parent: 'haveKeys1',
    button: 'Сувальный ключ',
    icon: suval,
  },
  perfKey1: {
    parent: 'haveKeys1',
    button: 'Перфорированный ключ',
    icon: perf,
  },
  engKey1: {
    parent: 'haveKeys1',
    button: 'Английский ключ',
    icon: eng,
  },
  finKey1: {
    parent: 'haveKeys1',
    button: 'Финский ключ',
    icon: fin,
  },
  tubuKey1: {
    parent: 'haveKeys1',
    button: 'Тубулярный ключ',
    icon: tub,
  },
  otherKey1: {
    parent: 'haveKeys1',
    result: 'Как выглядел ключ неизвестно',
    button: 'Нет подходящего ключа',
    icon: nokey,
  },
  // +++++++++++++++++++++++++++++++++++++++
  // Ключи от комнаты
  suvalKey2: {
    parent: 'haveKeys2',
    button: 'Сувальный ключ',
    icon: suval,
  },
  perfKey2: {
    parent: 'haveKeys2',
    button: 'Перфорированный ключ',
    icon: perf,
  },
  engKey2: {
    parent: 'haveKeys2',
    button: 'Английский ключ',
    icon: eng,
  },
  finKey2: {
    parent: 'haveKeys2',
    button: 'Финский ключ',
    icon: fin,
  },
  tubuKey2: {
    parent: 'haveKeys2',
    button: 'Тубулярный ключ',
    icon: tub,
  },
  otherKey2: {
    parent: 'haveKeys2',
    icon: nokey,
    result: 'Как выглядел ключ неизвестно',
    button: 'Нет подходящего ключа',
  },
  // +++++++++++++++++++++++++++++++++++++++
  // Ключи от помещения или гаража
  suvalKey3: {
    parent: 'haveKeys3',
    button: 'Сувальный ключ',
    icon: suval,
  },
  perfKey3: {
    parent: 'haveKeys3',
    button: 'Перфорированный ключ',
    icon: perf,
  },
  engKey3: {
    parent: 'haveKeys3',
    button: 'Английский ключ',
    icon: eng,
  },
  finKey3: {
    parent: 'haveKeys3',
    button: 'Финский ключ',
    icon: fin,
  },
  tubuKey3: {
    parent: 'haveKeys3',
    button: 'Тубулярный ключ',
    icon: tub,
  },
  otherKey3: {
    parent: 'haveKeys3',
    icon: nokey,
    result: 'Как выглядел ключ неизвестно',
    button: 'Нет подходящего ключа',
  },
  // +++++++++++++++++++++++++++++++++++++++
  // Автомобиль
  salon: {
    parent: 'autoDoor',
    blockTitle: 'Салон',
    button: 'Салон',
    options: ['salonKey', 'salonHand'],
  },
  kapot: {
    parent: 'autoDoor',
    button: 'Капот, багажник',
  },
  // +++++++++++++++++++++++++++++++++++++++
  // Салон
  salonKey: {
    parent: 'salon',
    blockTitle: 'Ключ в салоне',
    button: 'Ключ в салоне',
    options: ['running', 'off'],
  },
  salonHand: {
    parent: 'salon',
    blockTitle: 'Ключ на руках',
    button: 'Ключ на руках',
    options: ['mec', 'but', 'mecbut'],
  },
  // +++++++++++++++++++++++++++++++++++++++
  // Ключ в салоне
  running: {
    parent: 'salonKey',
    button: 'Автомобиль заведен',
  },
  off: {
    parent: 'salonKey',
    button: 'Автомобль зпглушен',
  },
  // +++++++++++++++++++++++++++++++++++++++
  // Ключ на руках
  mec: {
    parent: 'salonHand',
    button: 'Не открыть механически',
  },
  but: {
    parent: 'salonHand',
    button: 'Не открыть с кнопки',
  },
  mecbut: {
    parent: 'salonHand',
    result: 'Не открыть механически или с кнопки',
    button: 'И то, и другое',
  },
};

export default DATA;
