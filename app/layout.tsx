// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Navbar from "./weblayout/Navbar";
// import Footer from "./weblayout/Footer";
// import ScrollToTop from "./components/ui/ScrollToTop";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Sunrise",
//   description: "Cloud Solutions and Data Center Services",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
//         <Navbar />
//         <main className="flex-1 w-full">
//           {children}
//         </main>
//         <Footer />
//         <ScrollToTop />
//       </body>
//     </html>
//   );
// }




// app/layout.tsx
"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { useEffect, useState } from "react";
import "./globals.css";
import Navbar from "./weblayout/Navbar";
import Footer from "./weblayout/Footer";
import ScrollToTop from "./components/ui/ScrollToTop";
import UltraPremiumLoader from "./components/ui/UltraPremiumLoader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Note: Metadata cannot be used in client components, so we'll move it
// You might want to create a separate metadata file or use a different approach

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Show navbar after loader disappears
      setTimeout(() => setIsNavbarVisible(true), 100);
    }, 3000); // Adjust timing based on your needs

    // Optional: Listen for loader skip
    const handleSkip = () => {
      setIsLoading(false);
      setIsNavbarVisible(true);
      clearTimeout(timer);
    };

    window.addEventListener('skip-loader', handleSkip);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('skip-loader', handleSkip);
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Sunrise - Cloud Solutions and Data Center Services</title>
        <meta name="description" content="Premier cloud solutions and data center services for enterprise businesses" />
        {/* Add other meta tags as needed */}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        {isLoading && <UltraPremiumLoader />}
        
        {/* Navbar with fade-in effect */}
        <div className={`transition-opacity duration-500 ${isNavbarVisible ? 'opacity-100' : 'opacity-0'}`}>
          <Navbar />
        </div>
        
        <main className="flex-1 w-full">
          {children}
        </main>
        
        {/* Footer with fade-in effect */}
        <div className={`transition-opacity duration-500 ${isNavbarVisible ? 'opacity-100' : 'opacity-0'}`}>
          <Footer />
        </div>
        
        <ScrollToTop />
      </body>
    </html>
  );
}