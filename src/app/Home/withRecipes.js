import React from 'react';

import { recipes } from '../data';

export default (Component) => {
    const RecipesComponent = (props) => {
        return <Component recipes={recipes} {...props} />;
    };
    return RecipesComponent;
};
