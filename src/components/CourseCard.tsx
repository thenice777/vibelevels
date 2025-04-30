
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, BookOpen, CircleCheck } from "lucide-react";

interface CourseCardProps {
  title: string;
  description: string;
  level: string;
  steps: number;
  medals: number;
  certificates: number;
  onClick?: () => void;
}

export const CourseCard = ({ title, description, level, steps, medals, certificates, onClick }: CourseCardProps) => {
  // Generate a subtle gradient based on the course level
  const getGradient = (level: string) => {
    switch (level) {
      case "beginner friendly":
        return "from-[#2A2F3C]/30 to-[#292F45]/60 dark:from-[#1A1F2C]/60 dark:to-[#192035]/80";
      case "intermediate":
        return "from-[#2A2F3C]/30 to-[#2D2F42]/60 dark:from-[#1A1F2C]/60 dark:to-[#1D1F32]/80";
      case "advanced":
        return "from-[#2A2F3C]/30 to-[#312F40]/60 dark:from-[#1A1F2C]/60 dark:to-[#211F30]/80";
      default:
        return "from-[#2A2F3C]/30 to-[#2A2F3C]/60 dark:from-[#1A1F2C]/60 dark:to-[#1A1F2C]/80";
    }
  };

  // Badge color based on course level
  const getBadgeVariant = (level: string) => {
    switch (level) {
      case "beginner friendly":
        return "bg-blue-500/20 text-blue-300 hover:bg-blue-500/30";
      case "intermediate":
        return "bg-purple-500/20 text-purple-300 hover:bg-purple-500/30";
      case "advanced":
        return "bg-amber-500/20 text-amber-300 hover:bg-amber-500/30";
      default:
        return "bg-accent text-foreground";
    }
  };

  return (
    <div 
      className={`bg-gradient-to-br ${getGradient(level)} rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-300 flex flex-col h-full`}
      style={{ boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)", transition: "all 0.3s ease" }}
    >
      <div className="flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <Badge className={`${getBadgeVariant(level)} font-medium`}>
            {level}
          </Badge>
          <span className="text-muted-foreground text-sm">{steps} steps</span>
        </div>
        
        <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground mb-6 flex-grow">{description}</p>
        
        <div className="flex items-center gap-4 mb-5">
          <div className="flex items-center text-sm text-muted-foreground">
            <Award className="mr-1.5 h-4 w-4 text-primary/70" />
            <span>{medals} medals</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <CircleCheck className="mr-1.5 h-4 w-4 text-primary/70" />
            <span>{certificates} certificate</span>
          </div>
        </div>
        
        <Button 
          className="w-full bg-primary hover:bg-primary/90 text-foreground flex items-center justify-center gap-2"
          onClick={onClick}
        >
          <BookOpen className="h-4 w-4" />
          start course
        </Button>
      </div>
    </div>
  );
};
