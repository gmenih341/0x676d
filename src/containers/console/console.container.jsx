import React from 'react';

import './console.container.scss';

export function ConsoleContainer () {
    return (
        <div className="container-fluid d-flex console-container flex-grow-1">
            <div className="row d-flex flex-grow-1 justify-content-center">
                <div className="col-12 col-md-11 col-lg-9">
                    <div className="console">
                        <div className="content">
                            {`gmsh: render-website: command not found. Maybe it's under construction 🤔`}
                            <br />
                            <span className="prompt">
                                <strong>
                                    <span className="y">λ </span>
                                    guest
                                    <span className="r"> ~/</span>
                                    <span className="y"> →</span>
                                </strong>
                            </span>
                        </div>
                        <div className="scroll-indicator" id="scroll-indicator">
                            <div className="wheel" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
