import BackdropHero from "../../../../components/BackdropHero";
import BackdropNav from "../../../../components/BackdropNav";
import HumbergerMenu from "../../../../components/HumbergerMenu";
import CaseStudiesSectionMobile from "../../components/ArticleSectionMobile";
import { ExpertiseSectionMobile } from "../../components/ExperienceSectionMobile";
import Footer from "../../components/Footer";
import HeroSectionMobile from "../../components/HeroSectionMobile";
import { ServicesSectionMobile } from "../../components/ProjectSectionMobile";

const HomeMobileView = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden overflow-y-auto relative">
      <HumbergerMenu />
      <BackdropNav />
      <BackdropHero />
      <HeroSectionMobile />
      <ServicesSectionMobile />
      <CaseStudiesSectionMobile />
      <ExpertiseSectionMobile />
      <Footer />
    </div>
  );
};

export default HomeMobileView;
