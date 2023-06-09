import './App.css';
import './animation.css';
import Header from "./components/Header/Header"
import HeaderBox from './components/HeaderBox/HeaderBox';
import SecondSection from './components/SecondSection/SecondSection';
import ThirdSection from './components/ThirdSection/ThirdSection';
import FourthSection from './components/FourthSection/FourthSection';
import FifthSection from './components/FifthSection/FifthSection';
import SixthSection from './components/SixthSection/SixthSection';
import SeventhSection from './components/SeventhSection/SeventhSection';
import EighthSection from './components/EighthSection/EighthSection';
import Footer from './components/Footer/Footer';


function App() {

  return (
    <div className="App">
      <div className="h-screen">
        <Header />
        <HeaderBox />
      </div>
      <div className="mt-36">
        <SecondSection />
      </div>
      <div className="mt-12">
        <ThirdSection />
      </div>
      <div className="mt-12">
        <FourthSection />
      </div>
      <div className="mt-12">
        <FifthSection />
      </div>
      <div className="mt-12">
        <SixthSection />
      </div>
      <div className="mt-12">
        <SeventhSection />
      </div>
      <div className="mt-12">
        <EighthSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
