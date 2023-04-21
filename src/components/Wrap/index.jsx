import React from 'react';

const Wrap = ({
  style, extClassName, intClassName, children, id,
}) => (
  <div id={id} style={style} className={`px-4 ${extClassName}`}>
    <div className={`max-w-screen-xl mx-auto ${intClassName}`}>{children}</div>
  </div>
);

export default Wrap;
