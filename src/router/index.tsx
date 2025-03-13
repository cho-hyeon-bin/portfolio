import Index from '@/pages/index';
import Layout from '@/components/layout';

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Index /> },
    ],
  },
];

export default routes;