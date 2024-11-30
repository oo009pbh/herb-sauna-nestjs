import React from 'react';

export function MainLeaf({
  klass = '',
  imageUrl,
}: React.PropsWithChildren<{ klass?: string; imageUrl: string }>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='897'
      height='532'
      viewBox='0 0 897 532'
      fill='none'
      className={klass}
    >
      <path
        d='M0.142879 411.032C77.6608 382.443 167.223 336.575 349.757 157.284C428.225 78.1831 512.053 26.4221 602.284 7.29941C665.956 -1.89134 737.337 -5.75199 797.435 21.2765C860.059 49.438 898.719 113.632 896.929 181.995C894.936 258.111 845.26 330.122 792.887 380.467C736.584 434.602 667.26 469.112 594.348 497.138C564.795 508.501 534.544 517.052 503.462 523.004C295.817 554.492 138.248 499.546 0.142879 411.032Z'
        fill='url(#pattern0_43_1163)'
      />
      <defs>
        <pattern
          id='pattern0_43_1163'
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'
        >
          <image
            x='0'
            y='0'
            width='1'
            height='1'
            preserveAspectRatio='xMidYMid slice'
            xlinkHref={imageUrl}
          />
        </pattern>
      </defs>
    </svg>
  );
}
