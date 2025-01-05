'use client';

import React, { useState } from 'react';
import klass from './FaqItem.module.scss';
import { RightArrow } from '@atoms/icon';

type FaqProps = {
  index: number;
  title: string;
  description: string;
};

function FaqItem({
  index,
  title,
  description,
}: React.PropsWithChildren<FaqProps>) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={klass.faq_item} data-open={isOpen}>
      <div
        className={klass.title_wrapper}
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        <div className={klass.left}>
          <span className={klass.index}>Q{index + 1}</span>
          <span className={klass.title}>{title}</span>
        </div>

        <RightArrow klass={klass.icon} />
      </div>
      <div className={klass.description}>{description}</div>
    </div>
  );
}

export default FaqItem;
