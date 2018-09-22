import React from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import theme from './theme'

import App from './components/App';

render(
  <MuiThemeProvider theme={theme}>
		<App />
	</MuiThemeProvider>,
  document.getElementById('root')
);
