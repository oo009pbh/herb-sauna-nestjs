import React from 'react';
import klass from './ImageBox.module.scss';
import Image from 'next/image';

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
  return (
    <div className={`${customKlass} ${klass.container}`}>
      <Image alt={''} className={klass.bg_left_image} src={src} fill={true} />
      <div className={klass.title}>{title}</div>
    </div>
  );
}

export default ImageBox;
