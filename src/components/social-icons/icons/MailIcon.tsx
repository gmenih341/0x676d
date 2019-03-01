import React, {FC} from 'react';
import {IconProps} from './interface';

export const MailIcon: FC<IconProps> = React.memo(({fill, height, width}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.178 28.178" width={width} height={height} fill={fill}>
        <path d="M.34 9.567c.05-.044.102-.088.16-.123l13.089-7.558a.998.998 0 0 1 1 0l13.089 7.558c.061.034.109.079.16.123l-13.749 7.938L.34 9.567zm14.249 9.96a1 1 0 0 1-1 0L0 11.68v13.745c0 .554.447 1 1 1h26.178c.553 0 1-.446 1-1V11.68l-13.589 7.847z" />
    </svg>
));
