import React from 'react';
import Reviews from '../index';

import img1 from '../images/v8.png';
import img2 from '../images/v9.png';
import img3 from '../images/v10.png';
import img4 from '../images/v11.png';

const data = [
  { id: 1, preview: img1, src: 'https://www.youtube.com/embed/2VTl6cMLhgg?si=IvffH4IUnl90tNvk' },
  { id: 2, preview: img2, src: 'https://www.youtube.com/embed/aGmMDH21Vz4' },
  { id: 3, preview: img3, src: 'https://www.youtube.com/embed/PWpApZeOOPU' },
  { id: 4, preview: img4, src: 'https://www.youtube.com/embed/MOx_jYcyGxI' },
];

const ReviewsSmartLock = ({ open }) => <Reviews data={data} open={open} />;

export default ReviewsSmartLock;
