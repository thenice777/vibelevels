
import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Trophy, Flame, Star, Award, Gift, Layout as LayoutIcon, 
  ArrowRight, Copy, Share2, Twitter, Facebook, Linkedin
} from "lucide-react";

const Dashboard = () => {
  // User stats
  const userStats = {
    streak: 7,
    streakGoal: 10,
    points: 1250,
    pointsToNextReward: 250,
    level: 4,
    progressToNextLevel: 65,
  };

  // Learning path data
  const learningPathData = {
    currentCourse: {
      title: "web dev pitfalls",
      progress: 40,
      nextLesson: "Common HTML Mistakes",
    },
    completedNodes: 5,
    upcomingNodes: 7,
  };

  // Recommended courses
  const recommendedCourses = [
    {
      title: "project architecture",
      description: "Learn to structure your web projects efficiently",
      level: "intermediate",
    },
    {
      title: "ai dev tools",
      description: "Master modern AI tools for development",
      level: "advanced",
    },
  ];

  // Achievements
  const recentBadges = [
    {
      title: "HTML Detective",
      description: "Identified 5 common HTML mistakes",
      icon: "🔍",
      date: "2 days ago",
    },
    {
      title: "Fast Learner",
      description: "Completed 3 lessons in one day",
      icon: "⚡",
      date: "3 days ago",
    },
  ];

  const recentCertificates = [
    {
      title: "Web Development Foundations",
      date: "1 week ago",
      skills: ["HTML", "CSS", "JavaScript"],
    },
  ];

  // Referral data
  const referralData = {
    link: "vibelevels.dev/ref/user123",
    rewards: "Get 500 points for each friend who joins",
    referrals: 3,
    pendingReferrals: 2,
  };

  // Daily challenge
  const dailyChallenge = {
    title: "Build a responsive navbar",
    description: "Create a mobile-friendly navigation bar using HTML, CSS, and JavaScript",
    points: 100,
  };

  return (
    <Layout>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-white mb-8">dashboard</h1>
        
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Streak Card */}
          <Card className="border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-white">streak</h3>
                <Flame className="h-5 w-5 text-orange-500" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                {userStats.streak} days
              </div>
              <div className="text-sm text-muted-foreground">
                {userStats.streakGoal - userStats.streak} days to reach your goal
              </div>
              <div className="mt-4 h-2 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-orange-500" 
                  style={{ width: `${(userStats.streak / userStats.streakGoal) * 100}%` }}
                ></div>
              </div>
            </CardContent>
          </Card>
          
          {/* Points Card */}
          <Card className="border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-white">points</h3>
                <Star className="h-5 w-5 text-yellow-500" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                {userStats.points}
              </div>
              <div className="text-sm text-muted-foreground">
                {userStats.pointsToNextReward} points to next reward
              </div>
              <div className="mt-4 h-2 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-yellow-500" 
                  style={{ width: `${((userStats.pointsToNextReward) / (userStats.points + userStats.pointsToNextReward)) * 100}%` }}
                ></div>
              </div>
            </CardContent>
          </Card>
          
          {/* Level Card */}
          <Card className="border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-white">level</h3>
                <Trophy className="h-5 w-5 text-primary" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                {userStats.level}
              </div>
              <div className="text-sm text-muted-foreground">
                {100 - userStats.progressToNextLevel}% to level {userStats.level + 1}
              </div>
              <div className="mt-4 h-2 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary" 
                  style={{ width: `${userStats.progressToNextLevel}%` }}
                ></div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column (Learning Path and Recommended Courses) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Learning Path Card */}
            <Card className="border-white/10">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-medium text-white">learning path</h3>
                  <LayoutIcon className="h-5 w-5 text-primary" />
                </div>
                
                {/* Visual Map */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">progress</span>
                    <span className="text-sm text-muted-foreground">{learningPathData.completedNodes} completed, {learningPathData.upcomingNodes} upcoming</span>
                  </div>
                  <div className="flex items-center">
                    {Array.from({ length: learningPathData.completedNodes }).map((_, i) => (
                      <div key={`completed-${i}`} className="flex items-center">
                        <div className="w-4 h-4 rounded-full bg-primary"></div>
                        {i < learningPathData.completedNodes - 1 && (
                          <div className="w-8 h-1 bg-primary"></div>
                        )}
                      </div>
                    ))}
                    <div className="w-4 h-4 rounded-full bg-primary/50 ring-2 ring-primary/20"></div>
                    {Array.from({ length: learningPathData.upcomingNodes }).map((_, i) => (
                      <div key={`upcoming-${i}`} className="flex items-center">
                        <div className="w-8 h-1 bg-muted"></div>
                        <div className="w-4 h-4 rounded-full bg-muted"></div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Current Course Block */}
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h4 className="font-medium text-white mb-2">currently learning: {learningPathData.currentCourse.title}</h4>
                  <div className="text-sm text-muted-foreground mb-3">
                    Next lesson: {learningPathData.currentCourse.nextLesson}
                  </div>
                  <div className="mb-3 h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary" 
                      style={{ width: `${learningPathData.currentCourse.progress}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">{learningPathData.currentCourse.progress}% complete</span>
                    <Button className="bg-primary hover:bg-primary/90">
                      continue <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Recommended Courses Card */}
            <Card className="border-white/10">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-white mb-6">recommended courses</h3>
                <div className="space-y-4">
                  {recommendedCourses.map((course, index) => (
                    <div key={index} className="flex justify-between items-center p-4 bg-muted/30 rounded-lg">
                      <div>
                        <h4 className="font-medium text-white mb-1">{course.title}</h4>
                        <div className="text-sm text-muted-foreground mb-2">{course.description}</div>
                        <Badge variant="secondary" className="bg-accent text-white">
                          {course.level}
                        </Badge>
                      </div>
                      <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                        view
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Right Column (Achievements, Referrals, Daily Challenge) */}
          <div className="space-y-8">
            {/* Achievements Tab Card */}
            <Card className="border-white/10">
              <CardContent className="p-6">
                <Tabs defaultValue="achievements">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="achievements">achievements</TabsTrigger>
                    <TabsTrigger value="referrals">referrals</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="achievements" className="space-y-6">
                    {/* Recent Badges */}
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-3">recent badges</h4>
                      {recentBadges.map((badge, index) => (
                        <div key={index} className="flex items-start gap-3 mb-4">
                          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-xl">
                            {badge.icon}
                          </div>
                          <div>
                            <div className="font-medium text-white">{badge.title}</div>
                            <div className="text-xs text-muted-foreground">{badge.description}</div>
                            <div className="text-xs text-muted-foreground mt-1">{badge.date}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Certificates */}
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-3">certificates</h4>
                      {recentCertificates.map((cert, index) => (
                        <div key={index} className="bg-muted/30 p-3 rounded-lg">
                          <div className="font-medium text-white">{cert.title}</div>
                          <div className="text-xs text-muted-foreground mb-2">{cert.date}</div>
                          <div className="flex flex-wrap gap-2">
                            {cert.skills.map((skill, skillIndex) => (
                              <Badge key={skillIndex} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <Button variant="outline" className="w-full">
                      view all achievements
                    </Button>
                  </TabsContent>
                  
                  <TabsContent value="referrals">
                    <div className="space-y-6">
                      <div className="bg-muted/30 p-4 rounded-lg">
                        <div className="flex items-center gap-3 mb-3">
                          <Gift className="h-5 w-5 text-primary" />
                          <div className="font-medium text-white">invite friends, earn rewards</div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">{referralData.rewards}</p>
                        <div className="flex gap-2">
                          <Input
                            value={referralData.link}
                            readOnly
                            className="bg-muted text-white flex-grow"
                          />
                          <Button variant="outline" className="flex-shrink-0">
                            <Copy className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-3">share with</h4>
                        <div className="flex gap-3">
                          <Button variant="outline" size="icon" className="h-10 w-10 rounded-full">
                            <Twitter className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="icon" className="h-10 w-10 rounded-full">
                            <Facebook className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="icon" className="h-10 w-10 rounded-full">
                            <Linkedin className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="icon" className="h-10 w-10 rounded-full">
                            <Share2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-muted/30 p-3 rounded-lg text-center">
                          <div className="text-2xl font-bold text-white">{referralData.referrals}</div>
                          <div className="text-xs text-muted-foreground">successful referrals</div>
                        </div>
                        <div className="bg-muted/30 p-3 rounded-lg text-center">
                          <div className="text-2xl font-bold text-white">{referralData.pendingReferrals}</div>
                          <div className="text-xs text-muted-foreground">pending invites</div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
            
            {/* Daily Challenge Card */}
            <Card className="border-white/10">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-white">daily challenge</h3>
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <h4 className="font-medium text-white mb-2">{dailyChallenge.title}</h4>
                <p className="text-sm text-muted-foreground mb-4">{dailyChallenge.description}</p>
                <div className="flex justify-between items-center">
                  <div className="text-primary font-medium">+{dailyChallenge.points} points</div>
                  <Button className="bg-primary hover:bg-primary/90">
                    start challenge
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

// Helper Input component for the referral link
const Input = ({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className={`flex h-10 w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    />
  );
};

export default Dashboard;
