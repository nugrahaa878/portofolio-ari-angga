import { ExternalLink, Clock, Users, TrendingUp } from "lucide-react";
import { LIST_PROJECTS } from "../../constants";

const CaseStudiesSection = () => {
  return (
    <section id="case-studies" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-healthcareGray-900 mb-6">
            Healthcare Case Studies
          </h2>
          <p className="text-xl text-healthcareGray-600 max-w-3xl mx-auto">
            Discover how we've helped healthcare organizations improve patient outcomes,
            streamline operations, and ensure regulatory compliance through innovative technology solutions.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {LIST_PROJECTS.map((project, index) => (
            <div
              key={index}
              className="bg-white border-2 border-healthcareGray-100 hover:border-healthcareTeal-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-healthcareBlue-100 to-healthcareTeal-100 flex items-center justify-center">
                <img
                  src={project.imgUrl}
                  alt={project.title}
                  className="w-32 h-32 object-contain opacity-80 group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-healthcareGray-900 mb-3 group-hover:text-healthcareBlue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-healthcareGray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.details}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-healthcareGray-100 text-healthcareGray-700 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-3 py-1 bg-healthcareTeal-100 text-healthcareTeal-700 text-xs font-medium rounded-full">
                        +{project.techStack.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Project Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-healthcareGray-50 rounded-lg">
                  <div className="text-center">
                    <Clock className="w-5 h-5 text-healthcareBlue-500 mx-auto mb-1" />
                    <div className="text-sm font-semibold text-healthcareGray-900">3-6M</div>
                    <div className="text-xs text-healthcareGray-600">Duration</div>
                  </div>
                  <div className="text-center">
                    <Users className="w-5 h-5 text-healthcareTeal-500 mx-auto mb-1" />
                    <div className="text-sm font-semibold text-healthcareGray-900">500+</div>
                    <div className="text-xs text-healthcareGray-600">Users</div>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="w-5 h-5 text-healthcareGreen-500 mx-auto mb-1" />
                    <div className="text-sm font-semibold text-healthcareGray-900">95%</div>
                    <div className="text-xs text-healthcareGray-600">Uptime</div>
                  </div>
                </div>

                {/* View Details Button */}
                <button className="w-full flex items-center justify-center gap-2 bg-healthcareBlue-600 hover:bg-healthcareBlue-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200 group">
                  View Case Study
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Results Summary */}
        <div className="bg-gradient-to-r from-healthcareGray-900 to-healthcareBlue-900 rounded-2xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Results That Matter
            </h3>
            <p className="text-xl opacity-90">
              Our healthcare solutions deliver measurable improvements across key metrics
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 text-healthcareGreen-400">40%</div>
              <div className="text-sm opacity-80">Reduction in Administrative Tasks</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 text-healthcareTeal-400">25%</div>
              <div className="text-sm opacity-80">Improvement in Patient Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 text-healthcareBlue-400">99.9%</div>
              <div className="text-sm opacity-80">System Uptime Achieved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 text-white">100%</div>
              <div className="text-sm opacity-80">HIPAA Compliance Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
