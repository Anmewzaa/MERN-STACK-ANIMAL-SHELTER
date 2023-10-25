import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { UserAuthContextProvider } from "@/contexts/UserAuthContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserAuthContextProvider>
      <Component {...pageProps} />
    </UserAuthContextProvider>
  );
}
