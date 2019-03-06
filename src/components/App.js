import React from 'react';
import { Container } from 'semantic-ui-react';
import LanguageContext from '../contexts/LanguageContext';
import Heading from './Heading';
import AuthPage from './AuthPage/AuthPage';
import languages from '../languages';
import AuthContext from '../contexts/AuthContext';

const UserPage = () => <h2>User</h2>;

class App extends React.Component {
  static contextType = AuthContext;

  constructor(props) {
    super(props);

    this.state = { language: languages.english };

    this.handleLanguageChange = this.handleLanguageChange.bind(this);
  }

  handleLanguageChange(language) {
    this.setState({ language });
  }

  render() {
    const { isAuthenticated } = this.context;

    return (
      <LanguageContext.Provider value={{ language: this.state.language }}>
        <Container>
            <Heading onLanguageChange={this.handleLanguageChange} />
              {isAuthenticated ?
                <UserPage />
                :
                <AuthPage />  
              }
        </Container>
      </LanguageContext.Provider>
    );
  }
}

export default App;
