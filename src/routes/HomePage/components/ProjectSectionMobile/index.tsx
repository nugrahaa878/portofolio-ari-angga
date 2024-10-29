import { LIST_PROJECTS } from "../../constants";
import ProjectItem from "../ProjectItem";

const ProjectSectionMobile = () => {
	return (
		<div className="px-48 mb-24" id="projects">
			<div className="flex gap-6 items-center">
				<h4 className="text-2xl font-semibold">Projects</h4>
				<div className="h-0.5 bg-gray-900 w-64 rounded-sm" />
			</div>

			<div className="flex flex-col gap-12 mt-7">
				{LIST_PROJECTS.map((project) => (
					<ProjectItem project={project} key={`${project.title}`} />
				))}
			</div>
		</div>
	);
};

export default ProjectSectionMobile;
