import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../constants';
import Footer from './Footer';

const Experience = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-100 to-blue-100" id="experience">
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
        <div className="text-center pt-12">
          <h2
            className="text-4xl sm:text-5xl font-extrabold mt-6"
            style={{
              textAlign: 'center',
              fontSize: '2.5em',
              fontWeight: '500',
              marginBottom: '-0.5em',
              color: '#003467',
            }}
          >
            Work Experience
          </h2>
        </div>

        {/* Vertical Timeline */}
        <VerticalTimeline className="mt-9">
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{
                background: "linear-gradient(135deg, #003467, black)", // Card background gradient
                color: "#ffffff",
                borderRadius: "15px",
                padding: "20px",
              }}
              contentArrowStyle={{ borderRight: "7px solid #003467" }} // Arrow styling
              date={
                <span className="font-bold text-lg text-white" style={{ color: '#670000' }}>
                  {experience.duration}
                </span>
              } // Styled date

            

              iconStyle={{
                background: "", // Circle color
                color: "#ffffff",
              }}
              icon={
                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full">
                  <img
                    src={experience.logo}
                    alt={experience.company}
                    className="w-12 h-12 object-contain"
                  />
                </div>
              }
            >
              <h3 className="text-white text-[20px] font-bold">{experience.role}</h3>
              <p className="text-gray-300 font-semibold mb-3">{experience.company}</p>
              <ul className="list-disc mt-2 ml-5 space-y-2">
                {experience.points.map((point, i) => (
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

export default Experience;
