import React, {FC} from 'react';
import {IconProps} from '../../../types/IconProps';

export const LinkedInIcon: FC<IconProps> = React.memo(({fill, height, width}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.256 22.258" width={width} height={height} fill={fill}>
        <path d="M5.366 2.973L2.667 5.452h-.031L0 2.973 2.698.491zM.28 21.766h4.772V7.413H.28zM16.764 7.077l-4.301 2.37V7.414H7.692c.062 1.345 0 14.353 0 14.353h4.771v-8.016l.157-1.164 2.446-1.747 2.087.99.333 2.257v7.68h4.771v-8.229l-.295-3.4z" />
    </svg>
));
