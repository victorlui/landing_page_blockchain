import Values from "../assets/values.png";

export function OurValues() {
  return (
    <div id="value" className="p-8 md:flex lg:flex xl:flex justify-center">
      <div className="object-contain">
        <img alt="" src={Values} />
      </div>
      <div className="text-center sm:pl-0 w-auto md:text-left pl-6 lg:w-[700px] xl:w-[30%] sm:mt-10">
        <h1 className="text-black-700 font-bold text-[24px] sm:text-center lg:text-[54px] text-start xl:text-[54px]">
          Our Values
        </h1>
        <p className="text-black-300 text-[16px] mt-4 sm:text-center lg:text-[20px] text-start xl:text-[20px] ">
          anftw is a hallmark. The team members may change, but the quality of
          our project execution will not.An outstanding team can build a product
          in any industry. Don’t be intimidated by incumbents.
        </p>
      </div>
    </div>
  );
}
