import React from 'react';
import { Grid, Header, Image } from 'semantic-ui-react';
import LogIn from './LogIn';
import LanguageContext from '../../contexts/LanguageContext';
import logo from '../../logo.svg';
import languages from '../../languages';

const headerText = {
  [languages.english]: 'Log-in to your account',
  [languages.icelandic]: 'Skráðu þig inn á reikninginn þinn',
}

const AuthPage = () => (
  <LanguageContext.Consumer>
    {context => 
      <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h1' color='teal' textAlign='center'>
            <Image src={logo} />
          </Header>
          <Header as='h2' color='teal' textAlign='center'>
            {headerText[context.language]}
          </Header>
          <LogIn />
        </Grid.Column>
      </Grid>
    }
  </LanguageContext.Consumer>
);

export default AuthPage;
