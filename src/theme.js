import darkBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import merge from 'lodash.merge';

const colors = require('material-ui/styles/colors');

const muiTheme = {
    palette: {
        primary1Color: '#4dac8e',
    },
};

const theme = merge(darkBaseTheme, muiTheme)

export default theme;
