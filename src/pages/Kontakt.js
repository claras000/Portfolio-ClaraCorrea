import Footer from "../components/Footer";
import Adresse from "../components/Adresse";

const Kontakt = () => {
  return (
    <>
      <section className="relative z-0">
        <div className="max-w-7xl mx-auto py-16 md:pt-36 md:px-4 px-5  pt-24">
          <div className="md:m-20   md:text-center  md:mt-2 mt-4 md:pl-0 pl-3">
            <h1 className="md:text-6xl text-5xl  font-semibold leading-tight text-gray-50 sm:text-4xl xl:text-5xl mb-6 text-green">
              Mein Kontakt
            </h1>
            <h2 className="font-light text-xl text-grey md:mt-3 pt-2 ">
              digitale & analoge Medienprodukte mit Sorgfalt konzeptioniert und
              entwickelt.
            </h2>
          </div>
          <div className="mt-16 lg:mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-lg overflow-hidden">
                <div className="md:mx-20  mt-0 ml-auto relative group md:w-4/5 w-full overflow-hidden aspect-square bg-greenLight rounded-xl hover:shadow-md transition duration-300 ease-in-out cursor-pointer hidden md:block">
                  <img
                    src="../assets/images/bremen.png"
                    alt="clara correa Profilbild"
                    className={`object-cover w-full h-auto aspect-square group-hover:scale-110 transition duration-300 ease-in-out`}
                  />
                </div>
              </div>
              <div className="">
                <Adresse></Adresse>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Kontakt;
