import React, {FC} from 'react';
import {IconProps} from '../../../types/IconProps';

export const GithubIcon: FC<IconProps> = React.memo(({fill, height, width}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37.271 37.271" width={width} height={height} fill={fill}>
        <path d="M22.981 27.387l2.871 4.38 2.873-4.38-2.873-4.382zm-11.349-4.381l2.873 4.382-2.873 4.38-2.871-4.38zM0 23.186l3.05 9.663 11.345 4.376h8.481l11.487-4.39 2.908-9.65-3.009-8.59-.702-8.754-7.971 3.556-2.715-.25h-8.479l-2.813.269-7.989-3.573-.675 8.869zm4.906 3.98l6.033-6.577 8.234.812 6.989-.67 6.031 6.436-6.475 7.605H11.593z" />
    </svg>
));
