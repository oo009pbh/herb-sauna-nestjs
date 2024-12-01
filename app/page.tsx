import klass from './main.module.scss';
import {
  BlogSection,
  IntroSection,
  LocationSection,
  TopSection,
} from '@templates';

export default function Home() {
  return (
    <main className={klass.container}>
      <TopSection />
      <IntroSection />
      <BlogSection />
      <LocationSection />
    </main>
  );
}
