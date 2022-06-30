import Slack from "./assets/slack.png";
import Woo from "./assets/woo.png";
import Amazon from "./assets/amazon.png";
import Microsoft from "./assets/microsoft.png";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { AboutUS } from "./components/AboutUS";
import { Interests } from "./components/Interests";
import { OurValues } from "./components/OurValues";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col gap-14 sm:gap-2">
      <Header />
      <Home />
      <div className="flex items-center p-8 gap-5 justify-center">
        <div className="object-contain">
          <img src={Slack} alt="" />
        </div>
        <hr className="border-gray-300 border h-10 sm:hidden" />
        <div className="object-contain">
          <img src={Woo} alt="" />
        </div>
        <hr className="border-gray-300 border h-10 sm:hidden" />
        <div className="object-contain">
          <img src={Amazon} alt="" />
        </div>
        <hr className="border-gray-300 border h-10 sm:hidden" />
        <div className="object-contain">
          <img src={Microsoft} alt="" />
        </div>
      </div>
      <AboutUS />
      <Interests />
      <OurValues />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
