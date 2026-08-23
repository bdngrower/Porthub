import HeroSection from '../components/HeroSection';
import About from '../components/About';
import Timeline from '../components/Timeline';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Process from '../components/Process';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Timeline />
      <Services />
      <Portfolio />
      <Process />
      <Contact />
    </>
  );
}
