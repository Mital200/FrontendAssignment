import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import Features from "./components/Features.jsx";
import SuggestedProducts from "./components/SuggestedProducts.jsx";
import BrowseProducts from "./components/BrowseProducts.jsx";
import DeliveryInfo from "./components/DeliveryInfo.jsx";
import Footer from "./components/Footer.jsx";
function App() {
  

  return (
    <>
      <div className="font-sans">
        <Navbar />
        <HeroSection />
        <Features />
        <BrowseProducts />
        <DeliveryInfo />
        <Footer />
      </div>
    </>
  )
}

export default App
