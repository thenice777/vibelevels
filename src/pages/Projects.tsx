import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, ArrowRight, Star, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ProjectsList } from "@/components/projects/ProjectsList";
import { EmptyState } from "@/components/projects/EmptyState";
import { InfoSection } from "@/components/projects/InfoSection";
import { Project } from "@/components/projects/ProjectCard";

// Dummy data for projects
const PROJECTS_DATA = {
  available: [
    {
      id: 1,
      title: "E-commerce Product Page",
      description: "Build a responsive product page with interactive elements for an online store",
      level: "intermediate",
      skills: ["React", "CSS", "JavaScript"],
      timeline: "2 weeks",
      compensation: "$200",
      companyName: "TechRetail Inc.",
      companyLogo: "/placeholder.svg",
    },
    {
      id: 2,
      title: "Portfolio Website Template",
      description: "Create a customizable portfolio template for creative professionals",
      level: "beginner",
      skills: ["HTML", "CSS", "JavaScript"],
      timeline: "1 week",
      compensation: "$100",
      companyName: "DesignHub",
      companyLogo: "/placeholder.svg",
    },
    {
      id: 3,
      title: "Weather Dashboard App",
      description: "Develop a weather tracking app with data visualization and forecasting",
      level: "intermediate",
      skills: ["React", "API Integration", "Charts"],
      timeline: "3 weeks",
      compensation: "$300",
      companyName: "MeteoTech",
      companyLogo: "/placeholder.svg",
    }
  ],
  inProgress: [
    // Empty by default, would be populated by user data from Supabase
  ],
  completed: [
    // Empty by default, would be populated by user data from Supabase
  ]
};

const Projects = () => {
  const navigate = useNavigate();

  // These functions will eventually connect to Supabase
  const applyForProject = (projectId: number) => {
    alert(`Applied for project #${projectId}. This will be connected to Supabase in the future.`);
    // In the future: Update user's project applications in Supabase
  };

  const getBadgeColor = (level: string) => {
    switch (level) {
      case "beginner":
        return "bg-blue-500/20 text-blue-300 hover:bg-blue-500/30";
      case "intermediate":
        return "bg-purple-500/20 text-purple-300 hover:bg-purple-500/30";
      case "advanced":
        return "bg-amber-500/20 text-amber-300 hover:bg-amber-500/30";
      default:
        return "bg-accent text-foreground";
    }
  };

  // Function to navigate to available projects tab
  const navigateToAvailableProjects = () => {
    const availableTabButton = document.querySelector('button[value="available"]') as HTMLElement;
    if (availableTabButton) {
      availableTabButton.click();
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-6">
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                <Home className="h-4 w-4" />
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>projects</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">earn while you learn</h1>
            <p className="text-muted-foreground mt-2">
              Build your portfolio with real-world projects that pay
            </p>
          </div>
          <Button 
            onClick={() => navigate("/dashboard")}
            className="bg-primary hover:bg-primary/90"
          >
            view my progress <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <Tabs defaultValue="available" className="mb-12">
          <TabsList className="mb-6">
            <TabsTrigger value="available">available projects</TabsTrigger>
            <TabsTrigger value="inProgress">in progress</TabsTrigger>
            <TabsTrigger value="completed">completed</TabsTrigger>
          </TabsList>
          
          <TabsContent value="available">
            <ProjectsList 
              projects={PROJECTS_DATA.available as Project[]} 
              onApply={applyForProject}
              getBadgeColor={getBadgeColor}
            />
          </TabsContent>

          <TabsContent value="inProgress">
            {PROJECTS_DATA.inProgress.length > 0 ? (
              <ProjectsList 
                projects={PROJECTS_DATA.inProgress as Project[]} 
                onApply={applyForProject}
                getBadgeColor={getBadgeColor}
              />
            ) : (
              <EmptyState 
                icon={Briefcase}
                title="No projects in progress"
                description="Apply for projects to start building your portfolio"
                buttonText="browse available projects"
                onButtonClick={navigateToAvailableProjects}
              />
            )}
          </TabsContent>

          <TabsContent value="completed">
            {PROJECTS_DATA.completed.length > 0 ? (
              <ProjectsList 
                projects={PROJECTS_DATA.completed as Project[]} 
                onApply={applyForProject}
                getBadgeColor={getBadgeColor}
              />
            ) : (
              <EmptyState 
                icon={Star}
                title="No completed projects yet"
                description="Complete projects to showcase your skills"
                buttonText="browse available projects"
                onButtonClick={navigateToAvailableProjects}
              />
            )}
          </TabsContent>
        </Tabs>

        <InfoSection />
      </div>
    </Layout>
  );
};

export default Projects;
