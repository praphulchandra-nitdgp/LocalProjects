"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import * as THREE from "three"; 

export default function SphereAnimation() {
  const router = useRouter();

  useEffect(() => {
    const loadAnimation = async () => {
      const module = await eval(
        `import("https://cdn.jsdelivr.net/npm/threejs-components@0.0.17/build/backgrounds/spheres2.cdn.min.js")`
      );

      const Spheres2Background = module.default || module;

      const bg = Spheres2Background(document.getElementById("webgl-canvas"), {
        count: 200,
        colors: [0xff0000, 0x0, 0xffffff],
        minSize: 0.5,
        maxSize: 1,
        speed: 2,
        mouseForce: 2.2,
      });

      // ✅ Clicking anywhere randomizes colors
      document.querySelector(".hero")?.addEventListener("click", () => {
        const makeNiceColor = () => {
          const c = new THREE.Color();
          c.setHSL(Math.random(), 0.9 + Math.random() * 0.5, 0.45 + Math.random() * 0.3);
          return c.getHex();
        };

        bg.spheres.setColors([makeNiceColor(), makeNiceColor(), makeNiceColor()]);

        if (bg.light1?.color) {
          bg.light1.color.set(makeNiceColor());
        }
      });
    };

    loadAnimation();
  }, []);

  return (
    <div id="app">
      <div className="hero">
        <canvas id="webgl-canvas"></canvas>
        <div className="hero-content">
          <h1>Praphul Chandra's</h1>
          <h2>Portfolio</h2>
            <button type="button" className="mt-3 backdrop-blur-lg" onClick={() => router.push("/about")}>
              Go to /about
            </button>
        </div>
      </div>
      
      <p className="w-full absolute bottom-0 left-0 text-center py-5 text-[#aaa] text-[14px]">© 2025 Praphul Chandra</p>
      {/* ✅ Button is now outside hero, before footer */}

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Anta&family=Orbitron:wght@400..900&family=Tourney:ital,wght@0,100..900;1,100..900&display=swap');

        #app {
          position: relative;
          min-height: 100vh;
          background: radial-gradient(circle at center, #0d0d0d, #1a1a1a, #000);
          font-family: "Orbitron", sans-serif;
        }

        .hero {
          position: relative;
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        #webgl-canvas {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 1;
          pointer-events: none; /* ✅ prevents blocking button clicks */
        }

        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
        }

        h1, h2 {
          margin: 0;
          padding: 0;
          color: white;
          text-shadow: 0 0 25px rgba(100, 100, 100, 0.6), 
                       0 0 40px rgba(150, 150, 150, 0.5);
          line-height: 100%;
          user-select: none;
        }

        h1 {
          font-size: 90px;
          font-weight: 500;
        }

        h2 {
          font-size: 60px;
          font-weight: 500;
        }

        button {
          color: #00eaff;
          background: transparent;
          border: 2px solid rgba(0, 234, 255, 0.6);
          border-radius: 8px;
          padding: 12px 24px;
          cursor: pointer;
          letter-spacing: 2px;
          text-transform: uppercase;
          transition: all 0.3s ease-in-out;
          text-shadow: 0 0 10px rgba(0, 234, 255, 0.8);
        }

        button:hover {
          background: rgba(0, 234, 255, 0.1);
          box-shadow: 0 0 15px #00eaff, 0 0 30px #00eaff;
        }
      `}</style>
    </div>
  );
}
