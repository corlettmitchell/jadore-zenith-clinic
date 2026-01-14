import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import MobileBookingButton from "../shared/MobileBookingButton";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
      <MobileBookingButton />
    </div>
  );
};

export default Layout;
