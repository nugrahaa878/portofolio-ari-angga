import { LIST_PROJECTS } from "../../constants";
import ProjectItemMobile from "../ProjectItemMobile";
import { CheckCircle } from "lucide-react";
import { SOFTWARE_SERVICES } from "../../constants";

const ProjectSectionMobile = () => {
	return (
		<div className="px-2 mb-24" id="projects">
			<div className="flex gap-6 items-center px-10">
				<h4 className="text-2xl font-semibold">Projects</h4>
				<div className="h-0.5 bg-gray-900 w-64 rounded-sm" />
			</div>

			<div className="flex flex-col gap-12 mt-7">
				{LIST_PROJECTS.map((project) => (
					<ProjectItemMobile project={project} key={`${project.title}`} />
				))}
			</div>
		</div>
	);
};

const ServicesSectionMobile = () => {
	return (
		<section className="py-16 bg-white">
			<div className="container mx-auto px-4">
				{/* Section Header */}
				<div className="text-center mb-12">
					<h2 className="text-3xl lg:text-4xl font-bold text-synergySlate-900 mb-4">
						Solusi Software Terdepan
					</h2>
					<p className="text-lg text-synergySlate-600 max-w-2xl mx-auto">
						Solusi teknologi komprehensif untuk meningkatkan efisiensi bisnis
						dan mendorong transformasi digital.
					</p>
				</div>

				{/* Services List - Mobile Stack */}
				<div className="space-y-6">
					{SOFTWARE_SERVICES.map((service) => (
						<div
							key={service.id}
							className="group bg-white border-2 border-synergySlate-100 hover:border-synergyBlue-200 rounded-2xl p-6 transition-all duration-300 shadow-sm hover:shadow-lg"
						>
							{/* Service Header */}
							<div className="flex items-start space-x-4 mb-4">
								<div className="w-12 h-12 bg-gradient-to-br from-synergyBlue-100 to-synergyIndigo-100 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
									{service.icon}
								</div>
								<div className="flex-1">
									<h3 className="text-xl font-bold text-synergySlate-900 group-hover:text-synergyBlue-600 transition-colors duration-300 mb-2">
										{service.title}
									</h3>
									<p className="text-synergySlate-600 leading-relaxed text-sm">
										{service.description}
									</p>
								</div>
							</div>

							{/* Features List */}
							<div className="space-y-2 mb-4">
								{service.features.map((feature, index) => (
									<div key={index} className="flex items-center space-x-3">
										<CheckCircle className="w-4 h-4 text-synergyEmerald-500 flex-shrink-0" />
										<span className="text-synergySlate-700 text-sm font-medium">
											{feature}
										</span>
									</div>
								))}
							</div>

							{/* Learn More Link */}
							<div className="pt-2">
								<button className="text-synergyBlue-600 hover:text-synergyBlue-700 font-semibold text-sm flex items-center group-hover:translate-x-1 transition-transform duration-300">
									Pelajari Lebih Lanjut →
								</button>
							</div>
						</div>
					))}
				</div>

				{/* CTA Section */}
				<div className="mt-12">
					<div className="bg-gradient-to-r from-synergyBlue-600 to-synergyIndigo-600 rounded-2xl p-8 text-white text-center">
						<h3 className="text-2xl font-bold mb-3">
							Siap Transformasi Digital?
						</h3>
						<p className="text-lg mb-6 opacity-90">
							Mari diskusikan bagaimana solusi teknologi kami dapat mendorong
							pertumbuhan bisnis Anda.
						</p>
						<div className="flex flex-col gap-3">
							<button className="bg-white text-synergyBlue-600 hover:bg-synergySlate-50 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 active:scale-95">
								Konsultasi Gratis
							</button>
							<button className="border-2 border-white text-white hover:bg-white hover:text-synergyBlue-600 px-6 py-3 rounded-lg font-semibold transition-all duration-200 active:scale-95">
								Lihat Portfolio
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProjectSectionMobile;
export { ServicesSectionMobile };
