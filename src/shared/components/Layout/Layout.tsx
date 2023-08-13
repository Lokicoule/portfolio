import { PropsWithChildren } from "react";
import Footer from "../footer/Footer";
import Hero from "../hero/Hero";
import Header from "../header/Header";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="bg-sky-to-indigo md:pb-16 w-full min-h-screen antialiased">
      <Header />
      <div className="container grid grid-cols-12 md:gap-10  justify-between lg:mt-[220px] ">
        <div className="col-span-12 lg:col-span-4 hidden lg:block h-screen sticky top-44">
          <Hero />
        </div>
        <div className="col-span-12 lg:col-span-8  ">{children}</div>
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
