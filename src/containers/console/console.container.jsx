import React from 'react';
import PropTypes from 'prop-types';
import {Console} from './styled/console.styled';
import {ConsoleContent} from './styled/console-content.styled';
import * as Prompt from './styled/prompt.styled';
import {ScrollIndicator, Wheel} from './styled/scroll-indicator.styled';

export function ConsoleContainer (props) {
    const {showIndicator} = props;
    return (
        <div className="container-fluid d-flex flex-grow-1">
            <div className="row d-flex flex-grow-1 justify-content-center">
                <div className="col-12 col-md-11 col-lg-9">
                    <Console>
                        <ConsoleContent>
                            {`gmsh: render-website: command not found. Maybe it's under construction 🤔`}
                            <br />
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
    showIndicator: PropTypes.bool.isRequired,
};
