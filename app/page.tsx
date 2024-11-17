import klass from './main.module.scss';
import TopSection from './_views/TopSection';

export default function Home() {
  return (
    <main className={klass.container}>
      <TopSection />
    </main>
  );
}
