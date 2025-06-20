import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { CourseCard } from "@/components/CourseCard";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ChevronRight, ArrowRight, Briefcase, MessageCircle } from "lucide-react";
import { ValueProposition } from "@/components/ValueProposition";

const Index = () => {
  const navigate = useNavigate();
  
  // Only show the first course (lock others)
  const courses = [
    {
      title: "Vibe Coding Basics",
      description: "Learn the foundations of vibe coding: what it is, its benefits, and best practices for collaborating with AI tools.",
      level: "beginner friendly",
      steps: 5,
      medals: 5,
      certificates: 1,
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Vibelevels",
    "url": "https://vibelevels.com",
    "logo": "https://vibelevels.com/vl-favicon.svg",
    "description": "Master vibe coding and AI-assisted development with hands-on courses, real projects, and expert mentorship.",
    "educationalLevel": "Beginner to Advanced",
    "teaches": ["AI-Assisted Coding", "Vibe Coding", "Web Development", "AI Programming", "ChatGPT Coding", "GitHub Copilot"],
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "name": "Vibe Coding Certificate"
    },
    "offers": {
      "@type": "Course",
      "name": "Vibe Coding Mastery",
      "description": "Comprehensive course on AI-assisted development and vibe coding techniques",
      "provider": {
        "@type": "Organization",
        "name": "Vibelevels"
      }
    }
  };

  return (
    <Layout>
      <SEO
        title="Vibelevels - Master AI-Assisted Coding | Learn Vibe Coding Fast"
        description="Master vibe coding with AI tools like ChatGPT, Claude & GitHub Copilot. Learn AI-assisted development, build real projects, and earn while you code. Start your AI coding journey today!"
        keywords="vibe coding, AI coding, AI-assisted development, ChatGPT coding, GitHub Copilot, Claude AI, learn to code with AI, AI programming tutorial, web development AI, coding with artificial intelligence"
        canonical="https://vibelevels.com"
        structuredData={structuredData}
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/5 dark:bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-primary/10 dark:bg-primary/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
            <span className="text-primary">vibe</span>levels
          </h1>
          <p className="text-xl md:text-2xl text-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            go from 0 to 1 fast with vibelevels — your launchpad for modern web development
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6"
              onClick={() => navigate('/courses')}
            >
              browse courses <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary/10 font-medium px-6" 
              onClick={() => navigate('/dashboard')}
            >
              explore dashboard
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="text-xs text-muted-foreground border border-dashed border-primary/30 hover:bg-primary/10 px-6"
              onClick={() => navigate('/testlayout')}
            >
              test layout page
            </Button>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <ValueProposition />

      {/* Courses Section */}
      <section className="container mx-auto px-4 py-20 md:py-24">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-foreground">
            top courses
          </h2>
          <Button 
            variant="outline" 
            className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary dark:border-primary/40 dark:hover:bg-primary/20"
            onClick={() => navigate('/courses')}
          >
            view all <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Only the first course card is active; button launches quiz */}
          <CourseCard 
            key={courses[0].title}
            {...courses[0]}
            onClick={() => navigate("/unit1")}
          />
          {/* Other cards are locked or hidden */}
        </div>
      </section>

      {/* New Featured Sections Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Earn While You Learn Box */}
          <div className="bg-gradient-to-br from-[#2A2F3C]/30 to-[#292F45]/60 dark:from-[#1A1F2C]/60 dark:to-[#192035]/80 rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-foreground">earn while you learn</h3>
              <Briefcase className="h-5 w-5 text-primary" />
            </div>
            <p className="text-muted-foreground mb-6">
              Build your portfolio with real-world projects that pay while gaining practical experience aligned with industry demands.
            </p>
            <Button 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => navigate('/projects')}
            >
              explore projects <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
          
          {/* Community Support Box */}
          <div className="bg-gradient-to-br from-[#2A2F3C]/30 to-[#292F45]/60 dark:from-[#1A1F2C]/60 dark:to-[#192035]/80 rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-foreground">community & mentorship</h3>
              <MessageCircle className="h-5 w-5 text-primary" />
            </div>
            <p className="text-muted-foreground mb-6">
              Connect with experienced developers who provide guidance, feedback, and support throughout your learning journey.
            </p>
            <Button 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => navigate('/mentorship')}
            >
              join community <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 md:py-24">
        <div className="bg-secondary/50 dark:bg-secondary/20 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12">
          <div className="max-w-2xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 tracking-tight">
              ready to level up your skills?
            </h2>
            <p className="text-foreground mb-8 text-lg leading-relaxed">
              join thousands of developers who are mastering web development through our gamified learning platform.
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8"
              onClick={() => navigate('/unit1')}
            >
              start learning now <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
