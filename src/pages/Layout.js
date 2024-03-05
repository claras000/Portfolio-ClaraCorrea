import { Outlet, Link } from "react-router-dom";
import React, { useState } from "react";
import { useEffect } from "react";

function Layout() {
  const [isVisible, setVisible] = useState(false);

  const visibility = () => {
    setVisible(!isVisible);
  };

  // Add an effect to set overflow:hidden on the body when isVisible is true
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isVisible]);

  return (
    <>
      <div className="bg-lightgrey ">
        <div className="font-dmSans flex justify-between  w-full fixed z-10">
          {!isVisible && (
            <a
              href={`/Portfolio-ClaraCorrea/`}
              component="0"
              className="cursor-pointer"
            >
              <p className="m-5 font-extralight text-grey cursor-pointer ">
                Portfolio 2024
              </p>
            </a>
          )}
          {!isVisible && (
            <p className="m-5  font-extralight text-grey hidden md:block">
              Clara Osterburg Correa
            </p>
          )}
          {!isVisible && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.7"
              stroke="currentcolor"
              className="w-14 h-14 cursor-pointer m-4 text-green hover:text-grey"
              onClick={() => {
                visibility();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          )}
        </div>
        {isVisible && (
          <div className="left-2/3 md:top-1/3 h-screen max-w-screen-lg md:pt-14 absolute z-0 hidden md:block">
            <img
              src="../assets/images/maus.png"
              alt="Illustration-Computerzubehör"
            ></img>
          </div>
        )}
      </div>

      {isVisible && (
        <nav className="font-dmSans ">
          <div id="menu" className="h-screen bg-grey text-greenLight ">
            <div className="flex justify-end ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.7"
                stroke="currentcolor"
                className="w-14 h-14 cursor-pointer m-4 text-greenLight hover:text-white"
                onClick={visibility}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                />
              </svg>
            </div>
            <div className="md:grid md:grid-cols-2  justify-between m-auto md:h-4/5 h-full ">
              <div className="  text-green p-5 md:m-10 md:ml-40 md:pt-0 pt-20 md:pb-0 md:mb-0 text-7xl font-semibold flex flex-col justify-between m-auto md:text-left text-center">
                <ul className=" ">
                  <li className="">
                    <Link
                      to="/Portfolio-ClaraCorrea/"
                      onClick={visibility}
                      className="hover:text-white duration-300 cursor-pointer"
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li className="md:pt-10">
                    <Link
                      to="/Portfolio-ClaraCorrea/ÜberMich"
                      onClick={visibility}
                      className="hover:text-white duration-300 cursor-pointer"
                    >
                      Über Mich
                    </Link>
                  </li>
                  <li className="md:pt-10">
                    <Link
                      to="/Portfolio-ClaraCorrea/Kontakt"
                      onClick={visibility}
                      className="hover:text-white duration-300 cursor-pointer"
                    >
                      Kontakt
                    </Link>
                  </li>
                </ul>
                <div className="md:flex pt-10 font-thin text-sm uppercase md:text-white">
                  <a
                    className="hover:cursor-pointer  md:hover:text-green"
                    href="/Portfolio-ClaraCorrea/Agb"
                  >
                    AGB
                  </a>

                  <a
                    className="hover:cursor-pointer pl-4  md:hover:text-green"
                    href="/Portfolio-ClaraCorrea/Impressum"
                  >
                    Impressum
                  </a>
                </div>
              </div>
              <div className=""></div>
            </div>
          </div>
        </nav>
      )}
      <Outlet />
    </>
  );
}

export default Layout;
