import React from 'react';

import {recipes} from '../data';

export default (Component) => (props) => {
    const recipeId = parseInt(props.match.params.id);
    const recipe = recipes.find(recipe =>
        recipe.id === recipeId
    );
    return <Component recipe={recipe} {...props} />;
};
