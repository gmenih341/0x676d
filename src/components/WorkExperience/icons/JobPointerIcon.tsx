import React, {FunctionComponent} from 'react';
import {IconProps} from '../../../types/IconProps';

export const JobPointerIcon: FunctionComponent<IconProps> = ({fill, height, width}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width + height + 12} height={height} fill={fill}>
            <path d={`M12 0h${width + height}L${width} 24H12L0 12z`} />
        </svg>
    );
};
