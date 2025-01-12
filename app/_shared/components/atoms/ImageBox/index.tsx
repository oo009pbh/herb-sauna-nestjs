'use client';

import React, { useEffect, useRef } from 'react';
import klass from './ImageBox.module.scss';
import Image from 'next/image';
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
    <div ref={containerRef} className={`${customKlass} ${klass.container}`}>
      <Image alt={''} src={src} fill={true} />
      <div className={klass.title}>{title}</div>
    </div>
  );
}

export default ImageBox;
