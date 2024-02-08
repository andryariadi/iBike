import { Rajdhani } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
});

export const metadata = {
  title: {
    default: "iBikez",
    template: "%s | iBikez",
  },
  description: "andry ariadi iBikez e-commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rajdhani.variable}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
