import { FC } from 'react';
import Footer from './footer';
import Header from './header';

const Layout: FC = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};
export default Layout;
