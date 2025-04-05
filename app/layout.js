"use client";
import { Space_Grotesk, Ubuntu } from "next/font/google";
import "./globals.css";
import { Layout } from "./components/Layout";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Transition from "./components/Transition";



const Spacegrotesk=Space_Grotesk ({
  subsets:['latin'],
  variable:'--font-space-grotesk',
});
const ubuntu=Ubuntu({
  subsets:['latin'],
  weight: ['300', '400', '500', '700'],
  variable:'--font-ubuntu',
});




export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={` ${Spacegrotesk.variable} ${ubuntu.variable} `}> 
        <Layout>
          <AnimatePresence mode='wait'>
            <motion.div key={pathname} className='h-full'>
              <Transition/>
              {children}
            </motion.div>
          </AnimatePresence>
          
        </Layout>
        
      </body>
    </html>
  );
}
