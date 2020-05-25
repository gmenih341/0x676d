import React, {FunctionComponent} from 'react';
import styled from 'styled-components/macro';
import {ClassNameOnly} from '../../../types/ClassNameOnly';
import {themeColor} from '../../../utils/theme.utils';

interface JobPointerProps extends ClassNameOnly {
    width: number;
    height: number;
}

const JobPointerIconComponent: FunctionComponent<JobPointerProps> = ({className, height, width}) => {
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
        <svg
            className={className}
            viewBox={`0 0 ${fullWidth} ${height}`}
            xmlns="http://www.w3.org/2000/svg"
            height={height}
            width={fullWidth}>
            <path d={svgPath} />
        </svg>
    );
};

export const JobPointerIcon = styled(JobPointerIconComponent)``;
