
import { useEffect, useState } from "react";
import { Layout } from "@/components/Layout";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card } from "@/components/ui/card";
import { Link, useLocation } from "react-router-dom";
import { Clock, Home } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FAQItem {
  title: string;
  slug: string;
  icon: string;
}

interface FAQLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  lastUpdated: string;
  currentSlug?: string;
}

export const FAQLayout = ({ children, title, description, lastUpdated, currentSlug }: FAQLayoutProps) => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState<string>(currentSlug || "");
  
  useEffect(() => {
    const path = location.pathname;
    const slug = path.split('/').pop();
    if (slug) {
      setActiveItem(slug);
    }
  }, [location]);
  
  const faqItems: FAQItem[] = [
    {
      title: "Getting Usable Code Faster",
      slug: "getting-usable-code-faster",
      icon: "⚡"
    },
    {
      title: "Preserving Working Code",
      slug: "preserving-working-code",
      icon: "🛡️"
    },
    {
      title: "Maintaining Context",
      slug: "maintaining-context",
      icon: "🧠"
    },
    {
      title: "Simplifying Overengineered Code",
      slug: "simplifying-overengineered-code",
      icon: "🧩"
    },
    {
      title: "Debugging AI-Generated Code",
      slug: "debugging-ai-generated-code",
      icon: "🔍"
    },
    {
      title: "Security Best Practices",
      slug: "security-best-practices",
      icon: "🔒"
    },
    {
      title: "Handling Inconsistent Outputs",
      slug: "handling-inconsistent-outputs",
      icon: "📏"
    },
    {
      title: "Generating Effective Tests",
      slug: "generating-effective-tests",
      icon: "✅"
    }
  ];
  
  return (
    <Layout>
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
              <BreadcrumbLink href="/faq">FAQ</BreadcrumbLink>
            </BreadcrumbItem>
            {currentSlug && (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{title}</BreadcrumbPage>
                </BreadcrumbItem>
              </>
            )}
          </BreadcrumbList>
        </Breadcrumb>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 border-white/10">
              <div className="p-4">
                <h3 className="text-lg font-medium mb-4 text-white">FAQ Categories</h3>
                <ul className="space-y-2">
                  <li>
                    <Link 
                      to="/faq"
                      className={cn(
                        "flex items-center p-2 rounded-md hover:bg-accent hover:text-accent-foreground",
                        !currentSlug && "bg-primary/20 text-primary"
                      )}
                    >
                      <span className="mr-2">📚</span>
                      <span>All Categories</span>
                    </Link>
                  </li>
                  {faqItems.map((item) => (
                    <li key={item.slug}>
                      <Link 
                        to={`/faq/${item.slug}`}
                        className={cn(
                          "flex items-center p-2 rounded-md hover:bg-accent hover:text-accent-foreground",
                          activeItem === item.slug && "bg-primary/20 text-primary"
                        )}
                      >
                        <span className="mr-2">{item.icon}</span>
                        <span>{item.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">{title}</h1>
              {description && <p className="text-muted-foreground text-lg mb-4">{description}</p>}
              <div className="flex items-center text-sm text-muted-foreground mb-6">
                <Clock className="mr-1.5 h-4 w-4" />
                <span>Last updated: {lastUpdated}</span>
              </div>
            </div>
            
            <div className="prose prose-invert max-w-none">
              {children}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
