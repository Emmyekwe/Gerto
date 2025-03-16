import React from 'react';
import HeroImg from '../assets/GERTTT.jpg';

const Hero = () => {
  return (
    <section
        id="home"
      className="min-h-screen flex items-center justify-center text-white text-center px-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
      <div className="p-8 rounded-lg max-w-3xl">
        <h1 className="text-5xl  font-bold mb-4">Welcome to Gerto Technology Services Ltd.</h1>
        <p className="text-lg">
          At Gerto Technology Services Ltd., we empower the oil and gas industry with cutting-edge 
          digital solutions and software packages designed to streamline operations, reduce costs, 
          and enhance productivity. Founded in 2022, we are committed to delivering innovative, 
          cost-efficient, and reliable IT solutions tailored to the unique challenges of the energy sector.
        </p>
      </div>
    </section>
  );
};

export default Hero;
