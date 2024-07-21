import { Outlet } from 'react-router';
import { NavBar } from '../components/NavBar';
import { AddressViewer } from '../components/AddressViewer';

export const Layout = () => {
  return (
    <>
      <AddressViewer />
      <header>
        <h2>Header</h2>
        <NavBar />
      </header>
      <main>
        <h2>Body</h2>
        <Outlet />
      </main>
      <footer>
        <h2>Footer</h2>
      </footer>
    </>
  );
};
