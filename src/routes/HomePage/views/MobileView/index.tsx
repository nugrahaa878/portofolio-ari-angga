import BackdropHero from "../../../../components/BackdropHero";
import BackdropNav from "../../../../components/BackdropNav";
import ArticleSectionMobile from "../../components/ArticleSectionMobile";
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
      <ArticleSectionMobile />
    </div>
  );
};

export default HomeMobileView;
