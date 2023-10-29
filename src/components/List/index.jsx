import React from 'react';

const List = ({ data }) => (
  <div className="text-center text-base">
    {data && data.map((item) => (
      <div key={item} className="m-2 inline-block px-2 py-1 rounded bg-[#f2f2f2] border-2 border-gray-300">
        {item}
      </div>
    ))}
  </div>
);

export default List;
