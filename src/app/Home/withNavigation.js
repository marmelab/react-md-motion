import React from 'react';

import { recipes } from '../data';

export default (Component) => {
    const Navigation = ({history, ...rest}) => {
        const goToRecipe = (id) => () => {
            history.push({
                pathname: `/recipe/${id}`
            });
        };
        return <Component goToRecipe={goToRecipe} {...rest} />;
    };
    return Navigation;
};
