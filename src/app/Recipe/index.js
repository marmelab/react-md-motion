import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

import Recipe from './Recipe';
import withRecipe from './withRecipe';
import withNavigation from './withNavigation';

export default compose(
    withRecipe,
    withRouter,
    withNavigation,
)(Recipe);
