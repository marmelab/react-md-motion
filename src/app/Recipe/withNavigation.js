import React from 'react';

import { recipes } from '../data';

export default (Component) => {
    const Navigation = ({ history, ...rest }) => {
        const goBack = () => {
            history.goBack();
        };
        return <Component goBack={goBack} {...rest} />;
    };
    return Navigation;
};
