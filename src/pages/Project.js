import Data from "../data/database-projects.json";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
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
                <div key={projectDetailskey} className="md:mr-2 mr-1">
                  <a href={link} className="no-underline">
                    <button className="bg-transparent text-grey hover:text-green hover:border-green border hover:animate-bounce border-grey py-1 px-2 rounded-full whitespace-nowrap">
                      {name}
                    </button>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 mt-10 mb-10 md:p-0 p-5">
          {projectDetails.map(([src, alt], index) => (
            <div key={index}>
              <img
                src={src}
                alt={alt}
                className={`md:m-8 mb-5 relative md:w-3/4 rounded-xl aspect-square object-cover object-center
        ${index % 2 !== 0 ? "float-start" : "float-end"}
      `}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
export default Project;
