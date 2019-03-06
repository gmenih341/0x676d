import React, {FC} from 'react';
import {IconProps} from './interface';

export const MenuIcon: FC<IconProps> = React.memo(({fill, height, width}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459 459" width={width} height={height} fill={fill}>
        <path d="M0 382.5h459v-51H0v51zM0 255h459v-51H0v51zM0 76.5v51h459v-51H0z" />
    </svg>
));
