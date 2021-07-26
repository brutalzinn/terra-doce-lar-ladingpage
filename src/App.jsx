import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Ourstore } from "./components/ourstore";
import { Gallery } from "./components/gallery";
<<<<<<< HEAD
import { Testimonials } from "./components/testimonials";
// import { Team } from "./components/team";
=======
import { Overallnumber } from "./components/overallnumber";
import { Team } from "./components/team";
>>>>>>> suelen
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
      <Features data={landingPageData.Features} />
      <Overallnumber data={landingPageData.Overallnumber} />
      <About data={landingPageData.About} />
      <Ourstore data={landingPageData.Ourstore} />
      <Gallery />
<<<<<<< HEAD
      <Testimonials data={landingPageData.Testimonials} />
      {/* <Team data={landingPageData.Team} /> */}
=======
      <Team data={landingPageData.Team} />
>>>>>>> suelen
      <Contact data={landingPageData.Contact} />
      <Footer data={landingPageData.Footer} />
    </div>
  );
};

export default App;
