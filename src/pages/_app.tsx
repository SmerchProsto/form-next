import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/Header/ui";
import Footer from "@/components/Footer/ui";
import StyledComponentsRegistry from "@/lib/registry";

export default function App({ Component, pageProps }: AppProps) {

    return (
        <>
            <Header/>
            <Component {...pageProps} />
            <Footer/>
        </>
    );
}
