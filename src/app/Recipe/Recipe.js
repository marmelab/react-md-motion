import React from 'react';

import RecipeCard from '../RecipeCard'

import './style.less';

export default ({recipe, goBack}) => (
    <RecipeCard recipe={recipe} goBack={goBack} showActions expanded/>
);
