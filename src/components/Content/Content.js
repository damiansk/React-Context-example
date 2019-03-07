import React from 'react';
import AuthContext from '../../contexts/AuthContext';
import AuthPage from '../AuthPage/AuthPage';
import UserPage from '../UserPage/UserPage';

class Content extends React.PureComponent {
  static contextType = AuthContext;

  render() {
    return (this.context.isAuthenticated ?
      <UserPage />
      :
      <AuthPage />  
    )
  }
};

export default Content;
