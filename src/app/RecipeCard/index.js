import React from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';

import BackIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import TimerIcon from 'material-ui/svg-icons/image/timer';
import ShareIcon from 'material-ui/svg-icons/social/share';
import MoreIcon from 'material-ui/svg-icons/navigation/more-vert';
import LikeIcon from 'material-ui/svg-icons/action/favorite-border';

import './style.less';

const styles = {
    actions:{
        icon: {
            width: 30,
            height: 30,
            color: 'white',
        },
        button: {
            width: 60,
            height: 60,
        },
        likeIcon: {
            width:'43%',
            height:'43%',
            color: 'white',
        },
    },
};

export default ({
    recipe,
    expanded = false,
    showActions = false,
    goBack = null,
    ...rest
}) => (
    <Card key={recipe.id} className="recipe" {...rest}>
        <CardMedia>
            <div className="header">
                <div className="actions left">
                    {goBack &&
                    <IconButton
                        iconStyle={styles.actions.icon}
                        style={styles.actions.button}
                        onClick={goBack}
                        id="back-button"
                    >
                        <BackIcon />
                    </IconButton>
                    }
                </div>
                {showActions &&
                    <div className="actions right">
                        <IconButton
                            iconStyle={styles.actions.icon}
                            style={styles.actions.button}
                        >
                            <TimerIcon />
                        </IconButton>
                        <IconButton
                            iconStyle={styles.actions.icon}
                            style={styles.actions.button}
                        >
                            <ShareIcon />
                        </IconButton>
                        <IconButton
                            iconStyle={styles.actions.icon}
                            style={styles.actions.button}
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                }
                <img src={recipe.mainImageUrl} alt="" />
                {showActions &&
                    <div className="floating">
                        <div className="like">
                          <LikeIcon style={styles.actions.likeIcon}/>
                        </div>
                    </div>
                }
            </div>
        </CardMedia>
        <div className="title">
            <img src={recipe.ingredientsImageUrl} alt="" />
            <CardTitle
                title={
                    <span className="header">
                        {recipe.name}
                    </span>
                }
                subtitle={
                    <span className="sub">
                        {recipe.author}
                    </span>
                }
            />
        </div>
        {expanded &&
            <div className="actions">
                <CardText className="text">
                    {recipe.description}
                </CardText>
                {recipe.ingredients.map((ingredient)=>(
                    <div className="ingredient">
                        <div className="amount">
                            {ingredient.amount}
                        </div>
                        <div className="description">
                            {ingredient.description}
                        </div>
                    </div>
                ))}
            </div>
        }
    </Card>
);
