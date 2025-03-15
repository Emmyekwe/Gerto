import { PackageIcon, SettingsIcon } from "lucide-react";

export default function OurProducts() {
  return (
    <section id="products" className="py-16 px-4 bg-gray-100">
      <div className="container mx-auto text-center max-w-5xl">
        
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Products</h2>

        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          We develop and deliver cutting-edge software solutions specifically designed for the oil and gas industry, ensuring efficiency, reliability, and seamless asset management.
        </p>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          
          {/* Product Cards */}
          {[
            {
              icon: <PackageIcon className="text-green-600 h-10 w-10" />,
              title: "AssetPro",
              desc: "A powerful asset management software that enables predictive maintenance, reducing downtime and extending equipment lifespan."
            },
            {
              icon: <SettingsIcon className="text-blue-600 h-10 w-10" />,
              title: "OperationsSuite",
              desc: "An all-in-one digital solution designed to streamline operational workflows and optimize resource management in the oil and gas sector."
            }
          ].map((product, index) => (
            <div key={index} className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-md">
              {product.icon}
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{product.title}</h3>
                <p className="text-gray-700 leading-relaxed">{product.desc}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
