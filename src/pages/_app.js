import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-black overflow-hidden max-w-[1440px] min-w-sm mx-auto">
      <Navbar />
      <Component {...pageProps} />
      <Footer/>
    </div>
  );
}
