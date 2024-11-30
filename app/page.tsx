import klass from './main.module.scss';
import TopSection from './_shared/components/templates/TopSection';

export default function Home() {
  return (
    <main className={klass.container}>
      <TopSection />
    </main>
  );
}
