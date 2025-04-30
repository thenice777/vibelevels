
import { Layout } from "@/components/Layout";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Home } from "lucide-react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { slug } = useParams();
  
  // This would be fetched from API based on slug in a real app
  const post = {
    title: "The Future of AI-Assisted Development",
    content: `
      <p>Artificial Intelligence (AI) has rapidly transformed many industries, and software development is no exception. With tools like GitHub Copilot, ChatGPT, and specialized development environments like Lovable, developers now have access to powerful AI assistants that can help them write, debug, and optimize code faster than ever before.</p>
      
      <h2>The Current State of AI in Development</h2>
      <p>Today's AI coding assistants can:</p>
      <ul>
        <li>Generate code snippets based on natural language descriptions</li>
        <li>Suggest function completions and parameter names</li>
        <li>Identify potential bugs and security vulnerabilities</li>
        <li>Automate repetitive coding tasks</li>
        <li>Generate documentation and explain complex code</li>
      </ul>
      
      <p>These tools are already showing impressive results. According to GitHub, developers who use Copilot accept an average of 30% of its suggestions, and those who do report being able to focus more on interesting problems rather than boilerplate code.</p>
      
      <h2>The Next Wave: Full-Stack AI Development</h2>
      <p>The next generation of AI development tools is moving beyond simple code completion to offering end-to-end assistance throughout the development lifecycle:</p>
      
      <h3>1. Architectural Guidance</h3>
      <p>Rather than just generating individual functions or components, advanced AI tools can now provide recommendations for entire system architectures, database schemas, and API designs based on project requirements.</p>
      
      <h3>2. Interactive Development</h3>
      <p>Tools like V0 and Lovable provide conversational interfaces where developers can describe features, get immediate visual feedback, and iterate on their designs through natural dialogue.</p>
      
      <h3>3. Testing and Quality Assurance</h3>
      <p>AI systems are getting better at generating comprehensive test suites, identifying edge cases, and even predicting potential performance bottlenecks before they become problems in production.</p>
      
      <h2>The Developer's Evolving Role</h2>
      <p>As AI takes on more of the implementation details, the developer's role is shifting toward higher-level thinking:</p>
      <ul>
        <li>Problem definition and requirements gathering</li>
        <li>Architectural decision-making</li>
        <li>Evaluating and refining AI-generated solutions</li>
        <li>Focusing on user experience and business logic</li>
        <li>Ethical considerations and ensuring AI is used responsibly</li>
      </ul>
      
      <h2>Challenges and Considerations</h2>
      <p>Despite their power, AI coding assistants come with important challenges:</p>
      
      <h3>Code Quality and Reliability</h3>
      <p>AI-generated code isn't always perfect. It can contain subtle bugs, security vulnerabilities, or inefficient implementations that might not be immediately obvious.</p>
      
      <h3>Learning and Skill Development</h3>
      <p>There's concern that heavy reliance on AI assistants might prevent junior developers from developing a deep understanding of programming fundamentals.</p>
      
      <h3>Intellectual Property Questions</h3>
      <p>The training data for these AI systems often includes publicly available codebases, raising questions about licensing and attribution.</p>
      
      <h2>The Future: Human-AI Collaboration</h2>
      <p>The most promising vision for the future isn't AI replacing developers, but rather a collaborative partnership where:</p>
      <ul>
        <li>AI handles repetitive tasks, boilerplate code, and initial implementations</li>
        <li>Humans focus on creative problem-solving, quality control, and strategic decisions</li>
        <li>The development process becomes more accessible to people without traditional coding backgrounds</li>
        <li>Software creation becomes faster and more reliable</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>AI-assisted development is no longer just a futuristic concept—it's here today and evolving rapidly. Developers who learn to effectively collaborate with these AI tools will likely have significant advantages in productivity and capabilities.</p>
      
      <p>The key is to approach these tools as collaborators rather than replacements, using them to amplify human creativity and problem-solving while maintaining a critical eye on the quality and appropriateness of their output.</p>
      
      <p>As we move forward, the line between human and AI contributions to software will continue to blur, creating exciting new possibilities for what we can build and how quickly we can bring ideas to life.</p>
    `,
    author: "Alex Chen",
    date: "April 20, 2025",
    category: "AI Tools",
    categoryColor: "purple",
    readTime: "8 min read"
  };

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
              <BreadcrumbLink href="/blog">blog</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{slug}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <article className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">{post.title}</h1>
          
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <span className="text-sm text-foreground">{post.date}</span>
            <span className="text-sm text-foreground">•</span>
            <span className="text-sm text-foreground">{post.readTime}</span>
            <span className="text-sm text-foreground">•</span>
            <span className="text-sm text-foreground">By {post.author}</span>
            <Badge className={getCategoryColorClass(post.categoryColor)}>
              {post.category}
            </Badge>
          </div>
          
          <Card className="border-white/10 mb-8 overflow-hidden">
            <div className="aspect-[2/1] bg-muted/70 flex items-center justify-center">
              <div className="text-foreground">Featured image</div>
            </div>
          </Card>
          
          <div 
            className="prose prose-invert prose-headings:text-white prose-a:text-primary max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </Layout>
  );
};

export default BlogPost;
