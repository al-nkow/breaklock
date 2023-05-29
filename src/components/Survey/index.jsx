import React, { useState, useMemo } from 'react';
import Overlay from '../Overlay';
import SvgIcon from '../SvgIcon';
import Button from '../Button';
import From from '../Form';

import DATA from './data';

const BTN_STYLES = 'rounded-full hover:bg-gray-200 border-2 border-black text-center mb-5 cursor-pointer h-12 flex items-center justify-center';
const CARD_STYLE = 'rounded shadow-md flex items-center p-5 h-[80px] pl-24 cursor-pointer relative mb-2';

const getResult = (item) => {
  let current = DATA[item.parent];
  let result = item.result || item.button;

  while (current) {
    if (current.button) result = `${current.result || current.button} / ${result}`;
    current = DATA[current.parent];
  }
  return result;
};

const Survey = ({ close }) => {
  const [current, setCurrent] = useState(DATA.main);

  const details = useMemo(() => getResult(current), [current]);

  return (
    <Overlay onClick={close}>
      <div className="relative max-w-[400px] max-h-[90%] w-[95%] flex" onClick={(event) => event.stopPropagation()}>
        <div onClick={close} className="absolute top-[-16px] right-[-16px] z-10 bg-white rounded-full p-2 border-2 border-blred-500">
          <SvgIcon icon="close" className="w-[22px] h-[22px] cursor-pointer" />
        </div>
        <div
          className="bg-white rounded shadow-lg overflow-auto p-5 sm:p-10 w-full"
        >
          {current.options ? (
            <>
              <div className="text-2xl mb-5 font-gilroySemiBold text-center">{current.blockTitle || current.button}</div>
              {current.options.map((item) => (
                <div
                  className={DATA[item].icon ? CARD_STYLE : BTN_STYLES}
                  key={item}
                  onClick={() => setCurrent(DATA[item])}
                >
                  {DATA[item].icon && (
                    <img
                      className="absolute left-3 top-3"
                      src={DATA[item].icon}
                      alt=""
                    />
                  )}
                  {DATA[item].button}
                </div>
              ))}
              <div className="flex justify-end mt-10">
                {current.parent && (
                  <Button onClick={() => setCurrent(DATA[current.parent])} type="transparent" size="small">
                    Назад
                  </Button>
                )}
              </div>
            </>
          ) : (
            <div>
              <From title={details} details={details} close={close} />
            </div>
          )}
        </div>
      </div>
    </Overlay>
  );
};

export default Survey;
