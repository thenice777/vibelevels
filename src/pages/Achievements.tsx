
import { Layout } from "@/components/Layout";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Home, Award, Download, Share2 } from "lucide-react";

const Achievements = () => {
  // Overview stats
  const overviewStats = {
    badgesEarned: 15,
    totalBadges: 48,
    certsEarned: 2,
    totalCerts: 6,
    profileCompletion: 75,
  };

  // Badges data by category
  const badgesData = [
    {
      category: "HTML Mastery",
      badges: [
        {
          title: "HTML Detective",
          description: "Identified 5 common HTML mistakes",
          icon: "🔍",
          earned: true,
        },
        {
          title: "Semantic Scholar",
          description: "Mastered semantic HTML elements",
          icon: "📚",
          earned: true,
        },
        {
          title: "Form Builder",
          description: "Created complex HTML forms",
          icon: "📋",
          earned: false,
        },
      ],
    },
    {
      category: "CSS Wizard",
      badges: [
        {
          title: "Layout Master",
          description: "Created complex grid layouts",
          icon: "🧩",
          earned: true,
        },
        {
          title: "Animation Artist",
          description: "Built advanced CSS animations",
          icon: "✨",
          earned: false,
        },
        {
          title: "Responsive Designer",
          description: "Created fully responsive designs",
          icon: "📱",
          earned: true,
        },
      ],
    },
    {
      category: "JavaScript Ninja",
      badges: [
        {
          title: "DOM Manipulator",
          description: "Mastered DOM manipulation",
          icon: "🔄",
          earned: true,
        },
        {
          title: "API Explorer",
          description: "Successfully integrated external APIs",
          icon: "🌐",
          earned: true,
        },
        {
          title: "Performance Optimizer",
          description: "Optimized JS for better performance",
          icon: "⚡",
          earned: false,
        },
      ],
    },
  ];

  // Certificates data
  const certificatesData = [
    {
      title: "Web Development Foundations",
      date: "April 15, 2025",
      description: "Completed the web development foundations course with all lessons and exercises.",
      skills: ["HTML", "CSS", "JavaScript", "Accessibility"],
    },
    {
      title: "Frontend Performance Optimization",
      date: "March 10, 2025",
      description: "Mastered techniques for optimizing frontend performance and site speed.",
      skills: ["Performance", "Optimization", "Web Vitals", "Caching"],
    },
  ];

  // In-progress certificates
  const inProgressCertificates = [
    {
      title: "Advanced React Development",
      progress: 65,
    },
    {
      title: "Fullstack Web Development",
      progress: 30,
    },
  ];

  // Medals data
  const medalsData = [
    {
      category: "Achievement Medals",
      medals: [
        {
          title: "Course Completer",
          description: "Completed your first course",
          icon: "🏆",
          earned: true,
        },
        {
          title: "Fast Learner",
          description: "Completed 3 lessons in one day",
          icon: "⚡",
          earned: true,
        },
        {
          title: "Perfect Scorer",
          description: "Achieved 100% on a course quiz",
          icon: "🎯",
          earned: true,
        },
      ],
    },
    {
      category: "Community Medals",
      medals: [
        {
          title: "Helper",
          description: "Answered 10 community questions",
          icon: "🤝",
          earned: true,
        },
        {
          title: "Content Creator",
          description: "Created a community tutorial",
          icon: "✍️",
          earned: false,
        },
        {
          title: "Networker",
          description: "Connected with 5 community members",
          icon: "🌐",
          earned: true,
        },
      ],
    },
  ];

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
              <BreadcrumbPage>achievements</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-white mb-2">your achievements</h1>
          <p className="text-muted-foreground">Track your progress and showcase your learning journey</p>
        </div>
        
        {/* Stats Overview Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="border-white/10">
            <CardContent className="p-6">
              <h3 className="font-medium text-white mb-4">badges</h3>
              <div className="text-3xl font-bold text-white mb-2">
                {overviewStats.badgesEarned} <span className="text-muted-foreground text-lg">/ {overviewStats.totalBadges}</span>
              </div>
              <div className="text-sm text-muted-foreground">
                {Math.round((overviewStats.badgesEarned / overviewStats.totalBadges) * 100)}% earned
              </div>
              <div className="mt-4 h-2 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary" 
                  style={{ width: `${(overviewStats.badgesEarned / overviewStats.totalBadges) * 100}%` }}
                ></div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-white/10">
            <CardContent className="p-6">
              <h3 className="font-medium text-white mb-4">certificates</h3>
              <div className="text-3xl font-bold text-white mb-2">
                {overviewStats.certsEarned} <span className="text-muted-foreground text-lg">/ {overviewStats.totalCerts}</span>
              </div>
              <div className="text-sm text-muted-foreground">
                {Math.round((overviewStats.certsEarned / overviewStats.totalCerts) * 100)}% earned
              </div>
              <div className="mt-4 h-2 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary" 
                  style={{ width: `${(overviewStats.certsEarned / overviewStats.totalCerts) * 100}%` }}
                ></div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-white/10">
            <CardContent className="p-6">
              <h3 className="font-medium text-white mb-4">profile completion</h3>
              <div className="text-3xl font-bold text-white mb-2">
                {overviewStats.profileCompletion}%
              </div>
              <div className="text-sm text-muted-foreground">
                Complete your profile to earn more points
              </div>
              <div className="mt-4 h-2 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary" 
                  style={{ width: `${overviewStats.profileCompletion}%` }}
                ></div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Tabs for Badges, Certificates, Medals */}
        <Tabs defaultValue="badges" className="mb-12">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="badges">badges</TabsTrigger>
            <TabsTrigger value="certificates">certificates</TabsTrigger>
            <TabsTrigger value="medals">medals</TabsTrigger>
          </TabsList>
          
          <TabsContent value="badges">
            {badgesData.map((category, index) => (
              <div key={index} className="mb-10">
                <h2 className="text-xl font-semibold text-white mb-6">{category.category}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {category.badges.map((badge, badgeIndex) => (
                    <Card key={badgeIndex} className={`border-white/10 ${!badge.earned ? 'opacity-50' : ''}`}>
                      <CardContent className="p-6 flex gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-2xl">
                          {badge.icon}
                        </div>
                        <div>
                          <h3 className="font-medium text-white mb-1">
                            {badge.title}
                            {badge.earned && <span className="ml-2 text-primary text-xs">✓</span>}
                          </h3>
                          <p className="text-xs text-muted-foreground">{badge.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
            <div className="text-center">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                view all badges
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="certificates">
            <div className="mb-10">
              <h2 className="text-xl font-semibold text-white mb-6">earned certificates</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {certificatesData.map((cert, index) => (
                  <Card key={index} className="border-white/10">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-medium text-white mb-1">{cert.title}</h3>
                          <div className="text-sm text-muted-foreground mb-3">Issued on {cert.date}</div>
                        </div>
                        <Award className="h-6 w-6 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{cert.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {cert.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="outline">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <Button variant="outline" size="sm" className="gap-1">
                          <Download className="h-4 w-4" /> Download
                        </Button>
                        <Button variant="outline" size="sm" className="gap-1">
                          <Share2 className="h-4 w-4" /> Share
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div className="mb-10">
              <h2 className="text-xl font-semibold text-white mb-6">in progress</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {inProgressCertificates.map((cert, index) => (
                  <Card key={index} className="border-white/10">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-medium text-white mb-1">{cert.title}</h3>
                          <div className="text-sm text-muted-foreground">{cert.progress}% complete</div>
                        </div>
                      </div>
                      <div className="mt-4 h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary" 
                          style={{ width: `${cert.progress}%` }}
                        ></div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="medals">
            {medalsData.map((category, index) => (
              <div key={index} className="mb-10">
                <h2 className="text-xl font-semibold text-white mb-6">{category.category}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {category.medals.map((medal, medalIndex) => (
                    <Card key={medalIndex} className={`border-white/10 ${!medal.earned ? 'opacity-50' : ''}`}>
                      <CardContent className="p-6 flex gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-2xl">
                          {medal.icon}
                        </div>
                        <div>
                          <h3 className="font-medium text-white mb-1">
                            {medal.title}
                            {medal.earned && <span className="ml-2 text-primary text-xs">✓</span>}
                          </h3>
                          <p className="text-xs text-muted-foreground">{medal.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
        
        {/* Share Profile Section */}
        <div className="text-center mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">share your achievements</h2>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Show off your learning progress and achievements with friends and colleagues
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              <Share2 className="mr-2 h-4 w-4" /> share profile
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Achievements;
