import React, {FC} from 'react';
import {IconProps} from './interface';

export const MailIcon: FC<IconProps> = React.memo(({fill, height, width}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.178 28.178" width={width} height={height} fill={fill}>
        <path d="M.34 9.567l13.249-7.681h1l13.249 7.681-13.749 7.938zm14.249 9.96l-.5.134-.5-.134L0 11.68v13.745l1 1h26.178l1-1V11.68z" />
    </svg>
));
