import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';

import SearchIcon from 'material-ui/svg-icons/action/search';

import './index.css';

export default () => (
    <AppBar
        className="header"
        title={
            <div className="logo"></div>
        }
        iconElementRight={
            <IconButton>
                <SearchIcon/>
            </IconButton>
        }
    />
);
