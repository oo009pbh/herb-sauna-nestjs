import React from 'react';

export function RightArrow({
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
      <circle cx='16.5' cy='16.5' r='16' />
      <path d='M7 16.3418L25.7595 16.3418' />
      <path d='M18.3047 25L26.0009 16.3418L18.3047 7.68354' />
    </svg>
  );
}
