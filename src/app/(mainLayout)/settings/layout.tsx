'use client'
import TabManager from './TabManager';
import '@/styles/settings-styles/settings.css'
import { useState, useEffect } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) { 
    const BREAKPOINT =  993;
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth < BREAKPOINT);
        };
    
        handleResize(); // Check initial width
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);
  return (
    <TabManager isMobile={isMobile}>{children}</TabManager>
  );
}
