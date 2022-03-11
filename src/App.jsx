import './App.css';
import Navbar from "./components/Navbar/Navbar.jsx";
import Header from "./container/Header/Header.jsx";
import AboutUser from "./container/AboutUs/AboutUs.jsx";
import SpecialMenu from './container/Menu/SpecialMenu';
import Chef from './container/Chef/Chef';
import Intro from './container/Intro/Intro';
import Laurels from './container/Laurels/Laurels';
import Gallery from './container/Gallery/Gallery';
import FindUs from './container/Findus/FindUs';
import Footer from './container/Footer/Footer';

const App = () => (
      <div>
            <Navbar />
            <Header />
            <AboutUser />
            <SpecialMenu />
            <Chef />
            <Intro />
            <Laurels />
            <Gallery />
            <FindUs />
            <Footer />
      </div>
);

export default App;
