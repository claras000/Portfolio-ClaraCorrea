import Data from "../data/database-projects.json";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";

const Project = () => {
  const { projectId } = useParams();
  var id = projectId;

  const projectDetails = Data.project[id].projectDetails;
  const linklist = Data.project[id].linklist;

  if (!Array.isArray(projectDetails)) {
    console.error("projectDetails is not an array");
    return null; // Oder eine entsprechende Fehlerbehandlung
  }

  console.log(id);
  console.log(projectDetails.image2);

  return (
    <div className=" font-dmSans relative z-0">
      <div className="md:grid md:grid-cols-4 pt-10 md:pt-52">
        <a href={`/`} component="0" className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 ml-auto mr-16 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
            />
          </svg>
        </a>
        <div className=" ">
          <h1 className="font-bold uppercase text-2xl ">
            {Data.project[id].title}
          </h1>
          <p className="pt-5">{Data.project[id].detailtext01}</p>

          <div className="flex justify-start my-10">
            {linklist.map(([link, name], projectDetailskey) => (
              <div key={projectDetailskey} className="mr-2">
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
              className={`m-8 relative md:w-3/4 overflow-hidden rounded-xl aspect-square object-cover object-center
        ${index % 2 !== 0 ? "float-start" : "float-end"}
      `}
            />
          </div>
        ))}
      </div>

      <Footer></Footer>
    </div>
  );
};
export default Project;
