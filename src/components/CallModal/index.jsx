import React from 'react';

import Overlay from '../Overlay';
import From from '../Form';

const DEFAULT_DETAILS = 'Поступила заявка на обратный звонок';

const CallModal = ({ close, details }) => (
  <Overlay onClick={close}>
    <div
      onClick={(event) => event.stopPropagation()}
      className="relative bg-white w-[95%] rounded shadow-lg overflow-hidden p-5 sm:p-10 max-w-[600px]"
    >
      <From close={close} details={details || DEFAULT_DETAILS} cancelButton />
    </div>
  </Overlay>
);

export default CallModal;
