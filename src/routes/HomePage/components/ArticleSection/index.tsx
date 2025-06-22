import { ExternalLink, Clock, Users, TrendingUp } from "lucide-react";
import { LIST_PROJECTS } from "../../constants";

const CaseStudiesSection = () => {
  return (
    <section id="case-studies" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-synergySlate-900 mb-6">
            Software Development Case Studies
          </h2>
          <p className="text-xl text-synergySlate-600 max-w-3xl mx-auto">
            Discover how we've helped businesses accelerate their digital transformation,
            improve operational efficiency, and drive growth through innovative software solutions.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {LIST_PROJECTS.map((project, index) => (
            <div
              key={index}
              className="bg-white border-2 border-synergySlate-100 hover:border-synergyBlue-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-synergyBlue-100 to-synergyIndigo-100 flex items-center justify-center">
                <img
                  src={project.imgUrl}
                  alt={`${project.title} - Software solution by Synergy Bytes`}
                  className="w-32 h-32 object-contain opacity-80 group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-synergySlate-900 mb-3 group-hover:text-synergyBlue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-synergySlate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.details}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-synergySlate-100 text-synergySlate-700 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-3 py-1 bg-synergyBlue-100 text-synergyBlue-700 text-xs font-medium rounded-full">
                        +{project.techStack.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Project Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-synergySlate-50 rounded-lg">
                  <div className="text-center">
                    <Clock className="w-5 h-5 text-synergyBlue-500 mx-auto mb-1" />
                    <div className="text-sm font-semibold text-synergySlate-900">3-6M</div>
                    <div className="text-xs text-synergySlate-600">Duration</div>
                  </div>
                  <div className="text-center">
                    <Users className="w-5 h-5 text-synergyIndigo-500 mx-auto mb-1" />
                    <div className="text-sm font-semibold text-synergySlate-900">10K+</div>
                    <div className="text-xs text-synergySlate-600">Users</div>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="w-5 h-5 text-synergyEmerald-500 mx-auto mb-1" />
                    <div className="text-sm font-semibold text-synergySlate-900">99.9%</div>
                    <div className="text-xs text-synergySlate-600">Uptime</div>
                  </div>
                </div>

                {/* View Details Button */}
                <button className="w-full flex items-center justify-center gap-2 bg-synergyBlue-600 hover:bg-synergyBlue-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200 group">
                  View Case Study
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Results Summary */}
        <div className="bg-gradient-to-r from-synergySlate-900 to-synergyBlue-900 rounded-2xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Results That Drive Growth
            </h3>
            <p className="text-xl opacity-90">
              Our software solutions deliver measurable business impact across key performance indicators
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 text-synergyEmerald-400">50%</div>
              <div className="text-sm opacity-80">Faster Development Cycles</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 text-synergyIndigo-400">40%</div>
              <div className="text-sm opacity-80">Reduction in Operational Costs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 text-synergyBlue-400">99.9%</div>
              <div className="text-sm opacity-80">System Uptime Achieved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 text-white">100%</div>
              <div className="text-sm opacity-80">Client Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
