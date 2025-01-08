import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Footer from './Footer';
import uofuLogo from '../assets/U.png'; // Local University of Utah logo
import puneLogo from '../assets/U1.jpg'; // Local Pune University logo

const Education = () => {
    const education = [
        {
            institution: "University of Utah",
            degree: "Master of Science in Business Analytics",
            duration: "August 2023 - December 2024",
            logo: uofuLogo,
            description: [
                "Focused on data engineering, machine learning, and business analytics to drive data-driven decision-making processes.",
                "🏆 Won the Capstone Project sponsored by Swire Coca-Cola for developing a Predictive Maintenance framework.",
            ],
        },
        {
            institution: "Pune University",
            degree: "Bachelor of Engineering in Computer Engineering",
            duration: "August 2016 - May 2020",
            logo: puneLogo,
            description: [
                "Learned core computer science concepts, including programming, data structures, and database systems.",
                "🎖️ Finalist of Computer Society of India-InApp 2020 National Level Project Competition, September 2020.",
            ],
        },
    ];

    return (
        <div className='min-h-screen flex flex-col bg-gradient-to-b from-gray-100 to-blue-100' id='education'>
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

            <div className='flex-grow'>
                {/* Section Header */}
                <div className='text-center pt-12'>
                    <h2
                        className='text-4xl sm:text-5xl font-extrabold mt-4'
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
                <VerticalTimeline className='mt-9'>
                    {education.map((edu, index) => (
                        <VerticalTimelineElement
                            key={index}
                            contentStyle={{
                                background: "linear-gradient(135deg, #003467, black)", // Card background color
                                color: "#670000",
                                borderRadius: "15px",
                                padding: "20px",
                            }}
                            
                            contentArrowStyle={{ borderRight: "7px solid #003467" }} // Arrow styling
                            date={
                                <span className="font-bold text-lg text-white" style={{ color: '#670000' }}>
                                  {edu.duration}
                                </span>
                              } // Styled dat
                            iconStyle={{
                                background: "#003467", // Circle color
                                color: "#670000",
                            }}
                            icon={
                                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full overflow-hidden">
                                    <img
                                        src={edu.logo}
                                        alt={edu.institution}
                                        className="w-12 h-12 object-contain"
                                    />
                                </div>
                            }
                        >
                            <h3 className="text-white text-[20px] font-bold">{edu.degree}</h3>
                            <p className="text-gray-300 font-semibold mb-3">{edu.institution}</p>
                            <ul className="list-disc mt-2 ml-5 space-y-2">
                                {edu.description.map((point, i) => (
                                    <li key={i} className="text-gray-300 text-sm hover:text-gray-100 transition duration-300">
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
