import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './pages/Layout';
import { NotFound } from './pages/NotFound';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Wallet } from './pages/Wallet';
import { Explorer } from './pages/Explorer';
import { Miner } from './pages/Miner';
import { MemPool } from './pages/MemPool';
import { Register } from './pages/Register';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: '/login', element: <Login /> },
      { path: '/wallet', element: <Wallet /> },
      { path: '/explorer', element: <Explorer /> },
      { path: '/miner', element: <Miner /> },
      { path: '/mempool', element: <MemPool /> },
      { path: '/register', element: <Register /> },
    ],
  },
]);
