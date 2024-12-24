import { Space_Grotesk, Ubuntu } from "next/font/google";
import "./globals.css";


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
  return (
    <html lang="en">
      <body className={` ${Spacegrotesk.variable} ${ubuntu.variable} `}> 
        {children}
      </body>
    </html>
  );
}
