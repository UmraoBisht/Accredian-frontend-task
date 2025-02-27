import "./App.css";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import HeroSection from "./components/Hero";
import Navbar from "./components/Navbar";
import ReferralBenefits from "./components/ReferralBenefits";
import ReferralProcess from "./components/ReferralProcess";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ReferralProcess />
      <ReferralBenefits />
      <FAQSection />
      <Footer />
    </>
  );
}

export default App;
