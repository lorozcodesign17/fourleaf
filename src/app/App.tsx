import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { FeaturedMenu } from './components/FeaturedMenu';
import { LuckySpecials } from './components/LuckySpecials';
import { Rewards } from './components/Rewards';
import { Locations } from './components/Locations';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <FeaturedMenu />
      <LuckySpecials />
      <Rewards />
      <Locations />
      <Contact />
      <Footer />
    </div>
  );
}
