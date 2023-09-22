import { AnimatePresence, motion } from "framer-motion";
import Footer from "../footer/Footer";
import Head, { HeadProps } from "../head/Head";

interface PageLayoutProps extends React.PropsWithChildren<HeadProps> {
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.75 } },
};

const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  title,
  description,
  className,
}) => {
  return (
    <div className={className}>
      <Head title={title} description={description} />
      <AnimatePresence mode="wait">
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
        >
          <motion.section
            variants={containerVariants}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-5xl font-primary font-bold text-primary relative inline-block pt-12 px-2 sm:px-5 md:px-10 lg:px-14 mb-12 md:mb-[30px]">
              {title}
            </h2>
            <motion.div
              variants={containerVariants}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {children}
            </motion.div>
          </motion.section>

          <motion.div
            key="footer"
            variants={containerVariants}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <Footer />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PageLayout;
