import { Head } from '~/components/shared/Head';
import Header from '../sections/Header';
import Landing from '../sections/Landing';
import Experience from '../sections/Experience/Experience';
import Reviews from '../sections/Reviews/Reviews';
import Interests from '../sections/Interests/Interests';
import Contact from '../sections/Contact';

function Index() {
  console.log("Index component is rendering");
  return (
    <>
      <Head title="🌠" />
      <Header />
      <div className="bg-space-background bg-cover bg-fixed bg-center min-h-screen relative index-container">
        <div id="landing"><Landing /></div>
        <div id="experience"><Experience /></div>
        <div id="interests"><Interests /></div>
        <div id="reviews"><Reviews /></div>
        <div id="contact"><Contact /></div>
      </div>
    </>
  );
}

export default Index;
