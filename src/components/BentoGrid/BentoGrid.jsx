import React from 'react';
import ReactLogo from '../../assets/react-logo.png';
import HtmlLogo from '../../assets/html-logo.png';
import CssLogo from '../../assets/css-logo.svg';
import ReduxLogo from '../../assets/redux.png';
import ReactQuery from '../../assets/react-query.png';
import NodeJS from '../../assets/nodejs.png';
import MongoDB from '../../assets/mongodb-logo.png';
import SQLLogo from '../../assets/sql-logo.png';
import Typescript from '../../assets/typescript.webp';
import Me from '../../assets/me.jpg';

function BentoGrid() {
  return (
    <div className="grid gap-4 grid-cols-6">
      <div className="w-full h-72 bg-neutral-800 p-8 col-span-4 rounded-2xl">
        <div className="flex flex-col justify-between h-full">
          <p className="text-white">
            My name is Siddharth, and I am currently pursuing a degree in
            Mechanical Engineering from DIT University. Alongside my academic
            studies, I have a strong passion for web development and have honed
            my skills as a full-stack developer.
          </p>
          <p className="text-white">
            I am proficient in front-end technologies such as HTML, CSS, and
            JavaScript, and I specialize in React.js for building dynamic and
            interactive user interfaces. Additionally, I have experience with
            state management libraries like Redux and Zustand to efficiently
            manage application state.
          </p>
          <p className="text-white">
            On the backend, I work with Node.js and Express.js to develop
            scalable and high-performance server-side applications. I am also
            skilled in MongoDB, which I use for handling database operations and
            ensuring efficient data management.
          </p>
        </div>
      </div>
      <div className="w-full h-72 bg-neutral-800 p-8 col-span-2 rounded-2xl">
        <div className="h-full w-full">
          <img
            src={Me}
            alt=""
            className="object-cover w-full h-full rounded-2xl"
          />
        </div>
      </div>
      <div className="w-full h-72 bg-neutral-800 p-8 col-span-3 rounded-2xl">
        <h3 className="text-white text-2xl">Frontend Development</h3>
        <div className="mt-6 grid grid-cols-5 gap-6">
          <img src={HtmlLogo} alt="" className="w-12 mx-auto" />
          <img src={CssLogo} alt="" className="w-10 mx-auto" />
          <img src={ReactLogo} alt="" className="w-14 mx-auto" />
          <img src={ReduxLogo} alt="" className="w-14 mx-auto" />
          <img src={ReactQuery} alt="" className="w-14 mx-auto" />
          <img src={Typescript} alt="" className="w-14 mx-auto" />
        </div>
      </div>
      <div className="w-full h-72 bg-neutral-800 p-8 col-span-3 rounded-2xl">
        <h3 className="text-white text-2xl">Backend Development</h3>
        <div className="mt-6 grid grid-cols-5">
          <img src={NodeJS} alt="" className="w-16 mx-auto" />
          <img src={MongoDB} alt="" className="w-20 mx-auto" />
          <img src={SQLLogo} alt="" className="w-20 mx-auto" />
        </div>
      </div>
    </div>
  );
}

export default BentoGrid;
