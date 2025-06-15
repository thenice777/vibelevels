import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const FAQ = () => {
  const lastUpdated = "April 28, 2025";
  
  const faqCategories = [
    {
      title: "Getting Usable Code Faster",
      slug: "getting-usable-code-faster",
      description: "Learn how to structure your prompts and development workflow to get working code on your first attempt.",
      icon: "⚡"
    },
    {
      title: "Preserving Working Code During Updates",
      slug: "preserving-working-code",
      description: "Strategies to prevent AI from breaking functional code when requesting changes or additions.",
      icon: "🛡️"
    },
    {
      title: "Maintaining Context in Long Sessions",
      slug: "maintaining-context",
      description: "Techniques to ensure AI tools remember your project requirements and previous decisions.",
      icon: "🧠"
    },
    {
      title: "Simplifying Overengineered Solutions",
      slug: "simplifying-overengineered-code",
      description: "How to get simpler, more maintainable code instead of complex, over-abstracted solutions.",
      icon: "🧩"
    },
    {
      title: "Debugging AI-Generated Code",
      slug: "debugging-ai-generated-code",
      description: "Systematic approaches to find and fix issues in code written by AI tools.",
      icon: "🔍"
    },
    {
      title: "Handling Security in AI-Generated Code",
      slug: "security-best-practices",
      description: "Best practices to ensure AI-generated code meets security standards.",
      icon: "🔒"
    },
    {
      title: "Managing Inconsistent AI Outputs",
      slug: "handling-inconsistent-outputs",
      description: "How to maintain consistency in code style, patterns, and quality across AI sessions.",
      icon: "📏"
    },
    {
      title: "Generating Tests for AI-Coded Projects",
      slug: "generating-effective-tests",
      description: "Strategies to get comprehensive test coverage for AI-generated implementations.",
      icon: "✅"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": "Vibe Coding FAQ",
    "description": "Solutions to common AI coding problems and vibe coding troubleshooting guide",
    "mainEntity": faqCategories.map(category => ({
      "@type": "Question",
      "name": category.title,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": category.description,
        "url": `https://vibelevels.com/faq/${category.slug}`
      }
    }))
  };

  return (
    <Layout>
      <SEO
        title="Vibe Coding FAQ | AI Coding Problems & Solutions"
        description="Solve common AI coding problems with our comprehensive FAQ. Get solutions for ChatGPT coding issues, GitHub Copilot troubles, and vibe coding challenges."
        keywords="vibe coding FAQ, AI coding problems, ChatGPT coding issues, GitHub Copilot help, AI development troubleshooting, prompt engineering problems"
        canonical="https://vibelevels.com/faq"
        structuredData={structuredData}
      />
      
      <div className="container mx-auto px-4 py-12">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                <Home className="h-4 w-4" />
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>FAQ</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="mb-12 max-w-3xl">
          <h1 className="text-4xl font-bold text-gradient mb-6">Vibe Coding Troubleshooting: Solutions to Common AI Coding Problems</h1>
          <div className="flex items-center text-sm text-foreground mb-6">
            <Clock className="mr-1.5 h-4 w-4" />
            <span>Last updated: {lastUpdated}</span>
          </div>
          <div className="mb-8">
            <p className="text-xl font-semibold text-gradient mb-2">
              Struggling with AI coding tools? You're not alone. This guide addresses the real challenges developers face when building with AI assistants like ChatGPT, Claude, and GitHub Copilot.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Vibe coding—creating software by conversing with AI—can dramatically speed up development, but it also introduces unique frustrations. This FAQ provides proven solutions to the most common problems, helping you build better software with less frustration.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faqCategories.map((category, index) => (
            <Link to={`/faq/${category.slug}`} key={index} className="group">
              <Card className="h-full transition-all duration-200 hover:scale-[1.02] bg-card/50 backdrop-blur border-white/10">
                <CardContent className="p-6">
                  <div className="text-3xl mb-4 transform transition-transform group-hover:scale-110">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-gradient mb-2">{category.title}</h3>
                  <p className="text-foreground leading-relaxed">{category.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default FAQ;
