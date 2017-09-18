import React from 'react';

import RecipeCard from '../RecipeCard'

import './style.css';

export default ({recipe, goBack}) => (
    <RecipeCard recipe={recipe} goBack={goBack} expanded/>
);
