import React, { useState, useEffect } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';

// Register the languages
SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('javascript', javascript);

const CodeShowcase = () => {
  const [currentSnippet, setCurrentSnippet] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const codeSnippets = [
    {
      language: 'javascript',
      title: 'React Component',
      code: `function ProjectCard({ title, description, tech }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="tech-stack">
        {tech.map(item => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </div>
  );
}`
    },
    {
      language: 'javascript',
      title: 'API Integration',
      code: `async function fetchUserData(userId) {
  try {
    const response = await fetch(
      \`https://api.example.com/users/\${userId}\`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
}`
    },
    {
      language: 'javascript',
      title: 'Custom Hook',
      code: `function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  return [storedValue, setStoredValue];
}`
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false);
      setTimeout(() => {
        setCurrentSnippet((prev) => (prev + 1) % codeSnippets.length);
        setIsTyping(true);
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, [codeSnippets.length]);

  return (
    <div className="code-showcase">
      <div className="code-header">
        <div className="window-controls">
          <span className="control red"></span>
          <span className="control yellow"></span>
          <span className="control green"></span>
        </div>
        <div className="file-name">
          {codeSnippets[currentSnippet].title}
        </div>
      </div>
      <div className={`code-content ${isTyping ? 'typing' : ''}`}>
        <SyntaxHighlighter
          language={codeSnippets[currentSnippet].language}
          style={vscDarkPlus}
          showLineNumbers={true}
          wrapLines={true}
        >
          {codeSnippets[currentSnippet].code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeShowcase; 