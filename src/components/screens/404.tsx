import { Head } from "~/components/shared/Head";
import astronautPlanet from '~/assets/astronauts/astronaut-planet.svg';


function Page404() {
  return (
    <>
      <Head title={'404'}></Head>
      <div className="h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <p className="text-2xl mb-8">Oops! Page not found.</p>
          <a href="/" className="text-xl link link-accent">
            Go back home
          </a>
          <img src={astronautPlanet} alt="Astronaut" className="mb-8" />
        </div>
      </div>
    </>
  )
}

export default Page404
