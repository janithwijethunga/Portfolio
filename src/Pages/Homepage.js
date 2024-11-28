import React from "react";
import My1 from "../Assets/My1.png";

function Homepage() {
  return (
    <div>
      <div className="bg-back w-full h-full">
        <nav className="w-full flex justify-between items-center px-8 py-4 ">
          <h1 className="text-white font-semibold text-2xl">JW</h1>
          <ul className="flex space-x-16 font-semibold text-xl font-poppins">
            <li className="text-white">Home</li>
            <li className="text-white">About</li>
            <li className="text-white">Interests</li>
            <li className="text-white">Education</li>
            <li className="text-white">Projects</li>
            <li className="text-white">Contact</li>
          </ul>
        </nav>
        <br></br>
        <br></br>
        {/*Home*/}
        <div className="justify-center flex">
          {/*My1*/}
          <div className="size-4/12">
            <img src={My1} alt="Janith Wijethunga" />
          </div>

          {/*text*/}
          <div className="font-poppins flex flex-col justify-center text-left ml-32">
            <h1 className="text-white text-3xl font-bold">Hello!</h1>
            <h1 className="text-white text-7xl font-bold">
              I'M{" "}
              <span className="text-yell text-8xl">JANITH <br></br>WIJETHUNGA</span>
            </h1>
            <p className=" font-bold text-3xl text-white">FullStack Developer</p>
            <p className="font-bold text-white text-3xl">UI/UX</p>
          </div>
        </div>

        

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <h1>About</h1>

        <div className="bg-gray-900 text-white w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-8 md:px-16">
      {/* Left Section: Text Content */}
      <div className="md:w-1/2 text-center md:text-left">
        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold relative">
          About Me
          <span className="absolute text-gray-700 opacity-20 top-2 left-0 w-full md:w-auto text-7xl md:text-9xl">
            About
          </span>
        </h1>
        <div className="mt-8 space-y-4">
          <p className="text-lg">
            I am an undergraduate student pursuing a{" "}
            <span className="text-yellow-400 font-semibold">
              BSc (Hons) in Information Technology
            </span>{" "}
            at the Sri Lanka Institute of Information Technology.
          </p>
          <p className="text-lg">
            I am interested in{" "}
            <span className="text-yellow-400 font-semibold">
              Fullstack Development
            </span>{" "}
            and{" "}
            <span className="text-yellow-400 font-semibold">UX/UI Design</span>{" "}
            and enjoy learning new technologies to improve my skills. I work
            well in team environments and always aim to deliver high-quality
            work on time.
          </p>
          <p className="text-lg">
            I see challenges as opportunities to grow and strive to contribute
            positively to any organization I am part of.
          </p>
        </div>
        {/* Download Button */}
        <div className="mt-8">
          <button className="bg-yellow-400 text-black px-6 py-3 font-semibold rounded-lg shadow-lg flex items-center gap-2 hover:bg-yellow-500 transition duration-300">
            Download CV
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16v4h16v-4M4 16l8 8m0 0l8-8m-8 8V4"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Right Section: Profile Image */}
      <div className="md:w-1/2 flex justify-center mt-12 md:mt-0">
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-yellow-400 flex items-center justify-center shadow-lg">
          <img
            src=""
            alt="Profile"
            className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover"
          />
        </div>
      </div>
    </div>


      </div>
    </div>
  );
}

export default Homepage;
