import Typewriter from "typewriter-effect";

import pairProgramming from "../../../../assets/pair-programming.svg";

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
      <h3 className="text-2xl font-semibold mb-4">Ari - Erlangga</h3>
      <img src={pairProgramming} width={200} alt="avatar" className="mb-8 mt-8" />

      <h1 className="text-md mb-5 font-semibold">
        Software Engineer
      </h1>
      <p className="mb-7 text-xs text-center px-14">
        We shape ideas into compelling user interfaces, seamlessly blending code
        and <br />
        creativity to redefine the digital landscape.
      </p>
    </div>
  );
};

export default HeroSectionMobile;
