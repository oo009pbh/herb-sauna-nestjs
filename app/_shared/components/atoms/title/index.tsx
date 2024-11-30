import React from 'react';
import klass from './title.module.scss';
import { TitleLeaf } from '@atoms/icon';

type TitleProps = {
  title: string;
  variant?: 'black' | 'white';
};

function Title({
  title,
  variant = 'black',
}: React.PropsWithChildren<TitleProps>) {
  return (
    <span className={klass.container} data-variant={variant}>
      {title}
      <TitleLeaf klass={klass.icon} />
    </span>
  );
}

export default Title;
