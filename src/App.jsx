import BetterWorld from "./components/BetterWorld";
import Home from "./components/Home";
import ImageBox from "./components/ImageBox";
import Navbar from "./components/Navbar";
import TopPick from "./components/TopPick";
import TrendingNow from "./components/TrendingNow";
import ImageBoxSec from "./components/ImageBoxSec";
import TropicalPkg from "./components/TropicalPkg";
import ExpStays from "./components/ExpreStays";
import Customer from "./components/Customer";
import Footer from "./components/Footer";
import YourEssence from "./components/YourEssence";

const App = () => {
  return (
    <div className="container">
    <Navbar/>
     <Home />
     <TopPick/>
    <BetterWorld/>
    <ImageBox/>
  <TrendingNow/>
    <ImageBoxSec/>
    <TropicalPkg/>
     <ExpStays/>
     <YourEssence/>
    <Customer/>
    <Footer/>
    </div>
  );
};

export default App;
