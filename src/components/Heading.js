import React from 'react';
import { Header, Flag } from 'semantic-ui-react';
import languages from '../languages';

const Heading = ({ onLanguageChange }) => (
  <Header as='h3' textAlign='right'>
    <Flag name="us" onClick={() => onLanguageChange(languages.english)}/>
    <Flag name="is" onClick={() => onLanguageChange(languages.icelandic)}/>
  </Header>
);

export default Heading;
