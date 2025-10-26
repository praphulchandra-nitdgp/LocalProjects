"use client"
import { useState, useEffect } from 'react';
import Navbar from "@/components/Navbar/page";
import Footer from "@/components/Footer/page";
import LoadingAnimation from "@/components/Loader/Page";


export const LayoutComponent = ({children}) => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // Show loading for 5 seconds
        const timer = setTimeout(() => {
            setLoading(false);
        }, 5002);
        
        // Clean up the timer
        return () => clearTimeout(timer);
    }, []);
    
    
     
  return (
    <>
    {loading ? (
        <LoadingAnimation />
    ) : (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )}
</>
  );
};

