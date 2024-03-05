import Database from "../data/database-projects.json";
//import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { Tooltip, initTE } from "tw-elements";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  //effects
  useEffect(() => {
    initTE({ Tooltip });
  }, []);

  const projects = Database.project;

  //button scroll
  const portfolioScroll = () => {
    const portfolioID = document.getElementById("portfolio");
    if (portfolioID) {
      portfolioID.scrollIntoView({ behavior: "smooth" });
    }
  };

  //hover effekt Portofolio Projekt
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  const handleLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <>
      <div
        className="flex justify-start  bg-white text-grey relative z-0"
        id="header"
      >
        <div className="h-screen max-w-screen-lg  font-dmSans  md:p-10 md:pt-52 md:ms-20 md:pr-0 pt-40 ms-4">
          <h1
            className="md:text-7xl text-5xl relative w-[max-content] text-green md:pb-2 pb-4 font-bold
          md:before:absolute md:before:inset-0 md:before:animate-typewriter md:before:bg-white
          md:after:absolute md:after:inset-0 md:after:w-[0.125em] md:after:animate-caret md:after:bg-green"
          >
            MOIN, <br className="md:hidden"></br>ich bin Clara
          </h1>
          <div>
            <h1 className="md:text-7xl text-5xl overflow-hidden font-semibold transition-opacity text-grey">
              ich gestalte <br className="md:hidden"></br> und code
              Medienprodukte
            </h1>
          </div>

          <h4 className="md:text-2lg text-xl md:font-normal md:pt-10 pt-14 font-extralight ">
            Grafik | UI/UX Design | Coding
          </h4>
          <div className="flex">
            <Link to="/Kontakt">
              <button className="flex items-center ml-0 px-4 pb-1.5 pt-2 md:text-lg  leading-normal  hover:animate-bounce text-white  bg-green hover:shadow-xl hover:bg-graugrün  text-emerald-100   rounded-full mt-10">
                Schreib mir!
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="mr-1 h-7 w-7 pl-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </button>
            </Link>

            <button
              className="flex items-center ml-5   px-4 pb-1.5 pt-2 md:text-lg   leading-normal  hover:animate-bounce text-white  bg-green hover:shadow-xl hover:bg-graugrün  rounded-full mt-10"
              onClick={portfolioScroll}
            >
              Mein Portfolio
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="mr-1 h-7 w-7 pl-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="left-2/3 top-1/3 h-screen max-w-screen-lg md:pt-14 absolute z-0 ">
          <img
            src="public\assets\images\maushell.png"
            alt="Illustration-Computerzubehör"
            className="hidden md:block "
          ></img>
        </div>
      </div>

      <div className="font-dmSans  md-m-0" id="portfolio">
        <div className="  md:text-center  mt-28 md:ml-0 ml-6">
          <h1 className="md:text-6xl text-4xl   font-semibold leading-tight sm:text-4xl xl:text-5xl  text-grey">
            Meine Arbeiten
          </h1>
          <h2 className=" text-grey  pt-2 font-extralight">
            digitale & analoge Medienprodukte mit Sorgfalt konzeptioniert und
            entwickelt.
          </h2>
        </div>

        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`md:grid md:grid-cols-2 mt-10 ${
              index % 2 !== 0 ? "flex-row-reverse" : ""
            }`}
          >
            <div
              className={
                index % 2 !== 0
                  ? "order-1 md:text-right md:m-12 md:pr-20 flex md:justify-end justify-center md:float-right"
                  : "order-2  md:m-12 flex justify-center"
              }
            >
              <div className="md:m-10 text-grey">
                <h2
                  className={
                    index % 2 !== 0
                      ? "font-bold md:text-8xl text-6xl  text-greenLight md:-mr-32 mt-10 md:mt-0"
                      : "font-bold md:text-8xl text-6xl text-greenLight md:-ml-32 mt-10 md:mt-0"
                  }
                >
                  0{project.id + 1}
                </h2>
                <a
                  href={`/project/${project.id}`}
                  component="0"
                  className="cursor-pointer"
                >
                  <div
                    className={`flex md:pt-10 pt-3  ${
                      index % 2 !== 0 ? "md:justify-end" : ""
                    }`}
                    onMouseEnter={() => handleHover(index)}
                    onMouseLeave={handleLeave}
                  >
                    <h3 className="font-bold uppercase text-2xl hover:cursor-pointer animate-once">
                      {project.title}
                    </h3>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6 h-6 ms-2 mt-0.5 hover:cursor-pointer stroke-2  animate-once"
                      style={{
                        transform:
                          hoveredIndex === index
                            ? "rotate(-45deg)"
                            : "rotate(0)",
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                </a>
                <p className=" max-w-xs mt-4 font-extralight">{project.text}</p>
                <div className="mt-8">
                  {project.labels.map((label, labelIndex) => (
                    <button
                      className={
                        index % 2 !== 0
                          ? "md:ml-2 mr-2 bg-transparent text-grey border  hover:cursor-default border-grey  py-1 px-2 m rounded-full"
                          : "mr-2  bg-transparent text-grey border  hover:cursor-default border-grey  py-1 px-2 m rounded-full"
                      }
                      key={labelIndex}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div
              className={`md:p-0 p-5
 ${index % 2 !== 0 ? "order-2 " : "order-1 "}`}
            >
              <div
                className={`md:m-20 mt-6  relative  md:w-3/4 w-full   overflow-hidden aspect-square  rounded-xl hover:shadow-md transition duration-300 ease-in-out cursor-pointer
 ${index % 2 !== 0 ? "ml-auto md:ml-20" : " ml-auto"}`}
              >
                <a
                  href={`/project/${project.id}`}
                  component="0"
                  className="cursor-pointer"
                >
                  <img
                    src={project.image1}
                    alt={project.imageAltText1}
                    className={` object-cover cursor-pointer w-full h-auto aspect-square group-hover:scale-110 transition duration-300 ease-in-out md:rounded-none rounded-xl absolute `}
                    onMouseEnter={() => handleHover(index)}
                    onMouseLeave={handleLeave}
                    style={{
                      transform:
                        hoveredIndex === index ? "scale(1.07)" : "scale(1)",
                    }}
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer></Footer>
    </>
  );
};

export default Home;
