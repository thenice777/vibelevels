This file is a merged representation of the entire codebase, combined into a single document by Repomix.
The content has been processed where security check has been disabled.

<file_summary>
This section contains a summary of this file.

<purpose>
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.
</purpose>

<file_format>
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files, each consisting of:
  - File path as an attribute
  - Full contents of the file
</file_format>

<usage_guidelines>
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.
</usage_guidelines>

<notes>
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Security check has been disabled - content may contain sensitive information
- Files are sorted by Git change count (files with more changes are at the bottom)
</notes>

<additional_info>

</additional_info>

</file_summary>

<directory_structure>
app/
  achievements/
    page.tsx
  blog/
    index.ts
    page.tsx
  community/
    topics/
      [id]/
        page.tsx
    index.ts
    loading.tsx
    page.tsx
  courses/
    ai-dev-tools/
      page.tsx
    one-feature/
      page.tsx
    project-architecture/
      page.tsx
    web-dev-pitfalls/
      lesson-1/
        page.tsx
      page.tsx
    index.ts
    loading.tsx
    page.tsx
  dashboard/
    page.tsx
  help/
    index.ts
    page.tsx
  privacy/
    index.ts
    page.tsx
  terms/
    index.ts
    page.tsx
  globals.css
  index.ts
  layout.tsx
  not-found.tsx
  page.tsx
components/
  course/
    course-card.tsx
  home/
    hero-section.tsx
    tools-section.tsx
  layout/
    footer.tsx
    header.tsx
  ui/
    accordion.tsx
    alert-dialog.tsx
    alert.tsx
    aspect-ratio.tsx
    avatar.tsx
    badge.tsx
    breadcrumb.tsx
    button.tsx
    calendar.tsx
    card.tsx
    carousel.tsx
    chart.tsx
    checkbox.tsx
    collapsible.tsx
    command.tsx
    context-menu.tsx
    dialog.tsx
    drawer.tsx
    dropdown-menu.tsx
    form.tsx
    hover-card.tsx
    input-otp.tsx
    input.tsx
    label.tsx
    menubar.tsx
    navigation-menu.tsx
    pagination.tsx
    popover.tsx
    progress.tsx
    radio-group.tsx
    resizable.tsx
    scroll-area.tsx
    select.tsx
    separator.tsx
    sheet.tsx
    sidebar.tsx
    skeleton.tsx
    slider.tsx
    sonner.tsx
    switch.tsx
    table.tsx
    tabs.tsx
    textarea.tsx
    toast.tsx
    toaster.tsx
    toggle-group.tsx
    toggle.tsx
    tooltip.tsx
    use-mobile.tsx
    use-toast.ts
  course-content.tsx
  course-roadmap.tsx
  theme-provider.tsx
hooks/
  use-mobile.tsx
  use-toast.ts
lib/
  utils.ts
public/
  images/
    lovable-logo.svg
  placeholder-logo.svg
  placeholder.svg
styles/
  globals.css
.gitignore
components.json
index.js
middleware.ts
next.config.mjs
package.json
postcss.config.mjs
README.md
server.js
tailwind.config.ts
tsconfig.json
vercel.json
</directory_structure>

<files>
This section contains the contents of the repository's files.

<file path="app/achievements/page.tsx">
import Link from "next/link"
import { Award, ChevronRight, Download, Share2, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-emerald-600">
              WebDev Masters
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">
                Dashboard
              </Link>
              <Link href="/courses" className="text-gray-600 hover:text-gray-900">
                Courses
              </Link>
              <Link href="/achievements" className="text-emerald-600 font-medium">
                Achievements
              </Link>
              <Link href="/community" className="text-gray-600 hover:text-gray-900">
                Community
              </Link>
            </nav>
            <Button asChild>
              <Link href="/dashboard">My Dashboard</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Your Achievements</h1>
          <p className="text-gray-600 mb-8">Track your progress and share your accomplishments</p>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Badges Earned</CardTitle>
                <CardDescription>Your collection of skill badges</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <div className="mr-4 bg-amber-100 p-3 rounded-full">
                    <Award className="h-8 w-8 text-amber-500" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold">12 / 48</div>
                    <Progress value={25} className="h-2 mt-1" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Certificates</CardTitle>
                <CardDescription>Completed course certificates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <div className="mr-4 bg-emerald-100 p-3 rounded-full">
                    <Trophy className="h-8 w-8 text-emerald-500" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold">2 / 25</div>
                    <Progress value={8} className="h-2 mt-1" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Profile Completion</CardTitle>
                <CardDescription>Add more details to your profile</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <div className="mr-4 bg-purple-100 p-3 rounded-full">
                    <Award className="h-8 w-8 text-purple-500" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold">75%</div>
                    <Progress value={75} className="h-2 mt-1" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Achievements Tabs */}
          <Tabs defaultValue="badges">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="badges">Badges</TabsTrigger>
              <TabsTrigger value="certificates">Certificates</TabsTrigger>
              <TabsTrigger value="medals">Medals</TabsTrigger>
            </TabsList>

            {/* Badges Tab */}
            <TabsContent value="badges">
              <div className="space-y-8">
                {/* HTML Badges */}
                <div>
                  <h2 className="text-xl font-bold mb-4">HTML Mastery</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {/* Badge 1 - Earned */}
                    <div className="bg-white rounded-lg p-4 text-center border border-gray-200 shadow-sm">
                      <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Award className="h-8 w-8 text-amber-500" />
                      </div>
                      <h3 className="font-medium text-sm mb-1">HTML Detective</h3>
                      <p className="text-xs text-gray-500 mb-2">Identify common HTML mistakes</p>
                      <div className="text-xs bg-emerald-100 text-emerald-700 rounded-full py-1 px-2 inline-block">
                        Earned
                      </div>
                    </div>

                    {/* Badge 2 - Earned */}
                    <div className="bg-white rounded-lg p-4 text-center border border-gray-200 shadow-sm">
                      <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Award className="h-8 w-8 text-amber-500" />
                      </div>
                      <h3 className="font-medium text-sm mb-1">Semantic Pro</h3>
                      <p className="text-xs text-gray-500 mb-2">Master semantic HTML elements</p>
                      <div className="text-xs bg-emerald-100 text-emerald-700 rounded-full py-1 px-2 inline-block">
                        Earned
                      </div>
                    </div>

                    {/* Badge 3 - Earned */}
                    <div className="bg-white rounded-lg p-4 text-center border border-gray-200 shadow-sm">
                      <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Award className="h-8 w-8 text-amber-500" />
                      </div>
                      <h3 className="font-medium text-sm mb-1">Accessibility Ally</h3>
                      <p className="text-xs text-gray-500 mb-2">Create accessible HTML markup</p>
                      <div className="text-xs bg-emerald-100 text-emerald-700 rounded-full py-1 px-2 inline-block">
                        Earned
                      </div>
                    </div>

                    {/* Badge 4 - Locked */}
                    <div className="bg-white rounded-lg p-4 text-center border border-gray-200 shadow-sm opacity-60">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Award className="h-8 w-8 text-gray-400" />
                      </div>
                      <h3 className="font-medium text-sm mb-1">Form Master</h3>
                      <p className="text-xs text-gray-500 mb-2">Create perfect HTML forms</p>
                      <div className="text-xs bg-gray-100 text-gray-500 rounded-full py-1 px-2 inline-block">
                        Locked
                      </div>
                    </div>
                  </div>
                </div>

                {/* CSS Badges */}
                <div>
                  <h2 className="text-xl font-bold mb-4">CSS Mastery</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {/* Badge 1 - Earned */}
                    <div className="bg-white rounded-lg p-4 text-center border border-gray-200 shadow-sm">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Award className="h-8 w-8 text-blue-500" />
                      </div>
                      <h3 className="font-medium text-sm mb-1">Layout Wizard</h3>
                      <p className="text-xs text-gray-500 mb-2">Master CSS layouts</p>
                      <div className="text-xs bg-emerald-100 text-emerald-700 rounded-full py-1 px-2 inline-block">
                        Earned
                      </div>
                    </div>

                    {/* Badge 2 - Earned */}
                    <div className="bg-white rounded-lg p-4 text-center border border-gray-200 shadow-sm">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Award className="h-8 w-8 text-blue-500" />
                      </div>
                      <h3 className="font-medium text-sm mb-1">Flexbox Hero</h3>
                      <p className="text-xs text-gray-500 mb-2">Master flexbox layouts</p>
                      <div className="text-xs bg-emerald-100 text-emerald-700 rounded-full py-1 px-2 inline-block">
                        Earned
                      </div>
                    </div>

                    {/* Badge 3 - Locked */}
                    <div className="bg-white rounded-lg p-4 text-center border border-gray-200 shadow-sm opacity-60">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Award className="h-8 w-8 text-gray-400" />
                      </div>
                      <h3 className="font-medium text-sm mb-1">Grid Guru</h3>
                      <p className="text-xs text-gray-500 mb-2">Master CSS grid layouts</p>
                      <div className="text-xs bg-gray-100 text-gray-500 rounded-full py-1 px-2 inline-block">
                        Locked
                      </div>
                    </div>

                    {/* Badge 4 - Locked */}
                    <div className="bg-white rounded-lg p-4 text-center border border-gray-200 shadow-sm opacity-60">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Award className="h-8 w-8 text-gray-400" />
                      </div>
                      <h3 className="font-medium text-sm mb-1">Animation Artist</h3>
                      <p className="text-xs text-gray-500 mb-2">Create smooth CSS animations</p>
                      <div className="text-xs bg-gray-100 text-gray-500 rounded-full py-1 px-2 inline-block">
                        Locked
                      </div>
                    </div>
                  </div>
                </div>

                {/* JavaScript Badges */}
                <div>
                  <h2 className="text-xl font-bold mb-4">JavaScript Mastery</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {/* Badge 1 - Earned */}
                    <div className="bg-white rounded-lg p-4 text-center border border-gray-200 shadow-sm">
                      <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Award className="h-8 w-8 text-yellow-500" />
                      </div>
                      <h3 className="font-medium text-sm mb-1">DOM Manipulator</h3>
                      <p className="text-xs text-gray-500 mb-2">Master DOM manipulation</p>
                      <div className="text-xs bg-emerald-100 text-emerald-700 rounded-full py-1 px-2 inline-block">
                        Earned
                      </div>
                    </div>

                    {/* Badge 2 - Locked */}
                    <div className="bg-white rounded-lg p-4 text-center border border-gray-200 shadow-sm opacity-60">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Award className="h-8 w-8 text-gray-400" />
                      </div>
                      <h3 className="font-medium text-sm mb-1">Event Wizard</h3>
                      <p className="text-xs text-gray-500 mb-2">Handle events like a pro</p>
                      <div className="text-xs bg-gray-100 text-gray-500 rounded-full py-1 px-2 inline-block">
                        Locked
                      </div>
                    </div>

                    {/* Badge 3 - Locked */}
                    <div className="bg-white rounded-lg p-4 text-center border border-gray-200 shadow-sm opacity-60">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Award className="h-8 w-8 text-gray-400" />
                      </div>
                      <h3 className="font-medium text-sm mb-1">Async Master</h3>
                      <p className="text-xs text-gray-500 mb-2">Master async JavaScript</p>
                      <div className="text-xs bg-gray-100 text-gray-500 rounded-full py-1 px-2 inline-block">
                        Locked
                      </div>
                    </div>

                    {/* Badge 4 - Locked */}
                    <div className="bg-white rounded-lg p-4 text-center border border-gray-200 shadow-sm opacity-60">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Award className="h-8 w-8 text-gray-400" />
                      </div>
                      <h3 className="font-medium text-sm mb-1">ES6 Ninja</h3>
                      <p className="text-xs text-gray-500 mb-2">Master modern JavaScript</p>
                      <div className="text-xs bg-gray-100 text-gray-500 rounded-full py-1 px-2 inline-block">
                        Locked
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <Button variant="outline" className="gap-2">
                    View All Badges
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* Certificates Tab */}
            <TabsContent value="certificates">
              <div className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  {/* Certificate 1 */}
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between">
                        <div>
                          <CardTitle>HTML Fundamentals</CardTitle>
                          <CardDescription>Completed on April 10, 2025</CardDescription>
                        </div>
                        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                          <Trophy className="h-6 w-6 text-emerald-600" />
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 mb-4">
                        This certificate verifies that you have successfully completed the HTML Fundamentals course,
                        demonstrating proficiency in semantic HTML, accessibility, and best practices.
                      </p>
                      <div className="text-sm">
                        <span className="font-medium">Skills:</span> Semantic HTML, Accessibility, Forms, SEO Basics
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm" className="gap-2">
                        <Download className="h-4 w-4" />
                        Download
                      </Button>
                      <Button size="sm" className="gap-2">
                        <Share2 className="h-4 w-4" />
                        Share
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Certificate 2 */}
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between">
                        <div>
                          <CardTitle>CSS Layouts</CardTitle>
                          <CardDescription>Completed on April 15, 2025</CardDescription>
                        </div>
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <Trophy className="h-6 w-6 text-blue-600" />
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 mb-4">
                        This certificate verifies that you have successfully completed the CSS Layouts course,
                        demonstrating proficiency in flexbox, responsive design, and CSS best practices.
                      </p>
                      <div className="text-sm">
                        <span className="font-medium">Skills:</span> Flexbox, CSS Grid, Responsive Design, CSS Variables
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm" className="gap-2">
                        <Download className="h-4 w-4" />
                        Download
                      </Button>
                      <Button size="sm" className="gap-2">
                        <Share2 className="h-4 w-4" />
                        Share
                      </Button>
                    </CardFooter>
                  </Card>
                </div>

                {/* In Progress Certificates */}
                <div>
                  <h2 className="text-xl font-bold mb-4">In Progress</h2>
                  <div className="grid gap-4">
                    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                            <Trophy className="h-5 w-5 text-purple-600" />
                          </div>
                          <div>
                            <h3 className="font-medium">JavaScript Essentials</h3>
                            <p className="text-xs text-gray-500">3/8 lessons completed</p>
                          </div>
                        </div>
                        <Progress value={37.5} className="w-24 h-2" />
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                            <Trophy className="h-5 w-5 text-amber-600" />
                          </div>
                          <div>
                            <h3 className="font-medium">Web Dev Pitfalls</h3>
                            <p className="text-xs text-gray-500">2/5 lessons completed</p>
                          </div>
                        </div>
                        <Progress value={40} className="w-24 h-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Medals Tab */}
            <TabsContent value="medals">
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-bold mb-4">Achievement Medals</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {/* Medal 1 - Earned */}
                    <div className="bg-white rounded-lg p-4 text-center border border-gray-200 shadow-sm">
                      <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Trophy className="h-8 w-8 text-amber-500" />
                      </div>
                      <h3 className="font-medium text-sm mb-1">Fast Learner</h3>
                      <p className="text-xs text-gray-500 mb-2">Complete 5 lessons in one day</p>
                      <div className="text-xs bg-emerald-100 text-emerald-700 rounded-full py-1 px-2 inline-block">
                        Earned
                      </div>
                    </div>

                    {/* Medal 2 - Earned */}
                    <div className="bg-white rounded-lg p-4 text-center border border-gray-200 shadow-sm">
                      <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Trophy className="h-8 w-8 text-emerald-500" />
                      </div>
                      <h3 className="font-medium text-sm mb-1">7-Day Streak</h3>
                      <p className="text-xs text-gray-500 mb-2">Learn for 7 days in a row</p>
                      <div className="text-xs bg-emerald-100 text-emerald-700 rounded-full py-1 px-2 inline-block">
                        Earned
                      </div>
                    </div>

                    {/* Medal 3 - Locked */}
                    <div className="bg-white rounded-lg p-4 text-center border border-gray-200 shadow-sm opacity-60">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Trophy className="h-8 w-8 text-gray-400" />
                      </div>
                      <h3 className="font-medium text-sm mb-1">30-Day Streak</h3>
                      <p className="text-xs text-gray-500 mb-2">Learn for 30 days in a row</p>
                      <div className="text-xs bg-gray-100 text-gray-500 rounded-full py-1 px-2 inline-block">
                        Locked
                      </div>
                    </div>

                    {/* Medal 4 - Locked */}
                    <div className="bg-white rounded-lg p-4 text-center border border-gray-200 shadow-sm opacity-60">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Trophy className="h-8 w-8 text-gray-400" />
                      </div>
                      <h3 className="font-medium text-sm mb-1">Course Master</h3>
                      <p className="text-xs text-gray-500 mb-2">Complete 5 full courses</p>
                      <div className="text-xs bg-gray-100 text-gray-500 rounded-full py-1 px-2 inline-block">
                        Locked
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-4">Community Medals</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {/* Medal 1 - Earned */}
                    <div className="bg-white rounded-lg p-4 text-center border border-gray-200 shadow-sm">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Trophy className="h-8 w-8 text-purple-500" />
                      </div>
                      <h3 className="font-medium text-sm mb-1">Team Player</h3>
                      <p className="text-xs text-gray-500 mb-2">Refer 3 friends to the platform</p>
                      <div className="text-xs bg-emerald-100 text-emerald-700 rounded-full py-1 px-2 inline-block">
                        Earned
                      </div>
                    </div>

                    {/* Medal 2 - Locked */}
                    <div className="bg-white rounded-lg p-4 text-center border border-gray-200 shadow-sm opacity-60">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Trophy className="h-8 w-8 text-gray-400" />
                      </div>
                      <h3 className="font-medium text-sm mb-1">Community Leader</h3>
                      <p className="text-xs text-gray-500 mb-2">Help 10 users in the forum</p>
                      <div className="text-xs bg-gray-100 text-gray-500 rounded-full py-1 px-2 inline-block">
                        Locked
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* Share Profile Section */}
          <div className="mt-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg p-6 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h2 className="text-xl font-bold mb-2">Share Your Achievements</h2>
                <p className="text-emerald-100">
                  Add your badges and certificates to your website, resume, or social media profiles.
                </p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
                  Get Embed Code
                </Button>
                <Button className="bg-white text-emerald-600 hover:bg-white/90">Share Profile</Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-600">© 2025 WebDev Masters. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <Link href="/terms" className="text-sm text-gray-600 hover:text-gray-900">
                Terms
              </Link>
              <Link href="/privacy" className="text-sm text-gray-600 hover:text-gray-900">
                Privacy
              </Link>
              <Link href="/help" className="text-sm text-gray-600 hover:text-gray-900">
                Help
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
</file>

<file path="app/blog/index.ts">
export { default } from './page';
</file>

<file path="app/blog/page.tsx">
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function BlogPage() {
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with Prompt Engineering",
      excerpt:
        "Learn the fundamentals of crafting effective prompts for AI models to get the results you want consistently.",
      date: "April 20, 2025",
      category: "Tutorials",
      categoryColor: "violet",
      slug: "getting-started-with-prompt-engineering",
    },
    {
      id: 2,
      title: "From Idea to MVP in 48 Hours",
      excerpt:
        "A case study on how one developer used AI tools to build and launch a functional product over a weekend.",
      date: "April 15, 2025",
      category: "Case Studies",
      categoryColor: "blue",
      slug: "idea-to-mvp-in-48-hours",
    },
    {
      id: 3,
      title: "10 AI Tools Every Developer Should Know",
      excerpt:
        "Discover the essential AI-powered tools that can supercharge your development workflow and productivity.",
      date: "April 10, 2025",
      category: "Tips & Tricks",
      categoryColor: "green",
      slug: "10-ai-tools-every-developer-should-know",
    },
    {
      id: 4,
      title: "The Future of Web Development with AI",
      excerpt:
        "Exploring how AI is reshaping web development practices and what skills will be most valuable in the coming years.",
      date: "April 5, 2025",
      category: "Insights",
      categoryColor: "amber",
      slug: "future-of-web-development-with-ai",
    },
    {
      id: 5,
      title: "Building Accessible UIs with AI Assistance",
      excerpt:
        "How to leverage AI tools to create more accessible and inclusive user interfaces without sacrificing design quality.",
      date: "April 1, 2025",
      category: "Tutorials",
      categoryColor: "violet",
      slug: "building-accessible-uis-with-ai-assistance",
    },
    {
      id: 6,
      title: "Optimizing Your Workflow with AI Code Assistants",
      excerpt:
        "Practical tips for integrating AI code assistants into your development process for maximum productivity.",
      date: "March 28, 2025",
      category: "Tips & Tricks",
      categoryColor: "green",
      slug: "optimizing-workflow-with-ai-code-assistants",
    },
  ]

  // Function to get color class based on category
  const getCategoryColorClass = (color: string) => {
    const colorMap: Record<string, string> = {
      violet: "bg-violet-500/20 text-violet-400",
      blue: "bg-blue-500/20 text-blue-400",
      green: "bg-green-500/20 text-green-400",
      amber: "bg-amber-500/20 text-amber-400",
      red: "bg-red-500/20 text-red-400",
      purple: "bg-purple-500/20 text-purple-400",
    }
    return colorMap[color] || colorMap.violet
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-gray-400 hover:text-white">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-2xl font-bold">Blog</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Featured Post */}
          <div className="mb-16">
            <h2 className="text-xl font-semibold mb-6">Featured Post</h2>
            <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
              <div className="h-64 bg-gray-800 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                  <span className="text-sm">Featured Image</span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm text-gray-400">April 20, 2025</span>
                  <span className="w-1 h-1 rounded-full bg-gray-500"></span>
                  <span className="text-sm px-2 py-1 bg-violet-500/20 text-violet-400 rounded-full">Tutorials</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Getting Started with Prompt Engineering</h3>
                <p className="text-gray-400 mb-6">
                  Learn the fundamentals of crafting effective prompts for AI models to get the results you want
                  consistently. This comprehensive guide covers everything from basic principles to advanced techniques
                  for working with different AI models.
                </p>
                <Link
                  href="/blog/getting-started-with-prompt-engineering"
                  className="inline-block px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-md transition-colors"
                >
                  Read article
                </Link>
              </div>
            </div>
          </div>

          {/* All Posts */}
          <div>
            <h2 className="text-xl font-semibold mb-6">All Posts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-violet-500 transition-all"
                >
                  <div className="h-48 bg-gray-800 relative">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                      <span className="text-sm">Featured Image</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs text-gray-400">{post.date}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-500"></span>
                      <span className={`text-xs px-2 py-1 rounded-full ${getCategoryColorClass(post.categoryColor)}`}>
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                    <p className="text-gray-400 mb-4 line-clamp-2">{post.excerpt}</p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-violet-400 hover:text-violet-300 text-sm font-medium"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-500">© 2025 vibelevels. all rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <Link href="/about" className="text-sm text-gray-500 hover:text-gray-300">
                about
              </Link>
              <Link href="/blog" className="text-sm text-gray-500 hover:text-gray-300">
                blog
              </Link>
              <Link href="/community" className="text-sm text-gray-500 hover:text-gray-300">
                community
              </Link>
              <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-300">
                terms
              </Link>
              <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-300">
                privacy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
</file>

<file path="app/community/topics/[id]/page.tsx">
"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Heart, MessageSquare, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TopicPage({ params }: { params: { id: string } }) {
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(12)

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1)
    } else {
      setLikeCount(likeCount + 1)
    }
    setLiked(!liked)
  }

  // Sample topic data
  const topic = {
    id: params.id,
    title: "Best practices for v0 prompts?",
    content: `
      <p>Hey everyone,</p>
      <p>I've been using v0 for a few weeks now and I'm loving it, but I feel like I could be getting better results with my prompts. I've noticed that sometimes I get exactly what I want, and other times the output is way off.</p>
      <p>What are some best practices you've found for crafting effective prompts for v0? Any specific patterns or approaches that consistently yield good results?</p>
      <p>Also, how do you handle more complex requirements? Do you break them down into smaller prompts or try to be as detailed as possible in a single prompt?</p>
      <p>Thanks in advance for your insights!</p>
    `,
    author: "JaneDoe",
    authorAvatar: "JD",
    date: "April 22, 2025",
    category: "Prompt Engineering",
    categoryColor: "violet",
    views: 342,
    isHot: true,
  }

  // Sample replies
  const replies = [
    {
      id: 1,
      author: "MikeSmith",
      authorAvatar: "MS",
      authorColor: "blue",
      date: "April 22, 2025",
      content: `
        <p>Great question! Here are some practices I've found helpful:</p>
        <ol>
          <li>Be specific about the output format you want (e.g., "Create a React component that...")</li>
          <li>Provide context about your project and dependencies</li>
          <li>For UI components, describe both functionality and styling</li>
          <li>Use examples when possible</li>
        </ol>
        <p>For complex requirements, I usually start with a high-level prompt to get the basic structure, then follow up with more specific prompts to refine parts of it.</p>
      `,
      likes: 8,
    },
    {
      id: 2,
      author: "AlexLee",
      authorAvatar: "AL",
      authorColor: "green",
      date: "April 22, 2025",
      content: `
        <p>I've found that being very explicit about the technologies and patterns you want to use makes a huge difference.</p>
        <p>For example, instead of saying "Create a form," say "Create a form using React Hook Form with Zod validation that includes the following fields..."</p>
        <p>Also, don't be afraid to iterate! If the first result isn't quite right, explain what's missing or incorrect and ask for a revision.</p>
      `,
      likes: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Link href="/community" className="text-gray-400 hover:text-white">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-xl font-bold truncate">{topic.title}</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Topic */}
          <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden mb-8">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400 shrink-0`}
                >
                  {topic.authorAvatar}
                </div>
                <div>
                  <div className="font-medium">{topic.author}</div>
                  <div className="text-sm text-gray-400">{topic.date}</div>
                </div>
                <div className="ml-auto flex items-center gap-2">
                  <span className={`px-2 py-1 bg-violet-500/20 text-violet-400 rounded-full text-xs`}>
                    {topic.category}
                  </span>
                  {topic.isHot && (
                    <span className="px-2 py-1 bg-violet-500/20 text-violet-400 rounded-full text-xs">Hot</span>
                  )}
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4">{topic.title}</h2>

              <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: topic.content }} />

              <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-800">
                <div className="flex items-center gap-4">
                  <button
                    className={`flex items-center gap-1 ${liked ? "text-red-500" : "text-gray-400 hover:text-red-500"}`}
                    onClick={handleLike}
                  >
                    <Heart className="h-5 w-5" fill={liked ? "currentColor" : "none"} />
                    <span>{likeCount}</span>
                  </button>
                  <button className="flex items-center gap-1 text-gray-400 hover:text-white">
                    <MessageSquare className="h-5 w-5" />
                    <span>{replies.length}</span>
                  </button>
                </div>
                <button className="flex items-center gap-1 text-gray-400 hover:text-white">
                  <Share2 className="h-5 w-5" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>

          {/* Replies */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Replies</h3>

            <div className="space-y-6">
              {replies.map((reply) => (
                <div key={reply.id} className="bg-gray-900 rounded-xl border border-gray-800 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-10 h-10 rounded-full bg-${reply.authorColor}-500/20 flex items-center justify-center text-${reply.authorColor}-400 shrink-0`}
                    >
                      {reply.authorAvatar}
                    </div>
                    <div>
                      <div className="font-medium">{reply.author}</div>
                      <div className="text-sm text-gray-400">{reply.date}</div>
                    </div>
                  </div>

                  <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: reply.content }} />

                  <div className="flex items-center mt-4">
                    <button className="flex items-center gap-1 text-gray-400 hover:text-red-500">
                      <Heart className="h-4 w-4" />
                      <span>{reply.likes}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reply Form */}
          <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
            <h3 className="text-lg font-semibold mb-4">Post a Reply</h3>

            <div className="mb-4">
              <textarea
                className="w-full bg-gray-800 border border-gray-700 rounded-md p-3 text-white min-h-32 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                placeholder="Write your reply here..."
              ></textarea>
            </div>

            <div className="flex justify-end">
              <Button className="bg-violet-600 hover:bg-violet-700">Post Reply</Button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-500">© 2025 vibelevels. all rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <Link href="/about" className="text-sm text-gray-500 hover:text-gray-300">
                about
              </Link>
              <Link href="/blog" className="text-sm text-gray-500 hover:text-gray-300">
                blog
              </Link>
              <Link href="/community" className="text-sm text-gray-500 hover:text-gray-300">
                community
              </Link>
              <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-300">
                terms
              </Link>
              <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-300">
                privacy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
</file>

<file path="app/community/index.ts">
export { default } from './page';
</file>

<file path="app/community/loading.tsx">
export default function Loading() {
  return null
}
</file>

<file path="app/community/page.tsx">
import Link from "next/link"
import { ArrowLeft, MessageSquare, Plus, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CommunityPage() {
  // Sample forum categories
  const categories = [
    {
      id: 1,
      name: "General Discussion",
      description: "Chat about anything related to web development and AI tools",
      topics: 124,
      posts: 1453,
      color: "violet",
    },
    {
      id: 2,
      name: "Prompt Engineering",
      description: "Share and discuss effective prompting techniques",
      topics: 87,
      posts: 942,
      color: "blue",
    },
    {
      id: 3,
      name: "Project Showcase",
      description: "Show off what you've built and get feedback",
      topics: 56,
      posts: 328,
      color: "green",
    },
    {
      id: 4,
      name: "Help & Support",
      description: "Ask questions and get help with technical issues",
      topics: 203,
      posts: 1872,
      color: "amber",
    },
  ]

  // Sample recent topics
  const recentTopics = [
    {
      id: 1,
      title: "Best practices for v0 prompts?",
      author: "JaneDoe",
      authorAvatar: "JD",
      replies: 23,
      views: 342,
      lastActivity: "2 hours ago",
      category: "Prompt Engineering",
      isHot: true,
      color: "violet",
    },
    {
      id: 2,
      title: "How to structure large projects with Next.js?",
      author: "MikeSmith",
      authorAvatar: "MS",
      replies: 12,
      views: 187,
      lastActivity: "1 day ago",
      category: "General Discussion",
      isHot: false,
      color: "blue",
    },
    {
      id: 3,
      title: "Share your AI workflow! What tools are you using?",
      author: "AlexLee",
      authorAvatar: "AL",
      replies: 34,
      views: 521,
      lastActivity: "3 days ago",
      category: "General Discussion",
      isHot: false,
      color: "green",
    },
    {
      id: 4,
      title: "Getting 'TypeError: Cannot read properties of undefined' in my React app",
      author: "SarahJones",
      authorAvatar: "SJ",
      replies: 8,
      views: 112,
      lastActivity: "5 days ago",
      category: "Help & Support",
      isHot: false,
      color: "red",
    },
    {
      id: 5,
      title: "Just launched my AI-powered note-taking app!",
      author: "DavidWang",
      authorAvatar: "DW",
      replies: 19,
      views: 276,
      lastActivity: "1 week ago",
      category: "Project Showcase",
      isHot: false,
      color: "amber",
    },
  ]

  // Function to get color class based on category
  const getCategoryColorClass = (color: string) => {
    const colorMap: Record<string, string> = {
      violet: "bg-violet-500/20 text-violet-400",
      blue: "bg-blue-500/20 text-blue-400",
      green: "bg-green-500/20 text-green-400",
      amber: "bg-amber-500/20 text-amber-400",
      red: "bg-red-500/20 text-red-400",
    }
    return colorMap[color] || colorMap.violet
  }

  // Function to get avatar color class
  const getAvatarColorClass = (color: string) => {
    const colorMap: Record<string, string> = {
      violet: "bg-violet-500/20 text-violet-400",
      blue: "bg-blue-500/20 text-blue-400",
      green: "bg-green-500/20 text-green-400",
      amber: "bg-amber-500/20 text-amber-400",
      red: "bg-red-500/20 text-red-400",
    }
    return colorMap[color] || colorMap.violet
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="text-gray-400 hover:text-white">
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <h1 className="text-2xl font-bold">Community Forum</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative w-64">
                <input
                  type="text"
                  placeholder="Search discussions..."
                  className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
              <Button asChild className="bg-violet-600 hover:bg-violet-700">
                <Link href="/community/new">
                  <Plus className="h-4 w-4 mr-2" />
                  New Topic
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Categories */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-6">Categories</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="bg-gray-900 rounded-xl border border-gray-800 p-4 hover:border-violet-500 transition-all"
                >
                  <div className="flex items-start">
                    <div
                      className={`w-10 h-10 rounded-md flex items-center justify-center mr-4 ${getCategoryColorClass(category.color)}`}
                    >
                      <MessageSquare className="h-5 w-5" />
                    </div>
                    <div>
                      <Link
                        href={`/community/categories/${category.id}`}
                        className="text-lg font-medium hover:text-violet-400 transition-colors"
                      >
                        {category.name}
                      </Link>
                      <p className="text-sm text-gray-400 mt-1">{category.description}</p>
                      <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                        <span>{category.topics} topics</span>
                        <span>{category.posts} posts</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Discussions */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Recent Discussions</h2>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400">Sort by:</span>
                <select className="bg-gray-800 border border-gray-700 rounded-md py-1 px-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent">
                  <option>Latest Activity</option>
                  <option>Most Replies</option>
                  <option>Most Views</option>
                  <option>Newest</option>
                </select>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-12 gap-4 p-4 bg-gray-850 border-b border-gray-800 text-sm font-medium text-gray-400">
                <div className="col-span-6">Topic</div>
                <div className="col-span-2 text-center">Replies</div>
                <div className="col-span-2 text-center">Views</div>
                <div className="col-span-2 text-center">Activity</div>
              </div>

              {/* Topics */}
              <div className="divide-y divide-gray-800">
                {recentTopics.map((topic) => (
                  <div key={topic.id} className="grid grid-cols-12 gap-4 p-4 hover:bg-gray-850 transition-colors">
                    <div className="col-span-6">
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${getAvatarColorClass(topic.color)}`}
                        >
                          {topic.authorAvatar}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <Link
                              href={`/community/topics/${topic.id}`}
                              className="font-medium text-white hover:text-violet-400 transition-colors"
                            >
                              {topic.title}
                            </Link>
                            {topic.isHot && (
                              <span className="px-2 py-0.5 bg-violet-500/20 text-violet-400 rounded-full text-xs">
                                Hot
                              </span>
                            )}
                          </div>
                          <div className="flex items-center mt-1 text-xs text-gray-400">
                            <span>Started by {topic.author}</span>
                            <span className="mx-2">•</span>
                            <span className={`px-2 py-0.5 rounded-full text-xs ${getCategoryColorClass(topic.color)}`}>
                              {topic.category}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2 flex items-center justify-center text-gray-400">{topic.replies}</div>
                    <div className="col-span-2 flex items-center justify-center text-gray-400">{topic.views}</div>
                    <div className="col-span-2 flex items-center justify-center text-gray-400">
                      {topic.lastActivity}
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="p-4 border-t border-gray-800 flex justify-between items-center">
                <Button variant="outline" className="border-gray-700 text-gray-400 hover:text-white" disabled>
                  Previous
                </Button>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-violet-600 text-white rounded-md">1</span>
                  <span className="px-3 py-1 hover:bg-gray-800 rounded-md cursor-pointer">2</span>
                  <span className="px-3 py-1 hover:bg-gray-800 rounded-md cursor-pointer">3</span>
                  <span className="px-3 py-1 hover:bg-gray-800 rounded-md cursor-pointer">4</span>
                  <span className="px-3 py-1 hover:bg-gray-800 rounded-md cursor-pointer">5</span>
                </div>
                <Button variant="outline" className="border-gray-700 text-gray-400 hover:text-white">
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-500">© 2025 vibelevels. all rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <Link href="/about" className="text-sm text-gray-500 hover:text-gray-300">
                about
              </Link>
              <Link href="/blog" className="text-sm text-gray-500 hover:text-gray-300">
                blog
              </Link>
              <Link href="/community" className="text-sm text-gray-500 hover:text-gray-300">
                community
              </Link>
              <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-300">
                terms
              </Link>
              <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-300">
                privacy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
</file>

<file path="app/courses/ai-dev-tools/page.tsx">
"use client"

import { CourseContent } from "@/components/course-content"

export default function AIDevToolsPage() {
  const steps = [
    {
      title: "AI Assistants Overview",
      content: (
        <>
          <h2>Understanding AI Development Assistants</h2>
          <p>
            AI development tools are transforming how developers write code. Let's explore the landscape of AI
            assistants and understand their capabilities and limitations.
          </p>

          <h3>1. Code Completion Tools</h3>
          <p>
            Tools like GitHub Copilot and Amazon CodeWhisperer provide inline code suggestions based on context. They
            excel at generating boilerplate code, suggesting function implementations, and completing repetitive
            patterns.
          </p>

          <h3>2. Natural Language to Code Converters</h3>
          <p>
            These tools translate natural language descriptions into executable code. They're particularly useful for
            developers who know what they want to accomplish but aren't sure about the exact syntax or implementation
            details.
          </p>

          <h3>3. Code Explanation and Documentation</h3>
          <p>
            AI tools can analyze existing code to generate explanations, documentation, and even detect potential bugs
            or performance issues. This helps with onboarding new team members and maintaining legacy codebases.
          </p>

          <div className="bg-gray-800 p-4 rounded-md my-4">
            <p className="font-semibold">Key Considerations:</p>
            <ul className="list-disc pl-5">
              <li>AI suggestions should be reviewed carefully for correctness and security</li>
              <li>Understanding the generated code is crucial for maintenance and debugging</li>
              <li>AI tools complement human expertise rather than replace it</li>
              <li>Different tools excel in different domains and languages</li>
            </ul>
          </div>
        </>
      ),
    },
    {
      title: "GitHub Copilot Deep Dive",
      content: (
        <>
          <h2>GitHub Copilot: Capabilities and Best Practices</h2>
          <p>
            GitHub Copilot is one of the most widely used AI coding assistants. Let's explore how to use it effectively
            and understand its strengths and limitations.
          </p>

          <h3>1. How Copilot Works</h3>
          <p>
            Copilot is powered by OpenAI's Codex model, trained on billions of lines of public code. It analyzes the
            context of your code, including file names, function signatures, comments, and surrounding code to generate
            relevant suggestions.
          </p>

          <h3>2. Effective Prompting Techniques</h3>
          <p>
            The quality of Copilot's suggestions depends significantly on how you prompt it. Writing clear comments,
            providing function signatures with descriptive parameter names, and breaking down complex tasks can lead to
            better results.
          </p>

          <h3>3. Integration with Development Workflow</h3>
          <p>
            Copilot integrates with popular IDEs like VS Code, Visual Studio, and JetBrains IDEs. It works in the
            background, offering suggestions as you type, which you can accept, modify, or ignore.
          </p>

          <div className="bg-gray-800 p-4 rounded-md my-4">
            <p className="font-semibold">Effective Prompting Examples:</p>
            <pre>
              <code>{`// Less effective:
function process() {
  // Do stuff
}

// More effective:
/**
 * Process user data by validating input, transforming to the required format,
 * and storing in the database. Returns the ID of the created record.
 * @param {Object} userData - The user data to process
 * @returns {string} The ID of the created record
 */
function processUserData(userData) {
  // Copilot will generate better code here
}`}</code>
            </pre>
          </div>
        </>
      ),
    },
    {
      title: "Comprehensive AI Environments",
      content: (
        <>
          <h2>Comprehensive AI Development Environments</h2>
          <p>
            Beyond code completion, a new generation of AI tools offers end-to-end development environments. Let's
            compare these comprehensive platforms and understand their unique approaches.
          </p>

          <h3>1. v0 by Vercel</h3>
          <p>
            v0 is an AI-powered development environment that can generate entire components, pages, or applications from
            natural language descriptions. It specializes in React and Next.js development with a focus on modern UI
            components and responsive design.
          </p>

          <h3>2. Lovable</h3>
          <p>
            Lovable is a comprehensive AI development platform that helps build full-stack applications. It can generate
            and modify code across multiple files, understand project context, and implement complex features based on
            natural language descriptions.
          </p>

          <h3>3. Key Differences from Code Assistants</h3>
          <p>
            Unlike code completion tools that work line-by-line, these platforms understand higher-level concepts like
            application architecture, component relationships, and user flows. They can generate coherent, multi-file
            implementations that follow best practices.
          </p>

          <div className="bg-gray-800 p-4 rounded-md my-4">
            <p className="font-semibold">Comparison of Approaches:</p>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-2">Feature</th>
                  <th className="text-left py-2">Code Assistants (Copilot)</th>
                  <th className="text-left py-2">AI Environments (v0, Lovable)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700">
                  <td className="py-2">Scope</td>
                  <td className="py-2">Line or function level</td>
                  <td className="py-2">Component, page, or application level</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-2">Context Awareness</td>
                  <td className="py-2">Local file context</td>
                  <td className="py-2">Project-wide context</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-2">Interface</td>
                  <td className="py-2">IDE integration</td>
                  <td className="py-2">Dedicated UI with previews</td>
                </tr>
                <tr>
                  <td className="py-2">Learning Curve</td>
                  <td className="py-2">Low (works within existing workflow)</td>
                  <td className="py-2">Medium (requires learning platform-specific patterns)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ),
    },
    {
      title: "Practical Integration Strategies",
      content: (
        <>
          <h2>Practical AI Tool Integration Strategies</h2>
          <p>
            Integrating AI tools into your development workflow requires thoughtful consideration. Let's explore
            strategies for effectively incorporating these tools while maintaining code quality and developer skills.
          </p>

          <h3>1. Hybrid Development Approaches</h3>
          <p>
            Combine AI-generated code with human expertise. Use AI for initial scaffolding, boilerplate, and routine
            tasks, while focusing human effort on architecture, business logic, and complex algorithms.
          </p>

          <h3>2. Code Review and Quality Assurance</h3>
          <p>
            Establish robust review processes for AI-generated code. Check for security vulnerabilities, performance
            issues, and alignment with project standards. Tools like ESLint, SonarQube, and automated tests are
            essential companions to AI coding tools.
          </p>

          <h3>3. Skill Development and Learning</h3>
          <p>
            Use AI tools as learning opportunities. Analyze generated code to understand patterns and best practices.
            Challenge yourself to understand why the AI made certain choices and how you might improve upon its
            suggestions.
          </p>

          <div className="bg-gray-800 p-4 rounded-md my-4">
            <p className="font-semibold">Integration Workflow Example:</p>
            <ol className="list-decimal pl-5">
              <li>Define feature requirements clearly</li>
              <li>Use AI to generate initial implementation</li>
              <li>Review and understand the generated code</li>
              <li>Modify for project-specific needs and edge cases</li>
              <li>Add tests to verify behavior</li>
              <li>Refactor for readability and performance</li>
              <li>Document key decisions and non-obvious aspects</li>
              <li>Submit for peer review</li>
            </ol>
          </div>
        </>
      ),
    },
    {
      title: "Future of AI Development",
      content: (
        <>
          <h2>The Future of AI-Assisted Development</h2>
          <p>
            AI development tools are evolving rapidly. Let's explore emerging trends and prepare for the future
            landscape of AI-assisted software development.
          </p>

          <h3>1. Multimodal AI Development</h3>
          <p>
            Future tools will combine code generation with visual design, natural language processing, and even voice
            interfaces. Developers might describe features verbally, sketch interfaces, and have AI generate
            corresponding implementations.
          </p>

          <h3>2. Personalized AI Assistants</h3>
          <p>
            AI tools will learn from individual developers' styles, preferences, and project patterns. They'll adapt to
            your coding conventions, architectural choices, and even anticipate your needs based on past interactions.
          </p>

          <h3>3. AI-Driven Software Architecture</h3>
          <p>
            Beyond generating individual components, AI will help design entire system architectures, suggesting optimal
            patterns, technologies, and trade-offs based on requirements. This will elevate AI from a coding assistant
            to a true development partner.
          </p>

          <div className="bg-gray-800 p-4 rounded-md my-4">
            <p className="font-semibold">Preparing for the AI-Assisted Future:</p>
            <ul className="list-disc pl-5">
              <li>Focus on developing high-level design and architectural skills</li>
              <li>Build expertise in effectively communicating requirements and constraints</li>
              <li>Learn to evaluate and improve AI-generated solutions</li>
              <li>Stay current with AI capabilities and limitations</li>
              <li>Develop domain expertise that AI lacks</li>
              <li>Practice critical thinking and problem decomposition</li>
            </ul>
          </div>
        </>
      ),
    },
  ]

  return (
    <CourseContent
      title="AI Development Tools"
      description="Compare AI assistants like Copilot with complete development environments like v0 and Lovable."
      color="purple"
      steps={steps}
    />
  )
}
</file>

<file path="app/courses/one-feature/page.tsx">
"use client"

import { CourseContent } from "@/components/course-content"

export default function OneFeaturePage() {
  const steps = [
    {
      title: "Iterative Development Mindset",
      content: (
        <>
          <h2>The Iterative Development Mindset</h2>
          <p>
            Iterative development is a powerful approach that breaks down complex projects into manageable pieces. Let's
            explore the mindset shift required to embrace the "one feature at a time" philosophy.
          </p>

          <h3>1. Embracing Incremental Progress</h3>
          <p>
            Rather than trying to build everything at once, focus on delivering small, valuable increments. This
            approach reduces complexity, allows for faster feedback, and creates a sense of progress and momentum.
          </p>

          <h3>2. Minimum Viable Product (MVP) Thinking</h3>
          <p>
            Start by identifying the core features that deliver the most value with the least effort. Build these first
            to create a functional foundation that can be expanded upon. Remember that perfect is the enemy of done.
          </p>

          <h3>3. Feedback-Driven Development</h3>
          <p>
            Each completed feature is an opportunity to gather feedback and learn. Use this feedback to refine your
            understanding of user needs and adjust your priorities for subsequent features.
          </p>

          <div className="bg-gray-800 p-4 rounded-md my-4">
            <p className="font-semibold">Benefits of Iterative Development:</p>
            <ul className="list-disc pl-5">
              <li>Reduced complexity and cognitive load</li>
              <li>Earlier detection of issues and misalignments</li>
              <li>More frequent wins and motivation boosts</li>
              <li>Greater flexibility to adapt to changing requirements</li>
              <li>Faster time-to-market for core functionality</li>
            </ul>
          </div>
        </>
      ),
    },
    {
      title: "Feature Prioritization",
      content: (
        <>
          <h2>Effective Feature Prioritization</h2>
          <p>
            Not all features are created equal. Prioritizing effectively ensures you're always working on what matters
            most. Let's explore frameworks and techniques for feature prioritization.
          </p>

          <h3>1. Value vs. Effort Matrix</h3>
          <p>
            Plot features on a 2x2 matrix based on their business value and implementation effort. Focus first on
            high-value, low-effort features (quick wins), then high-value, high-effort features (major projects).
          </p>

          <h3>2. RICE Scoring Model</h3>
          <p>
            Evaluate features based on Reach (how many users will it affect), Impact (how much it will affect them),
            Confidence (how certain you are about the estimates), and Effort (how much time it will take). Calculate a
            RICE score to compare features objectively.
          </p>

          <h3>3. User Story Mapping</h3>
          <p>
            Create a visual representation of the user journey and map features to different steps in that journey. This
            helps identify gaps and dependencies while keeping the focus on user needs rather than technical
            implementation.
          </p>

          <div className="bg-gray-800 p-4 rounded-md my-4">
            <p className="font-semibold">RICE Score Calculation:</p>
            <pre>
              <code>{`RICE Score = (Reach × Impact × Confidence) ÷ Effort

Example:
Feature A:
- Reach: 5,000 users
- Impact: 3 (on a scale of 1-3)
- Confidence: 80%
- Effort: 5 person-weeks

RICE Score = (5000 × 3 × 0.8) ÷ 5 = 2,400`}</code>
            </pre>
          </div>
        </>
      ),
    },
    {
      title: "Feature Scoping",
      content: (
        <>
          <h2>Precise Feature Scoping</h2>
          <p>
            Clear boundaries are essential for the "one feature at a time" approach. Let's explore how to scope features
            effectively to ensure they're manageable and well-defined.
          </p>

          <h3>1. Defining Feature Boundaries</h3>
          <p>
            Clearly articulate what is and isn't included in the feature. Be explicit about the scope to prevent feature
            creep and maintain focus. Document these boundaries in user stories or feature specifications.
          </p>

          <h3>2. Vertical Slicing</h3>
          <p>
            Instead of building horizontal layers (e.g., database, then backend, then frontend), implement vertical
            slices that cut through all layers but deliver a narrow piece of functionality. This creates working,
            testable features at each step.
          </p>

          <h3>3. Breaking Down Complex Features</h3>
          <p>
            If a feature seems too large or complex, break it down further. Look for natural subdivisions that could be
            implemented and delivered independently while still providing value.
          </p>

          <div className="bg-gray-800 p-4 rounded-md my-4">
            <p className="font-semibold">Example: Breaking Down a "User Profile" Feature</p>
            <ol className="list-decimal pl-5">
              <li>Basic profile information (name, email, avatar)</li>
              <li>Profile editing functionality</li>
              <li>Password change functionality</li>
              <li>Activity history</li>
              <li>Notification preferences</li>
            </ol>
            <p className="mt-2">
              Each of these could be implemented as a separate vertical slice, with the first item providing immediate
              value.
            </p>
          </div>
        </>
      ),
    },
    {
      title: "Implementation Strategy",
      content: (
        <>
          <h2>Feature Implementation Strategy</h2>
          <p>
            With a well-scoped feature, it's time to implement it efficiently. Let's explore strategies for implementing
            features one at a time while maintaining code quality and project momentum.
          </p>

          <h3>1. Feature Branches and Pull Requests</h3>
          <p>
            Use feature branches in your version control system to isolate work on individual features. This allows for
            focused development, code reviews, and the ability to deploy or delay specific features independently.
          </p>

          <h3>2. Test-Driven Development (TDD)</h3>
          <p>
            Start by writing tests that define the expected behavior of your feature. This clarifies requirements,
            provides immediate feedback during development, and ensures your feature works as expected before
            integration.
          </p>

          <h3>3. Continuous Integration</h3>
          <p>
            Integrate your feature code with the main codebase frequently to catch integration issues early. Automated
            tests and builds help ensure that each feature addition doesn't break existing functionality.
          </p>

          <div className="bg-gray-800 p-4 rounded-md my-4">
            <p className="font-semibold">Feature Implementation Checklist:</p>
            <ul className="list-disc pl-5">
              <li>Create a feature branch from the main branch</li>
              <li>Write tests that define the expected behavior</li>
              <li>Implement the minimum code needed to pass the tests</li>
              <li>Refactor for clarity and performance while keeping tests passing</li>
              <li>Document the feature for users and other developers</li>
              <li>Create a pull request for code review</li>
              <li>Address feedback and merge when approved</li>
            </ul>
          </div>
        </>
      ),
    },
    {
      title: "Iteration and Refinement",
      content: (
        <>
          <h2>Continuous Iteration and Refinement</h2>
          <p>
            The "one feature at a time" approach doesn't end with the initial implementation. Let's explore how to
            iterate and refine features based on feedback and changing requirements.
          </p>

          <h3>1. Gathering and Processing Feedback</h3>
          <p>
            Collect feedback from users, stakeholders, and team members after each feature release. Use multiple
            channels (surveys, analytics, support tickets, user interviews) to get a comprehensive understanding of how
            the feature is being used and perceived.
          </p>

          <h3>2. Feature Refinement Cycles</h3>
          <p>
            Plan for refinement cycles after the initial release. These might include usability improvements,
            performance optimizations, or additional capabilities that were intentionally left out of the first
            iteration.
          </p>

          <h3>3. Feature Flags and Experimentation</h3>
          <p>
            Use feature flags to gradually roll out features to subsets of users, A/B test different implementations, or
            quickly disable problematic features. This reduces risk and provides valuable data for refinement.
          </p>

          <div className="bg-gray-800 p-4 rounded-md my-4">
            <p className="font-semibold">Code Example: Simple Feature Flag Implementation</p>
            <pre>
              <code>{`// features.js - Feature flag configuration
export const FEATURES = {
  NEW_DASHBOARD: process.env.NEXT_PUBLIC_ENABLE_NEW_DASHBOARD === 'true',
  ADVANCED_SEARCH: process.env.NEXT_PUBLIC_ENABLE_ADVANCED_SEARCH === 'true',
  DARK_MODE: process.env.NEXT_PUBLIC_ENABLE_DARK_MODE === 'true',
};

// Usage in components
import { FEATURES } from '@/lib/features';

function SearchBar() {
  return (
    <div>
      <input type="text" placeholder="Search..." />
      {FEATURES.ADVANCED_SEARCH && (
        <button>Advanced Options</button>
      )}
    </div>
  );
}`}</code>
            </pre>
          </div>
        </>
      ),
    },
  ]

  return (
    <CourseContent
      title="One Feature at a Time"
      description="Learn the iterative development approach that focuses on building one feature at a time for better results."
      color="amber"
      steps={steps}
    />
  )
}
</file>

<file path="app/courses/project-architecture/page.tsx">
"use client"

import { CourseContent } from "@/components/course-content"

export default function ProjectArchitecturePage() {
  const steps = [
    {
      title: "Project Foundation",
      content: (
        <>
          <h2>Establishing a Solid Project Foundation</h2>
          <p>
            The foundation of your web project determines how well it can scale and adapt over time. Let's explore the
            essential first steps in setting up a robust project architecture.
          </p>

          <h3>1. Choosing the Right Tech Stack</h3>
          <p>
            Select technologies based on project requirements, team expertise, community support, and long-term
            viability. Consider factors like performance needs, development speed, and deployment constraints.
          </p>

          <h3>2. Setting Up Version Control</h3>
          <p>
            Implement Git with a clear branching strategy (like Git Flow or GitHub Flow). Establish commit message
            conventions and consider using tools like Husky for pre-commit hooks to enforce code quality.
          </p>

          <h3>3. Project Structure Organization</h3>
          <p>
            Create a logical folder structure that scales with your project. For React/Next.js applications, consider
            organizing by feature or domain rather than by technical role (components, hooks, etc.).
          </p>

          <div className="bg-gray-800 p-4 rounded-md my-4">
            <p className="font-semibold">Example Next.js Project Structure:</p>
            <pre>
              <code>{`/app               # App Router pages and layouts
/components        # Reusable UI components
  /ui              # Low-level UI components
  /features        # Feature-specific components
/lib               # Utility functions and shared logic
/hooks             # Custom React hooks
/types             # TypeScript type definitions
/public            # Static assets
/styles            # Global styles
/tests             # Test files`}</code>
            </pre>
          </div>
        </>
      ),
    },
    {
      title: "Code Organization",
      content: (
        <>
          <h2>Code Organization Principles</h2>
          <p>
            Well-organized code is easier to understand, test, and maintain. Let's explore key principles for organizing
            your codebase effectively.
          </p>

          <h3>1. Component Architecture</h3>
          <p>
            Design components with clear responsibilities and interfaces. Follow the single responsibility principle and
            create a hierarchy of components from atomic elements to complex page layouts.
          </p>

          <h3>2. State Management Strategy</h3>
          <p>
            Choose appropriate state management based on your application's complexity. For simpler apps, React's
            built-in useState and useContext may be sufficient. For more complex applications, consider libraries like
            Redux, Zustand, or Jotai.
          </p>

          <h3>3. Data Fetching Patterns</h3>
          <p>
            Implement consistent data fetching strategies. In Next.js, leverage Server Components for direct database
            access, or use libraries like React Query or SWR for client-side data fetching with caching and
            revalidation.
          </p>

          <div className="bg-gray-800 p-4 rounded-md my-4">
            <p className="font-semibold">Code Example: Component Organization</p>
            <pre>
              <code>{`// Bad: Monolithic component
function UserDashboard() {
  // 100+ lines of code with mixed concerns
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  
  // Data fetching, event handlers, and UI all mixed together
  // ...
}

// Better: Modular components with clear responsibilities
function UserDashboard() {
  return (
    <DashboardLayout>
      <UserProfile />
      <UserPosts />
      <UserActivity />
    </DashboardLayout>
  );
}`}</code>
            </pre>
          </div>
        </>
      ),
    },
    {
      title: "API and Data Layer",
      content: (
        <>
          <h2>Designing the API and Data Layer</h2>
          <p>
            A well-designed data layer is crucial for application performance, maintainability, and scalability. Let's
            explore best practices for structuring your API and data access.
          </p>

          <h3>1. API Design Principles</h3>
          <p>
            Design RESTful or GraphQL APIs with clear naming conventions, consistent error handling, and proper
            versioning. Document your API using tools like Swagger/OpenAPI or GraphQL introspection.
          </p>

          <h3>2. Data Access Patterns</h3>
          <p>
            Implement a repository pattern or service layer to abstract data access logic. This creates a clean
            separation between your business logic and data sources, making it easier to change databases or add
            caching.
          </p>

          <h3>3. Database Schema Design</h3>
          <p>
            Design your database schema with normalization principles in mind, but be pragmatic about denormalization
            for performance. Consider using ORM tools like Prisma or TypeORM for type-safe database access.
          </p>

          <div className="bg-gray-800 p-4 rounded-md my-4">
            <p className="font-semibold">Code Example: API Service Layer</p>
            <pre>
              <code>{`// api/users.ts - Centralized API client
import { User, UserCreateInput } from '@/types';

export const userService = {
  async getUsers(): Promise<User[]> {
    const response = await fetch('/api/users');
    if (!response.ok) throw new Error('Failed to fetch users');
    return response.json();
  },
  
  async getUserById(id: string): Promise<User> {
    const response = await fetch(\`/api/users/\${id}\`);
    if (!response.ok) throw new Error(\`Failed to fetch user \${id}\`);
    return response.json();
  },
  
  async createUser(data: UserCreateInput): Promise<User> {
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error('Failed to create user');
    return response.json();
  }
};`}</code>
            </pre>
          </div>
        </>
      ),
    },
    {
      title: "Testing Strategy",
      content: (
        <>
          <h2>Implementing a Comprehensive Testing Strategy</h2>
          <p>
            A robust testing strategy ensures your application works as expected and prevents regressions. Let's explore
            different testing approaches and how to implement them effectively.
          </p>

          <h3>1. Unit Testing</h3>
          <p>
            Test individual functions and components in isolation. Use Jest for JavaScript testing and React Testing
            Library for component testing. Focus on testing behavior rather than implementation details.
          </p>

          <h3>2. Integration Testing</h3>
          <p>
            Test how different parts of your application work together. For web applications, this often means testing
            API integrations, form submissions, and complex user interactions.
          </p>

          <h3>3. End-to-End Testing</h3>
          <p>
            Test complete user flows from start to finish. Tools like Cypress, Playwright, or Selenium can automate
            browser interactions to verify that your application works correctly from a user's perspective.
          </p>

          <div className="bg-gray-800 p-4 rounded-md my-4">
            <p className="font-semibold">Testing Pyramid Strategy:</p>
            <ul className="list-disc pl-5">
              <li>
                <strong>Many unit tests</strong>: Fast, focused, test business logic and component behavior
              </li>
              <li>
                <strong>Some integration tests</strong>: Test interactions between components and services
              </li>
              <li>
                <strong>Few E2E tests</strong>: Cover critical user flows and happy paths
              </li>
            </ul>
          </div>
        </>
      ),
    },
    {
      title: "Deployment and DevOps",
      content: (
        <>
          <h2>Deployment and DevOps Setup</h2>
          <p>
            A streamlined deployment process and proper DevOps practices are essential for delivering your application
            reliably and frequently. Let's explore key considerations for setting up your deployment pipeline.
          </p>

          <h3>1. Continuous Integration/Continuous Deployment (CI/CD)</h3>
          <p>
            Implement CI/CD pipelines using tools like GitHub Actions, CircleCI, or Jenkins. Automate testing, building,
            and deployment processes to catch issues early and deploy frequently with confidence.
          </p>

          <h3>2. Environment Configuration</h3>
          <p>
            Set up multiple environments (development, staging, production) with proper configuration management. Use
            environment variables for configuration and secrets management tools for sensitive information.
          </p>

          <h3>3. Monitoring and Observability</h3>
          <p>
            Implement logging, error tracking, and performance monitoring. Tools like Sentry for error tracking, Datadog
            or New Relic for performance monitoring, and ELK stack for logging can provide valuable insights into your
            application's behavior.
          </p>

          <div className="bg-gray-800 p-4 rounded-md my-4">
            <p className="font-semibold">Example GitHub Actions Workflow:</p>
            <pre>
              <code>{`name: CI/CD Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm test
      
  build:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      
  deploy:
    needs: build
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: \${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: \${{ secrets.ORG_ID }}
          vercel-project-id: \${{ secrets.PROJECT_ID }}`}</code>
            </pre>
          </div>
        </>
      ),
    },
  ]

  return (
    <CourseContent
      title="Project Architecture"
      description="Master the art of structuring web projects from the ground up with step-by-step guidance on essential components."
      color="blue"
      steps={steps}
    />
  )
}
</file>

<file path="app/courses/web-dev-pitfalls/lesson-1/page.tsx">
"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Award, CheckCircle, ChevronLeft, ChevronRight, Home, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LessonPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 5

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/dashboard" className="text-gray-500 hover:text-gray-700 mr-4">
                <Home className="h-5 w-5" />
              </Link>
              <div className="text-sm breadcrumbs">
                <Link href="/courses" className="text-gray-500 hover:text-gray-700">
                  Courses
                </Link>
                <span className="mx-2 text-gray-400">/</span>
                <Link href="/courses/web-dev-pitfalls" className="text-gray-500 hover:text-gray-700">
                  Web Dev Pitfalls
                </Link>
                <span className="mx-2 text-gray-400">/</span>
                <span className="font-medium">Lesson 1</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="gap-2">
                <List className="h-4 w-4" />
                Lessons
              </Button>
              <Link href="/dashboard">
                <Button size="sm">Exit to Dashboard</Button>
              </Link>
            </div>
          </div>
          <div className="py-2">
            <div className="flex justify-between items-center mb-1 text-sm">
              <div>Lesson 1: Common HTML Mistakes</div>
              <div>
                Step {currentStep} of {totalSteps}
              </div>
            </div>
            <Progress value={(currentStep / totalSteps) * 100} className="h-2" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Step 1: Introduction */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h1 className="text-2xl font-bold mb-4">Common HTML Mistakes to Avoid</h1>
                <div className="prose max-w-none">
                  <p>
                    HTML may seem simple, but there are many common mistakes that can lead to accessibility issues, poor
                    SEO, and rendering problems. In this lesson, we'll explore the most common HTML pitfalls and how to
                    avoid them.
                  </p>
                  <p>By the end of this lesson, you'll be able to:</p>
                  <ul>
                    <li>Identify common HTML structural mistakes</li>
                    <li>Understand the importance of semantic HTML</li>
                    <li>Fix accessibility issues in your markup</li>
                    <li>Optimize your HTML for better SEO</li>
                  </ul>
                  <p>Let's get started by looking at some of the most common HTML mistakes developers make!</p>
                </div>
              </div>

              <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-100">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Award className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-emerald-800 mb-1">Lesson Badge: HTML Detective</h3>
                    <p className="text-emerald-700 text-sm">
                      Complete this lesson to earn the HTML Detective badge. This badge shows you can identify and fix
                      common HTML issues.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Content */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold mb-4">Mistake #1: Non-Semantic Markup</h2>
                <div className="prose max-w-none">
                  <p>
                    One of the most common mistakes in HTML is using non-semantic elements when semantic ones would be
                    more appropriate.
                  </p>

                  <div className="bg-red-50 p-4 rounded-lg mb-4 border-l-4 border-red-500">
                    <h3 className="text-lg font-medium text-red-800">Bad Practice</h3>
                    <div className="mt-2">
                      <p className="text-red-700">Using non-semantic elements:</p>
                      <pre className="bg-gray-800 text-white p-3 rounded mt-2 overflow-x-auto">
                        <code>{`<div class="header">
  <div class="title">My Website</div>
</div>
<div class="navigation">
  <div>Home</div>
  <div>About</div>
</div>
<div class="content">
  <div class="article">
    <div class="article-title">Article Title</div>
    <div>Article content goes here...</div>
  </div>
</div>`}</code>
                      </pre>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg mb-4 border-l-4 border-green-500">
                    <h3 className="text-lg font-medium text-green-800">Good Practice</h3>
                    <div className="mt-2">
                      <p className="text-green-700">Using semantic elements:</p>
                      <pre className="bg-gray-800 text-white p-3 rounded mt-2 overflow-x-auto">
                        <code>{`<header>
  <h1>My Website</h1>
</header>
<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</nav>
<main>
  <article>
    <h2>Article Title</h2>
    <p>Article content goes here...</p>
  </article>
</main>`}</code>
                      </pre>
                    </div>
                  </div>

                  <h3>Why Semantic HTML Matters:</h3>
                  <ul>
                    <li>
                      <strong>Accessibility:</strong> Screen readers and assistive technologies rely on semantic markup
                      to understand page structure.
                    </li>
                    <li>
                      <strong>SEO:</strong> Search engines give more weight to content in semantic elements.
                    </li>
                    <li>
                      <strong>Maintainability:</strong> Semantic HTML is self-documenting and easier to maintain.
                    </li>
                    <li>
                      <strong>Default styling:</strong> Browsers apply useful default styles to semantic elements.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Interactive Example */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold mb-4">Mistake #2: Improper Heading Structure</h2>
                <div className="prose max-w-none">
                  <p>
                    Another common mistake is using heading elements (<code>h1</code> through <code>h6</code>)
                    incorrectly, either skipping levels or using them for styling rather than document structure.
                  </p>

                  <div className="bg-red-50 p-4 rounded-lg mb-4 border-l-4 border-red-500">
                    <h3 className="text-lg font-medium text-red-800">Bad Practice</h3>
                    <div className="mt-2">
                      <p className="text-red-700">Skipping heading levels or using them for styling:</p>
                      <pre className="bg-gray-800 text-white p-3 rounded mt-2 overflow-x-auto">
                        <code>{`<h1>Website Title</h1>
<h3>This is a section title</h3> <!-- Skipped h2 -->
<h6>This is small text styled as a heading</h6> <!-- Using for styling -->`}</code>
                      </pre>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg mb-4 border-l-4 border-green-500">
                    <h3 className="text-lg font-medium text-green-800">Good Practice</h3>
                    <div className="mt-2">
                      <p className="text-green-700">Proper heading hierarchy:</p>
                      <pre className="bg-gray-800 text-white p-3 rounded mt-2 overflow-x-auto">
                        <code>{`<h1>Website Title</h1>
<h2>This is a section title</h2>
<h3>Subsection title</h3>
<p class="text-sm">This is small text styled with CSS</p>`}</code>
                      </pre>
                    </div>
                  </div>

                  <h3>Why Proper Heading Structure Matters:</h3>
                  <ul>
                    <li>
                      <strong>Accessibility:</strong> Screen readers use headings to navigate content and create an
                      outline.
                    </li>
                    <li>
                      <strong>SEO:</strong> Search engines use heading structure to understand content hierarchy.
                    </li>
                    <li>
                      <strong>User Experience:</strong> Proper heading structure helps users scan and understand
                      content.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Interactive Quiz */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-bold mb-4">Quick Check: Fix the Heading Structure</h3>
                <p className="mb-4">Which of the following represents the correct heading structure?</p>

                <Tabs defaultValue="option1" className="w-full">
                  <TabsList className="grid grid-cols-3 mb-4">
                    <TabsTrigger value="option1">Option 1</TabsTrigger>
                    <TabsTrigger value="option2">Option 2</TabsTrigger>
                    <TabsTrigger value="option3">Option 3</TabsTrigger>
                  </TabsList>
                  <TabsContent value="option1">
                    <Card>
                      <CardContent className="p-4">
                        <pre className="bg-gray-800 text-white p-3 rounded overflow-x-auto">
                          <code>{`<h1>Blog Post Title</h1>
<h3>Introduction</h3>
<p>Content here...</p>
<h3>Main Points</h3>
<p>Content here...</p>
<h5>Conclusion</h5>
<p>Content here...</p>`}</code>
                        </pre>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="option2">
                    <Card>
                      <CardContent className="p-4">
                        <pre className="bg-gray-800 text-white p-3 rounded overflow-x-auto">
                          <code>{`<h1>Blog Post Title</h1>
<h2>Introduction</h2>
<p>Content here...</p>
<h2>Main Points</h2>
<p>Content here...</p>
<h2>Conclusion</h2>
<p>Content here...</p>`}</code>
                        </pre>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="option3">
                    <Card>
                      <CardContent className="p-4">
                        <pre className="bg-gray-800 text-white p-3 rounded overflow-x-auto">
                          <code>{`<h1>Blog Post Title</h1>
<h2>Introduction</h2>
<p>Content here...</p>
<h2>Main Points</h2>
<h3>First Point</h3>
<p>Content here...</p>
<h3>Second Point</h3>
<p>Content here...</p>
<h2>Conclusion</h2>
<p>Content here...</p>`}</code>
                        </pre>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>

                <div className="mt-4 flex justify-end">
                  <Button variant="outline" className="gap-2">
                    Check Answer
                    <CheckCircle className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: More Content */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold mb-4">Mistake #3: Missing Alt Text for Images</h2>
                <div className="prose max-w-none">
                  <p>
                    Forgetting to add alternative text to images is a critical accessibility issue and one of the most
                    common HTML mistakes.
                  </p>

                  <div className="bg-red-50 p-4 rounded-lg mb-4 border-l-4 border-red-500">
                    <h3 className="text-lg font-medium text-red-800">Bad Practice</h3>
                    <div className="mt-2">
                      <p className="text-red-700">Missing alt text:</p>
                      <pre className="bg-gray-800 text-white p-3 rounded mt-2 overflow-x-auto">
                        <code>{`<img src="logo.png">
<img src="banner.jpg" alt="">
<img src="icon.svg" alt="image">`}</code>
                      </pre>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg mb-4 border-l-4 border-green-500">
                    <h3 className="text-lg font-medium text-green-800">Good Practice</h3>
                    <div className="mt-2">
                      <p className="text-green-700">Descriptive alt text:</p>
                      <pre className="bg-gray-800 text-white p-3 rounded mt-2 overflow-x-auto">
                        <code>{`<img src="logo.png" alt="Company Logo">
<img src="banner.jpg" alt="Team collaborating on a project">
<img src="icon.svg" alt="Download icon">`}</code>
                      </pre>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg mb-4 border-l-4 border-blue-500">
                    <h3 className="text-lg font-medium text-blue-800">Pro Tip</h3>
                    <p className="text-blue-700 mt-2">
                      For decorative images that don't add meaning to the content, use an empty alt attribute (
                      <code>alt=""</code>) rather than omitting it. This tells screen readers to skip the image.
                    </p>
                  </div>

                  <h3>Why Alt Text Matters:</h3>
                  <ul>
                    <li>
                      <strong>Accessibility:</strong> Screen readers read alt text to describe images to visually
                      impaired users.
                    </li>
                    <li>
                      <strong>SEO:</strong> Search engines use alt text to understand image content.
                    </li>
                    <li>
                      <strong>Fallbacks:</strong> Alt text displays when images fail to load.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Example with Image */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-bold mb-4">Example: Good vs. Bad Alt Text</h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="bg-red-50 p-4 rounded-lg mb-2">
                      <h4 className="font-medium text-red-800 mb-2">Bad Alt Text</h4>
                      <div className="border border-gray-200 rounded p-2 bg-white">
                        <Image
                          src="/placeholder.svg?height=200&width=300"
                          alt="image"
                          width={300}
                          height={200}
                          className="w-full h-auto"
                        />
                        <pre className="bg-gray-800 text-white p-2 rounded mt-2 text-xs overflow-x-auto">
                          <code>{`<img src="chart.png" alt="image">`}</code>
                        </pre>
                      </div>
                      <p className="text-sm mt-2 text-red-700">
                        This alt text doesn't describe what the image shows, making it useless for screen reader users.
                      </p>
                    </div>
                  </div>

                  <div>
                    <div className="bg-green-50 p-4 rounded-lg mb-2">
                      <h4 className="font-medium text-green-800 mb-2">Good Alt Text</h4>
                      <div className="border border-gray-200 rounded p-2 bg-white">
                        <Image
                          src="/placeholder.svg?height=200&width=300"
                          alt="Bar chart showing website traffic growth from January to June 2025"
                          width={300}
                          height={200}
                          className="w-full h-auto"
                        />
                        <pre className="bg-gray-800 text-white p-2 rounded mt-2 text-xs overflow-x-auto">
                          <code>{`<img src="chart.png" alt="Bar chart showing website traffic growth from January to June 2025">`}</code>
                        </pre>
                      </div>
                      <p className="text-sm mt-2 text-green-700">
                        This alt text clearly describes what the image shows, including the type of chart and the data
                        it represents.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Summary and Quiz */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold mb-4">Lesson Summary</h2>
                <div className="prose max-w-none">
                  <p>In this lesson, we've covered three common HTML mistakes that developers should avoid:</p>

                  <ol>
                    <li>
                      <strong>Non-Semantic Markup:</strong> Using generic <code>div</code> and <code>span</code>{" "}
                      elements when semantic elements like <code>header</code>, <code>nav</code>, <code>main</code>,
                      etc. would be more appropriate.
                    </li>
                    <li>
                      <strong>Improper Heading Structure:</strong> Skipping heading levels or using heading elements for
                      styling rather than document structure.
                    </li>
                    <li>
                      <strong>Missing Alt Text for Images:</strong> Failing to provide descriptive alternative text for
                      images, which is crucial for accessibility.
                    </li>
                  </ol>

                  <p>
                    By avoiding these common pitfalls, you'll create more accessible, SEO-friendly, and maintainable
                    HTML code.
                  </p>

                  <div className="bg-blue-50 p-4 rounded-lg mb-4 border-l-4 border-blue-500">
                    <h3 className="text-lg font-medium text-blue-800">Key Takeaway</h3>
                    <p className="text-blue-700 mt-2">
                      Always prioritize semantic, accessible HTML over convenience. The extra effort pays off in better
                      user experience, improved SEO, and more maintainable code.
                    </p>
                  </div>
                </div>
              </div>

              {/* Final Quiz */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-bold mb-4">Knowledge Check</h3>
                <p className="mb-6">Let's test your understanding of the common HTML mistakes we've covered.</p>

                <div className="space-y-6">
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-medium mb-2">1. Which of the following is a semantic HTML element?</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input type="radio" id="q1a" name="q1" className="mr-2" />
                        <label htmlFor="q1a">
                          <code>&lt;div&gt;</code>
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="q1b" name="q1" className="mr-2" />
                        <label htmlFor="q1b">
                          <code>&lt;span&gt;</code>
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="q1c" name="q1" className="mr-2" />
                        <label htmlFor="q1c">
                          <code>&lt;article&gt;</code>
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="q1d" name="q1" className="mr-2" />
                        <label htmlFor="q1d">
                          <code>&lt;container&gt;</code>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-medium mb-2">2. What is the primary purpose of alt text for images?</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input type="radio" id="q2a" name="q2" className="mr-2" />
                        <label htmlFor="q2a">To make the page look better</label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="q2b" name="q2" className="mr-2" />
                        <label htmlFor="q2b">
                          To provide a description for screen readers and when images fail to load
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="q2c" name="q2" className="mr-2" />
                        <label htmlFor="q2c">To increase the file size of the HTML</label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="q2d" name="q2" className="mr-2" />
                        <label htmlFor="q2d">To add keywords for search engines only</label>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-medium mb-2">
                      3. Which of the following represents a proper heading structure?
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input type="radio" id="q3a" name="q3" className="mr-2" />
                        <label htmlFor="q3a">
                          <code>&lt;h1&gt;</code> → <code>&lt;h3&gt;</code> → <code>&lt;h6&gt;</code>
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="q3b" name="q3" className="mr-2" />
                        <label htmlFor="q3b">
                          <code>&lt;h1&gt;</code> → <code>&lt;h2&gt;</code> → <code>&lt;h3&gt;</code>
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="q3c" name="q3" className="mr-2" />
                        <label htmlFor="q3c">
                          <code>&lt;h6&gt;</code> → <code>&lt;h5&gt;</code> → <code>&lt;h4&gt;</code>
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="q3d" name="q3" className="mr-2" />
                        <label htmlFor="q3d">It doesn't matter as long as they look good</label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <Button className="w-full">Submit Answers</Button>
                </div>
              </div>

              {/* Badge Earned */}
              <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg p-6 text-white text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Congratulations!</h3>
                <p className="mb-4">You've earned the HTML Detective badge!</p>
                <Button variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
                  Share Achievement
                </Button>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <Button variant="outline" onClick={prevStep} disabled={currentStep === 1} className="gap-2">
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>

            {currentStep < totalSteps ? (
              <Button onClick={nextStep} className="gap-2">
                Next
                <ChevronRight className="h-4 w-4" />
              </Button>
            ) : (
              <Button asChild className="gap-2">
                <Link href="/courses/web-dev-pitfalls/lesson-2">
                  Next Lesson
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
</file>

<file path="app/courses/web-dev-pitfalls/page.tsx">
"use client"

import { CourseContent } from "@/components/course-content"

export default function WebDevPitfallsPage() {
  const steps = [
    {
      title: "Common CSS Mistakes",
      content: (
        <>
          <h2>Common CSS Mistakes to Avoid</h2>
          <p>
            CSS might seem straightforward, but it's filled with potential pitfalls that can lead to frustrating
            debugging sessions. Let's explore some of the most common CSS mistakes and how to avoid them.
          </p>

          <h3>1. Overusing !important</h3>
          <p>
            The !important declaration is often used as a quick fix to override styles, but it creates specificity
            issues that become harder to manage as your project grows. Instead, write more specific selectors or
            restructure your CSS.
          </p>

          <h3>2. Not Understanding the Box Model</h3>
          <p>
            Many developers struggle with unexpected layouts because they don't fully understand how width, padding,
            borders, and margins interact. Use box-sizing: border-box to make width calculations more intuitive.
          </p>

          <h3>3. Neglecting Mobile Responsiveness</h3>
          <p>
            Always design with mobile-first principles in mind. Use media queries effectively and test on various screen
            sizes throughout development, not just at the end.
          </p>

          <div className="bg-gray-800 p-4 rounded-md my-4">
            <p className="font-semibold">Pro Tip:</p>
            <p>Use CSS custom properties (variables) to maintain consistency and make global style changes easier.</p>
          </div>
        </>
      ),
    },
    {
      title: "JavaScript Anti-patterns",
      content: (
        <>
          <h2>JavaScript Anti-patterns to Avoid</h2>
          <p>
            JavaScript is flexible, which makes it powerful but also easy to misuse. Here are some common anti-patterns
            that can lead to bugs, performance issues, and maintenance headaches.
          </p>

          <h3>1. Global Variables Pollution</h3>
          <p>
            Excessive use of global variables can lead to naming conflicts and make code harder to test and maintain.
            Use modules, closures, and proper scoping to contain variables where they're needed.
          </p>

          <h3>2. Callback Hell</h3>
          <p>
            Deeply nested callbacks create code that's difficult to read and debug. Use promises, async/await, or
            libraries like RxJS to handle asynchronous operations more cleanly.
          </p>

          <h3>3. Premature Optimization</h3>
          <p>
            Optimizing code before identifying actual performance bottlenecks can lead to unnecessary complexity. Focus
            on writing clear, maintainable code first, then optimize based on measured performance issues.
          </p>

          <div className="bg-gray-800 p-4 rounded-md my-4">
            <p className="font-semibold">Code Example:</p>
            <pre>
              <code>{`// Instead of this:
function getData(callback) {
  fetch('/api/data')
    .then(response => response.json())
    .then(data => {
      callback(null, data);
    })
    .catch(err => callback(err));
}

// Do this:
async function getData() {
  try {
    const response = await fetch('/api/data');
    return await response.json();
  } catch (error) {
    throw error;
  }
}`}</code>
            </pre>
          </div>
        </>
      ),
    },
    {
      title: "API Integration Issues",
      content: (
        <>
          <h2>API Integration Issues</h2>
          <p>
            Working with APIs is a fundamental part of modern web development, but it comes with its own set of
            challenges and potential pitfalls.
          </p>

          <h3>1. Inadequate Error Handling</h3>
          <p>
            Many developers only handle the "happy path" and neglect proper error handling. Always implement
            comprehensive error handling for API calls, including network errors, timeouts, and various HTTP status
            codes.
          </p>

          <h3>2. Not Caching API Responses</h3>
          <p>
            Repeatedly fetching the same data wastes bandwidth and creates a poor user experience. Implement appropriate
            caching strategies based on the nature of your data and how frequently it changes.
          </p>

          <h3>3. Ignoring Rate Limits</h3>
          <p>
            Many APIs have rate limits that, when exceeded, can cause your application to break. Implement retry
            mechanisms with exponential backoff and respect the limits specified in API documentation.
          </p>

          <div className="bg-gray-800 p-4 rounded-md my-4">
            <p className="font-semibold">Best Practice:</p>
            <p>
              Create a centralized API client that handles common concerns like authentication, error handling, and
              retries, rather than scattering this logic throughout your application.
            </p>
          </div>
        </>
      ),
    },
    {
      title: "Performance Bottlenecks",
      content: (
        <>
          <h2>Performance Bottlenecks</h2>
          <p>
            Performance issues can significantly impact user experience and even SEO rankings. Here are common
            performance bottlenecks and how to address them.
          </p>

          <h3>1. Unoptimized Images</h3>
          <p>
            Large, unoptimized images are often the biggest culprit in slow page loads. Use modern formats like WebP,
            implement responsive images, and consider lazy loading for images below the fold.
          </p>

          <h3>2. Render-Blocking Resources</h3>
          <p>
            CSS and JavaScript that block rendering can delay page interactivity. Load critical CSS inline and defer
            non-essential JavaScript. Consider code splitting to load only what's needed for the current page.
          </p>

          <h3>3. Excessive DOM Size and Manipulation</h3>
          <p>
            Large DOM trees and frequent manipulations can cause layout thrashing and poor performance. Virtualize long
            lists, use document fragments for batch updates, and consider using CSS for animations when possible.
          </p>

          <div className="bg-gray-800 p-4 rounded-md my-4">
            <p className="font-semibold">Measurement Tools:</p>
            <ul className="list-disc pl-5">
              <li>Lighthouse for overall performance audits</li>
              <li>Chrome DevTools Performance panel for runtime performance</li>
              <li>WebPageTest for detailed waterfall analysis</li>
            </ul>
          </div>
        </>
      ),
    },
    {
      title: "Security Vulnerabilities",
      content: (
        <>
          <h2>Security Vulnerabilities</h2>
          <p>
            Web security is often overlooked until it's too late. Here are critical security vulnerabilities that every
            web developer should be aware of and actively prevent.
          </p>

          <h3>1. Cross-Site Scripting (XSS)</h3>
          <p>
            XSS attacks occur when untrusted data is included in a web page without proper validation or escaping.
            Always sanitize user input, use Content Security Policy (CSP), and leverage framework-provided protections.
          </p>

          <h3>2. Cross-Site Request Forgery (CSRF)</h3>
          <p>
            CSRF attacks trick users into performing unwanted actions on a site they're authenticated to. Implement
            anti-CSRF tokens for state-changing operations and use the SameSite cookie attribute.
          </p>

          <h3>3. Insecure Direct Object References (IDOR)</h3>
          <p>
            IDOR vulnerabilities occur when an application provides direct access to objects based on user-supplied
            input. Always implement proper authorization checks and use indirect references that are mapped on the
            server side.
          </p>

          <div className="bg-gray-800 p-4 rounded-md my-4">
            <p className="font-semibold">Security Checklist:</p>
            <ul className="list-disc pl-5">
              <li>Keep dependencies updated to patch known vulnerabilities</li>
              <li>Implement proper authentication and authorization</li>
              <li>Use HTTPS everywhere</li>
              <li>Validate all inputs, both client-side and server-side</li>
              <li>Apply the principle of least privilege</li>
            </ul>
          </div>
        </>
      ),
    },
  ]

  return (
    <CourseContent
      title="Web Development Pitfalls"
      description="Learn common mistakes to avoid in web development projects with practical advice and real-world examples."
      color="red"
      steps={steps}
    />
  )
}
</file>

<file path="app/courses/index.ts">
export { default } from './page';
</file>

<file path="app/courses/loading.tsx">
export default function Loading() {
  return null
}
</file>

<file path="app/courses/page.tsx">
import { Badge } from "@/components/ui/badge"
import { Trophy, Star } from "lucide-react"
import { CourseCard } from "@/components/course/course-card"

export default function CoursesPage() {
  const courseCategories = [
    {
      title: "web development essentials",
      courses: [
        {
          title: "web dev pitfalls",
          description: "learn common mistakes to avoid in web development projects with practical advice and real-world examples.",
          href: "/courses/web-dev-pitfalls",
          color: "red" as const,
          level: "beginner" as const
        },
        {
          title: "project architecture",
          description: "master the art of structuring web projects from the ground up with step-by-step guidance on essential components.",
          href: "/courses/project-architecture",
          color: "blue" as const,
          level: "intermediate" as const
        }
      ]
    },
    {
      title: "development methodologies",
      courses: [
        {
          title: "one feature at a time",
          description: "learn the iterative development approach that focuses on building one feature at a time for better results.",
          href: "/courses/one-feature",
          color: "amber" as const,
          level: "intermediate" as const
        },
        {
          title: "ai dev tools",
          description: "compare ai assistants like copilot with complete development environments like v0 and lovable.",
          href: "/courses/ai-dev-tools",
          color: "purple" as const,
          level: "advanced" as const
        }
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">courses</h1>
          <div className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-yellow-500" />
            <span className="text-gray-400">your medals: 0</span>
          </div>
        </div>

        <div className="grid gap-8">
          {/* Course Categories */}
          {courseCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h2 className="text-xl font-bold mb-4 text-gray-300">{category.title}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {category.courses.map((course, courseIndex) => (
                  <CourseCard 
                    key={courseIndex}
                    {...course}
                  />
                ))}
              </div>
            </div>
          ))}

          {/* Coming Soon Section */}
          <div className="mt-8">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-xl font-bold text-gray-300">coming soon</h2>
              <Badge className="bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30">new</Badge>
            </div>
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Star className="h-5 w-5 text-yellow-500" />
                <h3 className="text-lg font-medium text-gray-300">more courses on the way!</h3>
              </div>
              <p className="text-gray-400">
                We're working on new courses covering advanced topics like performance optimization, accessibility,
                and modern frontend frameworks. Stay tuned!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
</file>

<file path="app/dashboard/page.tsx">
"use client"

import { useState } from "react"
import Link from "next/link"
import { Award, Bell, BookOpen, ChevronRight, Crown, Gift, Settings, Star, Trophy, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Dashboard() {
  const [streakDays, setStreakDays] = useState(7)
  const [totalPoints, setTotalPoints] = useState(1250)
  const [level, setLevel] = useState(4)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-emerald-600">
              WebDev Masters
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* User Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Daily Streak</CardTitle>
              <CardDescription>Keep learning to maintain your streak</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <div className="mr-4 bg-amber-100 p-3 rounded-full">
                  <Trophy className="h-8 w-8 text-amber-500" />
                </div>
                <div>
                  <div className="text-3xl font-bold">{streakDays} days</div>
                  <Progress value={70} className="h-2 mt-1" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Total Points</CardTitle>
              <CardDescription>Points earned from all activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <div className="mr-4 bg-emerald-100 p-3 rounded-full">
                  <Star className="h-8 w-8 text-emerald-500" />
                </div>
                <div>
                  <div className="text-3xl font-bold">{totalPoints}</div>
                  <div className="text-sm text-gray-500">Next reward at 1,500</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Current Level</CardTitle>
              <CardDescription>Your progress in the platform</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <div className="mr-4 bg-purple-100 p-3 rounded-full">
                  <Crown className="h-8 w-8 text-purple-500" />
                </div>
                <div>
                  <div className="text-3xl font-bold">Level {level}</div>
                  <Progress value={60} className="h-2 mt-1" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Course Map */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Your Learning Path</CardTitle>
                <CardDescription>Continue where you left off</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  {/* Course Map - Styled like a game map */}
                  <div className="bg-emerald-50 rounded-xl p-6 relative">
                    <div className="absolute top-0 left-0 w-full h-full">
                      <svg
                        className="w-full h-full"
                        viewBox="0 0 400 300"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M40,40 Q60,20 80,40 T120,40 T160,40 T200,40 T240,40 T280,40 T320,40 T360,40"
                          stroke="#10b981"
                          strokeWidth="4"
                          strokeDasharray="5,5"
                          fill="none"
                        />
                        <path
                          d="M40,100 Q60,80 80,100 T120,100 T160,100 T200,100 T240,100 T280,100 T320,100 T360,100"
                          stroke="#10b981"
                          strokeWidth="4"
                          strokeDasharray="5,5"
                          fill="none"
                        />
                        <path
                          d="M40,160 Q60,140 80,160 T120,160 T160,160 T200,160 T240,160 T280,160 T320,160 T360,160"
                          stroke="#10b981"
                          strokeWidth="4"
                          strokeDasharray="5,5"
                          fill="none"
                        />
                        <path
                          d="M40,220 Q60,200 80,220 T120,220 T160,220 T200,220 T240,220 T280,220 T320,220 T360,220"
                          stroke="#10b981"
                          strokeWidth="4"
                          strokeDasharray="5,5"
                          fill="none"
                        />
                      </svg>
                    </div>

                    {/* Course Nodes */}
                    <div className="grid grid-cols-4 gap-4 relative z-10">
                      {/* Row 1 */}
                      <div className="flex justify-center">
                        <Link
                          href="/courses/web-dev-pitfalls/intro"
                          className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center border-4 border-white shadow-lg"
                        >
                          <BookOpen className="h-8 w-8 text-white" />
                        </Link>
                      </div>
                      <div className="flex justify-center">
                        <Link
                          href="/courses/web-dev-pitfalls/lesson-1"
                          className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center border-4 border-white shadow-lg"
                        >
                          <span className="text-white font-bold">1</span>
                        </Link>
                      </div>
                      <div className="flex justify-center">
                        <Link
                          href="/courses/web-dev-pitfalls/lesson-2"
                          className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center border-4 border-white shadow-lg"
                        >
                          <span className="text-white font-bold">2</span>
                        </Link>
                      </div>
                      <div className="flex justify-center">
                        <Link
                          href="/courses/web-dev-pitfalls/lesson-3"
                          className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center border-4 border-white shadow-lg"
                        >
                          <span className="text-emerald-500 font-bold">3</span>
                        </Link>
                      </div>

                      {/* Row 2 */}
                      <div className="flex justify-center">
                        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center border-4 border-white shadow-lg opacity-70">
                          <span className="text-gray-500 font-bold">8</span>
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center border-4 border-white shadow-lg opacity-70">
                          <span className="text-gray-500 font-bold">7</span>
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center border-4 border-white shadow-lg opacity-70">
                          <span className="text-gray-500 font-bold">6</span>
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center border-4 border-white shadow-lg opacity-70">
                          <span className="text-gray-500 font-bold">5</span>
                        </div>
                      </div>

                      {/* Row 3 */}
                      <div className="flex justify-center">
                        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center border-4 border-white shadow-lg opacity-70">
                          <span className="text-gray-500 font-bold">9</span>
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center border-4 border-white shadow-lg opacity-70">
                          <span className="text-gray-500 font-bold">10</span>
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center border-4 border-white shadow-lg opacity-70">
                          <span className="text-gray-500 font-bold">11</span>
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center border-4 border-white shadow-lg opacity-70">
                          <span className="text-gray-500 font-bold">12</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Current Course Info */}
                  <div className="mt-6 bg-white rounded-lg border border-gray-200 p-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                        <Code className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Web Dev Pitfalls</h3>
                        <p className="text-sm text-gray-500">Lesson 3: Common CSS Layout Mistakes</p>
                      </div>
                      <Button className="ml-auto" size="sm">
                        Continue
                      </Button>
                    </div>
                    <Progress value={30} className="h-2 mt-4" />
                    <div className="flex justify-between mt-1">
                      <span className="text-xs text-gray-500">Progress: 30%</span>
                      <span className="text-xs text-gray-500">2/5 Lessons</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recommended Courses */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Recommended Next Steps</CardTitle>
                <CardDescription>Courses that match your learning path</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <Code className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">Project Architecture</h4>
                      <p className="text-sm text-gray-500">Learn how to structure your web projects</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </div>

                  <div className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                      <Code className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">AI Dev Tools</h4>
                      <p className="text-sm text-gray-500">Compare AI-powered development tools</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </div>

                  <div className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                      <Code className="w-5 h-5 text-amber-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">Iterative Development</h4>
                      <p className="text-sm text-gray-500">Master the 'one feature at a time' approach</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Achievements & Referrals */}
          <div>
            <Tabs defaultValue="achievements">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="achievements">Achievements</TabsTrigger>
                <TabsTrigger value="referrals">Referrals</TabsTrigger>
              </TabsList>

              <TabsContent value="achievements">
                <Card>
                  <CardHeader>
                    <CardTitle>Your Achievements</CardTitle>
                    <CardDescription>Badges and certificates you've earned</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Recent Badges</h4>

                        <div className="flex flex-wrap gap-3">
                          <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
                              <Award className="h-8 w-8 text-amber-500" />
                            </div>
                            <span className="text-xs mt-1">Fast Learner</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                              <Trophy className="h-8 w-8 text-emerald-500" />
                            </div>
                            <span className="text-xs mt-1">CSS Master</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                              <Award className="h-8 w-8 text-blue-500" />
                            </div>
                            <span className="text-xs mt-1">HTML Pro</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                              <Award className="h-8 w-8 text-purple-500" />
                            </div>
                            <span className="text-xs mt-1">7-Day Streak</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Certificates</h4>
                        <div className="space-y-3">
                          <div className="border border-gray-200 rounded-lg p-3 flex items-center">
                            <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                              <Award className="w-5 h-5 text-emerald-600" />
                            </div>
                            <div className="flex-1">
                              <h5 className="font-medium">HTML Fundamentals</h5>
                              <p className="text-xs text-gray-500">Completed on April 10, 2025</p>
                            </div>
                            <Button variant="outline" size="sm">
                              Share
                            </Button>
                          </div>

                          <div className="border border-gray-200 rounded-lg p-3 flex items-center">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                              <Award className="w-5 h-5 text-blue-600" />
                            </div>
                            <div className="flex-1">
                              <h5 className="font-medium">CSS Layouts</h5>
                              <p className="text-xs text-gray-500">Completed on April 15, 2025</p>
                            </div>
                            <Button variant="outline" size="sm">
                              Share
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View All Achievements
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="referrals">
                <Card>
                  <CardHeader>
                    <CardTitle>Refer Friends</CardTitle>
                    <CardDescription>Earn rewards by inviting others</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-emerald-50 p-4 rounded-lg">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                            <Gift className="w-5 h-5 text-emerald-600" />
                          </div>
                          <div>
                            <h4 className="font-medium">Earn 500 points</h4>
                            <p className="text-sm text-gray-600">For each friend who joins</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1">Your Referral Link</label>
                        <div className="flex">
                          <input
                            type="text"
                            value="https://webdevmasters.com/ref/john123"
                            readOnly
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md text-sm"
                          />
                          <Button className="rounded-l-none">Copy</Button>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Share via</h4>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="flex-1">
                            Twitter
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1">
                            LinkedIn
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1">
                            Email
                          </Button>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Referral Stats</h4>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-gray-50 p-3 rounded-lg text-center">
                            <div className="text-2xl font-bold">3</div>
                            <div className="text-xs text-gray-500">Invites Sent</div>
                          </div>
                          <div className="bg-gray-50 p-3 rounded-lg text-center">
                            <div className="text-2xl font-bold">1</div>
                            <div className="text-xs text-gray-500">Joined</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Daily Challenge */}
            <Card className="mt-6">
              <CardHeader className="bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-t-lg">
                <CardTitle>Daily Challenge</CardTitle>
                <CardDescription className="text-amber-100">Complete for bonus points</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                      <Code className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Fix the CSS Bug</h3>
                      <p className="text-sm text-gray-500">Identify and fix the layout issue</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-sm">
                      <span className="font-medium">Reward:</span> 100 points + 1 day streak extension
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">Time left:</span> 8 hours
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-amber-500 hover:bg-amber-600">Start Challenge</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
</file>

<file path="app/help/index.ts">
export { default } from './page';
</file>

<file path="app/help/page.tsx">
export default function HelpPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">help center</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4">frequently asked questions</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="font-medium text-lg mb-2">what is vibelevels?</h3>
                <p className="text-gray-300">
                  vibelevels is a learning platform designed to help developers go from idea to product quickly. We provide
                  courses and resources focused on web development, best practices, and modern development tools.
                </p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="font-medium text-lg mb-2">do I need prior experience?</h3>
                <p className="text-gray-300">
                  vibelevels is designed for developers of all skill levels. We have beginner-friendly courses with no
                  prerequisites, as well as intermediate and advanced content for more experienced developers.
                </p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="font-medium text-lg mb-2">how do I track my progress?</h3>
                <p className="text-gray-300">
                  Each course includes a progress tracker, and you'll earn medals and certificates as you complete courses.
                  You can view your achievements in your profile dashboard.
                </p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="font-medium text-lg mb-2">how can I contribute to vibelevels?</h3>
                <p className="text-gray-300">
                  We welcome contributions from the community! You can suggest course topics, contribute content, or report
                  issues through our GitHub repository. Check out our README for more information on how to contribute.
                </p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">contact us</h2>
            <p className="mb-4 text-gray-300">
              If you need assistance or have questions that aren't answered here, you can reach us through the following channels:
            </p>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center">
                  <span className="w-24 text-gray-400">Email:</span>
                  <span className="text-violet-400">support@vibelevels.com</span>
                </div>
                <div className="flex items-center">
                  <span className="w-24 text-gray-400">GitHub:</span>
                  <span className="text-violet-400">github.com/a-bonus/vibelevels</span>
                </div>
                <div className="flex items-center">
                  <span className="w-24 text-gray-400">Twitter:</span>
                  <span className="text-violet-400">@vibelevels</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
</file>

<file path="app/privacy/index.ts">
export { default } from './page';
</file>

<file path="app/privacy/page.tsx">
import Link from 'next/link'

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">privacy policy</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="mb-6">
            Your privacy is important to us. This Privacy Policy explains how vibelevels collects, uses, and
            safeguards your information when you use our website and platform.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">1. information we collect</h2>
          <p className="mb-4">
            We collect information you provide directly to us, such as when you create an account, update your
            profile, or communicate with us. This may include:
          </p>
          <ul className="list-disc pl-8 mb-4">
            <li>Contact information (name, email address)</li>
            <li>Account credentials</li>
            <li>Profile information</li>
            <li>Content you submit or post</li>
            <li>Communications with us</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4">2. how we use your information</h2>
          <p className="mb-4">
            We may use the information we collect to:
          </p>
          <ul className="list-disc pl-8 mb-4">
            <li>Provide, maintain, and improve vibelevels</li>
            <li>Create and maintain your account</li>
            <li>Personalize your experience</li>
            <li>Communicate with you about vibelevels</li>
            <li>Monitor and analyze usage patterns</li>
            <li>Protect against unauthorized access and abuse</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4">3. information sharing</h2>
          <p className="mb-4">
            We do not share your personal information with third parties except as described in this Privacy Policy.
            We may share your information with service providers who perform services on our behalf, or when
            required by law.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">4. data security</h2>
          <p className="mb-4">
            We take reasonable measures to help protect your personal information from loss, theft, misuse, and
            unauthorized access. However, no security system is impenetrable, and we cannot guarantee the security
            of your information.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">5. contact us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, please <Link href="/help" className="text-violet-400 hover:underline">contact us</Link>.
          </p>

          <p className="text-sm text-gray-400 mt-8">
            Last updated: April 24, 2025
          </p>
        </div>
      </div>
    </div>
  )
}
</file>

<file path="app/terms/index.ts">
export { default } from './page';
</file>

<file path="app/terms/page.tsx">
import Link from 'next/link'

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">terms of service</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="mb-6">
            Welcome to vibelevels! These Terms of Service ("Terms") govern your use of the vibelevels website
            and platform. By accessing or using vibelevels, you agree to be bound by these Terms.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">1. acceptance of terms</h2>
          <p className="mb-4">
            By accessing or using vibelevels, you acknowledge that you have read, understood, and agree to be
            bound by these Terms. If you do not agree to these Terms, please do not use vibelevels.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">2. changes to terms</h2>
          <p className="mb-4">
            We reserve the right to modify these Terms at any time. Any changes will be effective immediately
            upon posting the updated Terms on the vibelevels website. Your continued use of vibelevels after
            the posting of changes constitutes your acceptance of such changes.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">3. user conduct</h2>
          <p className="mb-4">
            When using vibelevels, you agree to:
          </p>
          <ul className="list-disc pl-8 mb-4">
            <li>Comply with all applicable laws and regulations</li>
            <li>Respect the rights of other users</li>
            <li>Not engage in any abusive or harmful behavior</li>
            <li>Not use vibelevels for any illegal or unauthorized purpose</li>
            <li>Not interfere with the proper functioning of vibelevels</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4">4. intellectual property</h2>
          <p className="mb-4">
            vibelevels and its content are protected by copyright, trademark, and other intellectual property laws.
            You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly
            perform, republish, download, store, or transmit any of the material on vibelevels without our prior
            written consent, except as provided by law.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">5. contact us</h2>
          <p className="mb-4">
            If you have any questions about these Terms, please <Link href="/help" className="text-violet-400 hover:underline">contact us</Link>.
          </p>

          <p className="text-sm text-gray-400 mt-8">
            Last updated: April 24, 2025
          </p>
        </div>
      </div>
    </div>
  )
}
</file>

<file path="app/globals.css">
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  font-family: Arial, Helvetica, sans-serif;
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 0 0% 3.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 0 0% 3.9%;
    --primary: 0 0% 9%;
    --primary-foreground: 0 0% 98%;
    --secondary: 0 0% 96.1%;
    --secondary-foreground: 0 0% 9%;
    --muted: 0 0% 96.1%;
    --muted-foreground: 0 0% 45.1%;
    --accent: 0 0% 96.1%;
    --accent-foreground: 0 0% 9%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 89.8%;
    --input: 0 0% 89.8%;
    --ring: 0 0% 3.9%;
    --chart-1: 12 76% 61%;
    --chart-2: 173 58% 39%;
    --chart-3: 197 37% 24%;
    --chart-4: 43 74% 66%;
    --chart-5: 27 87% 67%;
    --radius: 0.5rem;
    --sidebar-background: 0 0% 98%;
    --sidebar-foreground: 240 5.3% 26.1%;
    --sidebar-primary: 240 5.9% 10%;
    --sidebar-primary-foreground: 0 0% 98%;
    --sidebar-accent: 240 4.8% 95.9%;
    --sidebar-accent-foreground: 240 5.9% 10%;
    --sidebar-border: 220 13% 91%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }
  .dark {
    --background: 0 0% 3.9%;
    --foreground: 0 0% 98%;
    --card: 0 0% 3.9%;
    --card-foreground: 0 0% 98%;
    --popover: 0 0% 3.9%;
    --popover-foreground: 0 0% 98%;
    --primary: 0 0% 98%;
    --primary-foreground: 0 0% 9%;
    --secondary: 0 0% 14.9%;
    --secondary-foreground: 0 0% 98%;
    --muted: 0 0% 14.9%;
    --muted-foreground: 0 0% 63.9%;
    --accent: 0 0% 14.9%;
    --accent-foreground: 0 0% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 14.9%;
    --input: 0 0% 14.9%;
    --ring: 0 0% 83.1%;
    --chart-1: 220 70% 50%;
    --chart-2: 160 60% 45%;
    --chart-3: 30 80% 55%;
    --chart-4: 280 65% 60%;
    --chart-5: 340 75% 55%;
    --sidebar-background: 240 5.9% 10%;
    --sidebar-foreground: 240 4.8% 95.9%;
    --sidebar-primary: 224.3 76.3% 48%;
    --sidebar-primary-foreground: 0 0% 100%;
    --sidebar-accent: 240 3.7% 15.9%;
    --sidebar-accent-foreground: 240 4.8% 95.9%;
    --sidebar-border: 240 3.7% 15.9%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
</file>

<file path="app/index.ts">
// This file ensures the root page is properly exported for direct access
export { default } from './page';
</file>

<file path="app/layout.tsx">
import type { Metadata } from 'next'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'vibelevels | Learning Platform',
  description: 'Go from 0 to 1 fast with vibelevels, designed to get you from idea to product quickly',
  keywords: 'web development, learning platform, coding, tutorials, vibelevels',
  authors: [{ name: 'vibelevels team' }],
  openGraph: {
    title: 'vibelevels | Learning Platform',
    description: 'Go from 0 to 1 fast with vibelevels, designed to get you from idea to product quickly',
    type: 'website',
    siteName: 'vibelevels',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-950 text-white flex flex-col">
        {/* Header/Navigation */}
        <Header />
        
        {/* Page Content */}
        <main className="flex-grow">
          {children}
        </main>
        
        {/* Footer */}
        <Footer />
      </body>
    </html>
  )
}
</file>

<file path="app/not-found.tsx">
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-violet-400">404</h1>
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Page Not Found</h2>
      <p className="text-lg text-gray-400 mb-12 max-w-xl mx-auto">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link 
        href="/" 
        className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-md"
      >
        Go Home
      </Link>
    </div>
  );
}
</file>

<file path="app/page.tsx">
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

import { ToolsSection } from "@/components/home/tools-section"
import { CourseCard } from "@/components/course/course-card"

export default function Home() {
  const featuredCourses = [
    {
      title: "web dev pitfalls",
      description: "learn common mistakes to avoid in web development projects with practical advice and real-world examples.",
      href: "/courses/web-dev-pitfalls",
      color: "red" as const,
      level: "beginner" as const
    },
    {
      title: "project architecture",
      description: "master the art of structuring web projects from the ground up with step-by-step guidance on essential components.",
      href: "/courses/project-architecture",
      color: "blue" as const,
      level: "intermediate" as const
    },
    {
      title: "one feature at a time",
      description: "learn the iterative development approach that focuses on building one feature at a time for better results.",
      href: "/courses/one-feature",
      color: "amber" as const,
      level: "intermediate" as const
    },
    {
      title: "ai dev tools",
      description: "compare ai assistants like copilot with complete development environments like v0 and lovable.",
      href: "/courses/ai-dev-tools",
      color: "purple" as const,
      level: "advanced" as const
    }
  ]

  return (
    <>
      {/* Title Section */}
      <section className="pt-20 pb-8 bg-gray-950">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-violet-400">vibelevels</h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-white/90">
            go from 0 to 1 fast with vibelevels - your launchpad for web development.
          </p>
        </div>
      </section>

      {/* Courses Preview */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">top courses</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {featuredCourses.map((course, index) => (
              <CourseCard 
                key={index}
                {...course}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <ToolsSection />

      {/* CTA */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">ready to level up your skills?</h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            join thousands of developers who are mastering web development through our gamified learning platform.
          </p>
          <Button asChild size="lg" className="bg-violet-600 hover:bg-violet-700 text-white">
            <Link href="/courses">
              browse all courses <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
</file>

<file path="components/course/course-card.tsx">
"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Medal, Award } from "lucide-react"

interface CourseCardProps {
  title: string
  description: string
  href: string
  color: "red" | "blue" | "amber" | "purple" | "green" | "pink"
  level: "beginner" | "intermediate" | "advanced"
  stepsCount?: number
  medalCount?: number
}

const levelColors = {
  beginner: "red",
  intermediate: "blue",
  advanced: "purple"
}

const levelLabels = {
  beginner: "beginner friendly",
  intermediate: "intermediate",
  advanced: "advanced"
}

export function CourseCard({
  title,
  description,
  href,
  color,
  level,
  stepsCount = 5,
  medalCount = 5
}: CourseCardProps) {
  const levelColor = levelColors[level]
  const levelLabel = levelLabels[level]
  
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-violet-500 transition-all">
      <div className={`h-2 bg-${color}-500`}></div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div className={`inline-block px-3 py-1 text-xs font-medium bg-${levelColor}-500/20 text-${levelColor}-400 rounded-full`}>
            {levelLabel}
          </div>
          {stepsCount > 0 && (
            <Badge variant="outline" className="bg-gray-700/50 text-gray-300 border-gray-600">
              {stepsCount} steps
            </Badge>
          )}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 mb-6">
          {description}
        </p>
        {medalCount > 0 && (
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-1">
              <Medal className="h-4 w-4 text-yellow-500" />
              <span className="text-sm text-gray-400">earn {medalCount} medals</span>
            </div>
            <div className="flex items-center gap-1">
              <Award className="h-4 w-4 text-purple-400" />
              <span className="text-sm text-gray-400">1 certificate</span>
            </div>
          </div>
        )}
        <Button asChild className="w-full bg-violet-600 hover:bg-violet-700 text-white">
          <Link href={href}>start course</Link>
        </Button>
      </div>
    </div>
  )
}
</file>

<file path="components/home/hero-section.tsx">
"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      {/* Star background image */}
      <div className="absolute inset-0 z-0" style={{ backgroundImage: 'url(/images/star-background.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      </div>
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">vibelevels</h1>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            Go from 0 to 1 fast with vibelevels, designed to get you from idea to product in less than an hour by
            providing a launchpad for your learning journey - no experience needed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-violet-600 hover:bg-violet-700 text-white">
              <Link href="/courses">start learning</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
</file>

<file path="components/home/tools-section.tsx">
interface ToolProps {
  src: string
  alt: string
}

function ToolLogo({ src, alt }: ToolProps) {
  return (
    <div className="w-20 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all">
      <img src={src} alt={alt} className="max-h-full" />
    </div>
  )
}

export function ToolsSection() {
  const tools = [
    { src: "/images/cursor-logo.png", alt: "Cursor" },
    { src: "/images/windsurf-logo.png", alt: "Windsurf" },
    { src: "/images/v0-logo.png", alt: "v0" },
    { src: "/images/claude-logo.png", alt: "Claude" },
    { src: "/images/openai-logo.png", alt: "OpenAI" },
    { src: "/images/gemini-logo.png", alt: "Gemini Pro 2.5" },
    { src: "/images/lovable-logo.svg", alt: "Lovable" },
  ]

  return (
    <section className="py-16 bg-gray-950">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-12">our learners use tools like</h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 max-w-4xl mx-auto">
          {tools.map((tool, index) => (
            <ToolLogo key={index} {...tool} />
          ))}
        </div>
      </div>
    </section>
  )
}
</file>

<file path="components/layout/footer.tsx">
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="text-xl font-bold text-violet-400 mb-4 block">
              vibelevels
            </Link>
            <p className="text-gray-400 text-sm">
              Go from 0 to 1 fast with vibelevels, designed to get you from idea to product in less than an hour.
            </p>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-white font-semibold mb-4">courses</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/courses/web-dev-pitfalls" className="text-gray-400 hover:text-white text-sm">
                  web dev pitfalls
                </Link>
              </li>
              <li>
                <Link href="/courses/project-architecture" className="text-gray-400 hover:text-white text-sm">
                  project architecture
                </Link>
              </li>
              <li>
                <Link href="/courses/one-feature" className="text-gray-400 hover:text-white text-sm">
                  one feature at a time
                </Link>
              </li>
              <li>
                <Link href="/courses/ai-dev-tools" className="text-gray-400 hover:text-white text-sm">
                  ai dev tools
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-white font-semibold mb-4">resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white text-sm">
                  blog
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-gray-400 hover:text-white text-sm">
                  community
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-gray-400 hover:text-white text-sm">
                  help center
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-white font-semibold mb-4">legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white text-sm">
                  terms of service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">
                  privacy policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            © 2025 vibelevels. all rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="https://github.com/a-bonus/vibelevels" className="text-gray-400 hover:text-white">
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://twitter.com/vibelevels" className="text-gray-400 hover:text-white">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
</file>

<file path="components/layout/header.tsx">
"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-gray-900 border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-violet-400">
            vibelevels
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-white hover:text-violet-400">
              home
            </Link>
            <Link href="/courses" className="text-white hover:text-violet-400">
              courses
            </Link>
            <Link href="/community" className="text-white hover:text-violet-400">
              community
            </Link>
            <Link href="/blog" className="text-white hover:text-violet-400">
              blog
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="flex flex-col gap-4 pt-4 pb-2 md:hidden">
            <Link 
              href="/" 
              className="text-white hover:text-violet-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              home
            </Link>
            <Link 
              href="/courses" 
              className="text-white hover:text-violet-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              courses
            </Link>
            <Link 
              href="/community" 
              className="text-white hover:text-violet-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              community
            </Link>
            <Link 
              href="/blog" 
              className="text-white hover:text-violet-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              blog
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
</file>

<file path="components/ui/accordion.tsx">
"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
</file>

<file path="components/ui/alert-dialog.tsx">
"use client"

import * as React from "react"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const AlertDialog = AlertDialogPrimitive.Root

const AlertDialogTrigger = AlertDialogPrimitive.Trigger

const AlertDialogPortal = AlertDialogPrimitive.Portal

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
))
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    />
  </AlertDialogPortal>
))
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName

const AlertDialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
AlertDialogHeader.displayName = "AlertDialogHeader"

const AlertDialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
AlertDialogFooter.displayName = "AlertDialogFooter"

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold", className)}
    {...props}
  />
))
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
AlertDialogDescription.displayName =
  AlertDialogPrimitive.Description.displayName

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action
    ref={ref}
    className={cn(buttonVariants(), className)}
    {...props}
  />
))
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName

const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(
      buttonVariants({ variant: "outline" }),
      "mt-2 sm:mt-0",
      className
    )}
    {...props}
  />
))
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}
</file>

<file path="components/ui/alert.tsx">
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }
</file>

<file path="components/ui/aspect-ratio.tsx">
"use client"

import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio"

const AspectRatio = AspectRatioPrimitive.Root

export { AspectRatio }
</file>

<file path="components/ui/avatar.tsx">
"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
))
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }
</file>

<file path="components/ui/badge.tsx">
"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
</file>

<file path="components/ui/breadcrumb.tsx">
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { ChevronRight, MoreHorizontal } from "lucide-react"

import { cn } from "@/lib/utils"

const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode
  }
>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />)
Breadcrumb.displayName = "Breadcrumb"

const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<"ol">
>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    className={cn(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
      className
    )}
    {...props}
  />
))
BreadcrumbList.displayName = "BreadcrumbList"

const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<"li">
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn("inline-flex items-center gap-1.5", className)}
    {...props}
  />
))
BreadcrumbItem.displayName = "BreadcrumbItem"

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & {
    asChild?: boolean
  }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      ref={ref}
      className={cn("transition-colors hover:text-foreground", className)}
      {...props}
    />
  )
})
BreadcrumbLink.displayName = "BreadcrumbLink"

const BreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<"span">
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={cn("font-normal text-foreground", className)}
    {...props}
  />
))
BreadcrumbPage.displayName = "BreadcrumbPage"

const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cn("[&>svg]:w-3.5 [&>svg]:h-3.5", className)}
    {...props}
  >
    {children ?? <ChevronRight />}
  </li>
)
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"

const BreadcrumbEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
)
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis"

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
}
</file>

<file path="components/ui/button.tsx">
"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
</file>

<file path="components/ui/calendar.tsx">
"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
</file>

<file path="components/ui/card.tsx">
import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
</file>

<file path="components/ui/carousel.tsx">
"use client"

import * as React from "react"
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins
    )
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return
      }

      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }, [])

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev()
    }, [api])

    const scrollNext = React.useCallback(() => {
      api?.scrollNext()
    }, [api])

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault()
          scrollPrev()
        } else if (event.key === "ArrowRight") {
          event.preventDefault()
          scrollNext()
        }
      },
      [scrollPrev, scrollNext]
    )

    React.useEffect(() => {
      if (!api || !setApi) {
        return
      }

      setApi(api)
    }, [api, setApi])

    React.useEffect(() => {
      if (!api) {
        return
      }

      onSelect(api)
      api.on("reInit", onSelect)
      api.on("select", onSelect)

      return () => {
        api?.off("select", onSelect)
      }
    }, [api, onSelect])

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation:
            orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    )
  }
)
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  )
})
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel()

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  )
})
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute  h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "-left-12 top-1/2 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </Button>
  )
})
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "-right-12 top-1/2 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
    </Button>
  )
})
CarouselNext.displayName = "CarouselNext"

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
}
</file>

<file path="components/ui/chart.tsx">
"use client"

import * as React from "react"
import * as RechartsPrimitive from "recharts"

import { cn } from "@/lib/utils"

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: "", dark: ".dark" } as const

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode
    icon?: React.ComponentType
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  )
}

type ChartContextProps = {
  config: ChartConfig
}

const ChartContext = React.createContext<ChartContextProps | null>(null)

function useChart() {
  const context = React.useContext(ChartContext)

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />")
  }

  return context
}

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    config: ChartConfig
    children: React.ComponentProps<
      typeof RechartsPrimitive.ResponsiveContainer
    >["children"]
  }
>(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId()
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        ref={ref}
        className={cn(
          "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
          className
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  )
})
ChartContainer.displayName = "Chart"

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(
    ([_, config]) => config.theme || config.color
  )

  if (!colorConfig.length) {
    return null
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color =
      itemConfig.theme?.[theme as keyof typeof itemConfig.theme] ||
      itemConfig.color
    return color ? `  --color-${key}: ${color};` : null
  })
  .join("\n")}
}
`
          )
          .join("\n"),
      }}
    />
  )
}

const ChartTooltip = RechartsPrimitive.Tooltip

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
    React.ComponentProps<"div"> & {
      hideLabel?: boolean
      hideIndicator?: boolean
      indicator?: "line" | "dot" | "dashed"
      nameKey?: string
      labelKey?: string
    }
>(
  (
    {
      active,
      payload,
      className,
      indicator = "dot",
      hideLabel = false,
      hideIndicator = false,
      label,
      labelFormatter,
      labelClassName,
      formatter,
      color,
      nameKey,
      labelKey,
    },
    ref
  ) => {
    const { config } = useChart()

    const tooltipLabel = React.useMemo(() => {
      if (hideLabel || !payload?.length) {
        return null
      }

      const [item] = payload
      const key = `${labelKey || item.dataKey || item.name || "value"}`
      const itemConfig = getPayloadConfigFromPayload(config, item, key)
      const value =
        !labelKey && typeof label === "string"
          ? config[label as keyof typeof config]?.label || label
          : itemConfig?.label

      if (labelFormatter) {
        return (
          <div className={cn("font-medium", labelClassName)}>
            {labelFormatter(value, payload)}
          </div>
        )
      }

      if (!value) {
        return null
      }

      return <div className={cn("font-medium", labelClassName)}>{value}</div>
    }, [
      label,
      labelFormatter,
      payload,
      hideLabel,
      labelClassName,
      config,
      labelKey,
    ])

    if (!active || !payload?.length) {
      return null
    }

    const nestLabel = payload.length === 1 && indicator !== "dot"

    return (
      <div
        ref={ref}
        className={cn(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          className
        )}
      >
        {!nestLabel ? tooltipLabel : null}
        <div className="grid gap-1.5">
          {payload.map((item, index) => {
            const key = `${nameKey || item.name || item.dataKey || "value"}`
            const itemConfig = getPayloadConfigFromPayload(config, item, key)
            const indicatorColor = color || item.payload.fill || item.color

            return (
              <div
                key={item.dataKey}
                className={cn(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  indicator === "dot" && "items-center"
                )}
              >
                {formatter && item?.value !== undefined && item.name ? (
                  formatter(item.value, item.name, item, index, item.payload)
                ) : (
                  <>
                    {itemConfig?.icon ? (
                      <itemConfig.icon />
                    ) : (
                      !hideIndicator && (
                        <div
                          className={cn(
                            "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
                            {
                              "h-2.5 w-2.5": indicator === "dot",
                              "w-1": indicator === "line",
                              "w-0 border-[1.5px] border-dashed bg-transparent":
                                indicator === "dashed",
                              "my-0.5": nestLabel && indicator === "dashed",
                            }
                          )}
                          style={
                            {
                              "--color-bg": indicatorColor,
                              "--color-border": indicatorColor,
                            } as React.CSSProperties
                          }
                        />
                      )
                    )}
                    <div
                      className={cn(
                        "flex flex-1 justify-between leading-none",
                        nestLabel ? "items-end" : "items-center"
                      )}
                    >
                      <div className="grid gap-1.5">
                        {nestLabel ? tooltipLabel : null}
                        <span className="text-muted-foreground">
                          {itemConfig?.label || item.name}
                        </span>
                      </div>
                      {item.value && (
                        <span className="font-mono font-medium tabular-nums text-foreground">
                          {item.value.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </>
                )}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
)
ChartTooltipContent.displayName = "ChartTooltip"

const ChartLegend = RechartsPrimitive.Legend

const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> &
    Pick<RechartsPrimitive.LegendProps, "payload" | "verticalAlign"> & {
      hideIcon?: boolean
      nameKey?: string
    }
>(
  (
    { className, hideIcon = false, payload, verticalAlign = "bottom", nameKey },
    ref
  ) => {
    const { config } = useChart()

    if (!payload?.length) {
      return null
    }

    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center justify-center gap-4",
          verticalAlign === "top" ? "pb-3" : "pt-3",
          className
        )}
      >
        {payload.map((item) => {
          const key = `${nameKey || item.dataKey || "value"}`
          const itemConfig = getPayloadConfigFromPayload(config, item, key)

          return (
            <div
              key={item.value}
              className={cn(
                "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"
              )}
            >
              {itemConfig?.icon && !hideIcon ? (
                <itemConfig.icon />
              ) : (
                <div
                  className="h-2 w-2 shrink-0 rounded-[2px]"
                  style={{
                    backgroundColor: item.color,
                  }}
                />
              )}
              {itemConfig?.label}
            </div>
          )
        })}
      </div>
    )
  }
)
ChartLegendContent.displayName = "ChartLegend"

// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(
  config: ChartConfig,
  payload: unknown,
  key: string
) {
  if (typeof payload !== "object" || payload === null) {
    return undefined
  }

  const payloadPayload =
    "payload" in payload &&
    typeof payload.payload === "object" &&
    payload.payload !== null
      ? payload.payload
      : undefined

  let configLabelKey: string = key

  if (
    key in payload &&
    typeof payload[key as keyof typeof payload] === "string"
  ) {
    configLabelKey = payload[key as keyof typeof payload] as string
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key as keyof typeof payloadPayload] === "string"
  ) {
    configLabelKey = payloadPayload[
      key as keyof typeof payloadPayload
    ] as string
  }

  return configLabelKey in config
    ? config[configLabelKey]
    : config[key as keyof typeof config]
}

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
}
</file>

<file path="components/ui/checkbox.tsx">
"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
</file>

<file path="components/ui/collapsible.tsx">
"use client"

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"

const Collapsible = CollapsiblePrimitive.Root

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger

const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
</file>

<file path="components/ui/command.tsx">
"use client"

import * as React from "react"
import { type DialogProps } from "@radix-ui/react-dialog"
import { Command as CommandPrimitive } from "cmdk"
import { Search } from "lucide-react"

import { cn } from "@/lib/utils"
import { Dialog, DialogContent } from "@/components/ui/dialog"

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className
    )}
    {...props}
  />
))
Command.displayName = CommandPrimitive.displayName

const CommandDialog = ({ children, ...props }: DialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0 shadow-lg">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  </div>
))

CommandInput.displayName = CommandPrimitive.Input.displayName

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
    {...props}
  />
))

CommandList.displayName = CommandPrimitive.List.displayName

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="py-6 text-center text-sm"
    {...props}
  />
))

CommandEmpty.displayName = CommandPrimitive.Empty.displayName

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className
    )}
    {...props}
  />
))

CommandGroup.displayName = CommandPrimitive.Group.displayName

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 h-px bg-border", className)}
    {...props}
  />
))
CommandSeparator.displayName = CommandPrimitive.Separator.displayName

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      className
    )}
    {...props}
  />
))

CommandItem.displayName = CommandPrimitive.Item.displayName

const CommandShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}
CommandShortcut.displayName = "CommandShortcut"

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}
</file>

<file path="components/ui/context-menu.tsx">
"use client"

import * as React from "react"
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const ContextMenu = ContextMenuPrimitive.Root

const ContextMenuTrigger = ContextMenuPrimitive.Trigger

const ContextMenuGroup = ContextMenuPrimitive.Group

const ContextMenuPortal = ContextMenuPrimitive.Portal

const ContextMenuSub = ContextMenuPrimitive.Sub

const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup

const ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <ContextMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </ContextMenuPrimitive.SubTrigger>
))
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName

const ContextMenuSubContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName

const ContextMenuContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Portal>
    <ContextMenuPrimitive.Content
      ref={ref}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </ContextMenuPrimitive.Portal>
))
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName

const ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName

const ContextMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <ContextMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.CheckboxItem>
))
ContextMenuCheckboxItem.displayName =
  ContextMenuPrimitive.CheckboxItem.displayName

const ContextMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <ContextMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.RadioItem>
))
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName

const ContextMenuLabel = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold text-foreground",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName

const ContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-border", className)}
    {...props}
  />
))
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName

const ContextMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}
ContextMenuShortcut.displayName = "ContextMenuShortcut"

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
}
</file>

<file path="components/ui/dialog.tsx">
"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}
</file>

<file path="components/ui/drawer.tsx">
"use client"

import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"

import { cn } from "@/lib/utils"

const Drawer = ({
  shouldScaleBackground = true,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root
    shouldScaleBackground={shouldScaleBackground}
    {...props}
  />
)
Drawer.displayName = "Drawer"

const DrawerTrigger = DrawerPrimitive.Trigger

const DrawerPortal = DrawerPrimitive.Portal

const DrawerClose = DrawerPrimitive.Close

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn("fixed inset-0 z-50 bg-black/80", className)}
    {...props}
  />
))
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        className
      )}
      {...props}
    >
      <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortal>
))
DrawerContent.displayName = "DrawerContent"

const DrawerHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)}
    {...props}
  />
)
DrawerHeader.displayName = "DrawerHeader"

const DrawerFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("mt-auto flex flex-col gap-2 p-4", className)}
    {...props}
  />
)
DrawerFooter.displayName = "DrawerFooter"

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
DrawerTitle.displayName = DrawerPrimitive.Title.displayName

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
DrawerDescription.displayName = DrawerPrimitive.Description.displayName

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
}
</file>

<file path="components/ui/dropdown-menu.tsx">
"use client"

import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const DropdownMenu = DropdownMenuPrimitive.Root

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

const DropdownMenuGroup = DropdownMenuPrimitive.Group

const DropdownMenuPortal = DropdownMenuPrimitive.Portal

const DropdownMenuSub = DropdownMenuPrimitive.Sub

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto" />
  </DropdownMenuPrimitive.SubTrigger>
))
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
))
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
))
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
))
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
      {...props}
    />
  )
}
DropdownMenuShortcut.displayName = "DropdownMenuShortcut"

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
}
</file>

<file path="components/ui/form.tsx">
"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { Slot } from "@radix-ui/react-slot"
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  useFormContext,
} from "react-hook-form"

import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"

const Form = FormProvider

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName
}

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
)

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext)
  const { getFieldState, formState } = useFormContext()

  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>")
  }

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}

type FormItemContextValue = {
  id: string
}

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue
)

const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const id = React.useId()

  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn("space-y-2", className)} {...props} />
    </FormItemContext.Provider>
  )
})
FormItem.displayName = "FormItem"

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField()

  return (
    <Label
      ref={ref}
      className={cn(error && "text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />
  )
})
FormLabel.displayName = "FormLabel"

const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  )
})
FormControl.displayName = "FormControl"

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField()

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
})
FormDescription.displayName = "FormDescription"

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message) : children

  if (!body) {
    return null
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn("text-sm font-medium text-destructive", className)}
      {...props}
    >
      {body}
    </p>
  )
})
FormMessage.displayName = "FormMessage"

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
}
</file>

<file path="components/ui/hover-card.tsx">
"use client"

import * as React from "react"
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"

import { cn } from "@/lib/utils"

const HoverCard = HoverCardPrimitive.Root

const HoverCardTrigger = HoverCardPrimitive.Trigger

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName

export { HoverCard, HoverCardTrigger, HoverCardContent }
</file>

<file path="components/ui/input-otp.tsx">
"use client"

import * as React from "react"
import { OTPInput, OTPInputContext } from "input-otp"
import { Dot } from "lucide-react"

import { cn } from "@/lib/utils"

const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={cn(
      "flex items-center gap-2 has-[:disabled]:opacity-50",
      containerClassName
    )}
    className={cn("disabled:cursor-not-allowed", className)}
    {...props}
  />
))
InputOTP.displayName = "InputOTP"

const InputOTPGroup = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center", className)} {...props} />
))
InputOTPGroup.displayName = "InputOTPGroup"

const InputOTPSlot = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & { index: number }
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        isActive && "z-10 ring-2 ring-ring ring-offset-background",
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
        </div>
      )}
    </div>
  )
})
InputOTPSlot.displayName = "InputOTPSlot"

const InputOTPSeparator = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ ...props }, ref) => (
  <div ref={ref} role="separator" {...props}>
    <Dot />
  </div>
))
InputOTPSeparator.displayName = "InputOTPSeparator"

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
</file>

<file path="components/ui/input.tsx">
import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
</file>

<file path="components/ui/label.tsx">
"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
</file>

<file path="components/ui/menubar.tsx">
"use client"

import * as React from "react"
import * as MenubarPrimitive from "@radix-ui/react-menubar"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const MenubarMenu = MenubarPrimitive.Menu

const MenubarGroup = MenubarPrimitive.Group

const MenubarPortal = MenubarPrimitive.Portal

const MenubarSub = MenubarPrimitive.Sub

const MenubarRadioGroup = MenubarPrimitive.RadioGroup

const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn(
      "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
      className
    )}
    {...props}
  />
))
Menubar.displayName = MenubarPrimitive.Root.displayName

const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      className
    )}
    {...props}
  />
))
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName

const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </MenubarPrimitive.SubTrigger>
))
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName

const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName

const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(
  (
    { className, align = "start", alignOffset = -4, sideOffset = 8, ...props },
    ref
  ) => (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        ref={ref}
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(
          "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className
        )}
        {...props}
      />
    </MenubarPrimitive.Portal>
  )
)
MenubarContent.displayName = MenubarPrimitive.Content.displayName

const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
MenubarItem.displayName = MenubarPrimitive.Item.displayName

const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
))
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName

const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
))
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName

const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
MenubarLabel.displayName = MenubarPrimitive.Label.displayName

const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName

const MenubarShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}
MenubarShortcut.displayname = "MenubarShortcut"

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
}
</file>

<file path="components/ui/navigation-menu.tsx">
import * as React from "react"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      className
    )}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
))
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className
    )}
    {...props}
  />
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

const NavigationMenuItem = NavigationMenuPrimitive.Item

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
)

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), "group", className)}
    {...props}
  >
    {children}{" "}
    <ChevronDown
      className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
))
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      className
    )}
    {...props}
  />
))
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

const NavigationMenuLink = NavigationMenuPrimitive.Link

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={cn("absolute left-0 top-full flex justify-center")}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
        className
      )}
      ref={ref}
      {...props}
    />
  </div>
))
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className
    )}
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </NavigationMenuPrimitive.Indicator>
))
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
}
</file>

<file path="components/ui/pagination.tsx">
import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"

import { cn } from "@/lib/utils"
import { ButtonProps, buttonVariants } from "@/components/ui/button"

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
)
Pagination.displayName = "Pagination"

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center gap-1", className)}
    {...props}
  />
))
PaginationContent.displayName = "PaginationContent"

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
))
PaginationItem.displayName = "PaginationItem"

type PaginationLinkProps = {
  isActive?: boolean
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<"a">

const PaginationLink = ({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? "outline" : "ghost",
        size,
      }),
      className
    )}
    {...props}
  />
)
PaginationLink.displayName = "PaginationLink"

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={cn("gap-1 pl-2.5", className)}
    {...props}
  >
    <ChevronLeft className="h-4 w-4" />
    <span>Previous</span>
  </PaginationLink>
)
PaginationPrevious.displayName = "PaginationPrevious"

const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={cn("gap-1 pr-2.5", className)}
    {...props}
  >
    <span>Next</span>
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
)
PaginationNext.displayName = "PaginationNext"

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
)
PaginationEllipsis.displayName = "PaginationEllipsis"

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
}
</file>

<file path="components/ui/popover.tsx">
"use client"

import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"

import { cn } from "@/lib/utils"

const Popover = PopoverPrimitive.Root

const PopoverTrigger = PopoverPrimitive.Trigger

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
))
PopoverContent.displayName = PopoverPrimitive.Content.displayName

export { Popover, PopoverTrigger, PopoverContent }
</file>

<file path="components/ui/progress.tsx">
"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-primary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
</file>

<file path="components/ui/radio-group.tsx">
"use client"

import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }
</file>

<file path="components/ui/resizable.tsx">
"use client"

import { GripVertical } from "lucide-react"
import * as ResizablePrimitive from "react-resizable-panels"

import { cn } from "@/lib/utils"

const ResizablePanelGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  <ResizablePrimitive.PanelGroup
    className={cn(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
      className
    )}
    {...props}
  />
)

const ResizablePanel = ResizablePrimitive.Panel

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean
}) => (
  <ResizablePrimitive.PanelResizeHandle
    className={cn(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      className
    )}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
        <GripVertical className="h-2.5 w-2.5" />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
)

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
</file>

<file path="components/ui/scroll-area.tsx">
"use client"

import * as React from "react"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"

import { cn } from "@/lib/utils"

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={cn("relative overflow-hidden", className)}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
))
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" &&
        "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" &&
        "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
))
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

export { ScrollArea, ScrollBar }
</file>

<file path="components/ui/select.tsx">
"use client"

import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from "lucide-react"

import { cn } from "@/lib/utils"

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <ChevronUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <ChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)}
    {...props}
  />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
}
</file>

<file path="components/ui/separator.tsx">
"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props}
    />
  )
)
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }
</file>

<file path="components/ui/sheet.tsx">
"use client"

import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Sheet = SheetPrimitive.Root

const SheetTrigger = SheetPrimitive.Trigger

const SheetClose = SheetPrimitive.Close

const SheetPortal = SheetPrimitive.Portal

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
)

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = "right", className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(sheetVariants({ side }), className)}
      {...props}
    >
      {children}
      <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPortal>
))
SheetContent.displayName = SheetPrimitive.Content.displayName

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
SheetHeader.displayName = "SheetHeader"

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
SheetFooter.displayName = "SheetFooter"

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
  />
))
SheetTitle.displayName = SheetPrimitive.Title.displayName

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
SheetDescription.displayName = SheetPrimitive.Description.displayName

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
</file>

<file path="components/ui/sidebar.tsx">
"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { VariantProps, cva } from "class-variance-authority"
import { PanelLeft } from "lucide-react"

import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const SIDEBAR_COOKIE_NAME = "sidebar:state"
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
const SIDEBAR_WIDTH = "16rem"
const SIDEBAR_WIDTH_MOBILE = "18rem"
const SIDEBAR_WIDTH_ICON = "3rem"
const SIDEBAR_KEYBOARD_SHORTCUT = "b"

type SidebarContext = {
  state: "expanded" | "collapsed"
  open: boolean
  setOpen: (open: boolean) => void
  openMobile: boolean
  setOpenMobile: (open: boolean) => void
  isMobile: boolean
  toggleSidebar: () => void
}

const SidebarContext = React.createContext<SidebarContext | null>(null)

function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.")
  }

  return context
}

const SidebarProvider = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    defaultOpen?: boolean
    open?: boolean
    onOpenChange?: (open: boolean) => void
  }
>(
  (
    {
      defaultOpen = true,
      open: openProp,
      onOpenChange: setOpenProp,
      className,
      style,
      children,
      ...props
    },
    ref
  ) => {
    const isMobile = useIsMobile()
    const [openMobile, setOpenMobile] = React.useState(false)

    // This is the internal state of the sidebar.
    // We use openProp and setOpenProp for control from outside the component.
    const [_open, _setOpen] = React.useState(defaultOpen)
    const open = openProp ?? _open
    const setOpen = React.useCallback(
      (value: boolean | ((value: boolean) => boolean)) => {
        const openState = typeof value === "function" ? value(open) : value
        if (setOpenProp) {
          setOpenProp(openState)
        } else {
          _setOpen(openState)
        }

        // This sets the cookie to keep the sidebar state.
        document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
      },
      [setOpenProp, open]
    )

    // Helper to toggle the sidebar.
    const toggleSidebar = React.useCallback(() => {
      return isMobile
        ? setOpenMobile((open) => !open)
        : setOpen((open) => !open)
    }, [isMobile, setOpen, setOpenMobile])

    // Adds a keyboard shortcut to toggle the sidebar.
    React.useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (
          event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
          (event.metaKey || event.ctrlKey)
        ) {
          event.preventDefault()
          toggleSidebar()
        }
      }

      window.addEventListener("keydown", handleKeyDown)
      return () => window.removeEventListener("keydown", handleKeyDown)
    }, [toggleSidebar])

    // We add a state so that we can do data-state="expanded" or "collapsed".
    // This makes it easier to style the sidebar with Tailwind classes.
    const state = open ? "expanded" : "collapsed"

    const contextValue = React.useMemo<SidebarContext>(
      () => ({
        state,
        open,
        setOpen,
        isMobile,
        openMobile,
        setOpenMobile,
        toggleSidebar,
      }),
      [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
    )

    return (
      <SidebarContext.Provider value={contextValue}>
        <TooltipProvider delayDuration={0}>
          <div
            style={
              {
                "--sidebar-width": SIDEBAR_WIDTH,
                "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
                ...style,
              } as React.CSSProperties
            }
            className={cn(
              "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar",
              className
            )}
            ref={ref}
            {...props}
          >
            {children}
          </div>
        </TooltipProvider>
      </SidebarContext.Provider>
    )
  }
)
SidebarProvider.displayName = "SidebarProvider"

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    side?: "left" | "right"
    variant?: "sidebar" | "floating" | "inset"
    collapsible?: "offcanvas" | "icon" | "none"
  }
>(
  (
    {
      side = "left",
      variant = "sidebar",
      collapsible = "offcanvas",
      className,
      children,
      ...props
    },
    ref
  ) => {
    const { isMobile, state, openMobile, setOpenMobile } = useSidebar()

    if (collapsible === "none") {
      return (
        <div
          className={cn(
            "flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground",
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      )
    }

    if (isMobile) {
      return (
        <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
          <SheetContent
            data-sidebar="sidebar"
            data-mobile="true"
            className="w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden"
            style={
              {
                "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
              } as React.CSSProperties
            }
            side={side}
          >
            <div className="flex h-full w-full flex-col">{children}</div>
          </SheetContent>
        </Sheet>
      )
    }

    return (
      <div
        ref={ref}
        className="group peer hidden md:block text-sidebar-foreground"
        data-state={state}
        data-collapsible={state === "collapsed" ? collapsible : ""}
        data-variant={variant}
        data-side={side}
      >
        {/* This is what handles the sidebar gap on desktop */}
        <div
          className={cn(
            "duration-200 relative h-svh w-[--sidebar-width] bg-transparent transition-[width] ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            variant === "floating" || variant === "inset"
              ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]"
              : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]"
          )}
        />
        <div
          className={cn(
            "duration-200 fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] ease-linear md:flex",
            side === "left"
              ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
              : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
            // Adjust the padding for floating and inset variants.
            variant === "floating" || variant === "inset"
              ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]"
              : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
            className
          )}
          {...props}
        >
          <div
            data-sidebar="sidebar"
            className="flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow"
          >
            {children}
          </div>
        </div>
      </div>
    )
  }
)
Sidebar.displayName = "Sidebar"

const SidebarTrigger = React.forwardRef<
  React.ElementRef<typeof Button>,
  React.ComponentProps<typeof Button>
>(({ className, onClick, ...props }, ref) => {
  const { toggleSidebar } = useSidebar()

  return (
    <Button
      ref={ref}
      data-sidebar="trigger"
      variant="ghost"
      size="icon"
      className={cn("h-7 w-7", className)}
      onClick={(event) => {
        onClick?.(event)
        toggleSidebar()
      }}
      {...props}
    >
      <PanelLeft />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
})
SidebarTrigger.displayName = "SidebarTrigger"

const SidebarRail = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button">
>(({ className, ...props }, ref) => {
  const { toggleSidebar } = useSidebar()

  return (
    <button
      ref={ref}
      data-sidebar="rail"
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      onClick={toggleSidebar}
      title="Toggle Sidebar"
      className={cn(
        "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",
        "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        className
      )}
      {...props}
    />
  )
})
SidebarRail.displayName = "SidebarRail"

const SidebarInset = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"main">
>(({ className, ...props }, ref) => {
  return (
    <main
      ref={ref}
      className={cn(
        "relative flex min-h-svh flex-1 flex-col bg-background",
        "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
        className
      )}
      {...props}
    />
  )
})
SidebarInset.displayName = "SidebarInset"

const SidebarInput = React.forwardRef<
  React.ElementRef<typeof Input>,
  React.ComponentProps<typeof Input>
>(({ className, ...props }, ref) => {
  return (
    <Input
      ref={ref}
      data-sidebar="input"
      className={cn(
        "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
        className
      )}
      {...props}
    />
  )
})
SidebarInput.displayName = "SidebarInput"

const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="header"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  )
})
SidebarHeader.displayName = "SidebarHeader"

const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="footer"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  )
})
SidebarFooter.displayName = "SidebarFooter"

const SidebarSeparator = React.forwardRef<
  React.ElementRef<typeof Separator>,
  React.ComponentProps<typeof Separator>
>(({ className, ...props }, ref) => {
  return (
    <Separator
      ref={ref}
      data-sidebar="separator"
      className={cn("mx-2 w-auto bg-sidebar-border", className)}
      {...props}
    />
  )
})
SidebarSeparator.displayName = "SidebarSeparator"

const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="content"
      className={cn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        className
      )}
      {...props}
    />
  )
})
SidebarContent.displayName = "SidebarContent"

const SidebarGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="group"
      className={cn("relative flex w-full min-w-0 flex-col p-2", className)}
      {...props}
    />
  )
})
SidebarGroup.displayName = "SidebarGroup"

const SidebarGroupLabel = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "div"

  return (
    <Comp
      ref={ref}
      data-sidebar="group-label"
      className={cn(
        "duration-200 flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        className
      )}
      {...props}
    />
  )
})
SidebarGroupLabel.displayName = "SidebarGroupLabel"

const SidebarGroupAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      ref={ref}
      data-sidebar="group-action"
      className={cn(
        "absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
})
SidebarGroupAction.displayName = "SidebarGroupAction"

const SidebarGroupContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-sidebar="group-content"
    className={cn("w-full text-sm", className)}
    {...props}
  />
))
SidebarGroupContent.displayName = "SidebarGroupContent"

const SidebarMenu = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    data-sidebar="menu"
    className={cn("flex w-full min-w-0 flex-col gap-1", className)}
    {...props}
  />
))
SidebarMenu.displayName = "SidebarMenu"

const SidebarMenuItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    data-sidebar="menu-item"
    className={cn("group/menu-item relative", className)}
    {...props}
  />
))
SidebarMenuItem.displayName = "SidebarMenuItem"

const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline:
          "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean
    isActive?: boolean
    tooltip?: string | React.ComponentProps<typeof TooltipContent>
  } & VariantProps<typeof sidebarMenuButtonVariants>
>(
  (
    {
      asChild = false,
      isActive = false,
      variant = "default",
      size = "default",
      tooltip,
      className,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button"
    const { isMobile, state } = useSidebar()

    const button = (
      <Comp
        ref={ref}
        data-sidebar="menu-button"
        data-size={size}
        data-active={isActive}
        className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
        {...props}
      />
    )

    if (!tooltip) {
      return button
    }

    if (typeof tooltip === "string") {
      tooltip = {
        children: tooltip,
      }
    }

    return (
      <Tooltip>
        <TooltipTrigger asChild>{button}</TooltipTrigger>
        <TooltipContent
          side="right"
          align="center"
          hidden={state !== "collapsed" || isMobile}
          {...tooltip}
        />
      </Tooltip>
    )
  }
)
SidebarMenuButton.displayName = "SidebarMenuButton"

const SidebarMenuAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean
    showOnHover?: boolean
  }
>(({ className, asChild = false, showOnHover = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-action"
      className={cn(
        "absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover &&
          "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
        className
      )}
      {...props}
    />
  )
})
SidebarMenuAction.displayName = "SidebarMenuAction"

const SidebarMenuBadge = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-sidebar="menu-badge"
    className={cn(
      "absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground select-none pointer-events-none",
      "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
      "peer-data-[size=sm]/menu-button:top-1",
      "peer-data-[size=default]/menu-button:top-1.5",
      "peer-data-[size=lg]/menu-button:top-2.5",
      "group-data-[collapsible=icon]:hidden",
      className
    )}
    {...props}
  />
))
SidebarMenuBadge.displayName = "SidebarMenuBadge"

const SidebarMenuSkeleton = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    showIcon?: boolean
  }
>(({ className, showIcon = false, ...props }, ref) => {
  // Random width between 50 to 90%.
  const width = React.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`
  }, [])

  return (
    <div
      ref={ref}
      data-sidebar="menu-skeleton"
      className={cn("rounded-md h-8 flex gap-2 px-2 items-center", className)}
      {...props}
    >
      {showIcon && (
        <Skeleton
          className="size-4 rounded-md"
          data-sidebar="menu-skeleton-icon"
        />
      )}
      <Skeleton
        className="h-4 flex-1 max-w-[--skeleton-width]"
        data-sidebar="menu-skeleton-text"
        style={
          {
            "--skeleton-width": width,
          } as React.CSSProperties
        }
      />
    </div>
  )
})
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton"

const SidebarMenuSub = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    data-sidebar="menu-sub"
    className={cn(
      "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
      "group-data-[collapsible=icon]:hidden",
      className
    )}
    {...props}
  />
))
SidebarMenuSub.displayName = "SidebarMenuSub"

const SidebarMenuSubItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ ...props }, ref) => <li ref={ref} {...props} />)
SidebarMenuSubItem.displayName = "SidebarMenuSubItem"

const SidebarMenuSubButton = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<"a"> & {
    asChild?: boolean
    size?: "sm" | "md"
    isActive?: boolean
  }
>(({ asChild = false, size = "md", isActive, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
})
SidebarMenuSubButton.displayName = "SidebarMenuSubButton"

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
}
</file>

<file path="components/ui/skeleton.tsx">
import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  )
}

export { Skeleton }
</file>

<file path="components/ui/slider.tsx">
"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
      <SliderPrimitive.Range className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
</file>

<file path="components/ui/sonner.tsx">
"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
</file>

<file path="components/ui/switch.tsx">
"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
</file>

<file path="components/ui/table.tsx">
import * as React from "react"

import { cn } from "@/lib/utils"

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table
      ref={ref}
      className={cn("w-full caption-bottom text-sm", className)}
      {...props}
    />
  </div>
))
Table.displayName = "Table"

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
))
TableHeader.displayName = "TableHeader"

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
  />
))
TableBody.displayName = "TableBody"

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      className
    )}
    {...props}
  />
))
TableFooter.displayName = "TableFooter"

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    )}
    {...props}
  />
))
TableRow.displayName = "TableRow"

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      className
    )}
    {...props}
  />
))
TableHead.displayName = "TableHead"

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}
    {...props}
  />
))
TableCell.displayName = "TableCell"

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-muted-foreground", className)}
    {...props}
  />
))
TableCaption.displayName = "TableCaption"

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
</file>

<file path="components/ui/tabs.tsx">
"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
</file>

<file path="components/ui/textarea.tsx">
import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
</file>

<file path="components/ui/toast.tsx">
"use client"

import * as React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    )}
    {...props}
  />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive:
          "destructive group border-destructive bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  )
})
Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className
    )}
    {...props}
  />
))
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    )}
    toast-close=""
    {...props}
  >
    <X className="h-4 w-4" />
  </ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn("text-sm font-semibold", className)}
    {...props}
  />
))
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn("text-sm opacity-90", className)}
    {...props}
  />
))
ToastDescription.displayName = ToastPrimitives.Description.displayName

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>

type ToastActionElement = React.ReactElement<typeof ToastAction>

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
}
</file>

<file path="components/ui/toaster.tsx">
"use client"

import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
</file>

<file path="components/ui/toggle-group.tsx">
"use client"

import * as React from "react"
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
import { type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { toggleVariants } from "@/components/ui/toggle"

const ToggleGroupContext = React.createContext<
  VariantProps<typeof toggleVariants>
>({
  size: "default",
  variant: "default",
})

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cn("flex items-center justify-center gap-1", className)}
    {...props}
  >
    <ToggleGroupContext.Provider value={{ variant, size }}>
      {children}
    </ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
))

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
    VariantProps<typeof toggleVariants>
>(({ className, children, variant, size, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext)

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        className
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  )
})

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName

export { ToggleGroup, ToggleGroupItem }
</file>

<file path="components/ui/toggle.tsx">
"use client"

import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 gap-2",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-3 min-w-10",
        sm: "h-9 px-2.5 min-w-9",
        lg: "h-11 px-5 min-w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
))

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }
</file>

<file path="components/ui/tooltip.tsx">
"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "@/lib/utils"

const TooltipProvider = TooltipPrimitive.Provider

const Tooltip = TooltipPrimitive.Root

const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
</file>

<file path="components/ui/use-mobile.tsx">
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}
</file>

<file path="components/ui/use-toast.ts">
"use client"

// Inspired by react-hot-toast library
import * as React from "react"

import type {
  ToastActionElement,
  ToastProps,
} from "@/components/ui/toast"

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const

let count = 0

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

type ActionType = typeof actionTypes

type Action =
  | {
      type: ActionType["ADD_TOAST"]
      toast: ToasterToast
    }
  | {
      type: ActionType["UPDATE_TOAST"]
      toast: Partial<ToasterToast>
    }
  | {
      type: ActionType["DISMISS_TOAST"]
      toastId?: ToasterToast["id"]
    }
  | {
      type: ActionType["REMOVE_TOAST"]
      toastId?: ToasterToast["id"]
    }

interface State {
  toasts: ToasterToast[]
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    })
  }, TOAST_REMOVE_DELAY)

  toastTimeouts.set(toastId, timeout)
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      }

    case "DISMISS_TOAST": {
      const { toastId } = action

      // ! Side effects ! - This could be extracted into a dismissToast() action,
      // but I'll keep it here for simplicity
      if (toastId) {
        addToRemoveQueue(toastId)
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id)
        })
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t
        ),
      }
    }
    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        }
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }
  }
}

const listeners: Array<(state: State) => void> = []

let memoryState: State = { toasts: [] }

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => {
    listener(memoryState)
  })
}

type Toast = Omit<ToasterToast, "id">

function toast({ ...props }: Toast) {
  const id = genId()

  const update = (props: ToasterToast) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id },
    })
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id })

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss()
      },
    },
  })

  return {
    id: id,
    dismiss,
    update,
  }
}

function useToast() {
  const [state, setState] = React.useState<State>(memoryState)

  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [state])

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
  }
}

export { useToast, toast }
</file>

<file path="components/course-content.tsx">
"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CourseRoadmap, type RoadmapStep } from "@/components/course-roadmap"

interface CourseContentProps {
  title: string
  description: string
  color?: string
  steps: {
    title: string
    content: React.ReactNode
  }[]
}

export function CourseContent({ title, description, color = "violet", steps }: CourseContentProps) {
  const [activeStep, setActiveStep] = useState(0)

  const roadmapSteps: RoadmapStep[] = steps.map((step, index) => ({
    id: index,
    title: step.title,
    completed: index < activeStep,
  }))

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1)
    }
  }

  const handleStepChange = (stepId: number) => {
    setActiveStep(stepId)
  }

  return (
    <div className="bg-gray-950 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">{title}</h1>
            <p className="text-gray-400">{description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Roadmap */}
            <div className="md:col-span-1">
              <CourseRoadmap
                steps={roadmapSteps}
                activeStep={activeStep}
                onStepChange={handleStepChange}
                color={color}
              />
            </div>

            {/* Content */}
            <div className="md:col-span-3 bg-gray-900 rounded-xl p-6 border border-gray-800">
              <div className="prose prose-invert max-w-none">{steps[activeStep].content}</div>

              <div className="mt-8 flex justify-end">
                {activeStep < steps.length - 1 && (
                  <Button onClick={handleNext} className={`bg-${color}-600 hover:bg-${color}-700`}>
                    Next <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
</file>

<file path="components/course-roadmap.tsx">
"use client"
import { CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"

export type RoadmapStep = {
  id: number
  title: string
  completed: boolean
}

interface CourseRoadmapProps {
  steps: RoadmapStep[]
  activeStep: number
  onStepChange: (stepId: number) => void
  color?: string
}

export function CourseRoadmap({ steps, activeStep, onStepChange, color = "violet" }: CourseRoadmapProps) {
  const colorClasses = {
    violet: {
      active: "bg-violet-500",
      completed: "bg-violet-500",
      hover: "hover:border-violet-500",
      text: "text-violet-500",
      gradient: "from-violet-500 to-violet-500/20",
    },
    red: {
      active: "bg-red-500",
      completed: "bg-red-500",
      hover: "hover:border-red-500",
      text: "text-red-500",
      gradient: "from-red-500 to-red-500/20",
    },
    blue: {
      active: "bg-blue-500",
      completed: "bg-blue-500",
      hover: "hover:border-blue-500",
      text: "text-blue-500",
      gradient: "from-blue-500 to-blue-500/20",
    },
    amber: {
      active: "bg-amber-500",
      completed: "bg-amber-500",
      hover: "hover:border-amber-500",
      text: "text-amber-500",
      gradient: "from-amber-500 to-amber-500/20",
    },
    purple: {
      active: "bg-purple-500",
      completed: "bg-purple-500",
      hover: "hover:border-purple-500",
      text: "text-purple-500",
      gradient: "from-purple-500 to-purple-500/20",
    },
  }

  const selectedColor = colorClasses[color as keyof typeof colorClasses] || colorClasses.violet

  return (
    <div className="flex flex-col h-full">
      <div className="relative flex flex-col gap-8 py-4">
        {/* Vertical line */}
        <div className="absolute left-3.5 top-0 bottom-0 w-0.5 bg-gray-700" />

        {/* Gradient overlay for progress */}
        <div
          className={`absolute left-3.5 top-0 w-0.5 bg-gradient-to-b ${selectedColor.gradient}`}
          style={{
            height: `${Math.min(100, (activeStep / (steps.length - 1)) * 100)}%`,
            transition: "height 0.5s ease-in-out",
          }}
        />

        {steps.map((step) => (
          <div key={step.id} className="flex items-center gap-4">
            <button
              onClick={() => onStepChange(step.id)}
              className={cn(
                "relative z-10 flex items-center justify-center w-7 h-7 rounded-full border-2 transition-all",
                step.id === activeStep
                  ? `${selectedColor.active} border-transparent`
                  : step.id < activeStep
                    ? `${selectedColor.completed} border-transparent`
                    : "bg-gray-800 border-gray-700 cursor-pointer",
                step.id > activeStep && `${selectedColor.hover}`,
              )}
            >
              {step.id < activeStep ? (
                <CheckCircle2 className="w-5 h-5 text-white" />
              ) : (
                <span className={cn("text-sm font-medium", step.id === activeStep ? "text-white" : "text-gray-400")}>
                  {step.id + 1}
                </span>
              )}
            </button>
            <span
              className={cn(
                "font-medium",
                step.id === activeStep
                  ? `${selectedColor.text}`
                  : step.id < activeStep
                    ? "text-gray-300"
                    : "text-gray-500",
              )}
            >
              {step.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
</file>

<file path="components/theme-provider.tsx">
'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
</file>

<file path="hooks/use-mobile.tsx">
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}
</file>

<file path="hooks/use-toast.ts">
"use client"

// Inspired by react-hot-toast library
import * as React from "react"

import type {
  ToastActionElement,
  ToastProps,
} from "@/components/ui/toast"

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const

let count = 0

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

type ActionType = typeof actionTypes

type Action =
  | {
      type: ActionType["ADD_TOAST"]
      toast: ToasterToast
    }
  | {
      type: ActionType["UPDATE_TOAST"]
      toast: Partial<ToasterToast>
    }
  | {
      type: ActionType["DISMISS_TOAST"]
      toastId?: ToasterToast["id"]
    }
  | {
      type: ActionType["REMOVE_TOAST"]
      toastId?: ToasterToast["id"]
    }

interface State {
  toasts: ToasterToast[]
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    })
  }, TOAST_REMOVE_DELAY)

  toastTimeouts.set(toastId, timeout)
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      }

    case "DISMISS_TOAST": {
      const { toastId } = action

      // ! Side effects ! - This could be extracted into a dismissToast() action,
      // but I'll keep it here for simplicity
      if (toastId) {
        addToRemoveQueue(toastId)
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id)
        })
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t
        ),
      }
    }
    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        }
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }
  }
}

const listeners: Array<(state: State) => void> = []

let memoryState: State = { toasts: [] }

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => {
    listener(memoryState)
  })
}

type Toast = Omit<ToasterToast, "id">

function toast({ ...props }: Toast) {
  const id = genId()

  const update = (props: ToasterToast) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id },
    })
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id })

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss()
      },
    },
  })

  return {
    id: id,
    dismiss,
    update,
  }
}

function useToast() {
  const [state, setState] = React.useState<State>(memoryState)

  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [state])

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
  }
}

export { useToast, toast }
</file>

<file path="lib/utils.ts">
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
</file>

<file path="public/images/lovable-logo.svg">
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   width="256"
   height="256"
   viewBox="0 0 256 256"
   fill="none"
   version="1.1"
   id="svg910"
   sodipodi:docname="lovable-logo-256x256.svg"
   inkscape:version="1.1.1 (c3084ef, 2021-09-22)"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <sodipodi:namedview
     id="namedview912"
     pagecolor="#505050"
     bordercolor="#ffffff"
     borderopacity="1"
     inkscape:pageshadow="0"
     inkscape:pageopacity="0"
     inkscape:pagecheckerboard="1"
     showgrid="false"
     inkscape:zoom="2.5565104"
     inkscape:cx="124.19273"
     inkscape:cy="126.3441"
     inkscape:window-width="1710"
     inkscape:window-height="1040"
     inkscape:window-x="0"
     inkscape:window-y="39"
     inkscape:window-maximized="0"
     inkscape:current-layer="svg910" />
  <mask
     id="mask0_1_498"
     maskUnits="userSpaceOnUse"
     x="0"
     y="0"
     width="256"
     height="228">
    <path
       d="m 128,227.734 c -2.56,0 -5.138,-0.463 -7.734,-1.388 -2.595,-0.924 -4.852,-2.346 -6.772,-4.266 L 94.8256,204.906 C 69.6523,181.652 47.5552,159.199 28.5344,137.546 9.51147,115.892 0,92.8704 0,68.48 0,48.9963 6.54187,32.7115 19.6256,19.6256 32.7115,6.54187 48.9248,0 68.2656,0 79.2885,0 90.0267,2.54187 100.48,7.62561 110.933,12.7115 120.107,20.6229 128,31.36 136.604,20.6229 145.919,12.7115 155.946,7.62561 165.972,2.54187 176.569,0 187.734,0 207.075,0 223.289,6.54187 236.374,19.6256 249.458,32.7115 256,48.9963 256,68.48 c 0,24.3904 -9.493,47.43 -28.48,69.12 -18.987,21.69 -41.138,44.161 -66.454,67.414 l -18.56,17.066 c -1.92,1.92 -4.177,3.342 -6.772,4.266 -2.596,0.925 -5.174,1.388 -7.734,1.388 z"
       fill="#ffffff"
       id="path824" />
  </mask>
  <g
     mask="url(#mask0_1_498)"
     id="g857"
     transform="translate(0,14.133)">
    <g
       id="g1089">
      <path
         d="m 128,227.734 c -2.56,0 -5.138,-0.463 -7.734,-1.388 -2.595,-0.924 -4.852,-2.346 -6.772,-4.266 L 94.8256,204.906 C 69.6523,181.652 47.5552,159.199 28.5344,137.546 9.51147,115.892 0,92.8704 0,68.48 0,48.9963 6.54187,32.7115 19.6256,19.6256 32.7115,6.54187 48.9248,0 68.2656,0 79.2885,0 90.0267,2.54187 100.48,7.62561 110.933,12.7115 120.107,20.6229 128,31.36 136.604,20.6229 145.919,12.7115 155.946,7.62561 165.972,2.54187 176.569,0 187.734,0 207.075,0 223.289,6.54187 236.374,19.6256 249.458,32.7115 256,48.9963 256,68.48 c 0,24.3904 -9.493,47.43 -28.48,69.12 -18.987,21.69 -41.138,44.161 -66.454,67.414 l -18.56,17.066 c -1.92,1.92 -4.177,3.342 -6.772,4.266 -2.596,0.925 -5.174,1.388 -7.734,1.388 z"
         fill="#ff1814"
         id="path827" />
      <g
         filter="url(#filter0_f_1_498)"
         id="g831">
        <ellipse
           cx="163.767"
           cy="278.08301"
           rx="96.787102"
           ry="98.052299"
           transform="rotate(-105,163.767,278.083)"
           fill="#ffab25"
           id="ellipse829" />
      </g>
      <g
         filter="url(#filter1_f_1_498)"
         id="g835">
        <ellipse
           cx="224.87199"
           cy="261.70901"
           rx="96.787102"
           ry="98.052299"
           transform="rotate(-105,224.872,261.709)"
           fill="#ffab25"
           id="ellipse833" />
      </g>
      <g
         filter="url(#filter2_f_1_498)"
         id="g839">
        <ellipse
           cx="69.918198"
           cy="172.24699"
           rx="96.787102"
           ry="98.052299"
           transform="rotate(-105,69.9182,172.247)"
           fill="#ffab25"
           id="ellipse837" />
      </g>
      <g
         filter="url(#filter3_f_1_498)"
         id="g843">
        <ellipse
           cx="131.022"
           cy="155.873"
           rx="96.787102"
           ry="98.052299"
           transform="rotate(-105,131.022,155.873)"
           fill="#ffab25"
           id="ellipse841" />
      </g>
      <g
         filter="url(#filter4_f_1_498)"
         id="g847">
        <circle
           cx="-89.587303"
           cy="48.319099"
           r="108.428"
           transform="rotate(2.38352,-89.5873,48.3191)"
           fill="#be2b29"
           id="circle845" />
      </g>
      <g
         filter="url(#filter5_f_1_498)"
         id="g851">
        <ellipse
           cx="81.517502"
           cy="70.523697"
           rx="81.517502"
           ry="70.523697"
           transform="matrix(-0.67039,-0.742009,0.730841,-0.682548,206.356,122.303)"
           fill="#00c986"
           id="ellipse849" />
      </g>
      <g
         style="mix-blend-mode:hard-light"
         filter="url(#filter6_f_1_498)"
         id="g855">
        <ellipse
           cx="91.893898"
           cy="79.4459"
           rx="91.893898"
           ry="79.4459"
           transform="matrix(-0.67039,-0.742009,0.730841,-0.682548,255.859,191.054)"
           fill="#297fff"
           id="ellipse853" />
      </g>
    </g>
  </g>
  <defs
     id="defs908">
    <filter
       id="filter0_f_1_498"
       x="-25.3186"
       y="90.0923"
       width="378.172"
       height="375.98099"
       filterUnits="userSpaceOnUse"
       color-interpolation-filters="sRGB">
      <feFlood
         flood-opacity="0"
         result="BackgroundImageFix"
         id="feFlood859" />
      <feBlend
         mode="normal"
         in="SourceGraphic"
         in2="BackgroundImageFix"
         result="shape"
         id="feBlend861" />
      <feGaussianBlur
         stdDeviation="45.5469"
         result="effect1_foregroundBlur_1_498"
         id="feGaussianBlur863" />
    </filter>
    <filter
       id="filter1_f_1_498"
       x="35.786098"
       y="73.719002"
       width="378.172"
       height="375.98099"
       filterUnits="userSpaceOnUse"
       color-interpolation-filters="sRGB">
      <feFlood
         flood-opacity="0"
         result="BackgroundImageFix"
         id="feFlood866" />
      <feBlend
         mode="normal"
         in="SourceGraphic"
         in2="BackgroundImageFix"
         result="shape"
         id="feBlend868" />
      <feGaussianBlur
         stdDeviation="45.5469"
         result="effect1_foregroundBlur_1_498"
         id="feGaussianBlur870" />
    </filter>
    <filter
       id="filter2_f_1_498"
       x="-119.168"
       y="-15.7439"
       width="378.172"
       height="375.98099"
       filterUnits="userSpaceOnUse"
       color-interpolation-filters="sRGB">
      <feFlood
         flood-opacity="0"
         result="BackgroundImageFix"
         id="feFlood873" />
      <feBlend
         mode="normal"
         in="SourceGraphic"
         in2="BackgroundImageFix"
         result="shape"
         id="feBlend875" />
      <feGaussianBlur
         stdDeviation="45.5469"
         result="effect1_foregroundBlur_1_498"
         id="feGaussianBlur877" />
    </filter>
    <filter
       id="filter3_f_1_498"
       x="-58.063999"
       y="-32.117199"
       width="378.172"
       height="375.98099"
       filterUnits="userSpaceOnUse"
       color-interpolation-filters="sRGB">
      <feFlood
         flood-opacity="0"
         result="BackgroundImageFix"
         id="feFlood880" />
      <feBlend
         mode="normal"
         in="SourceGraphic"
         in2="BackgroundImageFix"
         result="shape"
         id="feBlend882" />
      <feGaussianBlur
         stdDeviation="45.5469"
         result="effect1_foregroundBlur_1_498"
         id="feGaussianBlur884" />
    </filter>
    <filter
       id="filter4_f_1_498"
       x="-359.96201"
       y="-222.05499"
       width="540.74902"
       height="540.74902"
       filterUnits="userSpaceOnUse"
       color-interpolation-filters="sRGB">
      <feFlood
         flood-opacity="0"
         result="BackgroundImageFix"
         id="feFlood887" />
      <feBlend
         mode="normal"
         in="SourceGraphic"
         in2="BackgroundImageFix"
         result="shape"
         id="feBlend889" />
      <feGaussianBlur
         stdDeviation="80.9722"
         result="effect1_foregroundBlur_1_498"
         id="feGaussianBlur891" />
    </filter>
    <filter
       id="filter5_f_1_498"
       x="37.035198"
       y="-154.718"
       width="332.42801"
       height="336.79901"
       filterUnits="userSpaceOnUse"
       color-interpolation-filters="sRGB">
      <feFlood
         flood-opacity="0"
         result="BackgroundImageFix"
         id="feFlood894" />
      <feBlend
         mode="normal"
         in="SourceGraphic"
         in2="BackgroundImageFix"
         result="shape"
         id="feBlend896" />
      <feGaussianBlur
         stdDeviation="45.5469"
         result="effect1_foregroundBlur_1_498"
         id="feGaussianBlur898" />
    </filter>
    <filter
       id="filter6_f_1_498"
       x="76.567902"
       y="-109.574"
       width="351.49701"
       height="356.43301"
       filterUnits="userSpaceOnUse"
       color-interpolation-filters="sRGB">
      <feFlood
         flood-opacity="0"
         result="BackgroundImageFix"
         id="feFlood901" />
      <feBlend
         mode="normal"
         in="SourceGraphic"
         in2="BackgroundImageFix"
         result="shape"
         id="feBlend903" />
      <feGaussianBlur
         stdDeviation="45.5469"
         result="effect1_foregroundBlur_1_498"
         id="feGaussianBlur905" />
    </filter>
  </defs>
</svg>
</file>

<file path="public/placeholder-logo.svg">
<svg xmlns="http://www.w3.org/2000/svg" width="215" height="48" fill="none"><path fill="#000" d="M57.588 9.6h6L73.828 38h-5.2l-2.36-6.88h-11.36L52.548 38h-5.2l10.24-28.4Zm7.16 17.16-4.16-12.16-4.16 12.16h8.32Zm23.694-2.24c-.186-1.307-.706-2.32-1.56-3.04-.853-.72-1.866-1.08-3.04-1.08-1.68 0-2.986.613-3.92 1.84-.906 1.227-1.36 2.947-1.36 5.16s.454 3.933 1.36 5.16c.934 1.227 2.24 1.84 3.92 1.84 1.254 0 2.307-.373 3.16-1.12.854-.773 1.387-1.867 1.6-3.28l5.12.24c-.186 1.68-.733 3.147-1.64 4.4-.906 1.227-2.08 2.173-3.52 2.84-1.413.667-2.986 1-4.72 1-2.08 0-3.906-.453-5.48-1.36-1.546-.907-2.76-2.2-3.64-3.88-.853-1.68-1.28-3.627-1.28-5.84 0-2.24.427-4.187 1.28-5.84.88-1.68 2.094-2.973 3.64-3.88 1.574-.907 3.4-1.36 5.48-1.36 1.68 0 3.227.32 4.64.96 1.414.64 2.56 1.56 3.44 2.76.907 1.2 1.454 2.6 1.64 4.2l-5.12.28Zm11.486-7.72.12 3.4c.534-1.227 1.307-2.173 2.32-2.84 1.04-.693 2.267-1.04 3.68-1.04 1.494 0 2.76.387 3.8 1.16 1.067.747 1.827 1.813 2.28 3.2.507-1.44 1.294-2.52 2.36-3.24 1.094-.747 2.414-1.12 3.96-1.12 1.414 0 2.64.307 3.68.92s1.84 1.52 2.4 2.72c.56 1.2.84 2.667.84 4.4V38h-4.96V25.92c0-1.813-.293-3.187-.88-4.12-.56-.96-1.413-1.44-2.56-1.44-.906 0-1.68.213-2.32.64-.64.427-1.133 1.053-1.48 1.88-.32.827-.48 1.84-.48 3.04V38h-4.56V25.92c0-1.2-.133-2.213-.4-3.04-.24-.827-.626-1.453-1.16-1.88-.506-.427-1.133-.64-1.88-.64-.906 0-1.68.227-2.32.68-.64.427-1.133 1.053-1.48 1.88-.32.827-.48 1.827-.48 3V38h-4.96V16.8h4.48Zm26.723 10.6c0-2.24.427-4.187 1.28-5.84.854-1.68 2.067-2.973 3.64-3.88 1.574-.907 3.4-1.36 5.48-1.36 1.84 0 3.494.413 4.96 1.24 1.467.827 2.64 2.08 3.52 3.76.88 1.653 1.347 3.693 1.4 6.12v1.32h-15.08c.107 1.813.614 3.227 1.52 4.24.907.987 2.134 1.48 3.68 1.48.987 0 1.88-.253 2.68-.76a4.803 4.803 0 0 0 1.84-2.2l5.08.36c-.64 2.027-1.84 3.64-3.6 4.84-1.733 1.173-3.733 1.76-6 1.76-2.08 0-3.906-.453-5.48-1.36-1.573-.907-2.786-2.2-3.64-3.88-.853-1.68-1.28-3.627-1.28-5.84Zm15.16-2.04c-.213-1.733-.76-3.013-1.64-3.84-.853-.827-1.893-1.24-3.12-1.24-1.44 0-2.6.453-3.48 1.36-.88.88-1.44 2.12-1.68 3.72h9.92ZM163.139 9.6V38h-5.04V9.6h5.04Zm8.322 7.2.24 5.88-.64-.36c.32-2.053 1.094-3.56 2.32-4.52 1.254-.987 2.787-1.48 4.6-1.48 2.32 0 4.107.733 5.36 2.2 1.254 1.44 1.88 3.387 1.88 5.84V38h-4.96V25.92c0-1.253-.12-2.28-.36-3.08-.24-.8-.64-1.413-1.2-1.84-.533-.427-1.253-.64-2.16-.64-1.44 0-2.573.48-3.4 1.44-.8.933-1.2 2.307-1.2 4.12V38h-4.96V16.8h4.48Zm30.003 7.72c-.186-1.307-.706-2.32-1.56-3.04-.853-.72-1.866-1.08-3.04-1.08-1.68 0-2.986.613-3.92 1.84-.906 1.227-1.36 2.947-1.36 5.16s.454 3.933 1.36 5.16c.934 1.227 2.24 1.84 3.92 1.84 1.254 0 2.307-.373 3.16-1.12.854-.773 1.387-1.867 1.6-3.28l5.12.24c-.186 1.68-.733 3.147-1.64 4.4-.906 1.227-2.08 2.173-3.52 2.84-1.413.667-2.986 1-4.72 1-2.08 0-3.906-.453-5.48-1.36-1.546-.907-2.76-2.2-3.64-3.88-.853-1.68-1.28-3.627-1.28-5.84 0-2.24.427-4.187 1.28-5.84.88-1.68 2.094-2.973 3.64-3.88 1.574-.907 3.4-1.36 5.48-1.36 1.68 0 3.227.32 4.64.96 1.414.64 2.56 1.56 3.44 2.76.907 1.2 1.454 2.6 1.64 4.2l-5.12.28Zm11.443 8.16V38h-5.6v-5.32h5.6Z"/><path fill="#171717" fill-rule="evenodd" d="m7.839 40.783 16.03-28.054L20 6 0 40.783h7.839Zm8.214 0H40L27.99 19.894l-4.02 7.032 3.976 6.914H20.02l-3.967 6.943Z" clip-rule="evenodd"/></svg>
</file>

<file path="public/placeholder.svg">
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1200" fill="none"><rect width="1200" height="1200" fill="#EAEAEA" rx="3"/><g opacity=".5"><g opacity=".5"><path fill="#FAFAFA" d="M600.709 736.5c-75.454 0-136.621-61.167-136.621-136.62 0-75.454 61.167-136.621 136.621-136.621 75.453 0 136.62 61.167 136.62 136.621 0 75.453-61.167 136.62-136.62 136.62Z"/><path stroke="#C9C9C9" stroke-width="2.418" d="M600.709 736.5c-75.454 0-136.621-61.167-136.621-136.62 0-75.454 61.167-136.621 136.621-136.621 75.453 0 136.62 61.167 136.62 136.621 0 75.453-61.167 136.62-136.62 136.62Z"/></g><path stroke="url(#a)" stroke-width="2.418" d="M0-1.209h553.581" transform="scale(1 -1) rotate(45 1163.11 91.165)"/><path stroke="url(#b)" stroke-width="2.418" d="M404.846 598.671h391.726"/><path stroke="url(#c)" stroke-width="2.418" d="M599.5 795.742V404.017"/><path stroke="url(#d)" stroke-width="2.418" d="m795.717 796.597-391.441-391.44"/><path fill="#fff" d="M600.709 656.704c-31.384 0-56.825-25.441-56.825-56.824 0-31.384 25.441-56.825 56.825-56.825 31.383 0 56.824 25.441 56.824 56.825 0 31.383-25.441 56.824-56.824 56.824Z"/><g clip-path="url(#e)"><path fill="#666" fill-rule="evenodd" d="M616.426 586.58h-31.434v16.176l3.553-3.554.531-.531h9.068l.074-.074 8.463-8.463h2.565l7.18 7.181V586.58Zm-15.715 14.654 3.698 3.699 1.283 1.282-2.565 2.565-1.282-1.283-5.2-5.199h-6.066l-5.514 5.514-.073.073v2.876a2.418 2.418 0 0 0 2.418 2.418h26.598a2.418 2.418 0 0 0 2.418-2.418v-8.317l-8.463-8.463-7.181 7.181-.071.072Zm-19.347 5.442v4.085a6.045 6.045 0 0 0 6.046 6.045h26.598a6.044 6.044 0 0 0 6.045-6.045v-7.108l1.356-1.355-1.282-1.283-.074-.073v-17.989h-38.689v23.43l-.146.146.146.147Z" clip-rule="evenodd"/></g><path stroke="#C9C9C9" stroke-width="2.418" d="M600.709 656.704c-31.384 0-56.825-25.441-56.825-56.824 0-31.384 25.441-56.825 56.825-56.825 31.383 0 56.824 25.441 56.824 56.825 0 31.383-25.441 56.824-56.824 56.824Z"/></g><defs><linearGradient id="a" x1="554.061" x2="-.48" y1=".083" y2=".087" gradientUnits="userSpaceOnUse"><stop stop-color="#C9C9C9" stop-opacity="0"/><stop offset=".208" stop-color="#C9C9C9"/><stop offset=".792" stop-color="#C9C9C9"/><stop offset="1" stop-color="#C9C9C9" stop-opacity="0"/></linearGradient><linearGradient id="b" x1="796.912" x2="404.507" y1="599.963" y2="599.965" gradientUnits="userSpaceOnUse"><stop stop-color="#C9C9C9" stop-opacity="0"/><stop offset=".208" stop-color="#C9C9C9"/><stop offset=".792" stop-color="#C9C9C9"/><stop offset="1" stop-color="#C9C9C9" stop-opacity="0"/></linearGradient><linearGradient id="c" x1="600.792" x2="600.794" y1="403.677" y2="796.082" gradientUnits="userSpaceOnUse"><stop stop-color="#C9C9C9" stop-opacity="0"/><stop offset=".208" stop-color="#C9C9C9"/><stop offset=".792" stop-color="#C9C9C9"/><stop offset="1" stop-color="#C9C9C9" stop-opacity="0"/></linearGradient><linearGradient id="d" x1="404.85" x2="796.972" y1="403.903" y2="796.02" gradientUnits="userSpaceOnUse"><stop stop-color="#C9C9C9" stop-opacity="0"/><stop offset=".208" stop-color="#C9C9C9"/><stop offset=".792" stop-color="#C9C9C9"/><stop offset="1" stop-color="#C9C9C9" stop-opacity="0"/></linearGradient><clipPath id="e"><path fill="#fff" d="M581.364 580.535h38.689v38.689h-38.689z"/></clipPath></defs></svg>
</file>

<file path="styles/globals.css">
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  font-family: Arial, Helvetica, sans-serif;
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 0 0% 3.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 0 0% 3.9%;
    --primary: 0 0% 9%;
    --primary-foreground: 0 0% 98%;
    --secondary: 0 0% 96.1%;
    --secondary-foreground: 0 0% 9%;
    --muted: 0 0% 96.1%;
    --muted-foreground: 0 0% 45.1%;
    --accent: 0 0% 96.1%;
    --accent-foreground: 0 0% 9%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 89.8%;
    --input: 0 0% 89.8%;
    --ring: 0 0% 3.9%;
    --chart-1: 12 76% 61%;
    --chart-2: 173 58% 39%;
    --chart-3: 197 37% 24%;
    --chart-4: 43 74% 66%;
    --chart-5: 27 87% 67%;
    --radius: 0.5rem;
    --sidebar-background: 0 0% 98%;
    --sidebar-foreground: 240 5.3% 26.1%;
    --sidebar-primary: 240 5.9% 10%;
    --sidebar-primary-foreground: 0 0% 98%;
    --sidebar-accent: 240 4.8% 95.9%;
    --sidebar-accent-foreground: 240 5.9% 10%;
    --sidebar-border: 220 13% 91%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }
  .dark {
    --background: 0 0% 3.9%;
    --foreground: 0 0% 98%;
    --card: 0 0% 3.9%;
    --card-foreground: 0 0% 98%;
    --popover: 0 0% 3.9%;
    --popover-foreground: 0 0% 98%;
    --primary: 0 0% 98%;
    --primary-foreground: 0 0% 9%;
    --secondary: 0 0% 14.9%;
    --secondary-foreground: 0 0% 98%;
    --muted: 0 0% 14.9%;
    --muted-foreground: 0 0% 63.9%;
    --accent: 0 0% 14.9%;
    --accent-foreground: 0 0% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 14.9%;
    --input: 0 0% 14.9%;
    --ring: 0 0% 83.1%;
    --chart-1: 220 70% 50%;
    --chart-2: 160 60% 45%;
    --chart-3: 30 80% 55%;
    --chart-4: 280 65% 60%;
    --chart-5: 340 75% 55%;
    --sidebar-background: 240 5.9% 10%;
    --sidebar-foreground: 240 4.8% 95.9%;
    --sidebar-primary: 224.3 76.3% 48%;
    --sidebar-primary-foreground: 0 0% 100%;
    --sidebar-accent: 240 3.7% 15.9%;
    --sidebar-accent-foreground: 240 4.8% 95.9%;
    --sidebar-border: 240 3.7% 15.9%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
</file>

<file path=".gitignore">
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules

# next.js
/.next/
/out/

# production
/build

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# env files
.env*

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
</file>

<file path="components.json">
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}
</file>

<file path="index.js">
// This file redirects to the Next.js app
// It's for Vercel deployments that might be looking for an entry point

const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const server = require('./server');

// If this file is directly executed, start the server
if (require.main === module) {
  server();
}

// Export server for use in other files
module.exports = server;
</file>

<file path="middleware.ts">
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  
  // Special handling for the root path to ensure it uses the Next.js page
  if (url.pathname === '/' || url.pathname === '') {
    // Force the use of the Next.js page component from the app directory
    const newUrl = new URL(request.url);
    newUrl.pathname = '/';
    return NextResponse.rewrite(newUrl);
  }
  
  // For other routes, let Next.js handle them normally
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Only match the root path to avoid affecting other routes
     * This ensures our home page logic only applies to the homepage
     */
    '/',
    '/((?!api|_next/static|_next/image|favicon.ico|images).*)',
  ],
};
</file>

<file path="next.config.mjs">
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Next.js routing configuration
  async rewrites() {
    return {
      beforeFiles: [
        // Home page handling
        {
          source: '/',
          destination: '/',
        },
        {
          source: '/index',
          destination: '/',
        },
        {
          source: '/index.html',
          destination: '/',
        },
      ],
      afterFiles: [
        // Static assets
        {
          source: '/images/:path*',
          destination: '/images/:path*',
        },
        // Main navigation routes
        {
          source: '/courses',
          destination: '/courses',
        },
        {
          source: '/courses/:path*',
          destination: '/courses/:path*',
        },
        {
          source: '/blog',
          destination: '/blog',
        },
        {
          source: '/community',
          destination: '/community',
        },
        {
          source: '/help',
          destination: '/help',
        },
        {
          source: '/terms',
          destination: '/terms',
        },
        {
          source: '/privacy',
          destination: '/privacy',
        }
      ],
      fallback: []
    };
  },
  // Disable trailing slashes
  trailingSlash: false,
}

export default nextConfig
</file>

<file path="package.json">
{
  "name": "my-v0-project",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "node server.js",
    "lint": "next lint"
  },
  "dependencies": {
    "@hookform/resolvers": "^3.9.1",
    "@radix-ui/react-accordion": "1.2.2",
    "@radix-ui/react-alert-dialog": "1.1.4",
    "@radix-ui/react-aspect-ratio": "1.1.1",
    "@radix-ui/react-avatar": "1.1.2",
    "@radix-ui/react-checkbox": "1.1.3",
    "@radix-ui/react-collapsible": "1.1.2",
    "@radix-ui/react-context-menu": "2.2.4",
    "@radix-ui/react-dialog": "1.1.4",
    "@radix-ui/react-dropdown-menu": "2.1.4",
    "@radix-ui/react-hover-card": "1.1.4",
    "@radix-ui/react-label": "2.1.1",
    "@radix-ui/react-menubar": "1.1.4",
    "@radix-ui/react-navigation-menu": "1.2.3",
    "@radix-ui/react-popover": "1.1.4",
    "@radix-ui/react-progress": "1.1.1",
    "@radix-ui/react-radio-group": "1.2.2",
    "@radix-ui/react-scroll-area": "1.2.2",
    "@radix-ui/react-select": "2.1.4",
    "@radix-ui/react-separator": "1.1.1",
    "@radix-ui/react-slider": "1.2.2",
    "@radix-ui/react-slot": "1.1.1",
    "@radix-ui/react-switch": "1.1.2",
    "@radix-ui/react-tabs": "1.1.2",
    "@radix-ui/react-toast": "1.2.4",
    "@radix-ui/react-toggle": "1.1.1",
    "@radix-ui/react-toggle-group": "1.1.1",
    "@radix-ui/react-tooltip": "1.1.6",
    "autoprefixer": "^10.4.20",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "1.0.4",
    "date-fns": "4.1.0",
    "embla-carousel-react": "8.5.1",
    "input-otp": "1.4.1",
    "lucide-react": "^0.454.0",
    "next": "15.2.4",
    "next-themes": "^0.4.4",
    "react": "^19",
    "react-day-picker": "8.10.1",
    "react-dom": "^19",
    "react-hook-form": "^7.54.1",
    "react-resizable-panels": "^2.1.7",
    "recharts": "2.15.0",
    "sonner": "^1.7.1",
    "tailwind-merge": "^2.5.5",
    "tailwindcss-animate": "^1.0.7",
    "vaul": "^0.9.6",
    "zod": "^3.24.1"
  },
  "devDependencies": {
    "@types/node": "^22",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "postcss": "^8",
    "tailwindcss": "^3.4.17",
    "typescript": "^5"
  }
}
</file>

<file path="postcss.config.mjs">
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
};

export default config;
</file>

<file path="README.md">
# vibelevels

## About

vibelevels is a learning platform designed to help developers go from 0 to 1 fast - from idea to product in less than an hour. We provide a launchpad for your learning journey with bite-sized, practical courses that focus on real-world web development skills.

With vibelevels, you'll learn:
- Common web development pitfalls and how to avoid them
- Best practices for project architecture
- Iterative development techniques
- Modern development tools and AI assistants

## Features

- 📚 Focused, practical courses
- 🏆 Achievement system with medals and certificates
- 🚀 Guided step-by-step learning paths
- 🧰 Tool recommendations and comparisons
- 💬 Community discussions and support

## Getting Started

vibelevels is built with Next.js 15 and uses Tailwind CSS for styling.

### Prerequisites

- Node.js 20.0.0 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/a-bonus/vibelevels.git
cd vibelevels
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `app/` - Next.js 15 app router pages
- `components/` - Reusable React components
  - `layout/` - Layout components (header, footer)
  - `course/` - Course-related components
  - `home/` - Homepage components
  - `ui/` - UI components (buttons, forms, etc.)
- `public/` - Static assets (images, fonts)

## Contributing

We welcome contributions from the community! Whether you're looking to fix bugs, add new features, or improve documentation, your help is appreciated.

### How to Contribute

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add some feature'`)
5. Push to the branch (`git push origin feature/your-feature-name`)
6. Create a new Pull Request

### Content Contributions

We especially welcome ideas for new course content! If you have a topic you'd like to see covered, please open a discussion in the GitHub Discussions tab. Some ideas for content:

- Framework-specific best practices
- Performance optimization techniques
- Accessibility guidelines
- Testing strategies
- DevOps for web developers

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

- GitHub: [a-bonus/vibelevels](https://github.com/a-bonus/vibelevels)
</file>

<file path="server.js">
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const hostname = process.env.HOSTNAME || 'localhost';
const port = process.env.PORT || 3000;

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

// Define routes that should be handled by specific pages
// The home page is explicitly prioritized
const routes = {
  '/': '/',
  '/index': '/', // Catch any /index requests
  '/index.html': '/', // Catch any /index.html requests
  '/courses': '/courses',
  '/blog': '/blog',
  '/community': '/community',
  '/help': '/help',
  '/terms': '/terms',
  '/privacy': '/privacy'
};

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      const { pathname, query } = parsedUrl;
      
      // Special handling for home page
      if (pathname === '/' || pathname === '' || pathname === '/index' || pathname === '/index.html') {
        // Explicitly render the home page
        await app.render(req, res, '/', query);
      }
      // Check if path matches a known route
      else if (routes[pathname]) {
        await app.render(req, res, routes[pathname], query);
      } 
      // Handle course-specific routes
      else if (pathname.startsWith('/courses/') && pathname.split('/').length === 3) {
        const course = pathname.split('/')[2];
        await app.render(req, res, `/courses/${course}`, query);
      }
      // Default handling
      else {
        await handle(req, res, parsedUrl);
      }
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('Internal Server Error');
    }
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${hostname}:${port}`);
  });
});
</file>

<file path="tailwind.config.ts">
import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
</file>

<file path="tsconfig.json">
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "target": "ES6",
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
</file>

<file path="vercel.json">
{
  "version": 2,
  "builds": [
    { "src": "package.json", "use": "@vercel/next" }
  ]
}
</file>

</files>
