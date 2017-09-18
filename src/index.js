import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { BrowserRouter } from 'react-router-dom';

import Application from './app';
import theme from './theme';
import registerServiceWorker from './registerServiceWorker';

const muiTheme = getMuiTheme(theme);

const App = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <BrowserRouter>
            <Application />
        </BrowserRouter>
    </MuiThemeProvider>
);

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

registerServiceWorker();
