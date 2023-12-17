import { Head } from '~/components/shared/Head';
import Header from '../sections/Header';
import Landing from '../sections/Landing';
import Experience from '../sections/Experience/Experience';

function Index() {
  console.log("Index component is rendering");
  return (
    <>
      <Head title="🌠" />
      <Header />
      <div className="bg-space-background bg-cover bg-fixed bg-center min-h-screen relative">
        <div id="landing"><Landing /></div>
        <div id="experience"><Experience /></div>
      </div>
    </>
  );
}

export default Index;
