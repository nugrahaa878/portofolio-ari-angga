import { LIST_PROJECTS } from "../../constants";
import ProjectItemMobile from "../ProjectItemMobile";

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

export default ProjectSectionMobile;
