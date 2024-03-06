import Footer from "../components/Footer";

const Impressum = () => {
  return (
    <>
      <div className="h-screen max-w-7xl mx-auto py-16 md:pt-36 md:px-4 px-5  pt-24">
        <h1
          className="md:text-6xl text-4xl mt-20  font-semibold leading-tight sm:text-4xl xl:text-5xl  text-grey"
          id="impressum"
        >
          Impressum
        </h1>
        <ul className="mt-10 pt-2">
          <li className="font-extralight">
            Alle Inhalte sind Grafische Produkte von:
          </li>
          <li>Clara Osterburg Correa</li>
          <li>
            <div className="flex pt-10 md:pt-10 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#3A3B3C"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="stroke-1 "
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              <p className="pl-2">Universität Bremen</p>
            </div>
          </li>
          <li className="my-2">
            <div className="flex pt-1 md:pt-0 group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#3A3B3C"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="stroke-1 group-hover:stroke-2 group-hover:cursor-pointer"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <a
                className="pl-2 group-hover:underline group-hover:cursor-pointer"
                href="clara.o.correa@web.de"
              >
                clara.o.correa@web.de
              </a>
            </div>
          </li>
        </ul>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Impressum;
