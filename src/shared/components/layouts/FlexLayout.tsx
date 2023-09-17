import Header from "../header/Header";

const FlexLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="dark:bg-gradient-to-t from-[#FCDAB7] via-[#1E5F74] via-[#133B5C] to-[#1D2D50] bg-no-repeat bg-fixed h-screen">
      <Header />
      <main className="flex-grow flex flex-col justify-center items-center">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</div>
      </main>
    </div>
  );
};

export default FlexLayout;
