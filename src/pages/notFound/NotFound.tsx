const NotFound = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="text-7xl leading-none font-extrabold md:text-8xl">404!</h1>
      <p className=" text-medium text-sm capitalize mb-7 mt-6 px-4 text-center">
        the page you are looking for does not exist
      </p>

      <a
        href="/"
        className="flex items-center mx-auto bg-sky-to-blue duration-200 transition ease-linear px-8 py-3 text-lg text-white rounded-[5px] mt-6 hover:brightness-125"
      >
        Back To Home
      </a>
    </div>
  );
};

export default NotFound;
