import { lazy, Suspense } from 'react';
import { Outlet, RouteObject, useRoutes, BrowserRouter } from 'react-router-dom';
import Index from '../screens/Index';

const Loading = () => <div className="p-4 w-full h-full text-center"><span className="loading loading-infinity loading-lg text-accent" /></div>;

const Page404Screen = lazy(() => import('~/components/screens/404'));

function Layout() {
  return (
    <div>
      < nav className="flex items-center justify-between" >
      </nav >
      <Outlet />
    </div >
  );
}

export const Router = () => {
  return (
    <BrowserRouter>
      <InnerRouter />
    </BrowserRouter>
  );
};

const InnerRouter = () => {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Index />,
        },
        {
          path: '*',
          element: <Page404Screen />,
        },
      ],
    },
  ];
  const element = useRoutes(routes);
  return (
    <div>
      <Suspense fallback={<Loading />}>{element}</Suspense>
    </div>
  );
};
