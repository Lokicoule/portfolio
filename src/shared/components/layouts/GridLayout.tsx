import { PropsWithChildren } from "react";
import Footer from "../footer/Footer";
import Hero from "../hero/Hero";
import Header from "../header/Header";
import DesktopMenu from "../menu/DesktopMenu";
import { AnimatePresence, motion } from "framer-motion";

const GridLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="dark:bg-gradient-to-t from-[#FCDAB7] via-[#1E5F74] via-[#133B5C] to-[#1D2D50] bg-no-repeat bg-fixed">
      <Header />
      <main className="container grid grid-cols-12 md:gap-10 lg:mt-[180px] ">
        <div className="col-span-12 lg:col-span-4 lg:h-screen lg:sticky top-44 hidden lg:block">
          <AnimatePresence>
            <motion.div
              key="hero"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 7,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              }}
            >
              <Hero />
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="col-span-12 lg:col-span-8  ">
          <AnimatePresence>
            <motion.div
              key="menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <DesktopMenu />
            </motion.div>
          </AnimatePresence>
          <AnimatePresence>
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="lg:rounded-2xl bg-white dark:bg-[#05151e]"
            >
              {children}
              <Footer />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default GridLayout;
