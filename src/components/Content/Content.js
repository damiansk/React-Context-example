import React from 'react';
import { Grid } from 'semantic-ui-react';
import AuthContext from '../../contexts/AuthContext';
import AuthPage from '../AuthPage/AuthPage';
import UserPage from '../UserPage/UserPage';

class Content extends React.PureComponent {
  static contextType = AuthContext;

  render() {
    return (
      <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          {this.context.isAuthenticated ?
            <UserPage />
            :
            <AuthPage />
          }
        </Grid.Column>
      </Grid>
    )
  }
};

export default Content;
