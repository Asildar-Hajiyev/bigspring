import { FaCode } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { FaUserCheck } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoIosSpeedometer } from "react-icons/io";
import { FaCloud } from "react-icons/fa";
function Section2() {
  return (
    <>
      <main className=" bg-blue-100 ">
        <h2 className="text-center">Something You Need To Know</h2>
       <div className="container mx-auto flex items-center justify-around flex-wrap gap-4">
         <div className="border w-[300px] rounded-sm">
            <FaCode />
            <h3>Clean Code</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil</p>
        </div>
         <div className="border w-[300px]">
            <MdComputer />
            <h3>Clean Code</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil</p>
        </div>
         <div className="border w-[300px]">
            <FaUserCheck />
            <h3>Clean Code</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil</p>
        </div>
         <div className="border w-[300px]">
            <FaHeart />
            <h3>Clean Code</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil</p>
        </div>
         <div className="border w-[300px]">
            <IoIosSpeedometer />
            <h3>Clean Code</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil</p>
        </div>
         <div className="border w-[300px]">
            <FaCloud />
            <h3>Clean Code</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil</p>
        </div>
       </div>
      </main>
    </>
  );
}

export default Section2;
