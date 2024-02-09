import { Rajdhani } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartProvider from "@/components/CartProvider";
import { Toaster } from "@/components/ui/toaster";

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
        <CartProvider>
          <div className="flex flex-col min-h-dvh justify-between">
            <Header />
            {children}
            <Toaster />
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
