import React, { useState } from 'react';

const defaultContext = {
  isAuthenticated: false,
  logIn: () => undefined,
  logOut: () => undefined,
  user: null,
}

const AuthContext = React.createContext(defaultContext);

const useAutorisation = () => {
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
}


const AuthProvider = ({ children }) => {
  const [user, isAuthenticated, logIn, logOut] = useAutorisation();

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

const AuthConsumer = AuthContext.Consumer;

export default AuthContext;
export { AuthProvider, AuthConsumer };