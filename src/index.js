import React from 'react';
import ReactDOM from 'react-dom';
import {HomeContainer} from './containers/home/home.container';

import './styles/common.scss';


ReactDOM.render( 
    <HomeContainer /> ,
    document.getElementById('app')
);