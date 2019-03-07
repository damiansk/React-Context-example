import React from 'react';
import LanguageContext from '../../contexts/LanguageContext';

const UserPage = () => (
  <LanguageContext.Consumer>
    {context => <p>{context.language.toString()}</p>}
  </LanguageContext.Consumer>
);

export default UserPage;