import About from "../assets/about.png";

export function AboutUS() {
  return (
    <div id="about" className="p-8 md:flex items-center lg:flex xl:flex justify-center">
      <div className="object-contain">
        <img alt="" src={About} />
      </div>
      <div className="text-center mt-10 sm:pl-0 w-auto md:text-left pl-6 lg:w-[700px] xl:w-[30%] ">
        <h1 className="text-black-700 font-bold text-[24px] sm:text-center lg:text-[54px] text-start xl:text-[54px]">
          About Us
        </h1>
        <p className="text-black-300 text-[16px] mt-4 sm:text-center lg:text-[20px] text-start xl:text-[20px] ">
          We generated names based on a multitude of factors and picked the one
          that resonated with us the most. Our founder first engaged with the
          blockchain in 2013
        </p>

        <div className="sm:mt-4 md:flex lg:flex mt-10 gap-10 xl:flex">
          <div className="flex gap-2 p-4 md:p-0 lg:p-0 flex-col xl:p-0">
            <p className="text-black-300 lg:text-[24px] xl:text-[24px]">
              Project Done
            </p>
            <strong className="text-orange-500 sm:text-center lg:text-[40px] text-start xl:text-[40px]">
              600+
            </strong>
          </div>

          <hr className="border-1 border-orange-600" />

          <div className="flex justify-center gap-2 p-4 md:p-0 lg:p-0 flex-col xl:p-0">
            <p className="text-black-300 lg:text-[24px] xl:text-[24px]">
              Happy Clients
            </p>
            <strong className="text-orange-500 sm:text-center lg:text-[40px] text-start xl:text-[40px]">
              950+
            </strong>
          </div>
          <hr className="border-1 border-orange-600" />
          <div className="flex justify-center gap-2 p-4 md:p-0 lg:p-0 flex-col xl:p-0">
            <p className="text-black-300 lg:text-[24px] xl:text-[24px]">
              Employee
            </p>
            <strong className="text-orange-500 sm:text-center lg:text-[40px] text-start xl:text-[40px]">
              30+
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
}
