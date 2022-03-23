import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../features/store";
import NavBar from "../components/NavBar";

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || EmptyLayout;

  return (
    <Provider store={store}>
      <NavBar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

//setting up an empty layout
const EmptyLayout = ({ children }) => <>{children}</>;

export default MyApp;