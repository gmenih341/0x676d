import Link from 'next/link';
import React, {FunctionComponent} from 'react';
import styled from 'styled-components/macro';
import {COLOR_MAIN} from '../constants/style.constants';
import {ClassNameOnly} from '../types/ClassNameOnly';

const DARK = COLOR_MAIN[6];

const LogoComponent: FunctionComponent<ClassNameOnly> = React.memo(({className}) => {
    return (
        <div className={className}>
            <Link href="/">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 591.76867 477.9678">
                    <g>
                        <g>
                            <path fill={DARK} d="M508.37903 79.02809l.0001 219.6347h19.8387l47.8947-47.8947-.0005-239.4731z" />
                            <path fill={DARK} d="M1.37603 107.08459l47.8947-47.8948 359.2101 359.21-47.8948 47.8948z" />
                            <path fill={DARK} d="M169.00723 418.39989l359.2105-359.2105 47.8948 47.8947-359.2105 359.2106z" />
                            <path fill={DARK} d="M1.37613 11.75359l-.0004 239.0149 47.8947 47.8947h19.8387V79.48669z" />
                            <path fill={DARK} d="M1.37573 154.97889v95.4996c0 .08-.032.1527-.085.2051l215.6111 215.6111 47.8948-47.8947z" />
                            <path
                                fill={DARK}
                                d="M576.11273 154.97889l-263.4212 263.4211 47.8942 47.8947 215.6117-215.6111c-.052-.053-.085-.1253-.085-.2057z"
                            />
                        </g>
                        <g>
                            <path id="left-arrow" fill={DARK} d="M1.37583 467.99639v-169.3331l84.6666 84.6665z" />
                            <path id="right-arrow" fill={DARK} d="M576.11243 298.66299v169.3335l-84.6667-84.6668z" />
                        </g>
                    </g>
                </svg>
            </Link>
        </div>
    );
});

export const Logo = styled(LogoComponent)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
`;

export default Logo;
