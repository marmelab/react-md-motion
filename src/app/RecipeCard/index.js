import React from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import BackIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-left';

import './index.css';

export default ({
    recipe,

    expanded = false,
    goBack = null,
    ...rest
}) => (
    <Card key={recipe.id} className="recipe" {...rest}>
        <CardMedia>
            <div className="header">
                {goBack &&
                <IconButton
                    iconStyle={{ width: 30, height: 30, color: 'white' }}
                    style={{ width: 60, height: 60 }}
                    onClick={goBack}
                    id="back-button"
                >
                    <BackIcon />
                </IconButton>
                }
                <img src={recipe.mainImageUrl} alt="" />
            </div>
        </CardMedia>
        <div className="title">
            <img src={recipe.ingredientsImageUrl} alt="" />
            <CardTitle title={recipe.name} subtitle={recipe.author} />
        </div>
        {expanded &&
        <CardText>
            {recipe.description}
        </CardText>
        }
    </Card>
);
