import { Head } from '~/components/shared/Head';
import myImage from './path/to/image.png';
import Header from '../sections/Header';
import Home from '../sections/Home';

function Index() {
  return (
    <>
      <Head title="HOME PAGE" />
      <Header />
      <Home />
    </>
  );
}

export default Index;
