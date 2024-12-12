import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import pcc from "../Assets/pcc.png";
import pcclogo from "../Assets/pcclogo.png";
import sliit from "../Assets/sliit.png";
import sliitlogo from "../Assets/sliitlogo.png";

function Education() {
  return (
    <div id="Educations" className="bg-gray-900 text-white py-20 font-poppins">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="text-center mb-12 relative">
          {/* Large "Education" text */}
          <span className="absolute inset-0 text-whitw opacity-10 text-7xl md:text-9xl z-0">
            Education
          </span>

          {/* Foreground "Education" text */}
          <h1 className=" text-white relative text-2xl md:text-7xl font-bold z-10">
            Education
          </h1>
          <br></br>
          <br></br>
        </div>

        <VerticalTimeline>
          {/* SLIIT Timeline */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{
              background: "rgb(28, 38, 58)",
              color: "#fff",
              borderRadius: "12px",
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.4)",
            }}
            contentArrowStyle={{ borderRight: "7px solid rgb(28, 38, 58)" }}
            date="2022 June - Present"
            iconStyle={{
              background: "#ffffff",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              boxShadow: "0px 0px 8px rgba(33, 150, 243, 0.8)",
            }}
            icon={
              <img
                src={sliitlogo}
                alt="SLIIT Logo"
                style={{
                  height: "40px",
                  width: "40px",
                  objectFit: "contain",
                }}
              />
            }
          >
            <h3 className="vertical-timeline-element-title text-2xl font-bold">
              Sri Lanka Institute of Information Technology (SLIIT)
            </h3>
            <img
              src={sliit}
              alt="SLIIT Campus"
              className="rounded-lg shadow-lg my-4 w-full"
            />
            <p className="font-medium text-lg">
              BSc (Hons) in Information Technology (Specializing in IT)
            </p>
            <ul className="list-disc list-inside text-sm mt-3">
              <li>
                Subcommittee Member of the SLIIT Media Club, involved in
                photography and editing for events.
              </li>
            </ul>
          </VerticalTimelineElement>

          {/* Poramadulla Central College Timeline */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{
              background: "rgb(28, 38, 58)",
              color: "#fff",
              borderRadius: "12px",
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.4)",
            }}
            contentArrowStyle={{ borderRight: "7px solid rgb(45, 20, 50)" }}
            date="2011 June - 2022"
            iconStyle={{
              background: "rgb(255,255,255)",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              boxShadow: "0px 0px 8px rgba(233, 30, 99, 0.8)",
            }}
            icon={
              <img
                src={pcclogo}
                alt="PCC Logo"
                style={{
                  height: "40px",
                  width: "40px",
                  objectFit: "contain",
                }}
              />
            }
          >
            <h3 className="vertical-timeline-element-title text-2xl font-bold">
              Poramadulla Central College
            </h3>
            <img
              src={pcc}
              alt="Poramadulla Central College"
              className="rounded-lg shadow-lg my-4 w-full"
            />
            <p className="font-medium text-lg">
              G.C.E Advanced Level Examination (Physical Science Stream)
            </p>
            <ul className="list-disc list-inside text-sm mt-3">
              <li>
                G.C.E Advanced Level completed in 2021 (Physical Science Stream)
              </li>
              <li>G.C.E Ordinary Level completed in 2016</li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Education;
