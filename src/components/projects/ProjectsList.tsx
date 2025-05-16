
import { Project, ProjectCard } from "./ProjectCard";

interface ProjectsListProps {
  projects: Project[];
  onApply: (projectId: number) => void;
  getBadgeColor: (level: string) => string;
}

export const ProjectsList = ({ projects, onApply, getBadgeColor }: ProjectsListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map(project => (
        <ProjectCard 
          key={project.id} 
          project={project} 
          onApply={onApply} 
          getBadgeColor={getBadgeColor}
        />
      ))}
    </div>
  );
};
