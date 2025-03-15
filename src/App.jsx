import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import WhyChooseUs from "./components/WhyChooseUs";
import MeetTheTeam from "./components/MeetTheTeam";
import ContactUs from "./components/ContactUs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import OurValues from "./components/OurValues";
import OurServices from "./components/OurServices";
import OurProducts from "./components/OurProducts";
import Partners from "./components/Partners";

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <AboutUs />
      <OurValues />
      <OurServices />
      <OurProducts />
      <MeetTheTeam />
      <ContactUs />
      <Partners />
      <Footer />
    </div>
  );
}