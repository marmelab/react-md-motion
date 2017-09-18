import React from 'react';

import RecipeCard from '../RecipeCard'

export default ({recipe, goBack}) => (
    <RecipeCard recipe={recipe} goBack={goBack} expanded/>
);
