import { Link } from "react-router-dom";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  return (
    <>
      <div className="bg-white text-grey font-dmSans border-t-2 border-greenLight">
        <div className="max-w-screen-xl py-10 pb-0 px-4 sm:px-6 text-gray-800 sm:flex justify-between mx-auto">
          <div className="p-5 sm:w-2/12 md:pl-20">
            <div className="font-semibold text-base text-grey mb-4 uppercase">
              Menu
            </div>
            <ul>
              <li className="my-2 ">
                <Link
                  className="hover:text-green cursor-pointer"
                  to="/"
                  onClick={scrollToTop}
                >
                  Portfolio
                </Link>
              </li>
              <li className="my-2">
                <Link
                  className="hover:text-green cursor-pointer"
                  to="/ÜberMich"
                  onClick={scrollToTop}
                >
                  Über Mich
                </Link>
              </li>
              <li className="my-2">
                <Link
                  className="hover:text-green cursor-pointer"
                  to="/Kontakt"
                  onClick={scrollToTop}
                >
                  Kontakt
                </Link>
              </li>
              <li className="mt-5 font-extralight text-sm">
                <Link
                  className="hover:text-green cursor-pointer"
                  to="/Impressum"
                  onClick={scrollToTop}
                >
                  Impressum
                </Link>
              </li>
              <li className="my-2 font-extralight text-sm">
                <Link
                  className="hover:text-green cursor-pointer"
                  to="/Agb"
                  onClick={scrollToTop}
                >
                  AGB
                </Link>
              </li>
            </ul>
          </div>
          <div className="p-5 sm:w-7/12  text-center pb-0 hidden md:block">
            <h3 className="font-semibold text-base text-grey mb-4 uppercase">
              Portfolio
            </h3>
            <p className="text-grey text-sm mb-10">
              Ich gestalte digitale und analoge Medienprodukte.
            </p>
            <img
              className="float-end w-1/2 h-auto pt-10 mr-20"
              src="../assets/images/kopfhörer.png"
              alt="Illustration-Computerzubehör"
            ></img>
          </div>
          <div className="p-5 sm:w-3/12">
            <div className=" text-base text-grey mb-4 uppercase font-semibold">
              Kontaktiere Mich
            </div>
            <ul>
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
        </div>
      </div>
    </>
  );
}

export default Footer;
