import Data from "../data/database-projects.json";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";

const Project = () => {
  const { projectId } = useParams();
  var id = projectId;

  const projectDetails = Data.project[id].projectDetails;
  const linklist = Data.project[id].linklist;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  if (!Array.isArray(projectDetails)) {
    console.error("projectDetails is not an array");
    return null; // Oder eine entsprechende Fehlerbehandlung
  }

  console.log(id);
  console.log(projectDetails.image2);

  return (
    <>
      <div className=" font-dmSans relative z-0">
        <div className="md:grid md:grid-cols-4 pt-32 md:pt-52 md:p-0 p-5">
          <Link
            to="/Portfolio-ClaraCorrea/"
            component="0"
            className="cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 md:ml-auto mr-16  cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
              />
            </svg>
          </Link>
          <div className="md:mt-0 mt-6">
            <h1 className="font-bold uppercase text-2xl ">
              {Data.project[id].title}
            </h1>
            <p className="pt-5">{Data.project[id].detailtext01}</p>

            <div className="flex justify-start my-10">
              {linklist.map(([link, name], projectDetailskey) => (
                <div key={projectDetailskey} className="md:mr-2">
                  <a href={link} className="no-underline">
                    <button className="bg-transparent text-grey hover:text-green hover:border-green border hover:animate-bounce border-grey py-1 px-2 m rounded-full whitespace-nowrap">
                      {name}
                    </button>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="md:grid md:grid-cols-2 mt-10 mb-40">
          {projectDetails.map(([src, alt], index) => (
            <div key={index}>
              <img
                src={src}
                alt={alt}
                className={`md:m-8 mb-5 relative md:w-3/4 overflow-hidden rounded-xl aspect-square object-cover object-center
        ${index % 2 !== 0 ? "float-start" : "float-end"}
      `}
              />
            </div>
          ))}
        </div>
      </div>
      <div>
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
                    to="/Portfolio-ClaraCorrea/"
                    onClick={scrollToTop}
                  >
                    Portfolio
                  </Link>
                </li>
                <li className="my-2">
                  <Link
                    className="hover:text-green cursor-pointer"
                    to="/Portfolio-ClaraCorrea/ÜberMich"
                    onClick={scrollToTop}
                  >
                    Über Mich
                  </Link>
                </li>
                <li className="my-2">
                  <Link
                    className="hover:text-green cursor-pointer"
                    to="/Portfolio-ClaraCorrea/Kontakt"
                    onClick={scrollToTop}
                  >
                    Kontakt
                  </Link>
                </li>
                <li className="mt-5 font-extralight text-sm">
                  <Link
                    className="hover:text-green cursor-pointer"
                    to="/Portfolio-ClaraCorrea/Impressum"
                    onClick={scrollToTop}
                  >
                    Impressum
                  </Link>
                </li>
                <li className="my-2 font-extralight text-sm">
                  <Link
                    className="hover:text-green cursor-pointer"
                    to="/Portfolio-ClaraCorrea/Agb"
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
      </div>
    </>
  );
};
export default Project;
