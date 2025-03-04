import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  return (
    <nav className="flex justify-between ">
      <h1 className="uppercase text-2xl tracking-wider text-white">
        Siddharth
      </h1>
      {/* <div
        onClick={() => setHamburgerOpen((prev) => !prev)}
        className="cursor-pointer z-10"
      >
        {hamburgerOpen ? (
          <X color="#fff" size={32} />
        ) : (
          <Menu color="#fff" size={32} />
        )}
      </div> */}
      {/* <div
        className={`absolute h-full w-3/12 bg-neutral-800 right-0 ${
          hamburgerOpen ? 'translate-0' : 'translate-x-full'
        } top-0 transition-transform`}
      >
        <div className="flex flex-col gap-16 mt-64">
          <span className="text-white text-xl text-center hover:text-blue-300">
            Home
          </span>
          <span className="text-white text-xl text-center hover:text-blue-300">
            About Me
          </span>
          <span className="text-white text-xl text-center hover:text-blue-300">
            Projects
          </span>
          <span className="text-white text-xl text-center hover:text-blue-300">
            Contact
          </span>
        </div>
      </div> */}
    </nav>
  );
}

export default Navbar;
