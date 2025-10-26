"use client";
import React from "react";
import Image from "next/image";
import "./CyberpunkSkyline.css"

const CyberpunkSkyline: React.FC = () => {
  return (
    <div className="skyline-container ">
      <div className="skyline-layer layer-far"></div>
      <div className="skyline-layer layer-mid"></div>
      <div className="skyline-layer layer-front"></div>
      <div className="skyline-layer cyberpunk-car"></div>
      <div className="skyline-layer layer-shadow"></div>

      <div className="skyline-content">

      </div>
    </div>
  );
};

export default CyberpunkSkyline;
