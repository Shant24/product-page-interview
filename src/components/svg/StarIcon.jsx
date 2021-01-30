import React, { memo } from 'react';

function StarIcon({ isActive }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="22"
      fill={isActive ? '#0066FF' : 'none'}
      viewBox="0 0 24 22"
    >
      <path
        stroke="#007AFF"
        d="M12 1.618l2.219 6.828.112.346H21.874l-5.809 4.22-.294.213.113.346 2.218 6.828-5.808-4.22-.294-.213-.294.213-5.808 4.22 2.218-6.828.113-.346-.294-.213-5.809-4.22H9.67l.112-.346L12 1.618z"
      />
    </svg>
  );
}

export default memo(StarIcon);
