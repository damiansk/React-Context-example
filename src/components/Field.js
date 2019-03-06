import React from 'react';
import { Form } from 'semantic-ui-react';
import LanguageContext from '../contexts/LanguageContext';
import languages from '../languages';

const textMap = {
  [languages.english]: 'First Name',
  [languages.icelandic]: 'Fyrsta nafn',
};

class Field extends React.Component {
  static contextType = LanguageContext;

  render() {
    const text = textMap[this.context.language];
    return (
      <Form.Field>
        <label>{text}</label>
        <input placeholder={text} />
      </Form.Field>
    );
  }
}

export default Field;
