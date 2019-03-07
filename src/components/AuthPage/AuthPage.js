import React from 'react';
import { Header, Image } from 'semantic-ui-react';
import LogIn from './LogIn';
import LanguageContext from '../../contexts/LanguageContext';
import logo from './react.png';
import languages from '../../languages';

const headerText = {
  [languages.english]: 'Log-in to your account',
  [languages.icelandic]: 'Skráðu þig inn á reikninginn þinn',
}

const AuthPage = () => (
  <LanguageContext.Consumer>
    {context => 
      <>
        <Header as='h1' color='teal' textAlign='center'>
          <Image src={logo} />
        </Header>
        <Header as='h2' color='teal' textAlign='center'>
          {headerText[context.language]}
        </Header>
        <LogIn />
      </>
    }
  </LanguageContext.Consumer>
);

export default AuthPage;
