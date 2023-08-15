import { PropsWithChildren } from "react";
import Footer from "../footer/Footer";
import Hero from "../hero/Hero";
import Header from "../header/Header";
import DesktopMenu from "../menu/DesktopMenu";

const GridLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="bg-sky-to-grey md:pb-16 w-full min-h-screen antialiased">
      <Header />
      <main className="container grid grid-cols-12 md:gap-10  justify-between lg:mt-[220px] ">
        <div className="col-span-12 lg:col-span-4 hidden lg:block h-screen sticky top-44">
          <Hero />
        </div>
        <div className="col-span-12 lg:col-span-8  ">
          <DesktopMenu />
          <div className="lg:rounded-2xl bg-white dark:bg-[#111111]">
            <section className="pb-12 px-2 sm:px-5 md:px-10 lg:px-14 ">
              {children}
              <Footer />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GridLayout;
