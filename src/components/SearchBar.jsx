import React from 'react';
import { useTheme } from '../context/ThemeContext';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="🔍 Search team members..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className={`search-input ${isDark ? 'dark' : 'light'}`}
        aria-label="Search users"
      />
    </div>
  );
};

export default SearchBar;