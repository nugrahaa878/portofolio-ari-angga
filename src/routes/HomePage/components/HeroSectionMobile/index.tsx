import { ArrowRight, Shield, Activity, Users, Code2, Heart, Zap, CheckCircle } from "lucide-react";
import iconMain from "../../../../assets/icon-main.png";

const HeroSectionMobile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-synergyBlue-50 via-white to-synergyPurple-50 py-4">
      {/* Main Hero Content */}
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="space-y-8">
          {/* Content Section */}
          <div className="text-center space-y-4">
            {/* Company Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-synergyTeal-50 to-synergyBlue-50 border border-synergyTeal-200 rounded-full text-synergyTeal-700 text-xs font-semibold shadow-sm">
              <Shield className="w-3 h-3 mr-2" />
              HIPAA • HL7 • Enterprise Ready
            </div>

            {/* Main Heading - More Compact */}
            <div className="space-y-3">
              <h1 className="text-3xl md:text-4xl font-bold text-synergyGray-900 leading-tight">
                <span className="text-synergyBlue-600">Healthcare</span>
                <span className="bg-gradient-to-r from-synergyPurple-600 to-synergyTeal-600 bg-clip-text text-transparent"> Technology</span>
                <span className="text-synergyGray-900"> Reimagined</span>
              </h1>
              <h2 className="text-base text-synergyGray-600 leading-relaxed px-2">
                Synergy Bytes menghadirkan solusi teknologi kesehatan yang
                <span className="font-semibold text-synergyBlue-600"> inovatif</span>,
                <span className="font-semibold text-synergyPurple-600"> aman</span>, dan
                <span className="font-semibold text-synergyTeal-600"> skalabel</span> untuk transformasi digital.
              </h2>
            </div>
          </div>

          {/* Mobile Dashboard Section - Moved up */}
          <div className="relative max-w-xs mx-auto">
            {/* Main Card */}
            <div className="relative z-10 bg-white rounded-2xl shadow-xl p-5 border border-synergyGray-200">
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center space-x-2">
                  <img src={iconMain} alt="Synergy Bytes" className="w-6 h-6" />
                  <div>
                    <h3 className="text-sm font-bold text-synergyGray-900">Healthcare Dashboard</h3>
                    <p className="text-xs text-synergyGray-500">Real-time Analytics</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-synergyTeal-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-synergyGray-600 font-medium">Live</span>
                </div>
              </div>

              {/* Stats Grid - Mobile */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="bg-gradient-to-br from-synergyBlue-50 to-synergyBlue-100 p-3 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <Activity className="w-4 h-4 text-synergyBlue-600" />
                    <span className="text-xs bg-synergyBlue-600 text-white px-1 py-0.5 rounded-full">+12%</span>
                  </div>
                  <div className="text-lg font-bold text-synergyBlue-700">1,247</div>
                  <div className="text-xs text-synergyBlue-600">Active Patients</div>
                </div>
                <div className="bg-gradient-to-br from-synergyPurple-50 to-synergyPurple-100 p-3 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <Users className="w-4 h-4 text-synergyPurple-600" />
                    <span className="text-xs bg-synergyPurple-600 text-white px-1 py-0.5 rounded-full">+8%</span>
                  </div>
                  <div className="text-lg font-bold text-synergyPurple-700">89</div>
                  <div className="text-xs text-synergyPurple-600">Medical Staff</div>
                </div>
              </div>

              {/* Chart Visualization - Mobile */}
              <div className="bg-gradient-to-r from-synergyBlue-50 via-synergyPurple-50 to-synergyTeal-50 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-semibold text-synergyGray-900">Patient Flow</h4>
                  <Zap className="w-4 h-4 text-synergyTeal-600" />
                </div>
                {/* Animated Chart Bars - Mobile */}
                <div className="flex items-end space-x-1 h-14">
                  {[65, 45, 78, 52, 89, 67, 91].map((height, index) => (
                    <div
                      key={index}
                      className="flex-1 bg-gradient-to-t from-synergyBlue-400 to-synergyPurple-400 rounded-t transition-all duration-1000 ease-out"
                      style={{
                        height: `${height}%`,
                        animationDelay: `${index * 0.1}s`
                      }}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Quick Actions - Mobile */}
              <div className="flex space-x-2">
                <button className="flex-1 bg-synergyBlue-600 hover:bg-synergyBlue-700 text-white py-2 px-3 rounded-lg text-xs font-medium transition-colors duration-200 active:scale-95">
                  View Reports
                </button>
                <button className="flex-1 border border-synergyGray-300 hover:border-synergyTeal-500 text-synergyGray-700 hover:text-synergyTeal-600 py-2 px-3 rounded-lg text-xs font-medium transition-colors duration-200 active:scale-95">
                  Settings
                </button>
              </div>
            </div>

            {/* Background Decorations - Mobile */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-synergyTeal-200 to-synergyBlue-200 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-synergyPurple-200 to-synergyTeal-200 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Floating Elements - Mobile */}
            <div className="absolute -top-2 -left-2 bg-white rounded-lg shadow-lg p-2 border border-synergyGray-200 animate-bounce z-10" style={{ animationDuration: '3s' }}>
              <Code2 className="w-4 h-4 text-synergyBlue-600" />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-white rounded-lg shadow-lg p-2 border border-synergyGray-200 animate-bounce z-10" style={{ animationDuration: '4s', animationDelay: '1s' }}>
              <Heart className="w-4 h-4 text-synergyTeal-600" />
            </div>
          </div>

          {/* Value Propositions - More Compact */}
          <div className="grid grid-cols-3 gap-2 max-w-sm mx-auto">
            <div className="flex flex-col items-center p-3 bg-white/80 backdrop-blur rounded-xl border border-synergyGray-200 shadow-sm">
              <div className="w-8 h-8 bg-synergyBlue-100 rounded-lg flex items-center justify-center mb-2">
                <Activity className="w-4 h-4 text-synergyBlue-600" />
              </div>
              <div className="text-center">
                <div className="font-bold text-synergyGray-900 text-sm">50+</div>
                <div className="text-xs text-synergyGray-600">Projects</div>
              </div>
            </div>
            <div className="flex flex-col items-center p-3 bg-white/80 backdrop-blur rounded-xl border border-synergyGray-200 shadow-sm">
              <div className="w-8 h-8 bg-synergyPurple-100 rounded-lg flex items-center justify-center mb-2">
                <Users className="w-4 h-4 text-synergyPurple-600" />
              </div>
              <div className="text-center">
                <div className="font-bold text-synergyGray-900 text-sm">25+</div>
                <div className="text-xs text-synergyGray-600">Clients</div>
              </div>
            </div>
            <div className="flex flex-col items-center p-3 bg-white/80 backdrop-blur rounded-xl border border-synergyGray-200 shadow-sm">
              <div className="w-8 h-8 bg-synergyTeal-100 rounded-lg flex items-center justify-center mb-2">
                <Heart className="w-4 h-4 text-synergyTeal-600" />
              </div>
              <div className="text-center">
                <div className="font-bold text-synergyGray-900 text-sm">99.9%</div>
                <div className="text-xs text-synergyGray-600">Uptime</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons - Compact */}
          <div className="flex flex-col gap-3 max-w-xs mx-auto">
            <button className="bg-gradient-to-r from-synergyBlue-600 to-synergyPurple-600 hover:from-synergyBlue-700 hover:to-synergyPurple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group shadow-lg active:scale-95">
              Mulai Konsultasi Gratis
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button className="border-2 border-synergyGray-300 hover:border-synergyTeal-500 text-synergyGray-700 hover:text-synergyTeal-600 px-6 py-2 rounded-xl font-semibold transition-all duration-300 bg-white/80 backdrop-blur active:scale-95">
              Lihat Portfolio
            </button>
          </div>

          {/* Trust Indicators - Compact */}
          <div className="flex flex-wrap justify-center items-center gap-3 pt-2">
            <div className="flex items-center space-x-1">
              <CheckCircle className="w-3 h-3 text-synergyTeal-500" />
              <span className="text-xs text-synergyGray-600 font-medium">HIPAA</span>
            </div>
            <div className="flex items-center space-x-1">
              <CheckCircle className="w-3 h-3 text-synergyTeal-500" />
              <span className="text-xs text-synergyGray-600 font-medium">ISO 27001</span>
            </div>
            <div className="flex items-center space-x-1">
              <CheckCircle className="w-3 h-3 text-synergyTeal-500" />
              <span className="text-xs text-synergyGray-600 font-medium">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Trust Bar - Mobile */}
      <div className="border-t border-synergyGray-200 bg-white/70 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="text-center space-y-2">
            <p className="text-xs text-synergyGray-600 font-medium uppercase tracking-wider">
              Dipercaya oleh 25+ Institusi Kesehatan
            </p>
            <div className="flex flex-wrap justify-center items-center gap-3 opacity-70">
              {['RS Umum', 'Klinik', 'Puskesmas', 'Medical Center'].map((name) => (
                <div key={name} className="text-synergyGray-500 font-semibold text-xs hover:text-synergyBlue-600 transition-colors duration-200">
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

export default HeroSectionMobile;
