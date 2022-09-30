import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Header from "../components/Header";

function MyApp({ Component, pageProps: { session, ...pageProps } }: any) {
  return (
    <SessionProvider session={session}>
      <div className="h-screen overflow-y-scroll bg-gray-200">
        <Header />
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
}

export default MyApp;
