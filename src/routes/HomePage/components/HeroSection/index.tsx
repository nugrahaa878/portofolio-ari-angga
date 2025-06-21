import { ArrowRight, Shield, Activity, Users } from "lucide-react";
import { TEAM_INFO } from "../../constants";

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-healthcareBlue-50 to-white">
      {/* Main Hero Content */}
      <div className="container mx-auto px-6 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Company Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-healthcareTeal-50 border border-healthcareTeal-200 rounded-full text-healthcareTeal-700 text-sm font-medium">
              <Shield className="w-4 h-4 mr-2" />
              HIPAA Compliant Healthcare Solutions
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-healthcareGray-900 leading-tight">
                {TEAM_INFO.tagline}
              </h1>
              <p className="text-xl text-healthcareGray-600 leading-relaxed max-w-lg">
                {TEAM_INFO.description}
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-healthcareBlue-100 rounded-lg flex items-center justify-center">
                  <Activity className="w-6 h-6 text-healthcareBlue-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-healthcareGray-900">50+</div>
                  <div className="text-sm text-healthcareGray-600">Healthcare Projects</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-healthcareTeal-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-healthcareTeal-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-healthcareGray-900">25+</div>
                  <div className="text-sm text-healthcareGray-600">Healthcare Clients</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-healthcareBlue-600 hover:bg-healthcareBlue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center group">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="border-2 border-healthcareGray-300 hover:border-healthcareTeal-500 text-healthcareGray-700 hover:text-healthcareTeal-600 px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                View Our Work
              </button>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            {/* Healthcare Illustration */}
            <div className="relative z-10">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                {/* Mock Healthcare Dashboard */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-healthcareGray-900">Patient Dashboard</h3>
                    <div className="w-3 h-3 bg-healthcareGreen-500 rounded-full"></div>
                  </div>

                  {/* Patient Cards */}
                  <div className="space-y-3">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="flex items-center space-x-3 p-3 bg-healthcareGray-50 rounded-lg">
                        <div className="w-8 h-8 bg-healthcareBlue-100 rounded-full flex items-center justify-center">
                          <Users className="w-4 h-4 text-healthcareBlue-600" />
                        </div>
                        <div className="flex-1">
                          <div className="h-2 bg-healthcareGray-200 rounded w-24 mb-1"></div>
                          <div className="h-2 bg-healthcareGray-200 rounded w-16"></div>
                        </div>
                        <div className="w-12 h-6 bg-healthcareGreen-100 rounded text-xs flex items-center justify-center text-healthcareGreen-700 font-medium">
                          Active
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Chart Placeholder */}
                  <div className="h-32 bg-gradient-to-r from-healthcareBlue-50 to-healthcareTeal-50 rounded-lg flex items-center justify-center">
                    <Activity className="w-16 h-16 text-healthcareTeal-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decorations */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-10 right-10 w-32 h-32 bg-healthcareTeal-100 rounded-full opacity-60"></div>
              <div className="absolute bottom-10 left-10 w-24 h-24 bg-healthcareBlue-100 rounded-full opacity-40"></div>
              <div className="absolute top-1/2 right-0 w-16 h-16 bg-healthcareGreen-100 rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="border-t border-healthcareGray-200 bg-white/70 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center space-y-4">
            <p className="text-sm text-healthcareGray-600 font-medium uppercase tracking-wider">
              Trusted by Healthcare Organizations
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {['Medical Center', 'Regional Hospital', 'Health Clinic', 'Care Network'].map((name) => (
                <div key={name} className="text-healthcareGray-500 font-semibold text-sm">
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
