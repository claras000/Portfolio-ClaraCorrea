import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const ÜberMich = () => {
  return (
    <>
      <div className="w-full min-h-min  md:grid md:grid-cols-2 md:p-0 md:pt-36 p-5  pt-24 font-dmSans relative z-0">
        <div className="m-20 mt-0 ml-auto relative group md:w-2/4 w-full overflow-hidden aspect-square  rounded-xl transition duration-300 ease-in-out cursor-pointer ">
          <img
            src="./assets/images/clara-correa-profil.jpg"
            alt="clara correa Profilbild"
            className={`object-cover w-full h-auto aspect-square group-hover:scale-110 transition duration-300 ease-in-out`}
          />
        </div>

        <div className="md:max-w-md">
          <h1 className="md:text-6xl text-5xl  font-semibold leading-tight sm:text-4xl xl:text-5xl  text-green">
            Über Mich
          </h1>

          <p className=" md:pt-5 pt-4">
            2020 habe ich mein Studium an der Kunsthochschule in Bremen
            erfolgreich abgeschlossen. Um meine technischen Skills zu verbessern
            entschied ich mich für ein zweites Grundlagenstudium
            Medieninformatik - Das Beste was ich hätte machen können. In Codes
            abzutauchen, immer wieder neue Technologien zu erlernen und
            knifflige Probleme zu lösen macht mir sehr viel Spaß.
          </p>
          <Link to="/Kontakt">
            <button className="flex items-center  px-5 pb-2 pt-2.5 text-lg  leading-normal  hover:animate-bounce text-white  bg-green hover:shadow-xl hover:bg-graugrün  text-emerald-100   rounded-full md:mt-10 mt-6">
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
        </div>
      </div>
      <div className="w-full md:my-0 my-10 md:py-40 py-10 md:px-80 px-8 md:text-4xl text-lg md:font-semibold font-thin bg-grey text-greenLight font-dmSans text-center">
        <h2>
          "Webentwicklung verbindet Kreativität mit IT Expert:innenwissen. Ich
          finde diese Vielseitigkeit toll. Es gibt nichts Schöneres wenn man
          nach tagelangem Knobeln den Bug oder die Programmierlösung findet."
        </h2>
      </div>

      <section className="py-12 bg-white text-grey sm:py-12 lg:py-16 font-dmSans">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 mb-20">
          <div className="max-w-xl mx-auto text-center xl:max-w-2xl">
            <h2 className="md:text-6xl text-5xl  font-semibold leading-tight text-gray-50 sm:text-4xl xl:text-5xl mb-6 text-green">
              Meine Skills
            </h2>
            <p className="mb-4">
              *Für genauere Information frage mich gern nach meinem CV an.
            </p>
          </div>
          <div className="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left">
            <div className="relative">
              <div className="absolute -inset-1">
                <div className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
              </div>
              <div className="relative overflow-hidden   rounded-xl h-full ">
                <div className="p-9   text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-10 h-10 mx-auto"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                    />
                  </svg>

                  <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                    Coding Skills
                  </h3>
                  <p className="mt-6 text-base text-gray-600">
                    Grundlagen von HTML, CSS und JS lerne ich im Studium. Mein
                    aktuelles Lernfeld: React JS. Außerdem habe ich Grundlagen
                    in Java und schon in Python gecoded.
                  </p>
                </div>
              </div>
            </div>
            <div className="overflow-hidden   rounded-xl text-center">
              <div className="p-9">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-10 h-10 mx-auto"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>

                <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                  UX/UI Design
                </h3>
                <p className="mt-6 text-base text-gray-600">
                  Durch meine fertige Ausbildung habe ich ganzheitliches
                  Gestalten erlernt. Mich interesieren besonders die
                  Konzeptionierung von Gestaltungsprojekten.
                </p>
              </div>
            </div>

            <div className="overflow-hidden     rounded-xl text-center">
              <div className="p-9">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-10 h-10 mx-auto"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                  />
                </svg>

                <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                  Grafikdesign
                </h3>
                <p className="mt-6 text-base text-gray-600">
                  Prakische Erfahrungen konnte ich schon im Print und Screen
                  Design als Werkstudentin machen. Spannend finde ich die
                  unterschiedlichen Ausdrucksmöglichkeiten je nach Medium.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default ÜberMich;
