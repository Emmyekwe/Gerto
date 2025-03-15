export default function AboutUs() {
    return (
      <section id="about" className="py-16 px-4 bg-gray-100">
        <div className="container mx-auto text-center max-w-4xl">
          
          <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            <strong>Gerto Technology Services Ltd.</strong> (RC1965215) is a forward-thinking IT solutions company founded in 2022 with a vision to revolutionize the oil and gas sector through technology. Our mission is to provide tailored digital solutions that address the unique challenges of the industry, enabling businesses to operate more efficiently and sustainably.
          </p>
  
          {/* Slogan */}
          <div className="bg-white p-4 rounded-lg shadow-md inline-block">
            <h3 className="text-2xl font-semibold text-[#62BC5A]">“Transforming The Energy Sector Through Technology.”</h3>
          </div>
  
          {/* Vision & Mission Section */}
          <div className="mt-10 text-left space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Our Vision</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To become the premier provider of digital solutions and software packages for the oil and gas sector, driving innovation and operational excellence.
              </p>
            </div>
  
            <hr className="border-gray-300 my-4" />
  
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Our Mission</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To deliver cost-efficient, scalable, and reliable IT solutions that empower our clients to achieve their business goals and stay ahead in a competitive market.
              </p>
            </div>
          </div>
  
        </div>
      </section>
    );
  }
  