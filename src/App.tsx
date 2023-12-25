import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import TrendingProduct from "./components/TrendingProduct";
import { Toaster } from "react-hot-toast";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

function App() {
  // const [showCart, setShowCart] = useState(false);
  return (
    <>
      <Navbar />
      {/* <Navbar setShowCart={setShowCart} /> */}
      {/* {showCart && <Cart setShowCart={setShowCart} />} */}
      <Hero />
      <Banner />
      <TrendingProduct />
      <Features />
      <Footer />
      <Toaster position="bottom-center" reverseOrder={false} />
    </>
  );
}

export default App;
