import { ArrowRight, Shield, Users, Code2, Zap, CheckCircle, Laptop, Server, Smartphone } from "lucide-react";
import iconMain from "../../../../assets/icon-main.png";

// Import client logos
import client1 from "../../../../assets/clients/synergy-client-1.webp";
import client2 from "../../../../assets/clients/synergy-client-2.png";
import client3 from "../../../../assets/clients/synergy-client-3.png";
import client4 from "../../../../assets/clients/synergy-client-4.svg";

const HeroSection = () => {
  // Client data with actual logos - now generic companies
  const clients = [
    { logo: client1, name: "TechCorp Solutions", type: "enterprise" },
    { logo: client2, name: "Digital Dynamics", type: "startup" },
    { logo: client3, name: "InnovateLab", type: "research" },
    { logo: client4, name: "NextGen Systems", type: "enterprise" },
    { logo: client1, name: "CloudFirst Inc", type: "enterprise" },
    { logo: client2, name: "DataFlow Technologies", type: "startup" },
    { logo: client3, name: "SmartSolutions", type: "research" },
    { logo: client4, name: "FutureTech Ventures", type: "enterprise" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-synergyBlue-50 via-white to-synergyIndigo-50 py-10">
      {/* Main Hero Content */}
      <div className="container mx-auto px-6 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Company Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-synergyEmerald-50 to-synergyBlue-50 border border-synergyEmerald-200 rounded-full text-synergyEmerald-700 text-sm font-semibold shadow-sm">
              <Shield className="w-4 h-4 mr-2" />
              Secure • Scalable • Enterprise Ready
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-synergySlate-900 leading-tight">
                <span className="text-synergyBlue-600">Software</span>
                <br />
                <span className="bg-gradient-to-r from-synergyIndigo-600 to-synergyEmerald-600 bg-clip-text text-transparent">
                  Development
                </span>
                <br />
                <span className="text-synergySlate-900">Excellence</span>
              </h1>
              <h2 className="text-xl lg:text-2xl text-synergySlate-600 leading-relaxed max-w-2xl">
                Synergy Bytes menghadirkan solusi teknologi yang
                <span className="font-semibold text-synergyBlue-600"> inovatif</span>,
                <span className="font-semibold text-synergyIndigo-600"> handal</span>, dan
                <span className="font-semibold text-synergyEmerald-600"> skalabel</span> untuk transformasi digital bisnis Anda.
              </h2>
            </div>

            {/* Value Propositions */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-white/60 backdrop-blur rounded-xl border border-synergySlate-200">
                <div className="w-10 h-10 bg-synergyBlue-100 rounded-lg flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-synergyBlue-600" />
                </div>
                <div>
                  <div className="font-bold text-synergySlate-900">100+</div>
                  <div className="text-sm text-synergySlate-600">Projects Delivered</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white/60 backdrop-blur rounded-xl border border-synergySlate-200">
                <div className="w-10 h-10 bg-synergyIndigo-100 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-synergyIndigo-600" />
                </div>
                <div>
                  <div className="font-bold text-synergySlate-900">50+</div>
                  <div className="text-sm text-synergySlate-600">Happy Clients</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white/60 backdrop-blur rounded-xl border border-synergySlate-200">
                <div className="w-10 h-10 bg-synergyEmerald-100 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-synergyEmerald-600" />
                </div>
                <div>
                  <div className="font-bold text-synergySlate-900">99.9%</div>
                  <div className="text-sm text-synergySlate-600">Uptime SLA</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-synergyBlue-600 to-synergyIndigo-600 hover:from-synergyBlue-700 hover:to-synergyIndigo-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Mulai Konsultasi Gratis
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="border-2 border-synergySlate-300 hover:border-synergyEmerald-500 text-synergySlate-700 hover:text-synergyEmerald-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 bg-white/80 backdrop-blur hover:bg-white">
                Lihat Portfolio
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-synergyEmerald-500" />
                <span className="text-sm text-synergySlate-600 font-medium">ISO 27001 Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-synergyEmerald-500" />
                <span className="text-sm text-synergySlate-600 font-medium">Agile Development</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-synergyEmerald-500" />
                <span className="text-sm text-synergySlate-600 font-medium">24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Right Column - Interactive Visual */}
          <div className="relative">
            {/* Main Card */}
            <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 border border-synergySlate-200">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <img src={iconMain} alt="Synergy Bytes" className="w-8 h-8" />
                  <div>
                    <h3 className="text-lg font-bold text-synergySlate-900">Development Dashboard</h3>
                    <p className="text-sm text-synergySlate-500">Real-time Analytics</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-synergyEmerald-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-synergySlate-600 font-medium">Live</span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gradient-to-br from-synergyBlue-50 to-synergyBlue-100 p-4 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <Laptop className="w-6 h-6 text-synergyBlue-600" />
                    <span className="text-xs bg-synergyBlue-600 text-white px-2 py-1 rounded-full">+15%</span>
                  </div>
                  <div className="text-2xl font-bold text-synergyBlue-700">24</div>
                  <div className="text-xs text-synergyBlue-600">Active Projects</div>
                </div>
                <div className="bg-gradient-to-br from-synergyIndigo-50 to-synergyIndigo-100 p-4 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <Server className="w-6 h-6 text-synergyIndigo-600" />
                    <span className="text-xs bg-synergyIndigo-600 text-white px-2 py-1 rounded-full">+8%</span>
                  </div>
                  <div className="text-2xl font-bold text-synergyIndigo-700">12</div>
                  <div className="text-xs text-synergyIndigo-600">Servers Running</div>
                </div>
              </div>

              {/* Chart Visualization */}
              <div className="bg-gradient-to-r from-synergyBlue-50 via-synergyIndigo-50 to-synergyEmerald-50 rounded-xl p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-synergySlate-900">Performance Metrics</h4>
                  <Zap className="w-5 h-5 text-synergyEmerald-600" />
                </div>
                {/* Animated Chart Bars */}
                <div className="flex items-end space-x-2 h-24">
                  {[85, 65, 92, 78, 95, 82, 88].map((height, index) => (
                    <div
                      key={index}
                      className="flex-1 bg-gradient-to-t from-synergyBlue-400 to-synergyIndigo-400 rounded-t-lg transition-all duration-1000 ease-out"
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
                <button className="flex-1 border border-synergySlate-300 hover:border-synergyEmerald-500 text-synergySlate-700 hover:text-synergyEmerald-600 py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200">
                  Settings
                </button>
              </div>
            </div>

            {/* Background Decorations */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-8 right-8 w-32 h-32 bg-gradient-to-br from-synergyEmerald-200 to-synergyBlue-200 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute bottom-8 left-8 w-24 h-24 bg-gradient-to-br from-synergyIndigo-200 to-synergyEmerald-200 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 right-0 w-16 h-16 bg-gradient-to-br from-synergyBlue-200 to-synergyIndigo-200 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-3 border border-synergySlate-200 animate-bounce z-10" style={{ animationDuration: '4s' }}>
              <Code2 className="w-6 h-6 text-synergyBlue-600" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-3 border border-synergySlate-200 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
              <Smartphone className="w-6 h-6 text-synergyEmerald-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Trust Bar */}
      <div className="border-t border-synergySlate-200 bg-white/70 backdrop-blur-sm overflow-hidden">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center space-y-10">
            <p className="text-lg text-synergySlate-600 font-bold uppercase tracking-wider">
              Dipercaya oleh 50+ Perusahaan Terkemuka di Indonesia
            </p>

            {/* Auto-scrolling logos container */}
            <div className="relative">
              <div className="flex animate-scroll-infinite space-x-20 items-center">
                {/* First set of logos */}
                <div className="flex items-center space-x-20 whitespace-nowrap">
                  {clients.map((client, index) => (
                    <div key={index} className="flex flex-col items-center space-y-4 min-w-[160px] group cursor-pointer">
                      <div className="w-28 h-28 bg-white rounded-3xl flex items-center justify-center p-2 group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                        <img
                          src={client.logo}
                          alt={client.name}
                          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <span className="text-base font-bold text-synergySlate-800 group-hover:text-synergyBlue-600 transition-colors duration-300">{client.name}</span>
                    </div>
                  ))}
                </div>

                {/* Duplicate set for seamless infinite scroll */}
                <div className="flex items-center space-x-20 whitespace-nowrap">
                  {clients.map((client, index) => (
                    <div key={`duplicate-${index}`} className="flex flex-col items-center space-y-4 min-w-[160px] group cursor-pointer">
                      <div className="w-28 h-28 bg-white rounded-3xl flex items-center justify-center p-2 group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                        <img
                          src={client.logo}
                          alt={client.name}
                          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <span className="text-base font-bold text-synergySlate-800 group-hover:text-synergyBlue-600 transition-colors duration-300">{client.name}</span>
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

export default HeroSection;
