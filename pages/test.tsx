import React, {FunctionComponent} from 'react';
import {PageComponent} from '../src/types/PageComponent';


const Test: PageComponent = () => {
    return (<h1>Hello, world!</h1>);
};

Test.displayName = 'test';
Test.headerComponent = () => {
    return (<h1>FUCK YOU</h1>);
}

export default Test;