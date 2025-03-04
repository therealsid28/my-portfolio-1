import React, { useEffect, useRef } from 'react';
import createGlobe from 'cobe';

function HeroSection() {
  const canvasRef = useRef();
  useEffect(() => {
    let phi = 0;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [{ location: [30.3165, 78.0322], size: 0.1 }],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  const handleOpenPDF = () => {
    window.open('/Siddharth-Resume.pdf', '_blank');
  };

  return (
    <div className="mt-30 flex justify-center gap-16 items-center">
      <div>
        <h1 className="text-5xl text-white mb-4 uppercase">
          <span className="mb-4 block ">Hi!</span>
          <div className="flex flex-col gap-4">
            <span>I am Siddharth and i am a</span>
            <span className="text-blue-300">fullstack developer</span>
          </div>
        </h1>
        <div className="flex gap-6 mt-14">
          <button
            className="px-12 py-2 bg-white rounded-md cursor-pointer"
            onClick={handleOpenPDF}
          >
            Resume
          </button>
          <span className="px-12 py-2 border rounded-md border-white text-white cursor-not-allowed opacity-20">
            Projects
          </span>
        </div>
      </div>
      <div>
        <canvas
          ref={canvasRef}
          style={{
            width: 560,
            height: 560,
            maxWidth: '100%',
            aspectRatio: 1,
            background: '#171717',
          }}
        />
      </div>
    </div>
  );
}

export default HeroSection;
