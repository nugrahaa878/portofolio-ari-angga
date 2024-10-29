import Navbar from "../../../../components/Navbar";
import BackdropNav from "../../../../components/BackdropNav";
import BackdropHero from "../../../../components/BackdropHero";
import HeroSection from "../../components/HeroSection";
import ArticleSection from "../../components/ArticleSection";
import ProjectSection from "../../components/ProjectSection";
import ExperienceSection from "../../components/ExperienceSection";

const HomeDesktopView = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden overflo relative">
      <Navbar />
      <BackdropNav />
      <BackdropHero />
      <HeroSection />
      <ProjectSection />
      <ArticleSection />
      <ExperienceSection />
    </div>
  );
};

export default HomeDesktopView;
