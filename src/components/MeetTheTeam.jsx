import GermaineImg from "../assets/germaine.jpg";
import LekanImg from "../assets/lekan.jpg";

export default function MeetTheTeam() {
  return (
    <section id="team" className="py-16 px-4 bg-gray-100">
      <div className="container mx-auto text-center max-w-5xl">
        
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Meet The Team</h2>

        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          Our team of experts is the driving force behind Gerto Technology Services Ltd. We bring together a diverse group of professionals with extensive experience in IT, software development, and the oil and gas industry.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {[
            {
              image: GermaineImg,
              name: "Germaine Okeke",
              role: "Managing Director / Chief Technology Officer",
              desc: "A visionary leader with years of experience in IT and energy sector innovation, driving digital transformation and strategic growth."
            },
            {
              image: LekanImg,
              name: "Lekan Oyegbile",
              role: "Director of Business Operations",
              desc: "A software development expert specializing in scalable solutions for the oil and gas industry, ensuring seamless operations and growth."
            }
          ].map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <img src={member.image} alt={member.name} className="w-40 h-40 mx-auto rounded-full object-cover mb-4 border-4 border-green-500" />
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-green-600 font-medium">{member.role}</p>
              <p className="text-gray-700 leading-relaxed mt-2">{member.desc}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
