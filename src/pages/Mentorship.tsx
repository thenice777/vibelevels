
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, Users, MessageCircle, Calendar, ArrowRight, BookOpen, Handshake
} from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";

// Dummy data for mentors
const MENTORS_DATA = [
  {
    id: 1,
    name: "Alex Chen",
    role: "Senior Frontend Developer",
    company: "TechCorp",
    bio: "8+ years of experience in React and modern JavaScript frameworks",
    expertise: ["React", "JavaScript", "CSS", "Performance Optimization"],
    rate: "$60/hour",
    availability: "Evenings & Weekends",
    avatar: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Jamie Rodriguez",
    role: "Full Stack Engineer",
    company: "StartupBase",
    bio: "Full stack developer specialized in Node.js and React applications",
    expertise: ["Node.js", "React", "MongoDB", "AWS"],
    rate: "$75/hour",
    availability: "Weekdays",
    avatar: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Morgan Williams",
    role: "UI/UX Developer",
    company: "DesignStudio",
    bio: "Designer-developer hybrid focused on creating beautiful, functional interfaces",
    expertise: ["UI Design", "UX Research", "Frontend Development", "Figma"],
    rate: "$65/hour",
    availability: "Flexible",
    avatar: "/placeholder.svg",
  },
];

// Dummy data for community discussions
const DISCUSSIONS_DATA = [
  {
    id: 1,
    title: "Best practices for React state management in 2025",
    author: "Alex Chen",
    responses: 24,
    lastActivity: "2 hours ago",
    tags: ["React", "State Management"],
  },
  {
    id: 2,
    title: "How to structure a portfolio for maximum impact",
    author: "Jamie Rodriguez",
    responses: 18,
    lastActivity: "1 day ago",
    tags: ["Career", "Portfolio"],
  },
  {
    id: 3,
    title: "Learning roadmap for AI-assisted development",
    author: "Morgan Williams",
    responses: 32,
    lastActivity: "3 hours ago",
    tags: ["AI", "Learning"],
  },
];

// Dummy data for upcoming events
const EVENTS_DATA = [
  {
    id: 1,
    title: "Web Performance Workshop",
    host: "Alex Chen",
    date: "May 20, 2025",
    time: "6:00 PM - 8:00 PM EST",
    attendees: 42,
    description: "Learn practical techniques to optimize your web applications for speed and performance."
  },
  {
    id: 2,
    title: "Portfolio Review Session",
    host: "Career Panel",
    date: "May 25, 2025",
    time: "1:00 PM - 3:00 PM EST",
    attendees: 28,
    description: "Get feedback on your portfolio from industry professionals and recruiters."
  },
  {
    id: 3,
    title: "Introduction to AI-Assisted Coding",
    host: "Morgan Williams",
    date: "June 2, 2025",
    time: "5:00 PM - 6:30 PM EST",
    attendees: 65,
    description: "Discover how to effectively use AI tools to enhance your development workflow."
  },
];

const Mentorship = () => {
  const navigate = useNavigate();

  // These functions will eventually connect to Supabase
  const bookMentorSession = (mentorId: number) => {
    alert(`Booking session with mentor #${mentorId}. This will be connected to Supabase in the future.`);
    // In the future: Create a booking record in Supabase
  };

  const joinDiscussion = (discussionId: number) => {
    alert(`Joining discussion #${discussionId}. This will be connected to Supabase in the future.`);
    // In the future: Navigate to the discussion page with data from Supabase
  };

  const registerForEvent = (eventId: number) => {
    alert(`Registered for event #${eventId}. This will be connected to Supabase in the future.`);
    // In the future: Register the user for the event in Supabase
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
              <BreadcrumbPage>community & mentorship</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">community & mentorship</h1>
            <p className="text-muted-foreground mt-2">
              Connect with experienced developers and fellow learners
            </p>
          </div>
        </div>

        <Tabs defaultValue="mentors" className="mb-12">
          <TabsList className="mb-6">
            <TabsTrigger value="mentors">find mentors</TabsTrigger>
            <TabsTrigger value="discussions">discussions</TabsTrigger>
            <TabsTrigger value="events">upcoming events</TabsTrigger>
          </TabsList>
          
          <TabsContent value="mentors">
            <div className="flex justify-between items-center mb-6">
              <Input 
                className="max-w-sm" 
                placeholder="Search by expertise, name, or company..." 
                type="search" 
              />
              <div className="flex gap-2">
                <Button variant="outline">Filter</Button>
                <Button variant="outline">Sort: Recommended</Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {MENTORS_DATA.map(mentor => (
                <Card key={mentor.id} className="border-white/10 bg-card hover:shadow-md transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <img 
                        src={mentor.avatar} 
                        alt={mentor.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-semibold text-lg text-foreground">{mentor.name}</h3>
                        <p className="text-sm text-muted-foreground">{mentor.role} at {mentor.company}</p>
                        <div className="text-sm font-medium text-primary mt-1">{mentor.rate}</div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 text-sm">{mentor.bio}</p>

                    <div className="mb-3">
                      <div className="text-xs text-muted-foreground mb-2">Expertise:</div>
                      <div className="flex flex-wrap gap-2">
                        {mentor.expertise.map(skill => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-2" />
                        Available: {mentor.availability}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90" 
                      onClick={() => bookMentorSession(mentor.id)}
                    >
                      book session
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button variant="outline">
                load more mentors
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="discussions">
            <div className="flex justify-between items-center mb-6">
              <Input 
                className="max-w-sm" 
                placeholder="Search discussions..." 
                type="search" 
              />
              <div className="flex gap-2">
                <Button className="bg-primary hover:bg-primary/90">
                  start new discussion
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              {DISCUSSIONS_DATA.map(discussion => (
                <Card key={discussion.id} className="border-white/10 bg-card hover:shadow-md transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-lg text-foreground mb-2">{discussion.title}</h3>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {discussion.tags.map(tag => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Started by {discussion.author} • {discussion.responses} responses • Last active {discussion.lastActivity}
                        </div>
                      </div>
                      <Button 
                        variant="ghost" 
                        className="text-primary" 
                        onClick={() => joinDiscussion(discussion.id)}
                      >
                        <MessageCircle className="h-5 w-5" />
                        <span className="ml-1">Join</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button variant="outline">
                view all discussions
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="events">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {EVENTS_DATA.map(event => (
                <Card key={event.id} className="border-white/10 bg-card hover:shadow-md transition-all">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <Badge className="bg-primary/20 text-primary hover:bg-primary/30 font-medium">
                        {event.date}
                      </Badge>
                    </div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">{event.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm">{event.description}</p>
                    
                    <div className="space-y-2 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <User className="h-3 w-3 mr-2" />
                        Host: {event.host}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-2" />
                        {event.time}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-3 w-3 mr-2" />
                        {event.attendees} attending
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90" 
                      onClick={() => registerForEvent(event.id)}
                    >
                      register
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button variant="outline">
                view all events
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        {/* Information Section */}
        <div className="bg-secondary/20 border border-border rounded-xl p-8 mb-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">why join our community?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
              <div className="text-center">
                <div className="text-primary mx-auto mb-4">
                  <Handshake className="h-10 w-10 mx-auto" />
                </div>
                <h3 className="font-medium mb-2">personalized guidance</h3>
                <p className="text-sm text-muted-foreground">
                  Get one-on-one help from industry professionals who've been where you are
                </p>
              </div>
              <div className="text-center">
                <div className="text-primary mx-auto mb-4">
                  <MessageCircle className="h-10 w-10 mx-auto" />
                </div>
                <h3 className="font-medium mb-2">peer learning</h3>
                <p className="text-sm text-muted-foreground">
                  Share knowledge, ask questions, and solve problems collaboratively
                </p>
              </div>
              <div className="text-center">
                <div className="text-primary mx-auto mb-4">
                  <BookOpen className="h-10 w-10 mx-auto" />
                </div>
                <h3 className="font-medium mb-2">exclusive workshops</h3>
                <p className="text-sm text-muted-foreground">
                  Access special events and workshops only available to community members
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Mentorship;
