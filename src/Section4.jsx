import slide1 from "./assets/service-slide-1.png";
import { FaArrowRightLong } from "react-icons/fa6";

function Section4() {
  return (
    <section className="bg-blue-100 p-2 pt-10 ">
      <div className="container mx-auto flex items-center justify-between my-4">
        <img className="w-[40%]" src={slide1} alt="" />
        <div className="w-full lg:w-[50%] flex flex-col gap-4">
          <h2 className="font-semibold text-2xl sm:text-3xl">
            It is a privately owned Information and cyber security company
          </h2>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
            tristique eget amet, tempus eu at consecttur. Leo facilisi nunc
            viverra tellus. Ac laoreet sit vel consquat. consectetur adipiscing
            elit. Consequat tristique eget amet, tempus eu at consecttur. Leo
            facilisi nunc viverra tellus. Ac laoreet sit vel consquat.
          </p>
          <a href="#" className="flex items-center gap-1 text-[#00ABAA]">
            Check it out <FaArrowRightLong />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Section4;
