import { Code2 } from 'lucide-react';
import { LIST_WORK } from '../../constants';
import { Shield, Globe, Award, Zap, Clock, Database, Laptop } from "lucide-react";
import { TECHNICAL_EXPERTISE, TECH_STACK } from "../../constants";

const ExperienceSectionMobile = () => {
	return (
		<div className="px-6 py-10 bg-gray-100">
			<div className="mb-8 text-center">
				<h3 className="text-3xl font-semibold mb-4">Our Team</h3>
				<div className="flex justify-center items-center">
					<Code2 className="w-16 h-16 text-gray-500" />
				</div>
			</div>
			<div className="space-y-6">
				{LIST_WORK?.map((work, index) => (
					<div
						key={index}
						className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow"
					>
						<img
							src={work.icon || '/default-icon.png'}
							alt={work.company}
							className="w-12 h-12 rounded-full object-cover"
						/>
						<div className="flex-1">
							<h4 className="font-semibold text-lg text-gray-800">
								{work.position}
							</h4>
							<p className="text-blue-600 font-medium">{work.company}</p>
							<p className="text-gray-500 text-sm">{work.workDuration}</p>
							<p className="text-gray-600 text-sm mt-2">
								{work.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

const ExpertiseSectionMobile = () => {
	// Group TECH_STACK by category
	const groupedTechStack = TECH_STACK.reduce((acc: Record<string, string[]>, tech) => {
		if (!acc[tech.category]) {
			acc[tech.category] = [];
		}
		acc[tech.category].push(tech.name);
		return acc;
	}, {});

	return (
		<section className="py-16 bg-gradient-to-br from-synergySlate-50 to-synergyBlue-50">
			<div className="container mx-auto px-4">
				{/* Section Header */}
				<div className="text-center mb-12">
					<h2 className="text-3xl lg:text-4xl font-bold text-synergySlate-900 mb-4">
						Keahlian & Kompetensi Kami
					</h2>
					<p className="text-lg text-synergySlate-600 max-w-2xl mx-auto">
						Tim ahli dengan pengalaman mendalam dalam pengembangan software modern,
						arsitektur scalable, dan teknologi terdepan.
					</p>
				</div>

				{/* Expertise Areas - Mobile Grid */}
				<div className="space-y-8 mb-16">
					<div className="grid gap-6">
						{TECHNICAL_EXPERTISE.map((expertise, index) => (
							<div
								key={index}
								className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-synergySlate-100 hover:border-synergyBlue-200"
							>
								<div className="flex items-start space-x-4">
									<div className="w-12 h-12 bg-gradient-to-br from-synergyBlue-100 to-synergyIndigo-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 text-2xl">
										{expertise.icon}
									</div>
									<div className="flex-1">
										<h3 className="text-lg font-bold text-synergySlate-900 group-hover:text-synergyBlue-600 transition-colors duration-300 mb-2">
											{expertise.title}
										</h3>
										<p className="text-synergySlate-600 text-sm leading-relaxed mb-3">
											{expertise.description}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Technology Stack */}
				<div className="mb-16">
					<div className="text-center mb-8">
						<h3 className="text-2xl font-bold text-synergySlate-900 mb-3">
							Technology Stack
						</h3>
						<p className="text-synergySlate-600">
							Modern tools dan framework untuk membangun solusi yang robust
						</p>
					</div>

					<div className="grid grid-cols-2 gap-4">
						{Object.entries(groupedTechStack).map(([category, technologies]) => (
							<div
								key={category}
								className="bg-white rounded-xl p-4 shadow-sm border border-synergySlate-100 hover:shadow-md transition-shadow duration-300"
							>
								<h4 className="font-semibold text-synergySlate-900 mb-3 text-sm">
									{category}
								</h4>
								<div className="flex flex-wrap gap-2">
									{technologies.slice(0, 4).map((technology, index) => (
										<span
											key={index}
											className="px-2 py-1 bg-synergySlate-50 text-synergySlate-700 rounded text-xs"
										>
											{technology}
										</span>
									))}
									{technologies.length > 4 && (
										<span className="px-2 py-1 text-synergyBlue-600 text-xs font-medium">
											+{technologies.length - 4}
										</span>
									)}
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Quality & Standards */}
				<div className="bg-white rounded-2xl p-8 shadow-lg border border-synergySlate-100">
					<div className="text-center mb-8">
						<h3 className="text-2xl font-bold text-synergySlate-900 mb-3">
							Quality & Standards
						</h3>
						<p className="text-synergySlate-600">
							Komitmen kami terhadap kualitas dan standar pengembangan terbaik
						</p>
					</div>

					<div className="grid grid-cols-2 gap-4 mb-8">
						{[
							{
								icon: <Shield className="w-6 h-6 text-synergyBlue-600" />,
								title: "ISO 27001",
								description: "Certified"
							},
							{
								icon: <Globe className="w-6 h-6 text-synergyIndigo-600" />,
								title: "Agile",
								description: "Methodology"
							},
							{
								icon: <Award className="w-6 h-6 text-synergyEmerald-600" />,
								title: "Code Quality",
								description: "Standards"
							},
							{
								icon: <Zap className="w-6 h-6 text-synergyAmber-600" />,
								title: "Performance",
								description: "Optimized"
							}
						].map((standard, index) => (
							<div
								key={index}
								className="flex items-center space-x-3 p-4 bg-synergySlate-50 rounded-xl"
							>
								<div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
									{standard.icon}
								</div>
								<div>
									<div className="font-bold text-synergySlate-900 text-sm">
										{standard.title}
									</div>
									<div className="text-xs text-synergySlate-600">
										{standard.description}
									</div>
								</div>
							</div>
						))}
					</div>

					{/* Why Choose Us */}
					<div className="grid gap-4">
						{[
							{
								icon: <Clock className="w-5 h-5 text-synergyBlue-600" />,
								title: "24/7 Support",
								description: "Tim teknis siap membantu kapan saja"
							},
							{
								icon: <Database className="w-5 h-5 text-synergyIndigo-600" />,
								title: "Data Security",
								description: "Enkripsi end-to-end dan backup otomatis"
							},
							{
								icon: <Laptop className="w-5 h-5 text-synergyEmerald-600" />,
								title: "Modern Tech",
								description: "Menggunakan teknologi terdepan dan terbaru"
							}
						].map((benefit, index) => (
							<div
								key={index}
								className="flex items-start space-x-3 p-3 bg-gradient-to-r from-synergyBlue-50 to-synergyIndigo-50 rounded-lg"
							>
								<div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm">
									{benefit.icon}
								</div>
								<div>
									<h4 className="font-semibold text-synergySlate-900 text-sm mb-1">
										{benefit.title}
									</h4>
									<p className="text-synergySlate-600 text-xs">
										{benefit.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default ExperienceSectionMobile;
export { ExpertiseSectionMobile };
