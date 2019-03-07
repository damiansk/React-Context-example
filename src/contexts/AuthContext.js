import React from 'react';
import useAuthentication from '../hooks/useAuthentication';

const defaultContext = {
  isAuthenticated: false,
  logIn: () => undefined,
  logOut: () => undefined,
  user: null,
}

const AuthContext = React.createContext(defaultContext);

const AuthProvider = ({ children }) => {
  const [user, isAuthenticated, logIn, logOut] = useAuthentication();

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

const AuthConsumer = AuthContext.Consumer;

export default AuthContext;
export { AuthProvider, AuthConsumer };