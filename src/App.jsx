
import './App.css';
import Blog from './components/Blog';
import BombArea from './components/BombArea';
import Footer from './components/Footer';
import Hero from './components/Hero';
import LogoSlider from './components/LogoSlider';
import NavBar from './components/NavBar';
import Presentation from './components/Presentation';
import Slider from './components/Slider';
import Time from './components/Time';
import Video from './components/Video';

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Presentation />
      <Slider />
      <LogoSlider/>
      <Video/>
      <Time/>
      <BombArea/>
      <Blog/>
      <Footer/> 
    </>
  );
}

export default App;
