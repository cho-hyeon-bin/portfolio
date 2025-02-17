import HomeComponent from '@/pages/home';
import Layout from '@/components/layout';

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomeComponent /> },
    ],
  },
];

export default routes;