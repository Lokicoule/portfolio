import { AnimatePresence, motion } from "framer-motion";
import PageTitle, { PageTitleProps } from "../page-title/PageTitle";
import Footer from "../footer/Footer";

interface PageLayoutProps extends React.PropsWithChildren<PageTitleProps> {}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.75 } },
};

const PageLayout: React.FC<PageLayoutProps> = ({ children, title }) => {
  return (
    <>
      <PageTitle title={title} />
      <AnimatePresence mode="wait">
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <h2 className="text-5xl font-bold text-primary-light dark:text-primary-dark relative inline-block pt-12 px-2 sm:px-5 md:px-10 lg:px-14 mb-12 md:mb-[30px]">
            {title}
          </h2>
          {children}
        </motion.section>

        <motion.div
          key="footer"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="lg:rounded-2xl bg-primary"
        >
          <Footer />
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default PageLayout;
