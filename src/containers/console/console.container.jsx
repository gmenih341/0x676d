import React from 'react';
import PropTypes from 'prop-types';
import {Console} from './styled/console.styled';
import {ConsoleContent} from './styled/console-content.styled';
import * as Prompt from './styled/prompt.styled';
import {ScrollIndicator, Wheel} from './styled/scroll-indicator.styled';

const pageContent = [
    {
        content: 'test',
    },
    {
        content: 'test '.repeat(1000),
    },
];

const stopPropagationIfScrollable = event => {
    if (event.target.scrollHeight > event.target.clientHeight) {
        // if (
        //     !(event.deltaY < 0 && event.target.scrollTop === 0) &&
        //     !(event.deltaY > 0 && (event.target.scrollTop + event.target.clientHeight) >= event.target.scrollHeight)
        // ) {
        // }
        event.stopPropagation();
    }
};

export function ConsoleContainer (props) {
    const {showIndicator, activePage} = props;
    const page = pageContent[activePage];

    return (
        <div className="container-fluid d-flex flex-grow-1">
            <div className="row d-flex flex-grow-1 justify-content-center">
                <div className="col-12 col-md-11 col-lg-9">
                    <Console onWheel={stopPropagationIfScrollable}>
                        <ConsoleContent>
                            {page && page.content}
                            <Prompt.Text>
                                <Prompt.Red>λ </Prompt.Red>
                                <Prompt.Blue> ~/</Prompt.Blue>
                                <Prompt.Red> →</Prompt.Red>
                            </Prompt.Text>
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
