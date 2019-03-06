import React from 'react';
import { Button as SemanticButton } from 'semantic-ui-react';
import LanguageContext from '../contexts/LanguageContext';
import languages from '../languages';

const textMap = {
  [languages.english]: 'Submit',
  [languages.icelandic]: 'Senda inn',
};

const Button = () => (
  <LanguageContext.Consumer>
    {context =>
      <SemanticButton>{textMap[context.language]}</SemanticButton>
    }
  </LanguageContext.Consumer>
);

export default Button;
