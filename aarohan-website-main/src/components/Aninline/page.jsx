import React from "react";
import Image from "next/image";
import logo from "../../../public/assets/Images/logo.png";

const ResponsiveMarquee = () => {
  // Animation keyframes defined with JavaScript for inline usage
  const marqueeKeyframes = `
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-100%); }
    }
  `;

  const marqueeStyles = {
    position: "relative",
    overflow: "hidden",
    whiteSpace: "nowrap",
    height: "20vh",
    paddingTop: "2rem",
  };

  const contentStyles = {
    display: "inline-block",
    height: "100%",
    animation: "marquee 10s linear infinite ",
    animationFillMode: "both"
  };

  const contentMobileStyles = {
    display: "inline-block",
    height: "100%",
    animation: "marquee 12s linear infinite",
  };

  const strokeTextStyle = {
    WebkitTextStroke: "1px #d97706",
    textStroke: "1px #d97706",
    color: "transparent",
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: marqueeKeyframes }} />

      {/* Desktop Marquee */}
      <div
        style={{ ...marqueeStyles, display: "block" }}
        className="sm:block bg-gradient-to-r from-[#120101] to-[#2A0404] pb-7"
      >
        <div
          style={{
            ...contentStyles,
            display: "inline-flex",
            alignItems: "center",
          }}
        >
          <ul className="flex space-x-8 text-2xl items-center md:text-3xl lg:text-4xl font-bold">
            <li style={strokeTextStyle} className="text-[#d97706]">
              TECHNO
            </li>
            <li className="flex items-center">
              {logo ? (
                <Image src={logo} alt="Tech" width={100} height={100} />
              ) : (
                <div className="w-24 h-24 bg-gray-200 flex items-center justify-center text-4xl">
                  ⚙
                </div>
              )}
            </li>
            <li className="text-[#d97706]">TECHNOLOGY x HERITAGE</li>
            <li className="text-[#d97706]">TECHNOLOGY MEETS TRADITION</li>
          </ul>
        </div>
        <div
          style={{
            ...contentStyles,
            display: "inline-flex",
            alignItems: "center",
          }}
          aria-hidden="true"
        >
          <ul className="flex space-x-8 items-center text-2xl md:text-3xl lg:text-4xl font-bold">
            <li style={strokeTextStyle} className="text-[#d97706]">
              INNOVATION MEETS INSPIRATION
            </li>
            <li className="flex items-center">
              {logo ? (
                <Image src={logo} alt="Tech" width={100} height={100} />
              ) : (
                <div className="w-24 h-24 bg-gray-200 flex items-center justify-center text-4xl">
                  ⚙
                </div>
              )}
            </li>
            <li className="text-[#d97706]">INNOVEDA</li>
            <li className="text-[#d97706]">AAROHAN 2025</li>
          </ul>
        </div>
      </div>

      {/* Mobile Marquee */}
      <div
        style={{ ...marqueeStyles }}
        className="sm:visible hidden bg-gradient-to-r from-[#120101] to-[#2A0404]"
      >
        <div
          style={{
            ...contentMobileStyles,
            display: "inline-flex",
            alignItems: "center",
          }}
        >
          <ul className="flex space-x-4 text-xl font-bold">
            <li style={strokeTextStyle} className="text-[#d97706]">
              TECH TALKS
            </li>
            <li className="flex items-center">
              {logo ? (
                <Image src={logo} alt="Tech" width={50} height={50} />
              ) : (
                <div className="w-12 h-12 bg-gray-200 flex items-center justify-center text-2xl">
                  ⚙
                </div>
              )}
            </li>
            <li className="text-[#d97706]">TECHNOLOGY x HERITAGE</li>
            <li className="text-[#d97706]">TECHNOLOGY MEETS TRADITION</li>
          </ul>
        </div>
        <div
          style={{
            ...contentMobileStyles,
            display: "inline-flex",
            alignItems: "center",
          }}
          aria-hidden="true"
        >
          <ul className="flex space-x-4 text-xl font-bold">
            <li style={strokeTextStyle} className="text-[#d97706]">
              INNOVATION MEETS INSPIRATION
            </li>
            <li className="flex items-center">
              {logo ? (
                <Image src={logo} alt="Tech" width={50} height={50} />
              ) : (
                <div className="w-12 h-12 bg-gray-200 flex items-center justify-center text-2xl">
                  ⚙
                </div>
              )}
            </li>
            <li className="text-[#d97706]">INNOVEDA</li>
            <li className="text-[#d97706]">AAROHAN 2025</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ResponsiveMarquee;
