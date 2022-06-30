import Group from "../assets/group.png";
export function Home() {
  return (
    <div id="home" className="p-8 sm:text-center lg:flex text-start md:flex xl:flex items-center justify-center">
      <div className="flex flex-col justify-center">
        <p className="text-black-700 font-bold md:w-auto lg:text-[52px] xl:text-[60px] w-[620px] sm:w-auto text-[30px]">
          Let’s take a <p>tour to <strong className="text-orange-500">Blockchain</strong></p><p>Technology</p>
        </p>
        <p className="mt-10 text-black-700 text-[18px] leading-8 xl:w-[520px] sm:w-auto">
          We are highly focused by blockchain technology that will lead
          positively to the future web.
        </p>
      </div>

      <div className="mt-11">
      <img src={Group} alt="" />
      </div>
    </div>
  );
}
