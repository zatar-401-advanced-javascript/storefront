import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#5e7288',
      main: '#364f6b',
      dark: '#25374a',
      contrastText: '#f5f5f5',
    },
    // secondary: {
    //   light: '#ff7961',
    //   main: '#f44336',
    //   dark: '#ba000d',
    //   contrastText: '#000',
    // },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
