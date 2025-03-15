import { LightbulbIcon, ShieldCheckIcon, StarIcon, UsersIcon } from "lucide-react"; // Import icons

export default function OurValues() {
  return (
    <section id="team" className="py-16 px-4 bg-gray-100">
      <div className="container mx-auto text-center max-w-3xl">
        
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Core Values</h2>

        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          At Gerto Technology Services Ltd., our core values drive everything we do. We are committed to delivering excellence through innovation, integrity, and collaboration.
        </p>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          
          {/* Value Item */}
          {[
            { icon: <LightbulbIcon className="text-green-600 h-8 w-8" />, title: "Innovation", desc: "We embrace cutting-edge technology to solve complex problems." },
            { icon: <ShieldCheckIcon className="text-blue-600 h-8 w-8" />, title: "Integrity", desc: "We build trust through transparency and ethical practices." },
            { icon: <StarIcon className="text-yellow-500 h-8 w-8" />, title: "Excellence", desc: "We strive for quality in everything we do." },
            { icon: <UsersIcon className="text-purple-600 h-8 w-8" />, title: "Collaboration", desc: "We work closely with our clients to deliver tailored solutions." }
          ].map((value, index) => (
            <div key={index} className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-md">
              {value.icon}
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{value.title}</h3>
                <p className="text-gray-700">{value.desc}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
