import React, {FunctionComponent} from 'react';
import {IconProps} from '../../../types/IconProps';

export const JobPointerIcon: FunctionComponent<IconProps> = ({fill, height, width}) => {
    const halfHeight = height / 2;
    const fullWidth = width + height + halfHeight;

    const svgPath = `
        M 0,0
        h ${height}
        h ${width}
        l ${halfHeight},${halfHeight}
        l ${-halfHeight},${halfHeight}
        h ${-width}
        L 0 0
        z
    `;

    return (
        <svg viewBox={`0 0 ${fullWidth} ${height}`} xmlns="http://www.w3.org/2000/svg" height={height} width={fullWidth}>
            <path fill={fill} d={svgPath} />
        </svg>
    );
};
