import {useRouter} from 'next/router';
import React, {FunctionComponent, useMemo, useRef} from 'react';
import styled from 'styled-components/macro';
import {SPACER, SPACER_BIG} from '../../../constants/style.constants';
import {useRouteData} from '../../../hooks/useRouteData';
import {PageComponent} from '../../../types/PageComponent';
import {mediaMin, ScreenSize} from '../../../utils/style.utils';
import {ConsoleContent} from '../../ConsoleContent.styled';
import {Footer} from '../../Footer';
import {Header} from '../../Header';
import {Logo} from '../../Logo';
import {Menu} from '../../Menu';
import {HeaderContainer} from './HeaderContainer.styled';
import {usePageHeaderTransition} from '../../../animations/usePageHeaderTransition';

interface LayoutProps {
    className?: string;
    pageComponent: PageComponent;
}

const DefaultLayoutComponent: FunctionComponent<LayoutProps> = ({className, pageComponent}) => {
    const {pathname} = useRouter();
    const {
        header: {title, description},
    } = useRouteData(pathname);

    const headerTransition = usePageHeaderTransition(pageComponent);

    const HeaderComponent = useMemo(() => pageComponent.headerComponent, [pageComponent]);
    const PageComponent = useMemo(() => pageComponent, [pageComponent]);

    return (
        <div className={className}>
            <HeaderContainer>
                <Logo />
                <Header title={title} description={description} />
                <Menu activePath={pathname} />
            </HeaderContainer>
            <ConsoleContent>
            {headerTransition(({imageProps, contentProps, props, key}) => (
                <HeaderComponent key={key} style={props} imageStyle={imageProps} contentStyle={contentProps} />
            ))}
            </ConsoleContent>
            <PageComponent />
            <Footer />
        </div>
    );
};

export const DefaultLayout = styled(DefaultLayoutComponent)`
    display: grid;
    grid-template-rows: minmax(0, 100px) 1fr min-content;
    grid-gap: ${SPACER_BIG}px;
    margin: ${SPACER_BIG}px auto;

    ${mediaMin('md')} {
        width: ${ScreenSize.md - SPACER}px;
    }

    ${mediaMin('lg')} {
        width: ${ScreenSize.lg - SPACER}px;
    }

    ${mediaMin('xl')} {
        width: ${ScreenSize.xl - SPACER}px;
    }

    ${mediaMin('lg')} {
        .experience {
            grid-column: 1 / 2;
        }

        .skills {
            grid-column: 2 / 3;
        }
    }
`;
