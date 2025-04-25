
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface CourseCardProps {
  title: string;
  description: string;
  level: string;
  steps: number;
  medals: number;
  certificates: number;
}

export const CourseCard = ({ title, description, level, steps, medals, certificates }: CourseCardProps) => {
  return (
    <div className="bg-card rounded-xl p-6 border border-white/10 hover:border-primary/50 transition-all">
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <Badge variant="secondary" className="bg-accent text-white">
            {level}
          </Badge>
          <span className="text-muted-foreground">{steps} steps</span>
        </div>
        
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
        
        <div className="flex items-center justify-between pt-4">
          <div className="flex gap-4 text-sm text-muted-foreground">
            <span>earn {medals} medals</span>
            <span>{certificates} certificate</span>
          </div>
        </div>
        
        <Button className="w-full bg-primary hover:bg-primary/90">
          start course
        </Button>
      </div>
    </div>
  );
};
