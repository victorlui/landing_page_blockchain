export function Interests() {
  return (
    <div id="interests" className="p-8 flex flex-col gap-y-16 items-center">
      <div className="flex flex-col gap-5 items-center">
        <h1 className="text-[24px] font-bold text-black-700 text-center lg:text-[52px] xl:text-[54px]">
          Our Interests
        </h1>

        <p className="text-center text-black-300 lg:text-[20px] w-[50%] sm:w-auto">
          It's the norm these days to lay out a roadmap that gives stakeholders
          an indication of the direction that the project aspires to go.
          Inspired by Elon Musk’s 2006 masterplan, these are our skeleton
          ambitions.
        </p>
      </div>

      <div className="flex flex-col gap-8 md:flex-row lg:flex-row w-[100%] xl:flex-row justify-center">
        <div className="flex items-start gap-5 lg:flex-col xl:flex-col">
          <div className="p-3 bg-yellow-300 rounded-lg">
            <p>start</p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-black-700 text-[18px] lg:text-[28px] xl:text-[28px]">
              Blockchain product
            </h1>
            <p className="text-black-300 text-[14px] lg:text-[18px]">
              Create something novel that has never been done.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-5 lg:flex-col xl:flex-col">
          <div className="p-3 bg-yellow-300 rounded-lg">
            <p>start</p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-black-700 text-[18px] lg:text-[28px] xl:text-[28px]">
              Quality Product
            </h1>
            <p className="text-black-300 text-[14px] lg:text-[18px]">
              Create something novel that has never been done.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-5 lg:flex-col xl:flex-col">
          <div className="p-3 bg-yellow-300 rounded-lg">
            <p>start</p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-black-700 text-[18px] lg:text-[28px] xl:text-[28px]">
              Viable product
            </h1>
            <p className="text-black-300 text-[14px] lg:text-[18px]">
              Create something novel that has never been done.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
