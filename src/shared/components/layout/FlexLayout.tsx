import Header from "../header/Header";

const FlexLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="bg-sky-to-grey h-screen w-full flex flex-col justify-center items-center min-h-screen antialiased">
      <Header />
      <main className="flex-grow flex flex-col justify-center items-center">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</div>
      </main>
    </div>
  );
};

export default FlexLayout;
