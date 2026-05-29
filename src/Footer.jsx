import logo from "./assets/logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
function Footer() {
  return (
    <footer className="bg-blue-100">
  <div className="container mx-auto px-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
      
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold text-xl">Company</h3>
        <a href="#" className="text-gray-500 hover:text-[#00ABAA]">Pricing</a>
        <a href="#" className="text-gray-500 hover:text-[#00ABAA]">Quick Start</a>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="font-semibold text-xl">Product</h3>
        <a href="#" className="text-gray-500 hover:text-[#00ABAA]">Features</a>
        <a href="#" className="text-gray-500 hover:text-[#00ABAA]">Platform</a>
        <a href="#" className="text-gray-500 hover:text-[#00ABAA]">Pricing</a>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="font-semibold text-xl">Support</h3>
        <a href="#" className="text-gray-500 hover:text-[#00ABAA]">FAQ</a>
        <a href="#" className="text-gray-500 hover:text-[#00ABAA]">Privacy Policy</a>
      </div>

      <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
        <img src={logo} alt="" className="w-32" />
        <p className="text-gray-500 text-sm">
          Lorem ipsum dolor sit amet, consectetur elit. Consjat tristique eget amet, tempus eu at cttur.
        </p>
        <ul className="flex items-center gap-3">
          <li className="border p-2 rounded-full border-[#00ABAA] duration-300 hover:scale-125 cursor-pointer hover:bg-[#00ABAA] group text-xl">
            <FaFacebook className="text-[#00ABAA] group-hover:text-white duration-300" />
          </li>
          <li className="border p-2 rounded-full border-[#00ABAA] duration-300 hover:scale-125 cursor-pointer hover:bg-[#00ABAA] group text-xl">
            <FaTwitter className="text-[#00ABAA] group-hover:text-white duration-300" />
          </li>
          <li className="border p-2 rounded-full border-[#00ABAA] duration-300 hover:scale-125 cursor-pointer hover:bg-[#00ABAA] group text-xl">
            <FaLinkedin className="text-[#00ABAA] group-hover:text-white duration-300" />
          </li>
          <li className="border p-2 rounded-full border-[#00ABAA] duration-300 hover:scale-125 cursor-pointer hover:bg-[#00ABAA] group text-xl">
            <FaSkype className="text-[#00ABAA] group-hover:text-white duration-300" />
          </li>
        </ul>
      </div>

    </div>

    <p className="flex flex-wrap items-center justify-center gap-1 border-t border-gray-300 py-4 text-sm text-gray-500 text-center">
      Designed and Developed By
      <a href="#" className="text-gray-400 font-semibold">Themefisher</a>
      • Distributed by
      <a href="#" className="text-gray-400 font-semibold">ThemeWagon</a>
    </p>
  </div>
</footer>
  );
}

export default Footer;
