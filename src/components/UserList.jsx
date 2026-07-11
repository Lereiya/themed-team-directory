import React from 'react';
import { useTheme } from '../context/ThemeContext';

const UserList = ({ users, loading, error }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  if (loading) {
    return (
      <div className={`loading-state ${isDark ? 'dark' : 'light'}`}>
        <div className="spinner">⏳</div>
        <p>Loading Kenyan team members...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-state">
        <p>⚠️ Error: {error}</p>
      </div>
    );
  }

  if (users.length === 0) {
    return (
      <div className={`empty-state ${isDark ? 'dark' : 'light'}`}>
        <p>👀 No results found in Kenya</p>
        <p className="sub-text">Try adjusting your search</p>
      </div>
    );
  }

  return (
    <div className="user-grid">
      {users.map(user => (
        <div 
          key={user.id} 
          className={`user-card ${isDark ? 'dark' : 'light'}`}
        >
          <div className="user-avatar">
            {user.name.charAt(0)}
          </div>
          <div className="user-info">
            <h3 className="user-name">{user.name}</h3>
            <p className="user-username">@{user.username}</p>
            <p className="user-email">{user.email}</p>
            <p className="user-phone">{user.phone}</p>
            {user.company && (
              <p className="user-company">🏢 {user.company}</p>
            )}
            {user.city && (
              <p className="user-city">📍 {user.city}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;