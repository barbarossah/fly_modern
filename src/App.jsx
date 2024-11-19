import Showcase from "./components/Showcase";
import Header from "./components/Header";
import PopularDirections from "./components/PopularDirections";
import ObservDirections from "./components/ObservDirections";
import OurServices from "./components/OurServices";
import PlanYourTrip from "./components/PlanYourTrip";
import Video from "./components/Video";
import ExclusiveOffers from "./components/ExclusiveOffers";
import GoogleMap from "./components/GoogleMap";
import Booking from "./components/Booking";
import Footer from "./components/Footer";
import styles from "./assets/styles/button.module.css";

function App() {
  return (
    <>
      <Header />
      <Showcase />
      <PopularDirections />
      <ObservDirections />
      <OurServices />
      <PlanYourTrip />
      <Video />
      <ExclusiveOffers />
      <GoogleMap />
      <Booking />
      <Footer />
    </>
  );
}

export default App;
