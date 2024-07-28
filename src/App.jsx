import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import NavBar from "./conpomnets/NavBar/NavBar";
import Hero from "./conpomnets/Hero/Hero";
import Services from "./conpomnets/Services/Services";
import Banner from "./conpomnets/Banner/Banner";
import AppStore from "./conpomnets/AppStore/AppStore";
import Testimonials from "./conpomnets/Testimonials/Testimonials";
import Footer from "./conpomnets/Footer/Footer";
import Video from "./conpomnets/Video/Video";

function App() {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
  });
  return (
    <>
      <div className="overflow-x-hidden overflow-hidden">
        <NavBar />
        <Hero />
        <Services />
        <Video />
        <Banner />
        <AppStore />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}

export default App;
