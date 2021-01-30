import React, { memo } from 'react';

const HeartIcon = ({ isActive, onClick }) => {
  const handleClick = () => onClick && onClick();

  return (
    <svg
      onClick={handleClick}
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="44"
      fill={isActive ? '#000' : 'none'}
      viewBox="0 0 48 44"
      cursor="pointer"
    >
      <path
        stroke="#000"
        strokeWidth="1.224"
        d="M43.88 4.217h0c4.595 4.71 4.637 12.707-.004 17.545l-19.9 20.74-19.899-20.74C-.563 16.924-.522 8.928 4.074 4.217h0C8.778-.608 16.12-.573 20.85 4.219h0l2.691 2.723.436.44.435-.44 2.69-2.722h.001c4.73-4.793 12.072-4.828 16.776-.003z"
      />
    </svg>
  );
};

export default memo(HeartIcon);
