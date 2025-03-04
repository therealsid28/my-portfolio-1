import './App.css';
import BentoGrid from './components/BentoGrid/BentoGrid';
import HeroSection from './components/Hero/HeroSection';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <div className="bg-neutral-900 h-full">
        <div className="h-full mx-12 py-4">
          <Navbar />
          <HeroSection />
        </div>
        <div className="h-full">
          <div className="mx-12 py-12">
            <div className="mb-24">
              <h2 className="text-4xl uppercase text-blue-300">About Me</h2>
              <div className="mt-10">
                <BentoGrid />
              </div>
            </div>
            <div className="mb-24">
              <h2 className="text-4xl uppercase text-blue-300">Projects</h2>
              <div className="mt-10">
                <h2 className="text-white text-2xl">Comming Soon...</h2>
                {/* <div className="grid gap-4 grid-cols-6">
                  <div className="col-span-2"></div>
                  <div className="col-span-2"></div>
                  <div className="col-span-2"></div>
                </div> */}
              </div>
            </div>
            <div>
              <h2 className="text-4xl uppercase text-blue-300">Contact Us</h2>
              <div className="mt-6">
                <p className="text-white text-xl">
                  Email - moonmars2au@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
