import React from "react";
import My1 from "../Assets/My1.png";
import My2 from "../Assets/My2.png";
import { FaDownload } from "react-icons/fa";

function Homepage() {
  return (
    <div>
      <div className="bg-back w-full h-full">
        <nav className=" fixed w-full flex justify-between items-center px-8 py-4 bg-gray-900">
          <h1 className="text-white font-semibold text-2xl">JW</h1>
          <ul className="flex space-x-16 font-semibold text-xl font-poppins ">
            <li className="text-yell cursor-pointer">Home</li>
            <li className="text-white cursor-pointer hover:text-yell">About</li>
            <li className="text-white cursor-pointer hover:text-yell">
              Interests
            </li>
            <li className="text-white cursor-pointer hover:text-yell">
              Education
            </li>
            <li className="text-white cursor-pointer hover:text-yell">
              Projects
            </li>
            <li className="text-white cursor-pointer hover:text-yell">
              Contact
            </li>
          </ul>
        </nav>
        <br></br>
        <br></br>
        <br></br>
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
              <span className="text-yell text-8xl">
                JANITH <br></br>WIJETHUNGA
              </span>
            </h1>
            <p className=" font-bold text-3xl text-white">
              FullStack Developer
            </p>
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

        {/*About Me section*/}
        <div className="justify-center flex">
          {/*text*/}
          <div className="font-poppins flex flex-col justify-center w-2/5">
            {/*About Me heading*/}
            <div className="">
              <h1 className="text-white font-bold text-6xl">
                About Me
                <span className="text-white font-bold text-9xl opacity-15 absolute left-40">
                  About Me
                </span>
              </h1>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>

              <p className="text-white font-poppins font-bold text-lg">
                {" "}
                I am an undergraduate student pursuing a{" "}
                <span className="text-yell">
                  BSc (Hons) in Information Technology{" "}
                </span>
                at the sri lanka institute of information technology.
              </p>
              <br></br>
              <p className="text-white font-poppins font-bold text-lg">
                I am interested in{" "}
                <span className="text-yell">Fullstack Development </span>
                and <span className="text-yell">UX/UI Design </span>
                and enjoy learning new technologies to improve my skills. I work
                well in team environments and always aim to deliver high-quality
                work on time.
              </p>
              <br></br>
              <p className="text-white font-poppins font-bold text-lg">
                I see challenges as opportunities to grow and strive to
                contribute positively to any organization I am part of.
              </p>
              <br></br>
              <div className="">
                <a
                  href="public/janithwijethungaCV.pdf"
                  download
                  class="bg-yell hover:bg-yellow-500 text-black  hover:text-black font-bold py-2 px-4 rounded inline-flex items-center"
                >
                  <FaDownload />
                  <span className="ml-2 text-lg">Download CV</span>
                </a>
              </div>

              <div className="mt-8"></div>

              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </div>
          </div>

          {/*My2*/}
          <div className="size-4/12 ml-16">
            <img src={My2} alt="Janith Wijethunga" />
          </div>
        </div>

        {/*My skills section*/}
        <div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

          {/*skills*/}
          <div className="flex justify-center items-center border-2 w-full">
            <h1 className="text-white font-bold text-6xl transform -rotate-90 h-96 border-2 w-full">
                My Skills
                <span className="text-white font-bold text-9xl opacity-15 absolute left-5 w-full">
                  My Skills
                </span>
              </h1>
              
            
          

          {/*icons*/}
          <div>
            iconswwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
            <br></br>
          </div>
        </div>

        <br></br>
      </div>
      </div>
    </div>
  );
}

export default Homepage;
