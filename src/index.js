import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import { AuthProvider } from './contexts/AuthContext';

ReactDOM.render(<AuthProvider><App /></AuthProvider>, document.getElementById('root'));
