import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Plantio } from "./components/plantio";
import { Overallnumber } from "./components/overallnumber";
import { PlantationMap } from "./components/plantationmap"
import { OurStore } from "./components/ourStore";
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
      <PlantationMap data={landingPageData.Overallnumber} />
      <OurStore data={landingPageData.OurStore} />
      <Contact data={landingPageData.Contact} />
      <Footer data={landingPageData.Footer} />
    </div>
  );
};

export default App;
