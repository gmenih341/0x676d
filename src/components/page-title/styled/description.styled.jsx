import styled from '@emotion/styled';

export const Description = styled('span')`
    display: block;
    font-weight: 300;
    text-align: center;
    transform: ${props => (props.active ? 'scale(1)' : 'scale(0)')};
    transition: ${props => (props.active ? 'transform 250ms ease-in;' : 'none')};
`;
