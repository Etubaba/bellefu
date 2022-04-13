import "../styles/globals.css";
import { Provider } from "react-redux";
import {  SessionProvider } from "next-auth/react";
import { store } from "../features/store";
import NavBar from "../components/Navbar/NavBar";

import Footer from "../components/footer/Footer";
import Mobilefooter from "../components/footer/Mobilefooter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps: {session, ...pageProps} }) {
  const Layout = Component.Layout || EmptyLayout;

  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <NavBar />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
      <Footer />
      <Mobilefooter />
      <ToastContainer />
    </Provider>
  );
}

//setting up an empty layout
const EmptyLayout = ({ children }) => <>{children}</>;

export default MyApp;
