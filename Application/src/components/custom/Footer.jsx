import React from "react";
import { FaFacebook,FaInstagram,FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative bg-gray-50 flex-col ">
      {/* Footer Background */}
      <div
        className="absolute bottom-0 w-full h-[266px] bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage:
            'url("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEigB8iI5tb8WSVBuVUGc9UjjB8O0708X7Fdic_4O1LT4CmLHoiwhanLXiRhe82yw0R7LgACQ2IhZaTY0hhmGi0gYp_Ynb49CVzfmXtYHUVKgXXpWvJ_oYT8cB4vzsnJLe3iCwuzj-w6PeYq_JaHmy_CoGoa6nw0FBo-2xLdOPvsLTh_fmYH2xhkaZ-OGQ/s16000/footer_bg.png")',
        }}
      >
        {/* Animated Elements */}
        <div
          className="absolute bottom-0 w-80 h-28 bg-center bg-no-repeat animate-slide-left overflow-hidden"
          style={{
            backgroundImage:
              'url("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEia0PYPxwT5ifToyP3SNZeQWfJEWrUENYA5IXM6sN5vLwAKvaJS1pQVu8mOFFUa_ET4JuHNTFAxKURFerJYHDUWXLXl1vDofYXuij45JZelYOjEFoCOn7E6Vxu0fwV7ACPzArcno1rYuVxGB7JY6G7__e4_KZW4lTYIaHSLVaVLzklZBLZnQw047oq5-Q/s16000/volks.gif")',
            left: "30%",
            backgroundSize: "100%",
          }}
        ></div>
        <div
          className="absolute bottom-0 w-20 h-24 bg-center bg-no-repeat animate-slide-right overflow-hidden"
          style={{
            backgroundImage:
              'url("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhyLGwEUVwPK6Vi8xXMymsc-ZXVwLWyXhogZxbcXQYSY55REw_0D4VTQnsVzCrL7nsyjd0P7RVOI5NKJbQ75koZIalD8mqbMquP20fL3DxsWngKkOLOzoOf9sMuxlbyfkIBTsDw5WFUj-YJiI50yzgVjF8cZPHhEjkOP_PRTQXDHEq8AyWpBiJdN9SfQA/s16000/cyclist.gif")',
            left: "38%",
            backgroundSize: "100%",
          }}
        ></div>
      </div>

      <div className="pb-32 pt-5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Get in Touch */}
            <div>
              <h1 className="font-logo text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-4 leading-tight drop-shadow-xl">
                Travia
              </h1>
              <p className="text-slate-700 font-semibold mb-4 text-sm sm:text-base">
                Discover Your Dream Journey
              </p>
            </div>

            <div className='flex justify-between'>
              {/* Useful Links */}
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-4">
                  Useful Links
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="/"
                      className="text-slate-600 hover:text-purple-600 text-sm sm:text-base"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#how-it-works"
                      className="text-slate-600 hover:text-purple-600 text-sm sm:text-base"
                    >
                      How to use?
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#features"
                      className="text-slate-600 hover:text-purple-600 text-sm sm:text-base"
                    >
                      Features
                    </a>
                  </li>
                </ul>
              </div>

              {/* Help */}
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-700 mb-4">
                  Help
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-slate-600 hover:text-purple-600 text-sm sm:text-base"
                    >
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-slate-600 hover:text-purple-600 text-sm sm:text-base"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-slate-600 hover:text-purple-600 text-sm sm:text-base"
                    >
                      Support Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Team Solutions */}
            <div className="lg:ml-24">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
                Team Solutions
              </h3>
              <div className="flex space-x-4">
                <a
                  href="www.facebook.com"
                  className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center text-purple-600 bg-gray-200 rounded-full hover:bg-purple-600 hover:text-white"
                >
                  <FaFacebook />
                </a>
                <a
                  href="www.instagram.com"
                  className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center text-purple-600 bg-gray-200 rounded-full hover:bg-purple-600 hover:text-white"
                >
                  <FaInstagram />
                </a>
                <a
                  href="www.linkedin.com"
                  className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center text-purple-600 bg-gray-200 rounded-full hover:bg-purple-600 hover:text-white"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="www.twitter.com"
                  className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center text-purple-600 bg-gray-200 rounded-full hover:bg-purple-600 hover:text-white"
                >
                  <FaXTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>

        
      </div>
      <div className="pb-10">
          <p className="text-lg sm:text-lg md:text-lg lg:text-xl text-gray-500 px-4 text-center">
            Crafted by{" "}
            <span className="font-creator text-purple-600 text-2xl sm:text-2xl md:text-2xl lg:text-3xl">
              Mythrayan
            </span>
          </p>
      </div>
    </footer>
  );
};

export default Footer;
