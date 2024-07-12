import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./componets/Navbar/Navbar";
import Home from "./componets/Home/Home";
import Services from "./componets/Services/Services";
import Banner from "./componets/Banner/Banner";
import AppStore from "./componets/AppStore/AppStore";
import Testimonial from "./componets/Testimonial/Testimonial";
import Footer from "./componets/Footer/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
  }, []);

  return(
    <div className="overflow-x-hidden">
    <Navbar/>
    <Home/>
    <Services/>
    <Banner/>
    <AppStore/>
    <Testimonial/>
    <Footer/>
  </div>
  )
  
}

export default App;
