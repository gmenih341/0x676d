import React from 'react';
import PropTypes from 'prop-types';
import {Console} from './styled/console.styled';
import {ConsoleContent} from './styled/console-content.styled';
import {HomePage} from '../../components/home-page/home-page.component';
import {Work} from '../../components/work/work';
import {Contact} from '../../components/contact/contact';
import {SPACER} from '../../styles/variables';
import * as P from './styled/prompt.styled';

import pages from '../../assets/pages.json5';

const stopPropagationIfScrollable = event => {
    if (event.target.scrollHeight > event.target.clientHeight) {
        event.stopPropagation();
    }
};

const getActivePage = index => {
    return [<HomePage key="home-page" />, <Work key="work" />, <Contact key="contact" />][index];
};

const fullPrompt = text => (
    <P.Text style={{marginTop: SPACER}}>
        <P.Red>~/pages</P.Red> <P.Blue>master</P.Blue> <P.Red>{'->'}</P.Red>
        {!text ? <P.Cursor /> : <P.Command>{text}</P.Command>}
    </P.Text>
);

export function ConsoleContainer (props) {
    const {activePage} = props;
    return (
        <div className="container-fluid d-flex flex-grow-1">
            <div className="row d-flex flex-grow-1 justify-content-center">
                <div className="col-12 col-md-11 col-lg-9">
                    <Console onWheel={stopPropagationIfScrollable}>
                        <ConsoleContent>
                            {fullPrompt(`render-page ${pages[activePage].browserTitle || 'home'}`)}
                            {getActivePage(activePage)}
                            {fullPrompt()}
                        </ConsoleContent>
                    </Console>
                </div>
            </div>
        </div>
    );
}

ConsoleContainer.propTypes = {
    activePage: PropTypes.number.isRequired,
    showIndicator: PropTypes.bool.isRequired,
};
