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
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-gradient mb-4">The Problem</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            AI-generated code often lacks proper security considerations and may introduce vulnerabilities 
            that aren't immediately obvious.
          </p>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold text-gradient mb-4">Solutions</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-medium text-white mb-3">1. Explicitly Request Security Focus</h3>
              <p className="mb-3">Include security requirements in your initial prompt:</p>
              <pre className="bg-muted/50 backdrop-blur border border-white/5 p-4 rounded-lg overflow-auto text-sm mb-4">
                <code>
                  "Please implement this with security as a primary concern, ensuring protection against common 
                  vulnerabilities like SQL injection, XSS, CSRF, and improper authentication."
                </code>
              </pre>
            </div>

            <div>
              <h3 className="text-xl font-medium text-white mb-3">2. Implement a Security Checklist Review</h3>
              <p className="mb-3">Ask the AI to review its code against security best practices:</p>
              <pre className="bg-muted/50 backdrop-blur border border-white/5 p-4 rounded-lg overflow-auto text-sm mb-4">
                <code>{`"Before we proceed, please review this code for security vulnerabilities, specifically checking for:
1. Input validation
2. Authentication bypass risks
3. Injection vulnerabilities
4. Insecure direct object references
5. Sensitive data exposure
6. Missing authorization checks"`}</code>
              </pre>
            </div>
            
            <div>
              <h3 className="text-xl font-medium text-white mb-3">3. Request Threat Modeling</h3>
              <p className="mb-3">For critical components, ask for explicit threat modeling:</p>
              <pre className="bg-muted/50 backdrop-blur border border-white/5 p-4 rounded-lg overflow-auto text-sm mb-4">
                <code>
                  "For this authentication system, please identify potential threat vectors and explain 
                  how the implementation addresses each one."
                </code>
              </pre>
            </div>
            
            <div>
              <h3 className="text-xl font-medium text-white mb-3">4. Separate Security-Critical Components</h3>
              <p className="mb-3">Handle the most security-critical components separately:</p>
              <pre className="bg-muted/50 backdrop-blur border border-white/5 p-4 rounded-lg overflow-auto text-sm mb-4">
                <code>
                  "Let's focus exclusively on the user authentication system. Please implement it with security 
                  as the absolute priority, explaining each security measure."
                </code>
              </pre>
            </div>
            
            <div>
              <h3 className="text-xl font-medium text-white mb-3">5. Request Defensive Implementation</h3>
              <p className="mb-3">Ask specifically for defensive programming approaches:</p>
              <pre className="bg-muted/50 backdrop-blur border border-white/5 p-4 rounded-lg overflow-auto text-sm mb-4">
                <code>{`"Please implement this with defensive programming principles:
1. Validate all inputs
2. Use parameterized queries
3. Implement proper error handling that doesn't expose sensitive information
4. Apply the principle of least privilege"`}</code>
              </pre>
            </div>
            
            <div>
              <h3 className="text-xl font-medium text-white mb-3">6. Look for Security-Relevant Comments</h3>
              <p className="mb-3">Request that the AI explicitly comment on security considerations:</p>
              <pre className="bg-muted/50 backdrop-blur border border-white/5 p-4 rounded-lg overflow-auto text-sm mb-4">
                <code>
                  "In the code, please add comments labeled [SECURITY] that explain the security 
                  implications of critical decisions or implementations."
                </code>
              </pre>
            </div>
            
            <div>
              <h3 className="text-xl font-medium text-white mb-3">7. Security-Focused Testing</h3>
              <p className="mb-3">Request security-focused test cases:</p>
              <pre className="bg-muted/50 backdrop-blur border border-white/5 p-4 rounded-lg overflow-auto text-sm mb-4">
                <code>{`"Please provide test cases specifically designed to verify the security properties of this code, including tests for:
1. Input validation effectiveness
2. Authentication bypass attempts
3. Authorization checks
4. Handling of invalid or malicious inputs"`}</code>
              </pre>
            </div>
            
            <div>
              <h3 className="text-xl font-medium text-white mb-3">8. Security Review After Changes</h3>
              <p className="mb-3">After any modifications, specifically request security re-review:</p>
              <pre className="bg-muted/50 backdrop-blur border border-white/5 p-4 rounded-lg overflow-auto text-sm mb-4">
                <code>
                  "Now that we've modified the code, please re-evaluate it from a security perspective 
                  to ensure we haven't introduced new vulnerabilities."
                </code>
              </pre>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold text-gradient mb-4">Key Takeaway</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Security must be explicitly prioritized when working with AI-generated code. 
            The most effective approach combines upfront security requirements, systematic review against 
            security best practices, and ongoing vigilance during modifications. Never assume AI-generated 
            code is secure by default.
          </p>
        </div>
        
        <div>
          <h3 className="text-xl font-medium text-white mb-3">Related Topics</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/faq/debugging-ai-generated-code" className="text-primary hover:text-primary/80 transition-colors">
                Debugging AI-Generated Code
              </Link>
            </li>
            <li>
              <Link to="/faq/generating-effective-tests" className="text-primary hover:text-primary/80 transition-colors">
                Generating Effective Tests
              </Link>
            </li>
            <li>
              <Link to="/faq/getting-usable-code-faster" className="text-primary hover:text-primary/80 transition-colors">
                Getting Usable Code Faster
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </FAQLayout>
  );
};

export default SecurityBestPractices;
