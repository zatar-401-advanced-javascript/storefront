//===========================================| Dependencies |===========================================
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

//==============================================| Theme |==============================================
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#5e7288',
      main: '#1A1A1D',
      dark: '#6F2232',
      contrastText: '#f5f5f5',
    },
    secondary: {
      light: '#cf3865',
      main: '#c3073f',
      dark: '#88042c',
      contrastText: '#1A1A1D',
    },
  },
});
//===========================================| Render app |===========================================
ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  ///* </React.StrictMode> */ 
  document.getElementById('root')
);

reportWebVitals();
//====================================================================================================