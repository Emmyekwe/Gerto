import React from "react";
import Partner1 from "../assets/lekan.jpg";
import Partner2 from "../assets/germaine.jpg";

const Partners = () => {
  const partners = [Partner1];

  return (
    <section id="partners" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Our Partners</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          We collaborate with leading organizations to drive innovation and deliver top-tier solutions in the oil and gas industry.
        </p>
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
          {partners.map((logo, index) => (
            <div key={index} className="flex justify-center">
              <img 
                src={logo} 
                alt={`Partner ${index + 1}`} 
                className="h-20 md:h-24 object-contain transition-transform transform hover:scale-105"
              />
            </div>
          ))}
        </div> */}
        <div className="grid  items-center justify-center">
          {partners.map((logo, index) => (
            <div key={index} className="flex justify-center">
              <img 
                src={logo} 
                alt={`Partner ${index + 1}`} 
                className="h-20 md:h-24 object-contain transition-transform transform hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
