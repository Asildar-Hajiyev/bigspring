import { FaCode } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { FaUserCheck } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoIosSpeedometer } from "react-icons/io";
import { FaCloud } from "react-icons/fa";
function Section2() {
  return (
    <>
      <main className=" bg-blue-100 flex items-center justify-center flex-col gap-2 py-10">
        <h2 className="text-center mt-6 mb-6 font-semibold text-2xl sm:text-3xl lg:text-4xl">Something You Need To Know</h2>
       <div className="container mx-auto grid grid-cols-1 grid-rows-6 sm:grid-cols-2 sm:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 gap-7 place-items-center">
         <div className="w-full min-w-[200px] max-w-[300px] rounded-xl p-5 flex flex-col gap-3 bg-white text-center">
            <FaCode className="text-[#00ABAA] text-3xl mx-auto" />
            <h3 className="text-xl font-bold">Clean Code</h3>
            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil</p>
        </div>
         <div className="w-full min-w-[200px] max-w-[300px] rounded-xl p-5 flex flex-col gap-3 bg-white text-center">
            <MdComputer className="text-[#00ABAA] text-3xl mx-auto"  />
            <h3 className="text-xl font-bold">Clean Code</h3>
            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil</p>
        </div>
         <div className="w-full min-w-[200px] max-w-[300px] rounded-xl p-5 flex flex-col gap-3 bg-white text-center">
            <FaUserCheck className="text-[#00ABAA] text-3xl mx-auto"  />
            <h3 className="text-xl font-bold">Clean Code</h3>
            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil</p>
        </div>
         <div className="w-full min-w-[200px] max-w-[300px] rounded-xl p-5 flex flex-col gap-3 bg-white text-center">
            <FaHeart className="text-[#00ABAA] text-3xl mx-auto"  />
            <h3 className="text-xl font-bold">Clean Code</h3>
            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil</p>
        </div>
         <div className="w-full min-w-[200px] max-w-[300px] rounded-xl p-5 flex flex-col gap-3 bg-white text-center">
            <IoIosSpeedometer className="text-[#00ABAA] text-3xl mx-auto" />
            <h3 className="text-xl font-bold">Clean Code</h3>
            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil</p>
        </div>
         <div className="w-full min-w-[200px] max-w-[300px] rounded-xl p-5 flex flex-col gap-3 bg-white text-center">
            <FaCloud className="text-[#00ABAA] text-3xl mx-auto" />
            <h3 className="text-xl font-bold">Clean Code</h3>
            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil</p>
        </div>
       </div>
      </main>
    </>
  );
}

export default Section2;
