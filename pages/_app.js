import "../styles/globals.css";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { store } from "../features/store";
import NavBar from "../components/Navbar/NavBar";
import Skeleton from "@mui/material/Skeleton";
import { useEffect, useState } from "react";
import Footer from "../components/footer/Footer";
import BottomNav from "../components/footer/BottomNav";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Mobilefooter from "../components/footer/Mobilefooter";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const Layout = Component.Layout || EmptyLayout;

  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        {loading ? (
          <NavBar />
        ) : (
          <Skeleton
            className="rounded my-3"
            variant="rectangular"
            animation="wave"
            width={"100%"}
            height={80}
          />
        )}{" "}
        <Layout>
          <Component {...pageProps} />
        </Layout>

      </SessionProvider>
      {loading ? (
        <Footer />
      ) : (
        <Skeleton
          className="rounded my-3 hidden sm:block lg:block"
          variant="rectangular"
          animation="wave"
          width={"100%"}
          height={500}
        />
      )}{" "}
      {loading ? (
        <Mobilefooter />
      ) : (
        <Skeleton
          className="rounded my-3 block sm:hidden lg:hidden"
          variant="rectangular"
          animation="wave"
          width={"100%"}
          height={400}
        />
      )}{" "}
      <BottomNav />
      <ToastContainer />
    </Provider>
  );
}

//setting up an empty layout
const EmptyLayout = ({ children }) => <>{children}</>;

export default MyApp;
