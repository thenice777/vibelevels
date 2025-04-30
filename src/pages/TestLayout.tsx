import React from "react";
import { Layout } from "@/components/Layout";

const TestLayoutPage = () => {
  return (
    <Layout>
      <div style={{ padding: 32, maxWidth: 700, margin: '0 auto', textAlign: 'left' }}>
        <div style={{ position: 'sticky', top: 0, background: '#fff', zIndex: 1, paddingBottom: 8 }}>
          <h1 style={{ textAlign: 'center' }}>Test Layout Page</h1>
          <p style={{ textAlign: 'center', color: '#888' }}>
            <strong>Scrollable Content Demo</strong>
          </p>
        </div>
        <p>Welcome to the test page! Here’s some sample content to demonstrate the new scrollable Content area. Scroll down to see the effect!</p>
        <h2>Sample List</h2>
        <ul>
          <li>Navigation is fixed at the top</li>
          <li>Footer is always at the bottom of the page</li>
          <li>This content area scrolls independently</li>
        </ul>
        <h2>Sample Table</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 24 }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ccc', padding: 8 }}>Feature</th>
              <th style={{ border: '1px solid #ccc', padding: 8 }}>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ccc', padding: 8 }}>Header</td>
              <td style={{ border: '1px solid #ccc', padding: 8 }}>Visible</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ccc', padding: 8 }}>Content Area</td>
              <td style={{ border: '1px solid #ccc', padding: 8 }}>Working</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ccc', padding: 8 }}>Footer</td>
              <td style={{ border: '1px solid #ccc', padding: 8 }}>Visible</td>
            </tr>
          </tbody>
        </table>
        <h2>Sample Image</h2>
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <img src="https://via.placeholder.com/300x120?text=Sample+Image" alt="Sample" style={{ borderRadius: 8 }} />
        </div>
        <p style={{ color: '#888', fontStyle: 'italic', textAlign: 'center' }}>
          This is a sample image placeholder.
        </p>

        {/* Add a long list to force scrolling */}
        <h2>Long List</h2>
        <ol style={{ marginBottom: 32 }}>
          {Array.from({ length: 30 }, (_, i) => (
            <li key={i} style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>
              List item {i + 1}
            </li>
          ))}
        </ol>

        <div style={{ position: 'sticky', bottom: 0, background: '#fff', zIndex: 1, paddingTop: 8, textAlign: 'center', borderTop: '2px dashed #eee' }}>
          <strong>Bottom of Scrollable Content</strong>
        </div>
      </div>
    </Layout>
  );
};

export default TestLayoutPage;
