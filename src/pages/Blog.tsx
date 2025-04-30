
import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  categoryColor: string;
  slug: string;
  image?: string;
}

const Blog = () => {
  // Featured post
  const featuredPost: BlogPost = {
    id: "1",
    title: "The Future of AI-Assisted Development",
    excerpt: "Explore how AI tools are revolutionizing the software development workflow and what that means for the future of coding.",
    date: "April 20, 2025",
    category: "AI Tools",
    categoryColor: "purple",
    slug: "future-of-ai-assisted-dev",
  };

  // All blog posts
  const allPosts: BlogPost[] = [
    featuredPost,
    {
      id: "2",
      title: "Web Development Trends in 2025",
      excerpt: "Stay ahead of the curve with these emerging web development trends that are shaping the industry this year.",
      date: "April 15, 2025",
      category: "Web Development",
      categoryColor: "blue",
      slug: "web-dev-trends-2025",
    },
    {
      id: "3",
      title: "Mastering CSS Grid Layouts",
      excerpt: "Learn advanced techniques for creating complex layouts with CSS Grid that are both responsive and maintainable.",
      date: "April 10, 2025",
      category: "CSS",
      categoryColor: "green",
      slug: "mastering-css-grid",
    },
    {
      id: "4",
      title: "Prompt Engineering Best Practices",
      excerpt: "Discover how to craft effective prompts that yield optimal results from AI tools like ChatGPT and DALL-E.",
      date: "April 5, 2025",
      category: "AI Tools",
      categoryColor: "purple",
      slug: "prompt-engineering-practices",
    },
    {
      id: "5",
      title: "Building Accessible Web Applications",
      excerpt: "Accessibility shouldn't be an afterthought. Learn how to integrate accessibility from the start of your project.",
      date: "March 30, 2025",
      category: "Accessibility",
      categoryColor: "orange",
      slug: "building-accessible-apps",
    },
    {
      id: "6",
      title: "JavaScript Performance Optimization",
      excerpt: "Practical strategies for writing efficient JavaScript code that loads quickly and runs smoothly.",
      date: "March 25, 2025",
      category: "JavaScript",
      categoryColor: "yellow",
      slug: "js-performance-optimization",
    },
  ];

  // Helper function to get category color class
  const getCategoryColorClass = (colorName: string): string => {
    const colorMap: Record<string, string> = {
      purple: "bg-primary",
      blue: "bg-blue-500",
      green: "bg-green-500",
      orange: "bg-orange-500",
      yellow: "bg-yellow-500",
    };
    return colorMap[colorName] || "bg-primary";
  };

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
              <BreadcrumbPage>blog</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className="text-3xl font-bold text-white mb-12">blog</h1>
        
        {/* Featured Post */}
        <div className="mb-16">
          <Link to={`/blog/${featuredPost.slug}`} className="block">
            <Card className="overflow-hidden border-white/10 transition-all hover:border-primary/50">
              <div className="aspect-[2/1] bg-muted/70 flex items-center justify-center">
                {featuredPost.image ? (
                  <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="text-foreground">Featured image</div>
                )}
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-sm text-foreground">{featuredPost.date}</span>
                  <Badge className={getCategoryColorClass(featuredPost.categoryColor)}>
                    {featuredPost.category}
                  </Badge>
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-3">{featuredPost.title}</h2>
                <p className="text-foreground mb-4">{featuredPost.excerpt}</p>
                <span className="text-primary hover:underline">Read article →</span>
              </CardContent>
            </Card>
          </Link>
        </div>
        
        {/* All Posts */}
        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-8">all posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPosts.slice(1).map((post) => (
              <Link to={`/blog/${post.slug}`} key={post.id} className="block">
                <Card className="h-full border-border transition-all hover:border-primary/50">
                  <div className="aspect-[3/2] bg-muted/70 flex items-center justify-center">
                    {post.image ? (
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="text-foreground">Post image</div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-sm text-foreground">{post.date}</span>
                      <Badge className={getCategoryColorClass(post.categoryColor)}>
                        {post.category}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{post.title}</h3>
                    <p className="text-foreground line-clamp-2 mb-3">{post.excerpt}</p>
                    <span className="text-primary hover:underline">Read more →</span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
