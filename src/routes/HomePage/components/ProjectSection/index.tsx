import { CheckCircle } from "lucide-react";
import { SOFTWARE_SERVICES } from "../../constants";

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-synergySlate-900 mb-6">
            Our Software Solutions
          </h2>
          <p className="text-xl text-synergySlate-600 max-w-3xl mx-auto">
            We provide comprehensive software development solutions designed to drive business growth,
            improve operational efficiency, and deliver exceptional user experiences.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {SOFTWARE_SERVICES.map((service) => (
            <div
              key={service.id}
              className="group bg-white border-2 border-synergySlate-100 hover:border-synergyBlue-200 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl"
            >
              {/* Service Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-synergyBlue-100 to-synergyIndigo-100 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Service Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-synergySlate-900 group-hover:text-synergyBlue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-synergySlate-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-synergyEmerald-500 flex-shrink-0" />
                      <span className="text-synergySlate-700 text-sm font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Learn More Link */}
                <div className="pt-4">
                  <button className="text-synergyBlue-600 hover:text-synergyBlue-700 font-semibold text-sm flex items-center group-hover:translate-x-1 transition-transform duration-300">
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-synergyBlue-600 to-synergyIndigo-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business with Technology?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how our software solutions can accelerate your digital transformation and business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-synergyBlue-600 hover:bg-synergySlate-50 px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Schedule Consultation
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-synergyBlue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-200">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
