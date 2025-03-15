import { CloudIcon, CodeIcon, DatabaseIcon, LifeBuoyIcon, WandSparklesIcon } from "lucide-react";

export default function OurServices() {
  return (
    <section id="services" className="py-16 px-4 bg-gray-100">
      <div className="container mx-auto text-center max-w-5xl">
        
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Services</h2>

        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          At Gerto Technology Services Ltd., we provide innovative IT solutions tailored to the oil and gas industry, ensuring efficiency, security, and digital transformation.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          
          {/* Service Cards */}
          {[
            {
              icon: <WandSparklesIcon className="text-green-600 h-10 w-10" />,
              title: "Digital Transformation Consulting",
              desc: "Streamline your operations with customized digital strategies and advanced technologies to enhance efficiency and reduce costs."
            },
            {
              icon: <CodeIcon className="text-blue-600 h-10 w-10" />,
              title: "Bespoke Software Development",
              desc: "Develop scalable and secure software solutions for project management, data analysis, and operational efficiency."
            },
            {
              icon: <DatabaseIcon className="text-yellow-500 h-10 w-10" />,
              title: "Web Development & Database Management",
              desc: "Design user-centric web solutions and leverage data analytics for informed decision-making and predictive analysis."
            },
            {
              icon: <CloudIcon className="text-purple-600 h-10 w-10" />,
              title: "Cloud Solutions",
              desc: "Migrate to secure and scalable cloud platforms to improve collaboration, data accessibility, and overall efficiency."
            },
            {
              icon: <LifeBuoyIcon className="text-red-500 h-10 w-10" />,
              title: "IT Support and Maintenance",
              desc: "24/7 technical support and proactive maintenance to minimize downtime and ensure seamless operations."
            }
          ].map((service, index) => (
            <div key={index} className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-md">
              {service.icon}
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
