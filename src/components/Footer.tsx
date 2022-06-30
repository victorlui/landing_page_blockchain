import Logo from "./Logo";

export function Footer() {
  return (
    <div className="bg-black-700 p-16 flex flex-col gap-6 items-center">
      <div className="flex items-center gap-4">
        <Logo />
        <h1 className="text-white text-[30px]">Excursy</h1>
      </div>
      <div className="flex items-center gap-8 flex-wrap justify-center">
        <a href="#home">
          <p className="text-white">Home</p>
        </a>
        <a href="#about">
          <p className="text-white">About us</p>
        </a>
        <a href="#interests">
          <p className="text-white">Our interests</p>
        </a>
        <a href="#value">
          <p className="text-white">Value</p>
        </a>
        <a href="#projects">
          <p className="text-white">Current projects</p>
        </a>
      </div>
    </div>
  );
}
