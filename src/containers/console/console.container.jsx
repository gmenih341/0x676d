import React from 'react';
import PropTypes from 'prop-types';
import {Console} from './styled/console.styled';
import {ConsoleContent} from './styled/console-content.styled';
import {ScrollIndicator, Wheel} from './styled/scroll-indicator.styled';
import {HomePage} from '../../components/home-page/home-page.component';

const stopPropagationIfScrollable = event => {
    if (event.target.scrollHeight > event.target.clientHeight) {
        event.stopPropagation();
    }
};

export function ConsoleContainer (props) {
    const {showIndicator} = props;

    return (
        <div className="container-fluid d-flex flex-grow-1">
            <div className="row d-flex flex-grow-1 justify-content-center">
                <div className="col-12 col-md-11 col-lg-9">
                    <Console onWheel={stopPropagationIfScrollable}>
                        <ConsoleContent>
                            <HomePage />
                        </ConsoleContent>
                        {showIndicator ? (
                            <ScrollIndicator>
                                <Wheel />
                            </ScrollIndicator>
                        ) : null}
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
