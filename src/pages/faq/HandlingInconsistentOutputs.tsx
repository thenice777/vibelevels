
import { FAQLayout } from "@/components/FAQLayout";
import { Link } from "react-router-dom";

const HandlingInconsistentOutputs = () => {
  return (
    <FAQLayout 
      title="How to Handle Inconsistent AI Coding Outputs" 
      lastUpdated="April 28, 2025"
      currentSlug="handling-inconsistent-outputs"
      description="Strategies to maintain consistency in code style, patterns, and quality"
    >
      <h2 className="text-2xl font-semibold text-gradient mb-4">The Problem</h2>
      <p className="text-lg text-foreground leading-relaxed mb-4">
        AI tools can produce inconsistent code style, patterns, and quality across different sessions 
        or even within the same conversation.
      </p>
      
      <h2>Solutions</h2>
      
      <h3>1. Establish Style Guidelines Upfront</h3>
      <p>
        Begin with clear style expectations:
      </p>
      <pre className="bg-muted p-4 rounded-md overflow-auto text-sm">
        <code>{`"For this project, please follow these style guidelines:
1. Use camelCase for variables and functions
2. Use PascalCase for classes and components
3. Prefer arrow functions for callbacks
4. Use async/await instead of Promises with .then()
5. Include JSDoc-style comments for all functions"`}</code>
      </pre>
      
      <h3>2. Provide Style Examples</h3>
      <p>Show examples of your preferred style:</p>
      <pre className="bg-muted p-4 rounded-md overflow-auto text-sm">
        <code>{`"Please follow this coding style for consistency:

\`\`\`javascript
// Example of preferred style
const processUserData = async (userData) => {
  const { name, email } = userData;
  
  // Validate inputs before processing
  if (!isValidEmail(email)) {
    throw new ValidationError('Invalid email format');
  }
  
  // Process data
  return await storeUserInDatabase(userData);
};
\`\`\`"`}</code>
      </pre>
      
      <h3>3. Use Style Enforcement Tools</h3>
      <p>Incorporate linting and formatting into your workflow:</p>
      <pre className="bg-muted p-4 rounded-md overflow-auto text-sm">
        <code>
          "After receiving this code, I'll be running it through ESLint and Prettier with our 
          standard configuration. Please optimize for compatibility with these tools."
        </code>
      </pre>
      
      <h3>4. Request Pattern Consistency</h3>
      <p>Explicitly ask for consistency with existing patterns:</p>
      <pre className="bg-muted p-4 rounded-md overflow-auto text-sm">
        <code>
          "We've been using the repository pattern for data access. Please ensure this new code 
          follows the same pattern as shown in previous examples."
        </code>
      </pre>
      
      <h3>5. Implement Component Templates</h3>
      <p>For repetitive structures, define a template:</p>
      <pre className="bg-muted p-4 rounded-md overflow-auto text-sm">
        <code>{`"All React components should follow this exact structure:

\`\`\`jsx
import React from 'react';
import PropTypes from 'prop-types';
import styles from './ComponentName.module.css';

const ComponentName = ({ prop1, prop2 }) => {
  // Component logic
  
  return (
    <div className={styles.container}>
      {/* Component JSX */}
    </div>
  );
};

ComponentName.propTypes = {
  prop1: PropTypes.string.required,
  prop2: PropTypes.number,
};

export default ComponentName;
\`\`\`

Please maintain this exact structure for all components."`}</code>
      </pre>
      
      <h3>6. Use Style-Focused Review Requests</h3>
      <p>Ask for style-specific reviews:</p>
      <pre className="bg-muted p-4 rounded-md overflow-auto text-sm">
        <code>
          "Please review this code specifically for style consistency issues, identifying any 
          places where it diverges from our established patterns."
        </code>
      </pre>
      
      <h3>7. Create a Style Reference Document</h3>
      <p>Maintain a running document of style decisions:</p>
      <ol>
        <li>Document each major style decision</li>
        <li>Reference this document in your prompts</li>
        <li>Update it as new patterns emerge</li>
      </ol>
      
      <h2>Key Takeaway</h2>
      <p>
        Consistency requires explicit style guidelines, examples, and regular reinforcement. 
        The most effective approach combines upfront style definition with ongoing reference to established patterns. 
        External tools like linters and formatters provide an additional layer of consistency enforcement.
      </p>
      
      <h3>Related Topics</h3>
      <ul>
        <li><Link to="/faq/maintaining-context">Maintaining Context in Long Sessions</Link></li>
        <li><Link to="/faq/getting-usable-code-faster">Getting Usable Code Faster</Link></li>
        <li><Link to="/faq/simplifying-overengineered-code">Simplifying Overengineered Code</Link></li>
      </ul>
    </FAQLayout>
  );
};

export default HandlingInconsistentOutputs;
