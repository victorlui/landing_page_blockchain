import Img1 from "../assets/1.png";
import Img2 from "../assets/2.png";
import Img3 from "../assets/3.png";

export function Projects() {
  return (
    <div id="projects" className="p-8 flex flex-col items-center gap-8 ">
      <h1 className="text-bold text-black-700 font-bold text-[24px] lg:text-[54px] xl:text-[54px]">Current Projects</h1>
      
      <div className="flex sm:flex-col gap-8 md:flex-row justify-evenly lg:flex-row xl:justify-center flex-row">
      <div className="flex flex-col gap-3 items-center xl:items-start w-[380px] sm:w-auto md:w-[200px]">
        <div className="object-contain">
          <img src={Img1} alt="" />
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-bold text-black-700 text-[24px] lg:text-[28px] xl:text-[28px]">
            Certified Great Expectations Lover
          </h1>
          <p className="text-bold text-black-300 text-[12px] lg:text-[20px] xl:text-[20px]">
            Certified Great Expectations Lover - To add value to An outstanding
            team can build a product in any industry
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3 items-center xl:items-start w-[380px] sm:w-auto md:w-[200px]">
        <div className="object-contain">
          <img src={Img2} alt="" />
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-bold text-black-700 text-[24px] lg:text-[28px] xl:text-[28px]">
            Certified Great Expectations Lover
          </h1>
          <p className="text-bold text-black-300 text-[12px] lg:text-[20px] xl:text-[20px]">
            Certified Great Expectations Lover - To add value to An outstanding
            team can build a product in any industry
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3 items-center xl:items-start w-[380px] sm:w-auto md:w-[200px]">
        <div className="object-contain">
          <img src={Img3} alt="" />
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-bold text-black-700 text-[24px] lg:text-[28px] xl:text-[28px]">
            Certified Great Expectations Lover
          </h1>
          <p className="text-bold text-black-300 text-[12px] lg:text-[20px] xl:text-[20px]">
            Certified Great Expectations Lover - To add value to An outstanding
            team can build a product in any industry
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}
