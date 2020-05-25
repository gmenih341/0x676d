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
        margin-bottom: -15px;
        padding: 10px;
        padding-bottom: 30px;
        transition: filter 250ms ease-in;
        filter: grayscale();

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
