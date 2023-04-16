import React from 'react';
import { YMaps, Map as YMap, ZoomControl, Placemark } from '@pbe/react-yandex-maps';

import SvgIcon from '../SvgIcon';
import { PHONE, EMAIL, WHATSAPP_URL } from '../../constants';

const points = [
  [59.927366, 30.312583],
  [59.912995, 30.352033],
  [59.961342, 30.304352],
  [59.985775, 30.213775],
  [59.985468, 30.351720],
  [60.014859, 30.325039],
  [60.029060, 30.236699],
  [60.059131, 30.341257],
  [59.877749, 30.384080],
  [59.835698, 30.381405],
  [59.852346, 30.254418],
  [59.874959, 29.917964],
  [59.726256, 30.413257],
  [59.904608, 30.520621],
  [60.016542, 30.639593],
  [59.938330, 30.434741],
  [60.006178, 30.426900],
  [59.875610, 30.326648],
  [60.058533, 30.415231],
  [60.094261, 29.951556],
  [60.141968, 30.212313],
  [59.844863, 30.487409],
  [59.945792, 30.263174],
  [59.949783, 30.225444],
];

const Map = () => {
  return (
    <div className="relative" id="mapSection">
      <YMaps>
        <YMap
          width="100%"
          height="500px"
          defaultState={{
            center: [59.942861, 30.318326],
            zoom: 12,
            controls: [],
            behaviors: ['drag'],
          }}
        >
          <ZoomControl options={{ size: 'small', position: { top: 120, right: 10 } }} />
          {points.map(item => (
            <Placemark
              key={item[0]}
              geometry={item}
              options={{
                iconColor: '#d01829',
                preset: 'islands#dotIcon'
              }}
            />
          ))}
        </YMap>
      </YMaps>
      <div className="absolute top-[20px] sm:top-[100px] left-[20px] sm:left-[100px] rounded bg-white shadow-lg w-[280px] max-w-[90%] p-8">
        <h3 className="text-3xl mb-5 font-gilroy">Контакты</h3>
        <a
          className="relative pl-8 mb-2 font-gilroyLight no-underline block"
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
        >
          <SvgIcon icon="whatsapp" className="absolute top-[3px] left-0" />
          <div className="text-gray-500">WhatsApp:</div>
          <div className="font-semibold text-black no-underline hover:text-blred-500">
            {PHONE}
          </div>
        </a>
        <a href={`tel:${PHONE}`} className="relative pl-8 mb-2 font-gilroyLight no-underline block">
          <SvgIcon icon="phone" className="absolute top-[3px] left-0" />
          <div className="text-gray-500">Телефон:</div>
          <div className="font-semibold text-black hover:text-blred-500">
            {PHONE}
          </div>
        </a>
        <a href={`mailto:${EMAIL}`} className="relative pl-8 mb-2 font-gilroyLight no-underline block">
          <SvgIcon icon="mail" className="absolute top-[4px] left-[4px]" />
          <div className="text-gray-500">Почта:</div>
          <div className="font-semibold text-black hover:text-blred-500">
            {EMAIL}
          </div>
        </a>
      </div>
    </div>
  )
}

export default Map;
