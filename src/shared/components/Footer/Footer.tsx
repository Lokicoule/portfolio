const Footer = () => {
  return (
    <footer className="overflow-hidden rounded-b-2xl">
      <p className="text-center py-6 text-gray-lite  dark:text-gray-200">
        © 2023 All Rights Reserved by{" "}
        <a
          className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-500 inline-block text-transparent bg-clip-text font-bold hover:text-white"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lokicoule
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
