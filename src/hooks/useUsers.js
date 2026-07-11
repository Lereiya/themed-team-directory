import { useState, useEffect } from 'react';
import kenyanUsers from '../data/users';

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setLoading(true);
      // Simulate loading delay
      setTimeout(() => {
        setUsers(kenyanUsers);
        setLoading(false);
      }, 500);
    } catch (err) {
      setError('Failed to load users');
      setLoading(false);
    }
  }, []);

  return { users, loading, error };
};

export default useUsers;