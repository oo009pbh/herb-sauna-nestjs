import klass from './main.module.scss';
import TopSection from './_shared/components/templates/TopSection';
import IntroSection from '@templates/IntroSection';

export default function Home() {
  return (
    <main className={klass.container}>
      <TopSection />
      <IntroSection />
    </main>
  );
}
