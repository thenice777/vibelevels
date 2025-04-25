
import { Navigation } from "@/components/Navigation";
import { CourseCard } from "@/components/CourseCard";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Index = () => {
  const courses = [
    {
      title: "web dev pitfalls",
      description: "learn common mistakes to avoid in web development projects with practical advice and real-world examples.",
      level: "beginner friendly",
      steps: 5,
      medals: 5,
      certificates: 1,
    },
    {
      title: "project architecture",
      description: "master the art of structuring web projects from the ground up with step-by-step guidance on essential components.",
      level: "intermediate",
      steps: 5,
      medals: 5,
      certificates: 1,
    },
    {
      title: "ai dev tools",
      description: "compare ai assistants like copilot with complete development environments like v0 and lovable.",
      level: "advanced",
      steps: 5,
      medals: 5,
      certificates: 1,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            vibelevels
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            go from 0 to 1 fast with vibelevels - your launchpad for web development.
          </p>
        </section>

        {/* Courses Section */}
        <section className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            top courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <CourseCard key={course.title} {...course} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              browse all courses →
            </Button>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            ready to level up your skills?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            join thousands of developers who are mastering web development through our gamified learning platform.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
