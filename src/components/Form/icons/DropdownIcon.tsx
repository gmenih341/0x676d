import React, {FC} from 'react';
import {IconProps} from '../types/IconProps';

const OPEN_PATH = 'M.037 24.873h64v14.254h-64z';
const CLOSED_PATH = 'M.037 24.873l32 23.865 32-23.865v14.254l-32 23.865-32-23.865z';

export const DropDownIcon: FC<IconProps & {open: boolean}> = React.memo(({fill, height, width, open, ...props}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width={width} height={height} fill={fill} {...props}>
            <path d={open ? OPEN_PATH : CLOSED_PATH} />
        </svg>
    );
});
