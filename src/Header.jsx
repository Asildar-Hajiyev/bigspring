import { HiBars4 } from "react-icons/hi2";
function Header() {

  return (
    <>
    <header className="container mx-auto flex items-center justify-around p-3 ">
        <a href="#" className="text-2xl">Logo Template</a>
      
         <ul className="hidden md:flex items-center justify-between gap-4  ">
            <li className="hover:text-blue-500"><a href="#">Home</a></li>
            <li className="hover:text-blue-500"><a href="#">Blog</a></li>
            <li className="hover:text-blue-500"><a href="#">Pricing</a></li>
            <li className="hover:text-blue-500"><a href="#">Contact</a></li>
            <li className="hover:text-blue-500"><a href="#">FAQ</a></li>
        </ul>
        <button className="hidden md:flex px-2 py-1 rounded-2xl bg-blue-500 text-white hover:px-3 hover:py-1.5">
            Get Started
        </button>
      
        <HiBars4 className="md:hidden text-2xl"/>
    </header>
      
    </>
  )
}

export default Header
