
import { FAQLayout } from "@/components/FAQLayout";
import { Link } from "react-router-dom";

const GeneratingEffectiveTests = () => {
  return (
    <FAQLayout 
      title="How to Get Effective Tests for AI-Generated Code" 
      lastUpdated="April 28, 2025"
      currentSlug="generating-effective-tests"
      description="Strategies to ensure proper test coverage for AI-generated implementations"
    >
      <h2>The Problem</h2>
      <p>
        AI-generated code often lacks proper testing, or the tests it provides may be superficial 
        and miss important edge cases or failure modes.
      </p>
      
      <h2>Solutions</h2>
      
      <h3>1. Request Test-First Development</h3>
      <p>
        Ask for tests before implementation:
      </p>
      <pre className="bg-muted p-4 rounded-md overflow-auto text-sm">
        <code>{`"Before writing the implementation, please create comprehensive test cases that cover:
- Normal operation with valid inputs
- Edge cases and boundary conditions
- Error handling and invalid inputs
- Performance considerations for large inputs"`}</code>
      </pre>
      
      <h3>2. Specify Test Coverage Requirements</h3>
      <p>Be explicit about test coverage expectations:</p>
      <pre className="bg-muted p-4 rounded-md overflow-auto text-sm">
        <code>{`"Please ensure the tests cover at least:
- 90% line coverage
- All public methods and functions
- Each branch in conditional logic
- Error handling paths"`}</code>
      </pre>
      
      <h3>3. Request Test Types by Category</h3>
      <p>Ask for different types of tests:</p>
      <pre className="bg-muted p-4 rounded-md overflow-auto text-sm">
        <code>{`"Please provide the following types of tests:
- Unit tests for individual functions
- Integration tests for component interactions
- Edge case tests for boundary conditions
- Performance tests for resource-intensive operations"`}</code>
      </pre>
      
      <h3>4. Provide Test Scenarios</h3>
      <p>Describe specific scenarios that should be tested:</p>
      <pre className="bg-muted p-4 rounded-md overflow-auto text-sm">
        <code>{`"Please include tests for these specific scenarios:
- User attempts login with correct credentials
- User attempts login with incorrect password
- User attempts login with non-existent username
- Login attempt with empty fields
- Login with special characters in username"`}</code>
      </pre>
      
      <h3>5. Ask for Test Strategy Explanation</h3>
      <p>Request explanation of the testing approach:</p>
      <pre className="bg-muted p-4 rounded-md overflow-auto text-sm">
        <code>
          "Before implementing the tests, please explain your testing strategy and what 
          aspects of the code you'll focus on testing and why."
        </code>
      </pre>
      
      <h3>6. Implement Test-Driven Refinement</h3>
      <p>Use tests to drive code improvements:</p>
      <pre className="bg-muted p-4 rounded-md overflow-auto text-sm">
        <code>
          "Based on these test cases, what improvements should we make to the implementation 
          to ensure it handles all the scenarios correctly?"
        </code>
      </pre>
      
      <h3>7. Request Mocking Strategy</h3>
      <p>For external dependencies, ask about testing approach:</p>
      <pre className="bg-muted p-4 rounded-md overflow-auto text-sm">
        <code>
          "Please explain how you would test this code that depends on external APIs, 
          including what mocking approach you'd recommend and how to handle asynchronous operations in tests."
        </code>
      </pre>
      
      <h2>Key Takeaway</h2>
      <p>
        Effective testing of AI-generated code requires explicit testing requirements and a structured approach 
        that prioritizes test coverage across normal operations, edge cases, and error conditions. 
        Test-first development where tests are created before implementation often leads to more robust code.
      </p>
      
      <h3>Related Topics</h3>
      <ul>
        <li><Link to="/faq/debugging-ai-generated-code">Debugging AI-Generated Code</Link></li>
        <li><Link to="/faq/security-best-practices">Security Best Practices</Link></li>
        <li><Link to="/faq/getting-usable-code-faster">Getting Usable Code Faster</Link></li>
      </ul>
    </FAQLayout>
  );
};

export default GeneratingEffectiveTests;
