
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

interface Step {
  id: number;
  title: string;
  content: React.ReactNode;
  completed: boolean;
}

interface CourseContentProps {
  title: string;
  description: string;
  color: string;
  steps: {
    title: string;
    content: React.ReactNode;
  }[];
}

export const CourseContent = ({ title, description, color, steps }: CourseContentProps) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const roadmapSteps = steps.map((step, index) => ({
    id: index,
    title: step.title,
    content: step.content,
    completed: index < activeStepIndex,
  }));

  const handleStepChange = (newIndex: number) => {
    setActiveStepIndex(newIndex);
  };

  const handleNext = () => {
    if (activeStepIndex < steps.length - 1) {
      setActiveStepIndex(activeStepIndex + 1);
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-white mb-2">{title}</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <Card className="border-white/10">
            <CardContent className="p-4">
              <h3 className="text-lg font-medium mb-4">Course roadmap</h3>
              <div className="space-y-4">
                {roadmapSteps.map((step, index) => (
                  <div
                    key={step.id}
                    onClick={() => handleStepChange(index)}
                    className={`flex items-center p-3 rounded-md cursor-pointer ${
                      index === activeStepIndex ? "bg-primary/20 text-primary" : "hover:bg-muted"
                    } ${step.completed ? "text-primary" : ""}`}
                  >
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                        step.completed
                          ? "bg-primary text-white"
                          : index === activeStepIndex
                          ? "border-2 border-primary"
                          : "border border-muted-foreground"
                      }`}
                    >
                      {step.completed ? "✓" : index + 1}
                    </div>
                    <span>{step.title}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Card className="border-white/10">
            <CardContent className="p-6">
              <div className="prose prose-invert max-w-none">
                {steps[activeStepIndex].content}
              </div>
              
              {activeStepIndex < steps.length - 1 && (
                <div className="flex justify-end mt-8">
                  <Button onClick={handleNext} className="bg-primary text-white">
                    Next step <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
