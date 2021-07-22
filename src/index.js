import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import Spinner from './components/Spinner';
import './index.css';
import reportWebVitals from './reportWebVitals';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#e6f4ff'
    }
  },
  typography: {
    fontFamily: [
      'Roboto',
      'MetDemo',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '-apple-system',
    ].join(','),
  },
  overrides: {
    MuiLink: {
      root: {
        color: '#4183C4',
      }
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
