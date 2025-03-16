import { CheckCircleIcon } from "lucide-react"; // Importing an icon for better UI

export default function WhyChooseUs() {
  return (
    <section id="why" className="py-16 px-4 bg-gray-100">
      <div className="container mx-auto text-center">
        
        <h2 className="text-4xl font-bold text-[#00008B] mb-6">Why Choose Us?</h2>
        
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
          We provide cutting-edge solutions tailored to the oil and gas industry, ensuring efficiency, cost-effectiveness, and innovation.
        </p>

        {/* Feature List */}
        <ul className="max-w-2xl mx-auto text-left space-y-4">
          {[
            "Industry-Specific Expertise: We understand the complexities of the oil and gas industry.",
            "Cost-Efficient Solutions: Our tools and services are designed to maximize ROI.",
            "Innovative Technology: We leverage the latest advancements in software and digital transformation.",
            "Client-Centric Approach: Your success is our priority.",
            "Explore how we can transform your business operations today.",
          ].map((text, index) => (
            <li key={index} className="flex items-start space-x-3 text-[#a9a9a9]">
              <CheckCircleIcon className="text-green-600 h-6 w-6 flex-shrink-0" />
              <span className="text-lg">{text}</span>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
