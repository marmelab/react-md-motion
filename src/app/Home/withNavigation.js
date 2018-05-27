import React from 'react';

export default (Component) => ({history, recipe, ...rest}) => {
    let element = null;

    const goToRecipe = () => {
        const { top, right, bottom, left, width, height } = element.getBoundingClientRect();

        history.push({
            pathname: `/recipe/${recipe.id}`,
            state: {
                to: 'modal',
                meta: {
                    from: { top, right, bottom, left, width, height },
                },
            },
        });
    };

    return (
        <div ref={(el) => { element = el; }}>
            <Component
                recipe={recipe}
                onClick={goToRecipe}
                {...rest}
            />
        </div>
    );
};
