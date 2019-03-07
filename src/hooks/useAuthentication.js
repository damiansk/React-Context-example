import React, { useState } from 'react';
import Emoji from 'a11y-react-emoji';

const defaultUser = {
  firstName: 'John',
  lastName: 'Snow',
  year: '2015',
  description: <>Musician, JavaScript evangelist, ramen&nbsp;<Emoji symbol="❤️" label="love" /></>
}

const useAuthentication = () => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  
  const logIn = (mail, password) => {
    setUser(defaultUser);
    setIsAuthenticated(true);
  }
  
  const logOut = () => {
    setUser(null);
    setIsAuthenticated(false);
  }

  return [user, isAuthenticated, logIn, logOut];
};

export default useAuthentication;
