import React from 'react';
import * as css from './console.styles';

export function ConsoleContainer () {
    return (
        <div className="container-fluid d-flex flex-grow-1">
            <div className="row d-flex flex-grow-1 justify-content-center">
                <div className="col-12 col-md-11 col-lg-9">
                    <div className={css.console}>
                        <div className={css.content}>
                            {`gmsh: render-website: command not found. Maybe it's under construction 🤔`}
                            <br />
                            <span className="prompt">
                                <strong>
                                    <span className={css.y}>λ </span>
                                    guest
                                    <span className={css.r}> ~/</span>
                                    <span className={css.y}> →</span>
                                </strong>
                            </span>
                        </div>
                        <div className={css.scrollIndicator}>
                            <div className={css.scrollWheel} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
