
import { Layout } from "@/components/Layout";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Home, MessageSquare, Search, Plus, ArrowUp } from "lucide-react";
import { Input } from "@/components/ui/input";

interface Category {
  id: string;
  name: string;
  description: string;
  topicCount: number;
  postCount: number;
  color: string;
}

interface Topic {
  id: string;
  title: string;
  author: string;
  authorAvatar?: string;
  replies: number;
  views: number;
  lastActivity: string;
  category: string;
  categoryColor: string;
  isHot: boolean;
}

const Community = () => {
  // Forum categories
  const categories: Category[] = [
    {
      id: "1",
      name: "Announcements",
      description: "Official announcements from the vibelevels team",
      topicCount: 15,
      postCount: 124,
      color: "primary",
    },
    {
      id: "2",
      name: "General Discussion",
      description: "Chat about coding, learning, and all things vibe-related",
      topicCount: 68,
      postCount: 532,
      color: "blue-500",
    },
    {
      id: "3",
      name: "Course Help",
      description: "Get help with specific courses and lessons",
      topicCount: 124,
      postCount: 876,
      color: "green-500",
    },
    {
      id: "4",
      name: "Projects & Showcase",
      description: "Share your projects and get feedback from the community",
      topicCount: 47,
      postCount: 321,
      color: "orange-500",
    },
  ];

  // Recent topics
  const recentTopics: Topic[] = [
    {
      id: "1",
      title: "Introducing vibelevels community forums",
      author: "vibelevels_team",
      replies: 23,
      views: 458,
      lastActivity: "2 hours ago",
      category: "Announcements",
      categoryColor: "primary",
      isHot: true,
    },
    {
      id: "2",
      title: "Tips for making the most of the AI dev tools course",
      author: "alex_coder",
      replies: 17,
      views: 241,
      lastActivity: "5 hours ago",
      category: "Course Help",
      categoryColor: "green-500",
      isHot: false,
    },
    {
      id: "3",
      title: "My first project using concepts from Web Dev Pitfalls",
      author: "developer_jane",
      replies: 31,
      views: 362,
      lastActivity: "yesterday",
      category: "Projects & Showcase",
      categoryColor: "orange-500",
      isHot: true,
    },
    {
      id: "4",
      title: "How to stay motivated while learning to code?",
      author: "new_programmer",
      replies: 42,
      views: 519,
      lastActivity: "2 days ago",
      category: "General Discussion",
      categoryColor: "blue-500",
      isHot: false,
    },
    {
      id: "5",
      title: "Weekly coding challenge: Build a responsive navbar",
      author: "challenge_master",
      replies: 28,
      views: 347,
      lastActivity: "3 days ago",
      category: "General Discussion",
      categoryColor: "blue-500",
      isHot: false,
    },
  ];

  const getCategoryColorClass = (colorName: string): string => {
    if (colorName === "primary") return "bg-primary";
    return `bg-${colorName}`;
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
              <BreadcrumbPage>community</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <h1 className="text-3xl font-bold text-white">community</h1>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search topics..."
                className="pl-10 bg-muted text-white"
              />
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="h-4 w-4 mr-2" /> New topic
            </Button>
          </div>
        </div>
        
        {/* Categories Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((category) => (
              <Card key={category.id} className="border-white/10 hover:border-primary/50 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-white mb-1">
                        {category.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {category.description}
                      </p>
                    </div>
                    <Badge className={`bg-${category.color}`}>
                      {category.topicCount} topics
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {category.postCount} posts
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        {/* Recent Discussions Section */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-white">recent discussions</h2>
            <div className="flex items-center text-sm text-muted-foreground">
              <span>Sort by:</span>
              <button className="ml-2 text-primary">Recent activity</button>
            </div>
          </div>
          
          <Card className="border-white/10 mb-4">
            <div className="grid grid-cols-12 gap-4 p-4 text-sm font-medium text-muted-foreground">
              <div className="col-span-6">Topic</div>
              <div className="col-span-2 text-center hidden md:block">Replies</div>
              <div className="col-span-2 text-center hidden md:block">Views</div>
              <div className="col-span-6 md:col-span-2 text-right md:text-center">Activity</div>
            </div>
            
            {recentTopics.map((topic) => (
              <div 
                key={topic.id}
                className="grid grid-cols-12 gap-4 p-4 border-t border-white/10 hover:bg-muted/30 transition-colors"
              >
                <div className="col-span-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs">
                      {topic.authorAvatar ? (
                        <img src={topic.authorAvatar} alt={topic.author} className="w-8 h-8 rounded-full" />
                      ) : (
                        topic.author.substring(0, 2).toUpperCase()
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <a href={`/community/topic/${topic.id}`} className="font-medium text-white hover:text-primary">
                          {topic.title}
                        </a>
                        {topic.isHot && (
                          <Badge className="bg-red-500">
                            <ArrowUp className="h-3 w-3 mr-1" /> Hot
                          </Badge>
                        )}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        by <span className="text-primary">{topic.author}</span>
                        <span className="mx-1">•</span>
                        <Badge variant="secondary" className={getCategoryColorClass(topic.categoryColor)}>
                          {topic.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-2 text-center hidden md:flex items-center justify-center">
                  <div className="flex items-center">
                    <MessageSquare className="h-3 w-3 mr-1" />
                    {topic.replies}
                  </div>
                </div>
                <div className="col-span-2 text-center hidden md:flex items-center justify-center">
                  {topic.views}
                </div>
                <div className="col-span-6 md:col-span-2 text-right md:text-center text-xs md:text-sm text-muted-foreground">
                  {topic.lastActivity}
                </div>
              </div>
            ))}
          </Card>
          
          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <Pagination />
          </div>
        </section>
      </div>
    </Layout>
  );
};

// Simple pagination component
const Pagination = () => {
  return (
    <nav className="flex items-center gap-1">
      <Button variant="outline" className="h-9 w-9 p-0">
        1
      </Button>
      <Button variant="outline" className="h-9 w-9 p-0 bg-primary/10 border-primary">
        2
      </Button>
      <Button variant="outline" className="h-9 w-9 p-0">
        3
      </Button>
      <Button variant="outline" className="h-9 w-9 p-0">
        ...
      </Button>
      <Button variant="outline" className="h-9 w-9 p-0">
        12
      </Button>
    </nav>
  );
};

export default Community;
