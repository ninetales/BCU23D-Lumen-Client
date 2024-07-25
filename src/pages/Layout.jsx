import { Outlet } from 'react-router';
import { NavBar } from '../components/NavBar';
import { AddressViewer } from '../components/AddressViewer';

export const Layout = () => {
  return (
    <>
      <AddressViewer />
      <div className="page">
        <div className="app">
          <nav className="card">
            <NavBar />
          </nav>
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};
