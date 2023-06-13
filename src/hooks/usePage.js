import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import scroll from '../utils/scroll';

export default (search) => {
  useEffect(() => {
    AOS.init();

    const params = new URLSearchParams(search);
    const target = params.get('target');
    if (target) {
      setTimeout(() => {
        scroll(target);
      }, 100);
    }
  }, []);
};
