import { PropsWithChildren } from "react";
import Footer from "../footer/Footer";
import Hero from "../hero/Hero";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900 md:pb-16 w-full min-h-screen">
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
