import { useState } from 'react';

const useAuthentication = () => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  
  const logIn = (mail, password) => {
    setUser({ firstName: 'John', lastName: 'Snow' });
    setIsAuthenticated(true);
  }
  
  const logOut = () => {
    setUser(null);
    setIsAuthenticated(false);
  }

  return [user, isAuthenticated, logIn, logOut];
};

export default useAuthentication;
