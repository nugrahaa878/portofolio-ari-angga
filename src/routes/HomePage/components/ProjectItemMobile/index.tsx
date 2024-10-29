import { Project } from "../../types";
import playStoreImg from "../../../../assets/playstore.png";
import webImg from "../../../../assets/web.png";
import Tag from "../../../../components/Tag";

interface Props {
	project: Project;
}

const ProjectItemMobile = ({ project }: Props) => {
	return (
		<div className="flex flex-col gap-1">
			<div className="flex flex-col items-center">
				<div className="w-40 mb-10">
					<img src={project.imgUrl} alt={`Project-${project.title}`} />
				</div>

				<div className="flex flex-col px-5 items-center">
					<h6 className="text-md font-semibold mb-3">{project.title}</h6>
					<div className="flex flex-col gap-2">
						{project.playStore && (
							<div className="flex items-center gap-2">
								<div>
									<img src={playStoreImg} width={15} alt="playstore" />
								</div>
								<p className="italic text-xs">{project.playStore}</p>
							</div>
						)}
						{project.appStore && (
							<div className="flex items-center gap-2">
								<div>
									<img src={playStoreImg} width={15} alt="appStore" />
								</div>
								<p className="italic text-xs">{project.playStore}</p>
							</div>
						)}
						{project.webLink && (
							<a href={project.webLink} target="_blank">
								<div className="flex items-center gap-2">
									<div>
										<img src={webImg} width={15} alt="web" />
									</div>
									<p className="italic text-xs">{project.webLink}</p>
								</div>
							</a>
						)}
					</div>
				</div>
			</div>


			<div className="flex flex-col gap-2 px-5">
				<p className="text-sm mt-2">{project.details}</p>

				<div className="flex gap-4 mt-2 flex-wrap justify-center">
					{project.techStack.map((tech) => (
						<Tag text={tech} key={tech} />
					))}
				</div>
			</div>
		</div>
	);
};

export default ProjectItemMobile;
