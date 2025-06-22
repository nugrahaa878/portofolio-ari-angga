import { ArrowRight, Shield, Users, Code2, Zap, CheckCircle, Laptop, Server, Smartphone } from "lucide-react";
import iconMain from "../../../../assets/icon-main.png";

// Import client logos
import client1 from "../../../../assets/clients/synergy-client-1.webp";
import client2 from "../../../../assets/clients/synergy-client-2.png";
import client3 from "../../../../assets/clients/synergy-client-3.png";
import client4 from "../../../../assets/clients/synergy-client-4.svg";

const HeroSectionMobile = () => {
  // Client data with actual logos - now generic companies
  const clients = [
    { logo: client1, name: "TechCorp", type: "enterprise" },
    { logo: client2, name: "Digital Dynamics", type: "startup" },
    { logo: client3, name: "InnovateLab", type: "research" },
    { logo: client4, name: "NextGen Systems", type: "enterprise" },
    { logo: client1, name: "CloudFirst Inc", type: "enterprise" },
    { logo: client2, name: "DataFlow Tech", type: "startup" },
    { logo: client3, name: "SmartSolutions", type: "research" },
    { logo: client4, name: "FutureTech", type: "enterprise" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-synergyBlue-50 via-white to-synergyIndigo-50 py-4">
      {/* Main Hero Content */}
      <div className="container mx-auto px-4 pt-20 pb-8">
        <div className="space-y-8">
          {/* Content Section */}
          <div className="text-center space-y-4">
            {/* Company Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-synergyEmerald-50 to-synergyBlue-50 border border-synergyEmerald-200 rounded-full text-synergyEmerald-700 text-xs font-semibold shadow-sm">
              <Shield className="w-3 h-3 mr-2" />
              Secure • Scalable • Enterprise Ready
            </div>

            {/* Main Heading - More Compact */}
            <div className="space-y-3">
              <h1 className="text-3xl md:text-4xl font-bold text-synergySlate-900 leading-tight">
                <span className="text-synergyBlue-600">Software</span>
                <span className="bg-gradient-to-r from-synergyIndigo-600 to-synergyEmerald-600 bg-clip-text text-transparent"> Development</span>
                <span className="text-synergySlate-900"> Excellence</span>
              </h1>
              <h2 className="text-base text-synergySlate-600 leading-relaxed px-2">
                Synergy Bytes menghadirkan solusi teknologi yang
                <span className="font-semibold text-synergyBlue-600"> inovatif</span>,
                <span className="font-semibold text-synergyIndigo-600"> handal</span>, dan
                <span className="font-semibold text-synergyEmerald-600"> skalabel</span> untuk transformasi digital.
              </h2>
            </div>
          </div>

          {/* Mobile Dashboard Section - Moved up */}
          <div className="relative max-w-xs mx-auto">
            {/* Main Card */}
            <div className="relative z-10 bg-white rounded-2xl shadow-xl p-5 border border-synergySlate-200">
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center space-x-2">
                  <img src={iconMain} alt="Synergy Bytes" className="w-6 h-6" />
                  <div>
                    <h3 className="text-sm font-bold text-synergySlate-900">Development Dashboard</h3>
                    <p className="text-xs text-synergySlate-500">Real-time Analytics</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-synergyEmerald-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-synergySlate-600 font-medium">Live</span>
                </div>
              </div>

              {/* Stats Grid - Mobile */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="bg-gradient-to-br from-synergyBlue-50 to-synergyBlue-100 p-3 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <Laptop className="w-4 h-4 text-synergyBlue-600" />
                    <span className="text-xs bg-synergyBlue-600 text-white px-1 py-0.5 rounded-full">+15%</span>
                  </div>
                  <div className="text-lg font-bold text-synergyBlue-700">24</div>
                  <div className="text-xs text-synergyBlue-600">Active Projects</div>
                </div>
                <div className="bg-gradient-to-br from-synergyIndigo-50 to-synergyIndigo-100 p-3 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <Server className="w-4 h-4 text-synergyIndigo-600" />
                    <span className="text-xs bg-synergyIndigo-600 text-white px-1 py-0.5 rounded-full">+8%</span>
                  </div>
                  <div className="text-lg font-bold text-synergyIndigo-700">12</div>
                  <div className="text-xs text-synergyIndigo-600">Servers Running</div>
                </div>
              </div>

              {/* Chart Visualization - Mobile */}
              <div className="bg-gradient-to-r from-synergyBlue-50 via-synergyIndigo-50 to-synergyEmerald-50 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-semibold text-synergySlate-900">Performance Metrics</h4>
                  <Zap className="w-4 h-4 text-synergyEmerald-600" />
                </div>
                {/* Animated Chart Bars - Mobile */}
                <div className="flex items-end space-x-1 h-14">
                  {[85, 65, 92, 78, 95, 82, 88].map((height, index) => (
                    <div
                      key={index}
                      className="flex-1 bg-gradient-to-t from-synergyBlue-400 to-synergyIndigo-400 rounded-t transition-all duration-1000 ease-out"
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
                <button className="flex-1 border border-synergySlate-300 hover:border-synergyEmerald-500 text-synergySlate-700 hover:text-synergyEmerald-600 py-2 px-3 rounded-lg text-xs font-medium transition-colors duration-200 active:scale-95">
                  Settings
                </button>
              </div>
            </div>

            {/* Background Decorations - Mobile */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-synergyEmerald-200 to-synergyBlue-200 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-synergyIndigo-200 to-synergyEmerald-200 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Floating Elements - Mobile */}
            <div className="absolute -top-2 -left-2 bg-white rounded-lg shadow-lg p-2 border border-synergySlate-200 animate-bounce z-10" style={{ animationDuration: '3s' }}>
              <Code2 className="w-4 h-4 text-synergyBlue-600" />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-white rounded-lg shadow-lg p-2 border border-synergySlate-200 animate-bounce z-10" style={{ animationDuration: '4s', animationDelay: '1s' }}>
              <Smartphone className="w-4 h-4 text-synergyEmerald-600" />
            </div>
          </div>

          {/* Value Propositions - More Compact */}
          <div className="grid grid-cols-3 gap-2 max-w-sm mx-auto">
            <div className="flex flex-col items-center p-3 bg-white/80 backdrop-blur rounded-xl border border-synergySlate-200 shadow-sm">
              <div className="w-8 h-8 bg-synergyBlue-100 rounded-lg flex items-center justify-center mb-2">
                <Code2 className="w-4 h-4 text-synergyBlue-600" />
              </div>
              <div className="text-center">
                <div className="font-bold text-synergySlate-900 text-sm">100+</div>
                <div className="text-xs text-synergySlate-600">Projects</div>
              </div>
            </div>
            <div className="flex flex-col items-center p-3 bg-white/80 backdrop-blur rounded-xl border border-synergySlate-200 shadow-sm">
              <div className="w-8 h-8 bg-synergyIndigo-100 rounded-lg flex items-center justify-center mb-2">
                <Users className="w-4 h-4 text-synergyIndigo-600" />
              </div>
              <div className="text-center">
                <div className="font-bold text-synergySlate-900 text-sm">50+</div>
                <div className="text-xs text-synergySlate-600">Clients</div>
              </div>
            </div>
            <div className="flex flex-col items-center p-3 bg-white/80 backdrop-blur rounded-xl border border-synergySlate-200 shadow-sm">
              <div className="w-8 h-8 bg-synergyEmerald-100 rounded-lg flex items-center justify-center mb-2">
                <Zap className="w-4 h-4 text-synergyEmerald-600" />
              </div>
              <div className="text-center">
                <div className="font-bold text-synergySlate-900 text-sm">99.9%</div>
                <div className="text-xs text-synergySlate-600">Uptime</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons - Compact */}
          <div className="flex flex-col gap-3 max-w-xs mx-auto">
            <button className="bg-gradient-to-r from-synergyBlue-600 to-synergyIndigo-600 hover:from-synergyBlue-700 hover:to-synergyIndigo-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group shadow-lg active:scale-95">
              Mulai Konsultasi Gratis
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button className="border-2 border-synergySlate-300 hover:border-synergyEmerald-500 text-synergySlate-700 hover:text-synergyEmerald-600 px-6 py-2 rounded-xl font-semibold transition-all duration-300 bg-white/80 backdrop-blur active:scale-95">
              Lihat Portfolio
            </button>
          </div>

          {/* Trust Indicators - Compact */}
          <div className="flex flex-wrap justify-center items-center gap-3 pt-2">
            <div className="flex items-center space-x-1">
              <CheckCircle className="w-3 h-3 text-synergyEmerald-500" />
              <span className="text-xs text-synergySlate-600 font-medium">ISO 27001</span>
            </div>
            <div className="flex items-center space-x-1">
              <CheckCircle className="w-3 h-3 text-synergyEmerald-500" />
              <span className="text-xs text-synergySlate-600 font-medium">Agile Dev</span>
            </div>
            <div className="flex items-center space-x-1">
              <CheckCircle className="w-3 h-3 text-synergyEmerald-500" />
              <span className="text-xs text-synergySlate-600 font-medium">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Trust Bar - Mobile */}
      <div className="border-t border-synergySlate-200 bg-white/70 backdrop-blur-sm overflow-hidden">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center space-y-6">
            <p className="text-base text-synergySlate-600 font-bold uppercase tracking-wider">
              Dipercaya oleh 50+ Perusahaan Terkemuka di Indonesia
            </p>

            {/* Auto-scrolling logos container - Mobile */}
            <div className="relative">
              <div className="flex animate-scroll-infinite space-x-12 items-center">
                {/* First set of logos */}
                <div className="flex items-center space-x-12 whitespace-nowrap">
                  {clients.map((client, index) => (
                    <div key={index} className="flex flex-col items-center space-y-3 min-w-[120px] group active:scale-95 transition-transform duration-200">
                      <div className="w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center p-2 group-active:shadow-2xl transition-all duration-300">
                        <img
                          src={client.logo}
                          alt={client.name}
                          className="w-full h-full object-contain group-active:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <span className="text-base font-bold text-synergySlate-800 text-center leading-tight group-active:text-synergyBlue-600 transition-colors duration-300">{client.name}</span>
                    </div>
                  ))}
                </div>

                {/* Duplicate set for seamless infinite scroll */}
                <div className="flex items-center space-x-12 whitespace-nowrap">
                  {clients.map((client, index) => (
                    <div key={`duplicate-${index}`} className="flex flex-col items-center space-y-3 min-w-[120px] group active:scale-95 transition-transform duration-200">
                      <div className="w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center p-2 group-active:shadow-2xl transition-all duration-300">
                        <img
                          src={client.logo}
                          alt={client.name}
                          className="w-full h-full object-contain group-active:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <span className="text-base font-bold text-synergySlate-800 text-center leading-tight group-active:text-synergyBlue-600 transition-colors duration-300">{client.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionMobile;
