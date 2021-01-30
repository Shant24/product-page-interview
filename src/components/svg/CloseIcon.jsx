import React, { memo } from 'react';

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="27"
      fill="none"
      viewBox="0 0 26 27"
    >
      <path stroke="#000" strokeWidth="3" d="M24.061 2.061L1.061 25.061"></path>
      <path stroke="#000" strokeWidth="3" d="M1.061 1.939L24.061 24.939"></path>
    </svg>
  );
}

export default memo(CloseIcon);
