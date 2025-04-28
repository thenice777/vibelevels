
import { FAQLayout } from "@/components/FAQLayout";
import { Link } from "react-router-dom";

const PreservingWorkingCode = () => {
  return (
    <FAQLayout 
      title="How to Stop AI from Changing Code That Works" 
      lastUpdated="April 28, 2025"
      currentSlug="preserving-working-code"
      description="Protect your working code when asking AI to make changes"
    >
      <h2>The Problem</h2>
      <p>
        When asking AI to update or fix part of a codebase, it often rewrites or modifies working elements, 
        causing new problems while trying to fix existing ones.
      </p>
      
      <h2>Solutions</h2>
      
      <h3>1. Use Explicit Preservation Instructions</h3>
      <p>
        Be very specific about what should remain unchanged:
      </p>
      <pre className="bg-muted p-4 rounded-md overflow-auto text-sm">
        <code>
          "The authentication system below works perfectly and should NOT be modified in any way. 
          Only modify the user profile update function to fix the validation bug."
        </code>
      </pre>
      
      <p>Use clear markers to separate what should be preserved versus changed:</p>
      <pre className="bg-muted p-4 rounded-md overflow-auto text-sm">
        <code>
{`// --- PRESERVE THIS CODE EXACTLY (DO NOT MODIFY) ---
[your working code here]
// --- END PRESERVE SECTION ---

// --- MODIFY THIS SECTION ONLY ---
[code that needs changes]
// --- END MODIFY SECTION ---`}
        </code>
      </pre>
      
      <h3>2. Implement Component Isolation</h3>
      <p>Extract working components completely from the conversation:</p>
      <ul>
        <li>Save the working code separately</li>
        <li>Ask the AI to fix only the problematic sections</li>
        <li>Manually reintegrate the working components afterward</li>
      </ul>
      <p>This eliminates the risk of the AI changing parts that work.</p>
      
      <h3>3. Use Targeted Modification Prompts</h3>
      <p>Structure requests to focus only on specific functions or lines:</p>
      <pre className="bg-muted p-4 rounded-md overflow-auto text-sm">
        <code>
          "In the following code, ONLY modify lines 15-22 to fix the validation bug. 
          Do not change any other part of the code, even if you think it could be improved."
        </code>
      </pre>
      
      <p>Or focus on specific functions:</p>
      <pre className="bg-muted p-4 rounded-md overflow-auto text-sm">
        <code>
          "Only modify the validateUserInput() function. Keep all other functions exactly as they are."
        </code>
      </pre>
      
      <h3>4. Provide Context Refreshers</h3>
      <p>When the conversation gets long, remind the AI about previous preservation instructions:</p>
      <pre className="bg-muted p-4 rounded-md overflow-auto text-sm">
        <code>
          "As mentioned earlier, the authentication system must remain unchanged. 
          We're only updating the profile system while preserving all existing functionality."
        </code>
      </pre>
      
      <h3>5. Use Diff-Based Requests</h3>
      <p>Ask the AI to provide its changes in a diff format:</p>
      <pre className="bg-muted p-4 rounded-md overflow-auto text-sm">
        <code>
          "Please provide your suggested fix as a diff, showing only the lines that need to be changed, not the entire file."
        </code>
      </pre>
      <p>This makes it easier to verify that only intended changes are made.</p>
      
      <h3>6. Create Checkpoints</h3>
      <p>Save working versions throughout the development process:</p>
      <ul>
        <li>Label checkpoints clearly (e.g., "Working auth system v1")</li>
        <li>Save them outside the AI conversation</li>
        <li>If the AI breaks something, you can easily restore from a checkpoint</li>
      </ul>
      
      <h2>Key Takeaway</h2>
      <p>
        The most reliable approach is component isolation—extracting working code completely and only sending the AI the specific 
        sections that need modification. Using explicit preservation markers and targeted requests significantly reduces 
        the risk of breaking working code.
      </p>
      
      <h3>Related Topics</h3>
      <ul>
        <li><Link to="/faq/maintaining-context">Maintaining Context in Long Sessions</Link></li>
        <li><Link to="/faq/handling-inconsistent-outputs">Managing Inconsistent AI Outputs</Link></li>
        <li><Link to="/faq/debugging-ai-generated-code">Debugging AI-Generated Code</Link></li>
      </ul>
    </FAQLayout>
  );
};

export default PreservingWorkingCode;
