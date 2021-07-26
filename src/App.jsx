import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Plantio } from "./components/plantio";
import { About } from "./components/about";
import { Ourstore } from "./components/ourstore";
// import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Blog } from "./components/blog";

import { Overallnumber } from "./components/overallnumber";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Plantio extra={landingPageData.Ourstore} data={landingPageData.Features} />
      <Overallnumber data={landingPageData.Overallnumber} />
      {/* <About data={landingPageData.About} /> */}
      {/* <Testimonials data={landingPageData.Testimonials} /> */}
     <Blog/>

      <Ourstore data={landingPageData.Ourstore} />
      {/* <Gallery /> */}
      <Contact data={landingPageData.Contact} />
      <Footer data={landingPageData.Footer} />
    </div>
  );
};

export default App;
