
import { FAQLayout } from "@/components/FAQLayout";
import { Link } from "react-router-dom";

const MaintainingContext = () => {
  return (
    <FAQLayout 
      title="How to Prevent AI from Forgetting Context" 
      lastUpdated="April 28, 2025"
      currentSlug="maintaining-context"
      description="Strategies to help AI tools remember project requirements and previous decisions"
    >
      <h2>The Problem</h2>
      <p>
        During long development sessions, AI tools often forget earlier requirements, decisions, 
        or constraints, causing inconsistent output and requiring constant reminders.
      </p>
      
      <h2>Solutions</h2>
      
      <h3>1. Create a Context Preamble</h3>
      <p>
        Start each major prompt with a brief context reminder:
      </p>
      <pre className="bg-muted p-4 rounded-md overflow-auto text-sm">
        <code>
          "We're building a React e-commerce app with Stripe integration. We previously established 
          that we're using Redux for state management and Firebase for authentication. 
          Now, let's implement the shopping cart component."
        </code>
      </pre>
      <p>Update this preamble as new decisions are made.</p>
      
      <h3>2. Use Decision Summaries</h3>
      <p>Periodically summarize key decisions and ask the AI to confirm:</p>
      <pre className="bg-muted p-4 rounded-md overflow-auto text-sm">
        <code>{`"To ensure we're on the same page, here are the key decisions we've made:
1. User authentication via Firebase with email and social login
2. Product data stored in MongoDB
3. Payment processing using Stripe Elements
4. Cart persistence using localStorage

Do you have all this context for the next steps?"`}</code>
      </pre>
      
      <h3>3. Implement Namespace Conventions</h3>
      <p>Establish naming conventions early and reference them consistently:</p>
      <pre className="bg-muted p-4 rounded-md overflow-auto text-sm">
        <code>
          "Remember that we're using the prefix 'shop' for all commerce-related components 
          and 'auth' for authentication components, as we established earlier."
        </code>
      </pre>
      
      <h3>4. Provide Architecture Reminders</h3>
      <p>Periodically reintroduce architectural diagrams or descriptions:</p>
      <pre className="bg-muted p-4 rounded-md overflow-auto text-sm">
        <code>{`"As a reminder, here's our application architecture:
- Frontend: React with Redux
- API: Express.js
- Database: MongoDB
- Authentication: Firebase
- Payment: Stripe

Now let's continue with the order processing workflow."`}</code>
      </pre>
      
      <h3>5. Use Conversational Anchors</h3>
      <p>Reference previous parts of the conversation explicitly:</p>
      <pre className="bg-muted p-4 rounded-md overflow-auto text-sm">
        <code>
          "Earlier you suggested using a custom hook for the form validation. 
          Let's build on that approach for the payment form."
        </code>
      </pre>
      
      <h3>6. Break Sessions Strategically</h3>
      <p>Instead of one long session, break your development into logical sessions:</p>
      <ul>
        <li>Session 1: Architecture and data models</li>
        <li>Session 2: Core functionality implementation</li>
        <li>Session 3: UI components and user flow</li>
        <li>Session 4: Testing and refinement</li>
      </ul>
      <p>Start each new session with a comprehensive context summary.</p>
      
      <h3>7. Document External to the Conversation</h3>
      <p>Maintain your own notes outside the AI conversation:</p>
      <ul>
        <li>Keep a running document of key decisions</li>
        <li>Document the evolving architecture</li>
        <li>Track naming conventions and patterns</li>
      </ul>
      <p>Reference these in your prompts as needed.</p>
      
      <h2>Key Takeaway</h2>
      <p>
        Proactive context management through regular summaries, consistent references, and 
        strategic session breaks helps maintain coherence in long development conversations. 
        The most reliable approach combines internal context refreshers with external 
        documentation that you can reference.
      </p>
      
      <h3>Related Topics</h3>
      <ul>
        <li><Link to="/faq/preserving-working-code">Preserving Working Code</Link></li>
        <li><Link to="/faq/handling-inconsistent-outputs">Managing Inconsistent AI Outputs</Link></li>
        <li><Link to="/faq/getting-usable-code-faster">Getting Usable Code Faster</Link></li>
      </ul>
    </FAQLayout>
  );
};

export default MaintainingContext;
