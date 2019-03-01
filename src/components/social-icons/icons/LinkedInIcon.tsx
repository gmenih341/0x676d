import React, {FC} from 'react';
import {IconProps} from './interface';

export const LinkedInIcon: FC<IconProps> = React.memo(({fill, height, width}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.256 22.258" width={width} height={height} fill={fill}>
        <path d="M5.366 2.973c0 1.376-1.035 2.479-2.699 2.479h-.031C1.034 5.453 0 4.348 0 2.973 0 1.564 1.067.491 2.698.491 4.331.49 5.336 1.564 5.366 2.973zM.28 21.766h4.772V7.413H.28v14.353zM16.764 7.077c-2.531 0-3.664 1.39-4.301 2.37v.046h-.031a.232.232 0 0 0 .031-.046V7.414H7.692c.062 1.345 0 14.353 0 14.353h4.771v-8.016c0-.432.029-.855.157-1.164.346-.854 1.132-1.747 2.446-1.747 1.729 0 2.42 1.319 2.42 3.247v7.68h4.771v-8.229c.001-4.412-2.355-6.461-5.493-6.461z" />
    </svg>
));
