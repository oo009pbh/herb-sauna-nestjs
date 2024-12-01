import React from 'react';
import klass from './faq.module.scss';

type FaqProps = {
  index: number;
  title: string;
  description: string;
};

function Faq({ index, title, description }: React.PropsWithChildren<FaqProps>) {
  return (
    <div className={klass.faq_item}>
      <span className={klass.faq_index}>Q{index + 1}</span>
      <span className={klass.faq_content}>{title}</span>
      <div className={klass.description}>{description}</div>
    </div>
  );
}

export default Faq;
