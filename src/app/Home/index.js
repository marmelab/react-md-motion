import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

import Home from './Home';

import withRecipes from './withRecipes';
import withNavigation from './withNavigation';

export default compose(
    withRecipes,
    withRouter,
    withNavigation,
)(Home);
