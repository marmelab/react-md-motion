import React from 'react';

import RecipeCard from '../RecipeCard';

export default ({ recipes = [], goToRecipe, history }) => (
    <div>
        {recipes.map((recipe) => (
            <RecipeCard
                key={recipe.id}
                recipe={recipe}
                onClick={goToRecipe(recipe.id)}
            />
        ))}
    </div>
);
