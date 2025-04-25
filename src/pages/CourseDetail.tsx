
import { Layout } from "@/components/Layout";
import { CourseContent } from "@/components/CourseContent";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";
import { useParams } from "react-router-dom";

const CourseDetail = () => {
  const { courseSlug } = useParams();
  
  // This would be fetched from API in a real app
  const courseData = {
    title: "Web Dev Pitfalls",
    description: "Learn common mistakes to avoid in web development projects with practical advice and real-world examples.",
    color: "primary",
    steps: [
      {
        title: "Introduction",
        content: (
          <div>
            <h2>Introduction to Web Development Pitfalls</h2>
            <p>In this course, you'll learn about common mistakes that web developers make and how to avoid them.</p>
            <p>By the end of this course, you'll be able to:</p>
            <ul>
              <li>Identify common HTML, CSS, and JavaScript mistakes</li>
              <li>Understand best practices for web accessibility</li>
              <li>Learn techniques for debugging and troubleshooting</li>
              <li>Develop strategies for code organization</li>
              <li>Implement performance optimization techniques</li>
            </ul>
          </div>
        ),
      },
      {
        title: "HTML Mistakes",
        content: (
          <div>
            <h2>Common HTML Mistakes</h2>
            <p>In this section, we'll cover frequent HTML errors that can lead to accessibility issues and poor SEO:</p>
            <ul>
              <li>Missing or improper semantic markup</li>
              <li>Incorrect heading hierarchy</li>
              <li>Missing alt text for images</li>
              <li>Non-descriptive link text</li>
              <li>Improper form labeling</li>
            </ul>
            <p>For each issue, we'll show examples of incorrect code and the proper way to fix it.</p>
          </div>
        ),
      },
      {
        title: "CSS Mistakes",
        content: (
          <div>
            <h2>CSS Pitfalls to Avoid</h2>
            <p>This section covers common CSS mistakes that lead to layout issues and maintenance headaches:</p>
            <ul>
              <li>Overspecific selectors</li>
              <li>Improper use of !important</li>
              <li>Layout antipatterns</li>
              <li>Missing responsive design considerations</li>
            </ul>
            <p>We'll examine real examples and demonstrate refactoring techniques.</p>
          </div>
        ),
      },
      {
        title: "JavaScript Issues",
        content: (
          <div>
            <h2>JavaScript Gotchas</h2>
            <p>JavaScript has many quirks that can trip up developers:</p>
            <ul>
              <li>Scope and closure problems</li>
              <li>This binding confusion</li>
              <li>Event handling mistakes</li>
              <li>Performance bottlenecks</li>
              <li>Memory leaks</li>
            </ul>
            <p>Through interactive examples, we'll explore these issues and learn proper solutions.</p>
          </div>
        ),
      },
      {
        title: "Next Steps",
        content: (
          <div>
            <h2>Course Summary and Next Steps</h2>
            <p>Congratulations on completing the Web Dev Pitfalls course! You've learned about:</p>
            <ul>
              <li>HTML semantic structure and accessibility</li>
              <li>CSS organization and maintainable patterns</li>
              <li>JavaScript common errors and best practices</li>
              <li>Performance optimization techniques</li>
            </ul>
            <p>Next, we recommend checking out our "Project Architecture" course to learn how to structure your web projects.</p>
            <div className="bg-primary/20 p-4 rounded-md mt-6">
              <h3 className="text-primary font-semibold">You've earned a badge!</h3>
              <p>Web Developer Detective - for spotting and fixing common web development issues.</p>
            </div>
          </div>
        ),
      },
    ],
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
              <BreadcrumbLink href="/courses">courses</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{courseData.title.toLowerCase()}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <CourseContent
          title={courseData.title}
          description={courseData.description}
          color={courseData.color}
          steps={courseData.steps}
        />
      </div>
    </Layout>
  );
};

export default CourseDetail;
