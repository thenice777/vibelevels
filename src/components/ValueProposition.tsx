
import React from "react";
import { ArrowRight, Check, Code, Sparkles, Star, Briefcase, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const ValueProposition = () => {
  const navigate = useNavigate();
  
  return (
    <section className="container mx-auto px-4 py-16 md:py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 right-1/4 w-64 h-64 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-secondary/10 dark:bg-secondary/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10">
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
            <span className="text-primary">what</span> vibelevels can do for <span className="text-primary">you</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Your launchpad to modern web development mastery through gamified learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {/* Card 1 - Attention */}
          <div className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-all">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Learn by doing, not just watching</h3>
            <p className="text-muted-foreground mb-4">
              Break the passive tutorial cycle with hands-on interactive challenges that build real-world skills
            </p>
            <Button 
              variant="link" 
              className="p-0 text-primary"
              onClick={() => navigate('/courses')}
            >
              explore courses <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </div>

          {/* Card 2 - Interest */}
          <div className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-all">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Code className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Master AI-powered development</h3>
            <p className="text-muted-foreground mb-4">
              Develop the critical skill of collaborative coding with AI tools that employers are desperately seeking
            </p>
            <Button 
              variant="link" 
              className="p-0 text-primary"
              onClick={() => navigate('/courses')}
            >
              view AI courses <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </div>

          {/* Card 3 - Desire - Updated with link to Projects */}
          <div className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-all">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Briefcase className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Earn while you learn</h3>
            <p className="text-muted-foreground mb-4">
              Build a portfolio of real projects that showcase your skills to potential employers
            </p>
            <Button 
              variant="link" 
              className="p-0 text-primary"
              onClick={() => navigate('/projects')}
            >
              explore projects <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>

        <div className="mt-10 bg-secondary/50 dark:bg-secondary/20 border border-border rounded-lg p-6 md:p-8">
          <h3 className="text-xl font-semibold mb-4 text-center">Why developers love vibelevels</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 text-primary mt-1 shrink-0" />
              <p className="text-sm text-muted-foreground">Gamified learning that makes complex concepts fun and approachable</p>
            </div>
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 text-primary mt-1 shrink-0" />
              <p className="text-sm text-muted-foreground">Project-based curriculum aligned with real-world industry demands</p>
            </div>
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 text-primary mt-1 shrink-0" />
              <p className="text-sm text-muted-foreground">Learn to collaborate effectively with AI tools in your workflow</p>
            </div>
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 text-primary mt-1 shrink-0" />
              <p className="text-sm text-muted-foreground">
                <span className="text-primary cursor-pointer" onClick={() => navigate('/mentorship')}>Community support and mentorship</span> from experienced developers
              </p>
            </div>
          </div>

          {/* Call to Action - Action */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6"
              onClick={() => navigate('/courses')}
            >
              start learning now <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
            <Button 
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
              onClick={() => navigate('/mentorship')}
            >
              <MessageCircle className="mr-1 h-4 w-4" /> join our community
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2 text-center">Join thousands of developers already leveling up their careers</p>
        </div>
      </div>
    </section>
  );
};
