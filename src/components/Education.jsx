import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { education } from '../constants'; // Import education data
import Footer from './Footer';

const Education = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-100 to-blue-100" id="education">
      {/* Animated Background */}
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>

      <div className="flex-grow">
        {/* Section Header */}
        <div className="text-center pt-7">
          <h2
            className="text-4xl sm:text-5xl font-extrabold mt-10"
            style={{
              textAlign: 'center',
              fontSize: '2.5em',
              fontWeight: '500',
              marginBottom: '-0.5em',
              color: '#003467',
            }}
          >
            Education
          </h2>
        </div>

        {/* Vertical Timeline */}
        <VerticalTimeline className="mt-6">
  {education.map((edu, index) => (
    <VerticalTimelineElement
      key={index}
      contentStyle={{
        background: "linear-gradient(135deg, #003467, black)", // Card background gradient
        color: "#ffffff",
        borderRadius: "15px",
        padding: "30px",
        margin:"12px"
        
      }}
      contentArrowStyle={{ borderRight: "7px solidrgb(213, 223, 233)" }} // Arrow styling
      date={
        <span className="font-bold text-lg text-white" style={{ color: '#670000' }}>
          {edu.duration}
        </span>
      } // Styled date

      iconStyle={{
        background: "", // Circle color
        color: "#ffffff",
      }}
      icon={
        <div className="flex items-center justify-center w-15 h-16 bg-white rounded-full ">
          <img
            src={edu.logo}
            alt={edu.institution}
            className="w-12 h-12"
          />
        </div>
      }
    >
      <h3 className="text-white text-[20px] font-bold">{edu.degree}</h3>
      <p className="text-gray-300 font-semibold mb-3">{edu.institution}</p>
      <ul className="list-disc mt-2 ml-5 space-y-2">
        {edu.points.map((point, i) => (
          <li
            key={i}
            className="text-gray-300 text-sm hover:text-gray-100 transition duration-300"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  ))}
</VerticalTimeline>

      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Education;
