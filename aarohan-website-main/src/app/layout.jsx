
import localFont from "next/font/local";
import "./globals.css";
import { LayoutComponent } from "./layoutComponent";

const aerospace = localFont({
  src: "./fonts/aerospace_regular.ttf",
  variable: "--font-aerospace",
  subsets: ["latin"],
  weight: "700",
});

export const metadata = {
  title: "Aarohan",
  description:
    "Aarohan 2025 will redefine how India celebrates its roots while engineering its future. A convergence of visionaries, creators, technocrats, and dreamers, it will be a beacon guiding the world toward a future that is innovative, inclusive, and deeply inspired by the wisdom of our ancestors. It focuses on the ancient wisdom of Bharat converges with the limitless possibilities of modern technology. It is a celebration of equilibrium, a grand spectacle where age-old traditions fuel futuristic innovations and emerging technology finds its soul in cultural ethos",
};

export default function RootLayout({ children }) {
  


  return (
    <html lang="en">
      <body
        className={`${aerospace.variable} antialiased flex flex-col  justify-between`}
      > <LayoutComponent>{children}</LayoutComponent>
      </body>

    </html>
  );
}
