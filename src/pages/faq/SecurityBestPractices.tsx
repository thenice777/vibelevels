
import { FAQLayout } from "@/components/FAQLayout";
import { Link } from "react-router-dom";

const SecurityBestPractices = () => {
  return (
    <FAQLayout 
      title="Security Best Practices for AI-Generated Code" 
      lastUpdated="April 28, 2025"
      currentSlug="security-best-practices"
      description="Ensuring AI-generated code meets security standards and best practices"
    >
      <h2>The Problem</h2>
      <p>
        AI-generated code often lacks proper security considerations and may introduce vulnerabilities 
        that aren't immediately obvious.
      </p>
      
      <h2>Solutions</h2>
      
      <h3>1. Explicitly Request Security Focus</h3>
      <p>
        Include security requirements in your initial prompt:
      </p>
      <pre className="bg-muted p-4 rounded-md overflow-auto text-sm">
        <code>
          "Please implement this with security as a primary concern, ensuring protection against common 
          vulnerabilities like SQL injection, XSS, CSRF, and improper authentication."
        </code>
      </pre>
      
      <h3>2. Implement a Security Checklist Review</h3>
      <p>Ask the AI to review its code against security best practices:</p>
      <pre className="bg-muted p-4 rounded-md overflow-auto text-sm">
        <code>{`"Before we proceed, please review this code for security vulnerabilities, specifically checking for:
1. Input validation
2. Authentication bypass risks
3. Injection vulnerabilities
4. Insecure direct object references
5. Sensitive data exposure
6. Missing authorization checks"`}</code>
      </pre>
      
      <h3>3. Request Threat Modeling</h3>
      <p>For critical components, ask for explicit threat modeling:</p>
      <pre className="bg-muted p-4 rounded-md overflow-auto text-sm">
        <code>
          "For this authentication system, please identify potential threat vectors and explain 
          how the implementation addresses each one."
        </code>
      </pre>
      
      <h3>4. Separate Security-Critical Components</h3>
      <p>Handle the most security-critical components separately:</p>
      <pre className="bg-muted p-4 rounded-md overflow-auto text-sm">
        <code>
          "Let's focus exclusively on the user authentication system. Please implement it with security 
          as the absolute priority, explaining each security measure."
        </code>
      </pre>
      
      <h3>5. Request Defensive Implementation</h3>
      <p>Ask specifically for defensive programming approaches:</p>
      <pre className="bg-muted p-4 rounded-md overflow-auto text-sm">
        <code>{`"Please implement this with defensive programming principles:
1. Validate all inputs
2. Use parameterized queries
3. Implement proper error handling that doesn't expose sensitive information
4. Apply the principle of least privilege"`}</code>
      </pre>
      
      <h3>6. Look for Security-Relevant Comments</h3>
      <p>Request that the AI explicitly comment on security considerations:</p>
      <pre className="bg-muted p-4 rounded-md overflow-auto text-sm">
        <code>
          "In the code, please add comments labeled [SECURITY] that explain the security 
          implications of critical decisions or implementations."
        </code>
      </pre>
      
      <h3>7. Security-Focused Testing</h3>
      <p>Request security-focused test cases:</p>
      <pre className="bg-muted p-4 rounded-md overflow-auto text-sm">
        <code>{`"Please provide test cases specifically designed to verify the security properties of this code, including tests for:
1. Input validation effectiveness
2. Authentication bypass attempts
3. Authorization checks
4. Handling of invalid or malicious inputs"`}</code>
      </pre>
      
      <h3>8. Security Review After Changes</h3>
      <p>After any modifications, specifically request security re-review:</p>
      <pre className="bg-muted p-4 rounded-md overflow-auto text-sm">
        <code>
          "Now that we've modified the code, please re-evaluate it from a security perspective 
          to ensure we haven't introduced new vulnerabilities."
        </code>
      </pre>
      
      <h2>Key Takeaway</h2>
      <p>
        Security must be explicitly prioritized when working with AI-generated code. 
        The most effective approach combines upfront security requirements, systematic review against 
        security best practices, and ongoing vigilance during modifications. Never assume AI-generated 
        code is secure by default.
      </p>
      
      <h3>Related Topics</h3>
      <ul>
        <li><Link to="/faq/debugging-ai-generated-code">Debugging AI-Generated Code</Link></li>
        <li><Link to="/faq/generating-effective-tests">Generating Effective Tests</Link></li>
        <li><Link to="/faq/getting-usable-code-faster">Getting Usable Code Faster</Link></li>
      </ul>
    </FAQLayout>
  );
};

export default SecurityBestPractices;
