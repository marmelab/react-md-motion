import { compose } from 'redux';

import Home from './Home';

import withRecipes from './withRecipes';

export default compose(
    withRecipes,
)(Home);
