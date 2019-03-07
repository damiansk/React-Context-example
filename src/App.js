import React from 'react';
import { Container, Flag } from 'semantic-ui-react';
import LanguageContext from './contexts/LanguageContext';
import Heading from './components/Heading';
import Content from './components/Content/Content';
import languages from './languages';



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { language: languages.english };

    this.handleLanguageChange = this.handleLanguageChange.bind(this);
  }

  handleLanguageChange(language) {
    this.setState({ language });
  }

  render() {
    return (
      <>
        <Container>
          <LanguageContext.Consumer>
            {context => <p><b>Default language: </b><Flag name={context.language} /></p>}
          </LanguageContext.Consumer>
        </Container>
        <LanguageContext.Provider value={{ language: this.state.language }}>
          <Container>
            <Heading onLanguageChange={this.handleLanguageChange} />
            <Content />
          </Container>
        </LanguageContext.Provider>
      </>
    );
  }
}

export default App;
