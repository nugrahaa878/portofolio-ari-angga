import { ArrowRight, Shield, Activity, Users, Code2, Heart, Zap, CheckCircle } from "lucide-react";
import iconMain from "../../../../assets/icon-main.png";

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-synergyBlue-50 via-white to-synergyPurple-50 py-10">
      {/* Main Hero Content */}
      <div className="container mx-auto px-6 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Company Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-synergyTeal-50 to-synergyBlue-50 border border-synergyTeal-200 rounded-full text-synergyTeal-700 text-sm font-semibold shadow-sm">
              <Shield className="w-4 h-4 mr-2" />
              HIPAA Compliant • HL7 FHIR • Enterprise Ready
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-synergyGray-900 leading-tight">
                <span className="text-synergyBlue-600">Healthcare</span>
                <br />
                <span className="bg-gradient-to-r from-synergyPurple-600 to-synergyTeal-600 bg-clip-text text-transparent">
                  Technology
                </span>
                <br />
                <span className="text-synergyGray-900">Reimagined</span>
              </h1>
              <h2 className="text-xl lg:text-2xl text-synergyGray-600 leading-relaxed max-w-2xl">
                Synergy Bytes menghadirkan solusi teknologi kesehatan yang
                <span className="font-semibold text-synergyBlue-600"> inovatif</span>,
                <span className="font-semibold text-synergyPurple-600"> aman</span>, dan
                <span className="font-semibold text-synergyTeal-600"> skalabel</span> untuk transformasi digital rumah sakit dan klinik.
              </h2>
            </div>

            {/* Value Propositions */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-white/60 backdrop-blur rounded-xl border border-synergyGray-200">
                <div className="w-10 h-10 bg-synergyBlue-100 rounded-lg flex items-center justify-center">
                  <Activity className="w-5 h-5 text-synergyBlue-600" />
                </div>
                <div>
                  <div className="font-bold text-synergyGray-900">50+</div>
                  <div className="text-sm text-synergyGray-600">Healthcare Projects</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white/60 backdrop-blur rounded-xl border border-synergyGray-200">
                <div className="w-10 h-10 bg-synergyPurple-100 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-synergyPurple-600" />
                </div>
                <div>
                  <div className="font-bold text-synergyGray-900">25+</div>
                  <div className="text-sm text-synergyGray-600">Healthcare Clients</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white/60 backdrop-blur rounded-xl border border-synergyGray-200">
                <div className="w-10 h-10 bg-synergyTeal-100 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-synergyTeal-600" />
                </div>
                <div>
                  <div className="font-bold text-synergyGray-900">99.9%</div>
                  <div className="text-sm text-synergyGray-600">Uptime SLA</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-synergyBlue-600 to-synergyPurple-600 hover:from-synergyBlue-700 hover:to-synergyPurple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Mulai Konsultasi Gratis
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="border-2 border-synergyGray-300 hover:border-synergyTeal-500 text-synergyGray-700 hover:text-synergyTeal-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 bg-white/80 backdrop-blur hover:bg-white">
                Lihat Portfolio
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-synergyTeal-500" />
                <span className="text-sm text-synergyGray-600 font-medium">HIPAA Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-synergyTeal-500" />
                <span className="text-sm text-synergyGray-600 font-medium">ISO 27001 Ready</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-synergyTeal-500" />
                <span className="text-sm text-synergyGray-600 font-medium">24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Right Column - Interactive Visual */}
          <div className="relative">
            {/* Main Card */}
            <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 border border-synergyGray-200">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <img src={iconMain} alt="Synergy Bytes" className="w-8 h-8" />
                  <div>
                    <h3 className="text-lg font-bold text-synergyGray-900">Healthcare Dashboard</h3>
                    <p className="text-sm text-synergyGray-500">Real-time Analytics</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-synergyTeal-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-synergyGray-600 font-medium">Live</span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gradient-to-br from-synergyBlue-50 to-synergyBlue-100 p-4 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <Activity className="w-6 h-6 text-synergyBlue-600" />
                    <span className="text-xs bg-synergyBlue-600 text-white px-2 py-1 rounded-full">+12%</span>
                  </div>
                  <div className="text-2xl font-bold text-synergyBlue-700">1,247</div>
                  <div className="text-xs text-synergyBlue-600">Active Patients</div>
                </div>
                <div className="bg-gradient-to-br from-synergyPurple-50 to-synergyPurple-100 p-4 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <Users className="w-6 h-6 text-synergyPurple-600" />
                    <span className="text-xs bg-synergyPurple-600 text-white px-2 py-1 rounded-full">+8%</span>
                  </div>
                  <div className="text-2xl font-bold text-synergyPurple-700">89</div>
                  <div className="text-xs text-synergyPurple-600">Medical Staff</div>
                </div>
              </div>

              {/* Chart Visualization */}
              <div className="bg-gradient-to-r from-synergyBlue-50 via-synergyPurple-50 to-synergyTeal-50 rounded-xl p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-synergyGray-900">Patient Flow</h4>
                  <Zap className="w-5 h-5 text-synergyTeal-600" />
                </div>
                {/* Animated Chart Bars */}
                <div className="flex items-end space-x-2 h-24">
                  {[65, 45, 78, 52, 89, 67, 91].map((height, index) => (
                    <div
                      key={index}
                      className="flex-1 bg-gradient-to-t from-synergyBlue-400 to-synergyPurple-400 rounded-t-lg transition-all duration-1000 ease-out"
                      style={{
                        height: `${height}%`,
                        animationDelay: `${index * 0.1}s`
                      }}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex space-x-3">
                <button className="flex-1 bg-synergyBlue-600 hover:bg-synergyBlue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200">
                  View Reports
                </button>
                <button className="flex-1 border border-synergyGray-300 hover:border-synergyTeal-500 text-synergyGray-700 hover:text-synergyTeal-600 py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200">
                  Settings
                </button>
              </div>
            </div>

            {/* Background Decorations */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-8 right-8 w-32 h-32 bg-gradient-to-br from-synergyTeal-200 to-synergyBlue-200 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute bottom-8 left-8 w-24 h-24 bg-gradient-to-br from-synergyPurple-200 to-synergyTeal-200 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 right-0 w-16 h-16 bg-gradient-to-br from-synergyBlue-200 to-synergyPurple-200 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-3 border border-synergyGray-200 animate-bounce z-10" style={{ animationDuration: '3s' }}>
              <Code2 className="w-6 h-6 text-synergyBlue-600" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-3 border border-synergyGray-200 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
              <Heart className="w-6 h-6 text-synergyTeal-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Trust Bar */}
      <div className="border-t border-synergyGray-200 bg-white/70 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center space-y-4">
            <p className="text-sm text-synergyGray-600 font-medium uppercase tracking-wider">
              Dipercaya oleh 25+ Institusi Kesehatan
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
              {['Rumah Sakit Umum', 'Klinik Spesialis', 'Puskesmas', 'Medical Center', 'Healthcare Network'].map((name) => (
                <div key={name} className="text-synergyGray-500 font-semibold text-sm hover:text-synergyBlue-600 transition-colors duration-200">
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
