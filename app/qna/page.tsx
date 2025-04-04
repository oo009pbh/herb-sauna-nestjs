import klass from './qna.module.scss';
import Title from '@atoms/title';
import FaqItem from '../_shared/components/atoms/FaqItem';
import { FAQS } from '@/app/_shared/const';

export default function Qna() {
  return (
    <main className={klass.container}>
      <Title title={'자주 묻는 질문'} />
      <div className={klass.faq_container}>
        {FAQS.map((faq, index) => (
          <FaqItem
            key={index}
            index={index}
            title={faq.title}
            description={faq.description}
          />
        ))}
      </div>
    </main>
  );
}
