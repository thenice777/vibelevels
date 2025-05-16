
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Briefcase, ArrowRight, Star, MessageCircle, BookOpen
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROJECTS_DATA.available.map(project => (
                <Card key={project.id} className="border-white/10 bg-card hover:shadow-md transition-all">
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
                      onClick={() => applyForProject(project.id)}
                    >
                      apply for project
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="inProgress">
            {PROJECTS_DATA.inProgress.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Project cards would be rendered here */}
              </div>
            ) : (
              <div className="text-center py-16">
                <Briefcase className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                <h3 className="text-lg font-medium mb-2">No projects in progress</h3>
                <p className="text-muted-foreground mb-6">
                  Apply for projects to start building your portfolio
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => document.querySelector('button[value="available"]')?.click()}
                >
                  browse available projects
                </Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="completed">
            {PROJECTS_DATA.completed.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Project cards would be rendered here */}
              </div>
            ) : (
              <div className="text-center py-16">
                <Star className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                <h3 className="text-lg font-medium mb-2">No completed projects yet</h3>
                <p className="text-muted-foreground mb-6">
                  Complete projects to showcase your skills
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => document.querySelector('button[value="available"]')?.click()}
                >
                  browse available projects
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* Information Section */}
        <div className="bg-secondary/20 border border-border rounded-xl p-8 mb-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">how it works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
              <div className="text-center">
                <div className="bg-primary/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-medium mb-2">apply for projects</h3>
                <p className="text-sm text-muted-foreground">
                  Browse and apply for projects that match your skills and interests
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <h3 className="font-medium mb-2">complete the work</h3>
                <p className="text-sm text-muted-foreground">
                  Work with guidance from mentors to deliver high-quality results
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <h3 className="font-medium mb-2">get paid & showcase</h3>
                <p className="text-sm text-muted-foreground">
                  Earn compensation and add your work to your professional portfolio
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
