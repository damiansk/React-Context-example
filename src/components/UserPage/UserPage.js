import React, { useContext } from 'react';
import { Card, Image,  Button } from 'semantic-ui-react';
import AuthContext from '../../contexts/AuthContext';
import LanguageContext from '../../contexts/LanguageContext';
import languages from '../../languages';

const texts = {
  [languages.english]: {
    joinText: 'Joined in',
    logoutText: 'Logout',
  },
  [languages.icelandic]: {
    joinText: 'Skráði sig í',
    logoutText: 'Skráðu þig út',
  }
}

const UserPage = () => {
  const { user, logOut } = useContext(AuthContext);
  const { language } = useContext(LanguageContext);

  const { joinText, logoutText } = texts[language];
  
  return (
    <Card>
      <Image src='/matthew.png' />
      <Card.Content>
        <Card.Header>{user.firstName}</Card.Header>
        <Card.Meta>
          <span className='date'>{`${joinText} ${user.year}`}</span>
        </Card.Meta>
        <Card.Description>{user.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button
          attached='bottom'
          content={logoutText}
          onClick={logOut}
        />
      </Card.Content>
    </Card>
  );
}

export default UserPage;