import { HiBars4 } from "react-icons/hi2";
import Logo from './assets/logo.png'

function Header() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <a href="#">
            <img className="h-8 w-auto" src={Logo} alt="" />
          </a>

          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <li className="hover:text-[#00ABAA] transition-colors duration-200"><a href="#">Home</a></li>
            <li className="hover:text-[#00ABAA] transition-colors duration-200"><a href="#">Blog</a></li>
            <li className="hover:text-[#00ABAA] transition-colors duration-200"><a href="#">Pricing</a></li>
            <li className="hover:text-[#00ABAA] transition-colors duration-200"><a href="#">Contact</a></li>
            <li className="hover:text-[#00ABAA] transition-colors duration-200"><a href="#">FAQ</a></li>
          </ul>

          <button className="hidden md:inline-flex items-center px-5 py-2 rounded-full bg-[#00ABAA] text-white text-sm font-semibold transition-transform duration-300 hover:scale-105">
            Get Started
          </button>

          <HiBars4 className="md:hidden text-2xl text-gray-700 cursor-pointer hover:text-[#00ABAA] transition-colors duration-200" />
        </div>
      </header>
    </>
  )
}

export default Header