import BackdropHero from "../../../../components/BackdropHero";
import BackdropNav from "../../../../components/BackdropNav";
import HumbergerMenu from "../../../../components/HumbergerMenu";
import ArticleSectionMobile from "../../components/ArticleSectionMobile";
import ExperienceSectionMobile from "../../components/ExperienceSectionMobile";
import Footer from "../../components/Footer";
import HeroSectionMobile from "../../components/HeroSectionMobile";
import ProjectSectionMobile from "../../components/ProjectSectionMobile";

const HomeMobileView = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden overflo relative">
      <HumbergerMenu />
      <BackdropNav />
      <BackdropHero />
      <HeroSectionMobile />
      <ProjectSectionMobile />
      <ArticleSectionMobile />
      <ExperienceSectionMobile />
      <Footer />
    </div>
  );
};

export default HomeMobileView;
