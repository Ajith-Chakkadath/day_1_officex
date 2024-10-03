import logo from './logo.svg';
import './App.css';
import Herosection from './components/Herosection';
import LocationSection from './components/LocationSection';
import SizeSection from './components/SizeSection';
import TestimonialSection from './components/TestimonialSection';
import DeskSection from './components/DeskSection';
import FooterSection from './components/FooterSection';

function App() {
  return (
    <div className="App">
   <Herosection />
   <LocationSection />
   <SizeSection />
   <TestimonialSection />
   <DeskSection />
   <FooterSection />
    </div>
  );
}

export default App;
