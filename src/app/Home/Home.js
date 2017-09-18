import React from 'react';

import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

import RecipeCard from '../RecipeCard';

import withNavigation from './withNavigation';

const RecipeCardWithNavigation = compose(
    withRouter,
    withNavigation,
)(RecipeCard);

export default ({ recipes = [], goToRecipe, history }) => (
    <div>
        {recipes.map((recipe) => (
            <div style={{margin: 16}}>
                <RecipeCardWithNavigation
                    key={recipe.id}
                    recipe={recipe}
                />
            </div>
        ))}
    </div>
);
