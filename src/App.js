import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { MuiThemeProvider } from '@material-ui/core/styles';

import Topbar from './components/Topbar/Topbar';
import Main from './components/Main/Main';
import BottomNav from './components/BottomNav/BottomNav';
import theme from './components/Theme/Theme';

import './App.css';


class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <MuiThemeProvider theme={theme}>
                <Topbar />
                <Main />
                <BottomNav/>
            </MuiThemeProvider>
        </BrowserRouter>
    );
  }
}

export default App;
