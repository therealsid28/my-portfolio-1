import { Mail } from 'lucide-react';
import './App.css';
import BentoGrid from './components/BentoGrid/BentoGrid';
import HeroSection from './components/Hero/HeroSection';
import Navbar from './components/Navbar/Navbar';
import { useState } from 'react';

function App() {
  const [openEmail, setOpenEmail] = useState(false);
  return (
    <>
      <div className="fixed bottom-6 right-6">
        <div
          className="w-12 h-12 bg-white rounded-full flex justify-center items-center cursor-pointer"
          onClick={() => setOpenEmail((prev) => !prev)}
        >
          <Mail />
        </div>
        <div
          className={`absolute right-16 bottom-2.5 ${
            openEmail ? 'block' : 'hidden'
          }`}
        >
          <span className="p-4 bg-white rounded-2xl">
            moonmars2au@gamil.com
          </span>
        </div>
      </div>
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
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
