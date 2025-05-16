
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void;
}

export const EmptyState = ({ 
  icon: Icon, 
  title, 
  description, 
  buttonText, 
  onButtonClick 
}: EmptyStateProps) => {
  return (
    <div className="text-center py-16">
      <Icon className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground mb-6">
        {description}
      </p>
      <Button 
        variant="outline" 
        onClick={onButtonClick}
      >
        {buttonText}
      </Button>
    </div>
  );
};
