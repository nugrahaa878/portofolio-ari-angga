import { TECHNICAL_EXPERTISE, TECH_STACK } from "../../constants";

const TechnicalExpertiseSection = () => {
	return (
		<section id="expertise" className="py-20 bg-synergySlate-50">
			<div className="container mx-auto px-6">
				{/* Section Header */}
				<div className="text-center mb-16">
					<h2 className="text-4xl lg:text-5xl font-bold text-synergySlate-900 mb-6">
						Technical Expertise
					</h2>
					<p className="text-xl text-synergySlate-600 max-w-3xl mx-auto">
						Our comprehensive technical expertise spans modern development frameworks, cloud technologies,
						and best practices to deliver scalable, secure, and high-performance software solutions.
					</p>
				</div>

				{/* Expertise Grid */}
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
					{TECHNICAL_EXPERTISE.map((expertise, index) => (
						<div
							key={index}
							className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300 border border-synergySlate-100"
						>
							<div className="text-4xl mb-4">{expertise.icon}</div>
							<h3 className="text-lg font-bold text-synergySlate-900 mb-3">
								{expertise.title}
							</h3>
							<p className="text-synergySlate-600 text-sm leading-relaxed">
								{expertise.description}
							</p>
						</div>
					))}
				</div>

				{/* Technology Stack */}
				<div className="bg-white rounded-2xl p-12 shadow-lg border border-synergySlate-100">
					<div className="text-center mb-12">
						<h3 className="text-3xl font-bold text-synergySlate-900 mb-4">
							Technology Stack
						</h3>
						<p className="text-synergySlate-600">
							We use cutting-edge technologies to build robust, scalable, and modern software solutions
						</p>
					</div>

					{/* Tech Categories */}
					<div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
						{['Frontend', 'Backend', 'Database', 'Cloud', 'DevOps', 'Mobile', 'Language'].map((category) => (
							<div key={category} className="space-y-4">
								<h4 className="font-semibold text-synergySlate-900 text-center pb-2 border-b-2 border-synergyBlue-200">
									{category}
								</h4>
								<div className="space-y-2">
									{TECH_STACK
										.filter(tech => tech.category === category)
										.map((tech, index) => (
											<div
												key={index}
												className="bg-synergySlate-50 hover:bg-synergyBlue-50 px-3 py-2 rounded-lg text-sm text-synergySlate-700 hover:text-synergyBlue-700 transition-colors duration-200 text-center cursor-pointer"
											>
												{tech.name}
											</div>
										))}
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Quality Badge */}
				<div className="mt-16 text-center">
					<div className="inline-flex items-center bg-synergyEmerald-50 border-2 border-synergyEmerald-200 rounded-full px-8 py-4">
						<div className="w-6 h-6 bg-synergyEmerald-500 rounded-full mr-3 flex items-center justify-center">
							<svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
								<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
							</svg>
						</div>
						<span className="text-synergyEmerald-700 font-semibold">
							ISO 27001 Certified Development Process
						</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TechnicalExpertiseSection;
