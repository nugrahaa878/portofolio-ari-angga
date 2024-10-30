import Typewriter from "typewriter-effect";

import pairProgramming from "../../../../assets/pair-programming.svg";
// import linkedin from "../../../../assets/linkedin.png";
// import github from "../../../../assets/github.png";
// import medium from "../../../../assets/medium.png";

const HeroSectionMobile = () => {
  return (
    <div className="flex flex-col pt-28 text-darkBlue items-center justify-center mb-40">
      <div className="text-lg mb-1">
        <Typewriter
          options={{
            strings: ["Hello, We Are", "Halo, perkenalkan kami"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <h2 className="text-3xl font-semibold mb-4">ANE</h2>
      <h3 className="text-3xl font-semibold mb-4">Ari - Nur - Angga</h3>
      <img src={pairProgramming} width={200} alt="avatar" className="mb-8 mt-8" />

      <h1 className="text-md mb-5 font-semibold">
        Software Engineer
      </h1>
      <p className="mb-7 text-xs text-center px-14">
        We shape ideas into compelling user interfaces, seamlessly blending code
        and <br />
        creativity to redefine the digital landscape.
      </p>

      {/* <div className="flex gap-4 z-10">
        <a href="https://www.linkedin.com/in/nugrahaa878/" target="_blank">
          <img src={linkedin} width={40} alt="linkedin" />
        </a>
        <a href="https://github.com/nugrahaa878" target="_blank">
          <img src={github} width={40} alt="github" />
        </a>
        <a href="https://medium.com/@nugrahaa878" target="_blank">
          <img src={medium} width={40} alt="medium" />
        </a>
      </div> */}
    </div>
  );
};

export default HeroSectionMobile;
