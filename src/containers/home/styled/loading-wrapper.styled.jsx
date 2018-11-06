import styled from '@emotion/styled';

export const LoadingWrapper = styled('div')`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    opacity: ${props => (props.loading ? 0 : 1)};
    transition: opacity 300ms ease-out;
`;
