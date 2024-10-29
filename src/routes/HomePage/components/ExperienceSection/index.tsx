import briefCase from '../../../../assets/briefcase.png';
import Tag from '../../../../components/Tag';
import { LIST_WORK_ARI } from '../../constants';

const ExperienceSection = () => {
	return (
		<div className="px-48 mb-40 pt-14" id="experiences">
			<div className="flex gap-6 items-center mb-10">
				<h4 className="text-2xl font-semibold">Work Experiences</h4>
				<div className="h-0.5 bg-gray-900 w-64 rounded-sm" />
			</div>

			<div className="flex justify-between gap-10">
				<div className="flex w-full border px-8 py-6 rounded-xl flex-col">
					<div className='flex items-center gap-5 mb-10'>
						<img src={briefCase} alt='work-1' className='w-7 h-auto' />
						<p className="font-bold text-xl text-gray-800">Ari's Work</p>
					</div>

					{LIST_WORK_ARI.map((work) => (
						<div className="flex gap-4 mb-8">
							<img src={work.icon} className="max-h-8 w-auto mt-2 rounded-sm" />

							<div>
								<p className="font-semibold">{work.company}</p>
								<p className="italic text-xs mb-2">{work.position}, {work.workDuration}</p>
								<p className="text-sm">
									{work.description}
								</p>
							</div>
						</div>
					))}

					<div className='w-fit self-center mt-3'>
						<Tag text='Resume' onClick={() => window.open('https://drive.google.com/file/d/19uxkHiwbusjfcXJANYVxX0KLdGCKp1iY/view?usp=sharing', '_blank')} />
					</div>
				</div>
				<div className="flex w-full border px-8 py-6 rounded-xl flex-col">
					<div className='flex items-center gap-5 mb-10'>
						<img src={briefCase} alt='work-1' className='w-7 h-auto' />
						<p className="font-bold text-xl text-gray-800">Angga's Work</p>
					</div>

					{LIST_WORK_ARI.map((work) => (
						<div className="flex gap-4 mb-8">
							<img src={work.icon} className="max-h-8 w-auto mt-2 rounded-sm" />

							<div>
								<p className="font-semibold">{work.company}</p>
								<p className="italic text-xs mb-2">{work.position}, {work.workDuration}</p>
								<p className="text-sm">
									{work.description}
								</p>
							</div>
						</div>
					))}

					<div className='w-fit self-center mt-3'>
						<Tag text='Resume' onClick={() => window.open('https://drive.google.com/file/d/1kDf5LTZKpQVjRCz8UzcZjWYpQtw_8sGH/view', '_blank')} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ExperienceSection;
