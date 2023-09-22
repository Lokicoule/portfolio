import { AnimatePresence, motion } from "framer-motion";
import { PropsWithChildren } from "react";
import Header from "../header/Header";
import Hero from "../hero/Hero";
import DesktopMenu from "../menu/DesktopMenu";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="dark:bg-gradient-to-t from-[#FCDAB7] via-[#1E5F74] via-[#133B5C] to-[#1D2D50] bg-no-repeat bg-fixed h-full min-h-screen">
      <Header />
      <main className="container grid grid-cols-12 md:gap-10 lg:mt-[180px] ">
        <div className="col-span-12 lg:col-span-4 lg:h-screen lg:sticky top-44 hidden lg:block">
          <Hero />
        </div>
        <div className="col-span-12 lg:col-span-8  ">
          <DesktopMenu />
          <AnimatePresence mode="wait">
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default Layout;
