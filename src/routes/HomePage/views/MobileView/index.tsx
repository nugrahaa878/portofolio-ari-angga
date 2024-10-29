import BackdropHero from "../../../../components/BackdropHero";
import BackdropNav from "../../../../components/BackdropNav";
import HeroSectionMobile from "../../components/HeroSectionMobile";
import ProjectSectionMobile from "../../components/ProjectSectionMobile";

const HomeMobileView = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden overflo relative">
      {/* <HumbergerMenu /> */}
      <BackdropNav />
      <BackdropHero />
      <HeroSectionMobile />
      <ProjectSectionMobile />
    </div>
  );
};

export default HomeMobileView;
