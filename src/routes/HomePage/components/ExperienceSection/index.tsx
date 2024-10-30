import briefCase from '../../../../assets/briefcase.png';
import Tag from '../../../../components/Tag';
import { LIST_WORK_ANGGA, LIST_WORK_ARI } from '../../constants';
import linkedin from "../../../../assets/linkedin.png";
import github from "../../../../assets/github.png";
import medium from "../../../../assets/medium.png";

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
					<div className="w-fit self-center mt-3 flex gap-4">
						<a href="https://www.linkedin.com/in/nugrahaa878/" target="_blank">
							<img src={linkedin} width={40} alt="linkedin" />
						</a>
						<a href="https://github.com/nugrahaa878" target="_blank">
							<img src={github} width={40} alt="github" />
						</a>
						<a href="https://medium.com/@nugrahaa878" target="_blank">
							<img src={medium} width={40} alt="medium" />
						</a>
					</div>
				</div>
				<div className="flex w-full border px-8 py-6 rounded-xl flex-col">
					<div className='flex items-center gap-5 mb-10'>
						<img src={briefCase} alt='work-1' className='w-7 h-auto' />
						<p className="font-bold text-xl text-gray-800">Angga's Work</p>
					</div>

					{LIST_WORK_ANGGA.map((work) => (
						<div className="flex gap-4 mb-8 items-start">
							<img
								src={work.icon}
								className="mt-2 rounded-sm min-w-[16px] max-w-[32px] object-contain"
								alt="work icon"
							/>

							<div>
								<p className="font-semibold">{work.company}</p>
								<p className="italic text-xs mb-2">
									{work.position}, {work.workDuration}
								</p>
								<p className="text-sm">{work.description}</p>
							</div>
						</div>

					))}

					<div className='w-fit self-center mt-3'>
						<Tag text='Resume' onClick={() => window.open('https://drive.google.com/file/d/1kDf5LTZKpQVjRCz8UzcZjWYpQtw_8sGH/view', '_blank')} />
					</div>
					<div className="w-fit self-center mt-3 flex gap-4">
						<a href="https://www.linkedin.com/in/muherlangga/" target="_blank">
							<img src={linkedin} width={40} alt="linkedin" />
						</a>
						<a href="https://github.com/angga1518" target="_blank">
							<img src={github} width={40} alt="github" />
						</a>
						<a href="https://medium.com/@erlanggamuhammad01" target="_blank">
							<img src={medium} width={40} alt="medium" />
						</a>
					</div>
				</div>
				<div className="flex w-full border px-8 py-6 rounded-xl flex-col">
    <div className='flex items-center gap-5 mb-10'>
        <img src={briefCase} alt='work-1' className='w-7 h-auto' />
        <p className="font-bold text-xl text-gray-800">Nur's Work</p>
    </div>

    <div className="flex gap-4 mb-8">
        <img src="https://cdn-images-1.medium.com/v2/resize:fit:1200/1*md5YYw2WZ39LWnDtE2Vb5A.png" className="max-h-8 w-auto mt-2 rounded-sm" alt="traveloka" />
        <div>
            <p className="font-semibold">Traveloka</p>
            <p className="italic text-xs mb-2">Backend Engineer, Dec 2022 - Now</p>
            <p className="text-sm">
                - Worked as a backend engineer for Traveloka PayLater
            </p>
        </div>
    </div>

    <div className="flex gap-4 mb-8">
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Shopee-logo.jpg" className="max-h-8 w-auto mt-2 rounded-sm" alt="shopee" />
        <div>
            <p className="font-semibold">Shopee</p>
            <p className="italic text-xs mb-2">Engineer, Feb 2022 - Dec 2022</p>
            <p className="text-sm">
                - Worked in Singapore regional team as software quality assurance for a meantime<br/>
                - Assisted regional and local product manager in a new feature release
            </p>
        </div>
    </div>

    <div className='w-fit self-center mt-3'>
        <Tag text='Resume' onClick={() => window.open('https://drive.google.com/file/d/1zkot6d1cxp8qvNQlvPyuaM70iaVDWGMn/view?usp=sharing', '_blank')} />
    </div>
    <div className="w-fit self-center mt-3 flex gap-4">
        <a href="https://www.linkedin.com/in/hasanahnur/" target="_blank">
            <img src={linkedin} width={40} alt="linkedin" />
        </a>
        <a href="https://github.com/hasanahnur3" target="_blank">
            <img src={github} width={40} alt="github" />
        </a>
    </div>
</div>

			</div>
		</div>
	);
};

export default ExperienceSection;
