import Logo from "../assets/iconn.jpg";

export default function Navbar() {
  return (
    <nav className="bg-[#62BC5A] text-white p-4 shadow-md fixed w-full z-10 top-0">
      <div className="container mx-auto flex justify-between items-center">
        
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Company Logo" className="h-10 w-auto" />
        </div>

        <ul className="flex space-x-4">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About Us</a></li>
            <li><a href="#why" className="hover:underline">Services</a></li>
            <li><a href="#products" className="hover:underline">Products</a></li>
          <li><a href="#team" className="hover:underline">Meet the Team</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>

      </div>
    </nav>
  );
}
