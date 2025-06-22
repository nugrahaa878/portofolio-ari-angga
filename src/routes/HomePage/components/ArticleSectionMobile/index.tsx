import { ExternalLink, TrendingUp, Users, Clock } from "lucide-react";
import { LIST_POST } from "../../constants";

const CaseStudiesSectionMobile = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-synergyGray-900 mb-4">
            Case Studies & Insights
          </h2>
          <p className="text-lg text-synergyGray-600 max-w-2xl mx-auto">
            Pembelajaran dan hasil nyata dari implementasi solusi teknologi kesehatan
            di berbagai institusi medis.
          </p>
        </div>

        {/* Case Studies List - Mobile Stack */}
        <div className="space-y-8 mb-12">
          {LIST_POST.map((post, index) => (
            <div
              key={index}
              className="group bg-white border-2 border-synergyGray-100 hover:border-synergyTeal-200 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.imgLink}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Badge */}
                <div className="inline-flex items-center px-3 py-1 bg-synergyBlue-50 text-synergyBlue-700 rounded-full text-xs font-semibold mb-3">
                  {post.section}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-synergyGray-900 group-hover:text-synergyBlue-600 transition-colors duration-300 mb-3 leading-tight">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="text-synergyGray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.content}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-xs text-synergyGray-500">
                    <Clock className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <button className="flex items-center space-x-1 text-synergyBlue-600 hover:text-synergyBlue-700 text-sm font-semibold group-hover:translate-x-1 transition-transform duration-300">
                    <span>Baca Selengkapnya</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-br from-synergyBlue-600 to-synergyTeal-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-3">
              Impact & Results
            </h3>
            <p className="text-lg opacity-90">
              Dampak nyata dari solusi teknologi kesehatan kami
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              {
                icon: <TrendingUp className="w-8 h-8" />,
                number: "89%",
                label: "Peningkatan Efisiensi",
                description: "Rata-rata peningkatan efisiensi operasional"
              },
              {
                icon: <Users className="w-8 h-8" />,
                number: "10,000+",
                label: "Pasien Terlayani",
                description: "Pasien yang terlayani melalui platform kami"
              },
              {
                icon: <Clock className="w-8 h-8" />,
                number: "24/7",
                label: "Uptime",
                description: "Ketersediaan sistem yang terjamin"
              },
              {
                icon: <ExternalLink className="w-8 h-8" />,
                number: "25+",
                label: "Institusi",
                description: "Rumah sakit dan klinik yang mempercayai kami"
              }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 bg-white/10 backdrop-blur rounded-xl border border-white/20"
              >
                <div className="flex justify-center mb-3 text-white/90">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold mb-1">
                  {stat.number}
                </div>
                <div className="text-sm font-semibold mb-2 opacity-90">
                  {stat.label}
                </div>
                <div className="text-xs opacity-75 leading-relaxed">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-8">
            <button className="bg-white text-synergyBlue-600 hover:bg-synergyGray-50 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 active:scale-95">
              Lihat Semua Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSectionMobile;
