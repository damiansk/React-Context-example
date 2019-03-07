import React, { useContext } from 'react';
import { Form, Segment, Button } from 'semantic-ui-react';
import LanguageContext from '../../contexts/LanguageContext';
import AuthContext from '../../contexts/AuthContext';
import useInput from '../../hooks/useInput';
import languages from '../../languages';

const texts = {
  [languages.english]: {
    emailText: 'E-mail address',
    passwordText: 'Password',
    loginText: 'Login',
  },
  [languages.icelandic]: {
    emailText: 'Netfang',
    passwordText: 'Lykilorð',
    loginText: 'Skrá inn',
  },
}

const LogIn = () => {
  const { language } = useContext(LanguageContext);
  const { logIn } = useContext(AuthContext);
  
  const { emailText, passwordText, loginText } = texts[language];
  
  const [mail, setMail] = useInput(''); 
  const [password, setPassword] = useInput(''); 

  const handleLogInClick = () => logIn(mail, password);

  return ( 
    <Form size='large'>
      <Segment stacked>
        <Form.Input 
          fluid 
          icon='user' 
          iconPosition='left' 
          placeholder={emailText} 
          value={mail} 
          onChange={setMail}
        />
        <Form.Input
          fluid
          icon='lock'
          iconPosition='left'
          placeholder={passwordText}
          type='password'
          value={password}
          onChange={setPassword}
        />
        <Button
          color='teal' 
          fluid 
          size='large' 
          onClick={handleLogInClick}
        >
          {loginText}
        </Button>
      </Segment>
    </Form>
  );
}

export default LogIn;