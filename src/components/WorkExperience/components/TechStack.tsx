import * as React from 'react';
import {MyStyledComponent} from '../../../types/MyStyledComponent';
import kebabCase from 'lodash/kebabCase';
import styled from 'styled-components/macro';

interface TechStackProps {
    stack: string[];
}

const TechStackComponent: MyStyledComponent<TechStackProps> = ({className: cn, stack}) => {
    return (
        <div className={cn}>
            {stack.map((tech, i) => (
                <div key={i} className={`${cn}__icon`} title={tech}>
                    <img src={`/skill-icons/${kebabCase(tech)}.svg`} alt={tech} />
                </div>
            ))}
        </div>
    );
};

export const TechStack = styled(TechStackComponent)`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: -10px -10px;

    &__icon {
        padding: 10px;
        padding-bottom: 30px;
        margin-bottom: -30px;
        filter: grayscale();
        transition: filter 250ms ease-in;

        &:hover {
            filter: none;
        }

        img {
            display: block;
            width: 20px;
            height: 20px;
            object-fit: contain;
        }
    }
`;
