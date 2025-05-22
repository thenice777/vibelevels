
import { Layout } from "@/components/Layout";
import { CourseCard } from "@/components/CourseCard";
import { Button } from "@/components/ui/button";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const navigate = useNavigate();
  
  // Course categories with their respective courses
  const courseCategories = [
    {
      title: "beginner friendly",
      courses: [
        {
          title: "web dev pitfalls",
          description: "learn common mistakes to avoid in web development projects with practical advice and real-world examples.",
          level: "beginner friendly",
          steps: 5,
          medals: 5,
          certificates: 1,
        },
      ]
    },
    {
      title: "intermediate",
      courses: [
        {
          title: "project architecture",
          description: "master the art of structuring web projects from the ground up with step-by-step guidance on essential components.",
          level: "intermediate",
          steps: 5,
          medals: 5,
          certificates: 1,
        },
      ]
    },
    {
      title: "advanced",
      courses: [
        {
          title: "ai dev tools",
          description: "compare ai assistants like copilot with complete development environments like v0 and lovable.",
          level: "advanced",
          steps: 5,
          medals: 5,
          certificates: 1,
        },
      ]
    },
  ];

  // User stats (medals count)
  const userMedals = 10;

  return (
    <Layout>
      <div className="container mx-auto px-4">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                <Home className="h-4 w-4" />
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>courses</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-foreground">courses</h1>
          <div className="flex items-center gap-2">
            <span className="text-primary">{userMedals} medals earned</span>
          </div>
        </div>
        
        {/* Quick start - New section */}
        <div className="bg-primary/10 rounded-lg p-6 mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold mb-2">ready to start learning?</h2>
            <p className="text-muted-foreground">
              Jump straight into our first course or browse all available courses below.
            </p>
          </div>
          <Button 
            className="bg-primary hover:bg-primary/90 text-white"
            onClick={() => navigate('/unit1')}
          >
            start learning now <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>

        {courseCategories.map((category, index) => (
          <div key={index} className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-6">{category.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.courses.map((course, courseIndex) => (
                <CourseCard 
                  key={courseIndex} 
                  {...course} 
                  onClick={() => {
                    // Navigate based on course title
                    if (course.title === "web dev pitfalls" || course.title === "Vibe Coding Basics") {
                      navigate("/unit1");
                    } else {
                      // For future courses, can add different paths
                      navigate("/unit1");
                    }
                  }}
                />
              ))}
            </div>
          </div>
        ))}

        <div className="mt-16 p-6 bg-secondary/40 rounded-lg text-center">
          <h2 className="text-2xl font-semibold text-foreground mb-4">more courses coming soon</h2>
          <p className="text-foreground mb-6 max-w-2xl mx-auto">
            We're constantly developing new content. Let us know what topics you'd like to see next!
          </p>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            request a topic
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Courses;
