import Navbar from "../../../../components/Navbar";
import HeroSection from "../../components/HeroSection";
import ServicesSection from "../../components/ProjectSection";
import HealthcareExpertiseSection from "../../components/ExperienceSection";
import CaseStudiesSection from "../../components/ArticleSection";
import TeamTestimonialsFooter from "../../components/Footer";

const HomeDesktopView = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <HealthcareExpertiseSection />
      <CaseStudiesSection />
      <TeamTestimonialsFooter />
    </div>
  );
};

export default HomeDesktopView;
