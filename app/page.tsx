import klass from './main.module.scss';
import Header from '@components/header';

export default function Home() {
  return (
    <div className={klass.container}>
      <Header />
      <main>테스트</main>
    </div>
  );
}
