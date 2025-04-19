'use client';

import React, { useEffect, useRef } from 'react';
import klass from './ImageBox.module.scss';
import Viewer from 'viewerjs';
import 'viewerjs/dist/viewer.css';

type ImageBoxProps = {
  customKlass?: string;
  title: string;
  src: string;
};

function ImageBox({
  customKlass = '',
  src,
  title,
}: React.PropsWithChildren<ImageBoxProps>) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const $container = containerRef.current;
    if ($container) {
      const $image = $container.querySelector('img');

      if ($image) {
        new Viewer($image);
      }
    }
  }, []);

  return (
    <div ref={containerRef} className={`${customKlass} ${klass.container}`} style={{background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 41.43%, rgba(0, 0, 0, 0.50) 87.85%), linear-gradient(0deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.10) 100%),url('${src}') lightgray 50% / cover no-repeat`}}>
      <div className={klass.title}>{title}</div>
    </div>
  );
}

export default ImageBox;
