import React from 'react';
import '../App.css';
import { services } from '../constants';
import Footer from './Footer';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full mt-2'>
    <div className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-4 mt-1 px-8 min-h-[220px] flex justify-evenly items-center flex-col hover:scale-105 transition-transform duration-300 service-card-small'
        style={{ background: 'linear-gradient(165deg, #003467, black)' }}
      >
        <img
          src={service.icon}
          alt={service.title}
          className='w-16 h-16 object-contain'  // Adjusted icon size
        />
        <h3 className='text-white text-[18px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);


const About = () => {
  return (
    <div className='min-h-screen flex flex-col bg-gradient-to-b from-gray-100 to-blue-100' id='about'>
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

      {/* Header Section */}
      <div className='text-center pt-12 mt-8'>
        <h2
          className='text-4xl sm:text-5xl font-extrabold'
          style={{ color: '#003467', fontWeight: '700', marginBottom: '1rem' }}
        >
          About Me
        </h2>
      </div>

      {/* Description Section */}
      <div className='text-center mx-auto max-w-4xl px-4'>
        <p className='text-lg leading-8 text-gray-700 mb-6'>
        <strong>🎓 I’m Gautam Nair, a Master’s graduate in Business Analytics from the University of Utah. I specialize in data engineeringand data analysis, combining strong technical skills with a deep understanding of business needs.</strong>
        </p>
        <p className='text-lg leading-8 text-gray-700 mb-6'>
        <strong>👨‍💻 With experience in tools like Python, SQL, Power BI, and Big Data platforms, I love building scalable data pipelines and delivering data-driven insights that solve real-world business challenges.
        </strong>

        </p>
        <p className='text-lg leading-8 text-gray-700'>
        <strong>🌍 Outside of work, I enjoy exploring the world as a traveler and sharpening my problem-solving skills as achess enthusiast.
        
        </strong></p>
      </div>

      {/* Services Section */}
      <div className='mt-8 flex justify-center flex-wrap gap-6'>
        {services.map((service) => (
          <ServiceCard service={service} key={service.title} />
        ))}
      </div>

      <div className='mt-20'>
          {/* Footer Section */}
      <Footer /></div>

    
    </div>
  );
};

export default About;
