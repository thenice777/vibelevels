
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Skill {
  name: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  level: string;
  skills: string[];
  timeline: string;
  compensation: string;
  companyName: string;
  companyLogo: string;
}

interface ProjectCardProps {
  project: Project;
  onApply: (projectId: number) => void;
  getBadgeColor: (level: string) => string;
}

export const ProjectCard = ({ project, onApply, getBadgeColor }: ProjectCardProps) => {
  return (
    <Card className="border-white/10 bg-card hover:shadow-md transition-all">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <Badge className={`${getBadgeColor(project.level)} font-medium`}>
            {project.level}
          </Badge>
          <div className="text-sm text-primary font-semibold">{project.compensation}</div>
        </div>

        <h3 className="font-semibold text-xl mb-2 text-foreground">{project.title}</h3>
        <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.skills.map(skill => (
            <Badge key={skill} variant="outline" className="text-xs">
              {skill}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-between text-sm mb-4">
          <div className="flex items-center">
            <img 
              src={project.companyLogo} 
              alt={project.companyName}
              className="w-5 h-5 mr-2 rounded-full"
            />
            <span className="text-muted-foreground">{project.companyName}</span>
          </div>
          <div className="text-muted-foreground">
            Timeline: {project.timeline}
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full bg-primary hover:bg-primary/90" 
          onClick={() => onApply(project.id)}
        >
          apply for project
        </Button>
      </CardFooter>
    </Card>
  );
};
