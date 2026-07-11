import React, { useState, useMemo } from 'react';
import { useTheme } from './context/ThemeContext';
import { useUsers } from './hooks/useUsers';
import SearchBar from './components/SearchBar';
import UserList from './components/UserList';
import ThemeToggle from './components/ThemeToggle';
import './styles/App.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { users, loading, error } = useUsers();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const filteredUsers = useMemo(() => {
    if (!searchTerm.trim()) return users;
    const lower = searchTerm.toLowerCase().trim();
    return users.filter(user => 
      user.name.toLowerCase().includes(lower) ||
      user.email.toLowerCase().includes(lower) ||
      user.username.toLowerCase().includes(lower) ||
      (user.company && user.company.toLowerCase().includes(lower)) ||
      (user.city && user.city.toLowerCase().includes(lower))
    );
  }, [users, searchTerm]);

  return (
    <div className={`app ${isDark ? 'dark' : 'light'}`}>
      <div className="app-container">
        <header className="app-header">
          <div className="header-content">
            <h1 className="app-title">🇰🇪 Team Kenya</h1>
            <p className="app-subtitle">
              {users.length} members • real-time search
            </p>
            <ThemeToggle />
          </div>
        </header>

        <section className="search-section">
          <SearchBar 
            searchTerm={searchTerm} 
            onSearchChange={setSearchTerm} 
          />
        </section>

        <section className="user-section">
          <UserList 
            users={filteredUsers} 
            loading={loading} 
            error={error} 
          />
        </section>

        <footer className={`app-footer ${isDark ? 'dark' : 'light'}`}>
          <p>🇰🇪 Kenyan Team Directory • Theme Context • Lifted Search State</p>
        </footer>
      </div>
    </div>
  );
};

export default App;