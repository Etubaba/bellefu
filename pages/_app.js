import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../features/store";
import NavBar from "../components/Navbar/NavBar";

import Footer from "../components/footer/Footer";
import Mobilefooter from "../components/footer/Mobilefooter";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || EmptyLayout;

  return (
    <Provider store={store}>
      <NavBar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer />
      <Mobilefooter />
      <ToastContainer />
    </Provider>
  );
}

//setting up an empty layout
const EmptyLayout = ({ children }) => <>{children}</>;

export default MyApp;
