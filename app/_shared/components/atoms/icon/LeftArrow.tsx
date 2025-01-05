import React from 'react';

export function LeftArrow({
  klass = '',
}: React.PropsWithChildren<{ klass?: string }>) {
  return (
    <svg
      className={klass}
      xmlns='http://www.w3.org/2000/svg'
      width='33'
      height='33'
      viewBox='0 0 33 33'
      fill='none'
    >
      <circle cx='16.5' cy='16.5' r='16' transform='matrix(-1 0 0 1 33 0)' />
      <path d='M26 16.3418L7.24051 16.3418' />
      <path d='M14.6953 25L6.99911 16.3418L14.6953 7.68354' />
    </svg>
  );
}
