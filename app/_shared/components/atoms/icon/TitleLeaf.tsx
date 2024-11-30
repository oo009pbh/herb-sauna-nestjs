import React from 'react';

export function TitleLeaf({
  klass = '',
}: React.PropsWithChildren<{ klass?: string }>) {
  return (
    <svg
      width='53'
      height='41'
      viewBox='0 0 53 41'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      className={klass}
    >
      <rect
        x='43.1055'
        width='24.6749'
        height='46.7524'
        transform='rotate(67.2138 43.1055 0)'
        fill='url(#pattern0_209_821)'
        fillOpacity='0.25'
      />
      <defs>
        <pattern
          id='pattern0_209_821'
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'
        >
          <use
            xlinkHref='#image0_209_821'
            transform='scale(0.00877193 0.00462963)'
          />
        </pattern>
        <image
          id='image0_209_821'
          width='114'
          height='216'
          xlinkHref='data:image/png;base64,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'
        />
      </defs>
    </svg>
  );
}
