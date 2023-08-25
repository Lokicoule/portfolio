import { motion } from "framer-motion";
import PageTitle, { PageTitleProps } from "../page-title/PageTitle";

interface PageLayoutProps extends React.PropsWithChildren<PageTitleProps> {}

const PageLayout: React.FC<PageLayoutProps> = ({ children, title }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.75 } },
  };

  return (
    <>
      <PageTitle title={title} />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="pt-12"
      >
        <h2 className="page-title mt-12  lg:mt-0 mb-12 md:mb-[30px]">
          {title}
        </h2>
        {children}
      </motion.div>
    </>
  );
};

export default PageLayout;
