import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-screen flex flex-col items-center justify-evenly bg-gradient-to-r from-[#120101] to-[#2A0404]">
      <div className="mt-16 w-screen flex flex-col items-center">
        <div className="bg-gradient-to-r from-[#AE6600] via-[#FF9500] to-[#AE6600] bg-clip-text text-transparent">
          <h1 className="text-2xl md:text-5xl inline-block">AAROHAN</h1>
        </div>
        <div className="w-screen h-[300px] flex items-center justify-evenly">
          <div className="hidden md:block box-border">
            <Link href="/events">
              <h1 className="text-xl mb-2">Events</h1>
            </Link>
          </div>
          <div className="hidden md:block box-border">
            <Link href="/sponsors">
              <h1 className="text-xl mb-2">Sponsors</h1>
            </Link>
          </div>
          <div className="relative w-[250px] h-[250px]">
            <Image
              src={"/assets/Images/logo.png"}
              alt="AAROHAN Logo"
              fill
              objectFit="cover"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden md:block box-border">
            <Link href="/timeline">
              <h1 className="text-xl mb-2">Timeline</h1>
            </Link>
          </div>
          <div className="hidden md:block box-border">
            <Link href="/contact-us">
              <h1 className="text-xl mb-2">Contact Us</h1>
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-16 w-screen flex flex-col items-center">
        <div className="bg-gradient-to-r from-[#AE6600] via-[#FF9500] to-[#AE6600] bg-clip-text text-transparent mb-5">
          <h1 className="text-2xl md:text-5xl inline-block text-nowrap">
            TEAM AAVISHKAR
          </h1>
        </div>
        <div className="w-screen flex flex-col md:flex-row items-center justify-between md:justify-evenly mt-5">
          <div className="w-full  flex flex-col items-center justify-between mb-4 md:mb-0">
            <div className="relative w-[80px] h-[80px] rounded-full overflow-hidden">
              <Image
                src={"/assets/GLUG.png"}
                alt="GLUG"
                fill
                objectFit="cover"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="text-3xl mt-2">GLUG</div>
          </div>
          <div className="w-full flex flex-col items-center justify-between mb-4 md:mb-0">
            <div className="relative w-[80px] h-[80px]  overflow-hidden">
              <Image
                src={"/assets/SAE.png"}
                alt="SAE"
                fill
                objectFit="cover"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="text-3xl mt-2">SAE</div>
          </div>
          <div className="w-full  flex flex-col items-center justify-between mb-4 md:mb-0">
            <div className="relative w-[80px] h-[80px] rounded-full overflow-hidden">
              <Image
                src={"/assets/Recursion.jpg"}
                alt="Recursion"
                fill
                objectFit="cover"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="text-3xl mt-2">Recursion</div>
          </div>
          <div className="w-full  flex flex-col items-center justify-between mb-4 md:mb-0">
            <div className="relative w-[80px] h-[80px] rounded-full overflow-hidden">
              <Image
                src={"/assets/CCA.png"}
                alt="CCA"
                fill
                objectFit="cover"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="text-3xl mt-2">CCA</div>
          </div>
          <div className="w-full  flex flex-col items-center justify-between mb-4 md:mb-0">
            <div className="relative w-[80px] h-[80px] rounded-full overflow-hidden">
              <Image
                src={"/assets/MNTC.png"}
                alt="MNTC"
                fill
                objectFit="cover"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="text-3xl mt-2">MNTC</div>
          </div>
        </div>
      </div>

      <div className="mt-16 w-screen h-[200px] flex flex-col items-center justify-evenly">
        <div className="w-[300px] flex items-center justify-evenly">
          {/* Twitter */}
          <div className="box-border p-2 w-16 h-16 border border-[#ED8600] flex items-center justify-center">
            <a href="https://x.com/aarohan_nitdgp" target="_blank">
              <FontAwesomeIcon
                icon={faXTwitter}
                className="text-[#ED8600]"
                style={{ width: "40px", height: "40px" }}
              />
            </a>
          </div>

          {/* Instagram */}
          <div className="box-border p-2 w-16 h-16 border border-[#ED8600] flex items-center justify-center">
            <a href="https://www.instagram.com/arhn.nitd/" target="_blank">
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-[#ED8600]"
                style={{ width: "40px", height: "40px" }}
              />
            </a>
          </div>

          {/* Facebook */}
          <div className="box-border p-2 w-16 h-16 border border-[#ED8600] flex items-center justify-center">
            <a href="https://www.facebook.com/arhn.nitd/" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#ED8600"
                stroke="#ED8600"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                width="40"
                height="40"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="w-full flex flex-col items-center justify-evenly">
          <div>
            Made with{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="red"
              stroke="red"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-heart inline"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>{" "}
            by Team
          </div>
          <div className="bg-gradient-to-r from-[#AE6600] via-[#FF9500] to-[#AE6600] bg-clip-text text-transparent text-4xl">
            AAVISHKAR
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
