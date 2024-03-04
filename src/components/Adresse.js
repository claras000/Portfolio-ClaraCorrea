const Adresse = () => {
  return (
    <div className="text-grey pl-3 pt-5 md:float-left md:mr-24 ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1"
        stroke="currentColor"
        className="w-12 h-12"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
        />
      </svg>

      <h3 className="pt-2 uppercase font-semibold">Clara Osterburg Correa</h3>
      <p className="pt-1 font-extralight ">Digital Media in Computer Science</p>
      <p className="font-extralight ">BA Integriertes Design</p>

      <div className="flex pt-10 md:pt-20 group">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#3A3B3C"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stroke-2  group-hover:cursor-pointer"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
        <a
          className="pl-2 group-hover:underline group-hover:cursor-pointer"
          href="chttps://www.uni-bremen.de/"
        >
          Universität Bremen
        </a>
      </div>
      <div className="flex pt-1 md:pt-2 group">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#3A3B3C"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stroke-2  group-hover:cursor-pointer"
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
      <div className="flex pt-6">
        <a href="https://github.com/claras000">
          <button
            type="button"
            className="inline-block rounded-full border-2  border-grey  hover:text-green hover:border-green  px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-grey transition duration-150 ease-in-out  "
            data-te-ripple-init
          >
            Github
          </button>
        </a>
        <a href="https://www.instagram.com/clarament_e/">
          <button
            type="button"
            className="ml-4 inline-block rounded-full border-2 border-grey   hover:text-green hover:border-green px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-grey transition duration-150 ease-in-out "
            data-te-ripple-init
          >
            Instagramm
          </button>
        </a>
      </div>
    </div>
  );
};

export default Adresse;
