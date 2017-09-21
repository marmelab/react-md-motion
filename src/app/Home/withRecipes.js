import React from 'react';

import { recipes } from '../data';

export default (Component) => (props) => {
    return <Component recipes={recipes} {...props} />;
};
