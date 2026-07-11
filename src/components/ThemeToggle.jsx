import React from 'react';
import { useTheme } from '../context/ThemeContext';

// Level 1: Wrapper component
const ToggleWrapper = ({ children }) => {
  return <div className="toggle-wrapper">{children}</div>;
};

// Level 2: Inner wrapper (proving deep nesting)
const ToggleInner = ({ children }) => {
  return <div className="toggle-inner">{children}</div>;
};

// Level 3: The actual toggle button (deeply nested)
const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <ToggleWrapper>
      <ToggleInner>
        <button
          onClick={toggleTheme}
          className={`theme-toggle-btn ${isDark ? 'dark' : 'light'}`}
          aria-label="Toggle theme"
        >
          {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </ToggleInner>
    </ToggleWrapper>
  );
};

export default ThemeToggle;