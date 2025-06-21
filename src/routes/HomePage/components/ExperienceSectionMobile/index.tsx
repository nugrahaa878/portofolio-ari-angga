import { Activity } from 'lucide-react';
import { LIST_WORK, TEAM_INFO } from '../../constants';

const ExperienceSectionMobile = () => {
	return (
		<div className="mb-40 pt-14 px-6" id="experiences">
			<div className="flex gap-6 items-center mb-10">
				<h4 className="text-2xl font-semibold text-healthcareGray-900">Our Experience</h4>
				<div className="h-0.5 bg-healthcareBlue-600 w-32 rounded-sm" />
			</div>

			<div className="space-y-8">
				{/* Company Info */}
				<div className="bg-white border-2 border-healthcareGray-100 rounded-xl p-6">
					<div className='flex items-center gap-4 mb-6'>
						<div className="w-10 h-10 bg-gradient-to-br from-healthcareBlue-600 to-healthcareTeal-600 rounded-lg flex items-center justify-center">
							<Activity className="w-6 h-6 text-white" />
						</div>
						<div>
							<p className="font-bold text-xl text-healthcareGray-900">{TEAM_INFO.companyName}</p>
							<p className="text-sm text-healthcareGray-600">{TEAM_INFO.tagline}</p>
						</div>
					</div>

					<p className="text-healthcareGray-700 mb-6">{TEAM_INFO.description}</p>

					<div className="grid grid-cols-2 gap-4 mb-6">
						<div className="text-center p-4 bg-healthcareBlue-50 rounded-lg">
							<div className="text-2xl font-bold text-healthcareBlue-600">{TEAM_INFO.experience}</div>
							<div className="text-xs text-healthcareGray-600">Experience</div>
						</div>
						<div className="text-center p-4 bg-healthcareTeal-50 rounded-lg">
							<div className="text-2xl font-bold text-healthcareTeal-600">50+</div>
							<div className="text-xs text-healthcareGray-600">Healthcare Projects</div>
						</div>
					</div>
				</div>

				{/* Work Experience */}
				<div className="bg-white border-2 border-healthcareGray-100 rounded-xl p-6">
					<h5 className="font-bold text-lg text-healthcareGray-900 mb-6">Professional Experience</h5>

					<div className="space-y-6">
						{LIST_WORK.map((work, index) => (
							<div key={index} className="flex gap-4 pb-6 border-b border-healthcareGray-100 last:border-b-0">
								<img src={work.icon} className="w-12 h-12 mt-1 rounded-lg object-contain" alt={work.company} />

								<div className="flex-1">
									<p className="font-semibold text-healthcareGray-900">{work.company}</p>
									<p className="text-healthcareBlue-600 text-sm mb-2">{work.position}</p>
									<p className="text-xs text-healthcareGray-500 mb-3">{work.workDuration}</p>
									<p className="text-sm text-healthcareGray-700 leading-relaxed">
										{work.description}
									</p>
								</div>
							</div>
						))}
					</div>

					{/* Contact CTA */}
					<div className="mt-8 text-center">
						<button className="w-full bg-healthcareBlue-600 hover:bg-healthcareBlue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200">
							Schedule Consultation
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ExperienceSectionMobile;
