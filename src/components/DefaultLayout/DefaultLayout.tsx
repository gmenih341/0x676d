import {useRouter} from 'next/router';
import React, {FunctionComponent} from 'react';
import styled from 'styled-components/macro';
import {usePageContentTransition} from '../../animations/hooks/usePageContentTransition';
import {usePageHeaderTransition} from '../../animations/hooks/usePageHeaderTransition';
import {SPACER, SPACER_BIG} from '../../constants/style.constants';
import {useRouteData} from '../../hooks/useRouteData';
import {PageComponent} from '../../types/PageComponent';
import {mediaMin, ScreenSize} from '../../utils/style.utils';
import {ConsoleContent} from '../ConsoleContent.styled';
import {Footer} from '../Footer';
import {Header} from '../Header';
import Logo from '../Logo';
import {Menu} from '../Menu';
import {SideImage} from '../SideImage';
import {HeaderContainer} from './components/HeaderContainer.styled';

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
    const contentTransition = usePageContentTransition(pageComponent);

    return (
        <div className={className}>
            <HeaderContainer>
                <Logo />
                <Header title={title} description={description} />
                <Menu activePath={pathname} />
            </HeaderContainer>
            <ConsoleContent id="test">
                {headerTransition(({props: {imageStyle, contentStyle, ...restProps}, item, key}) => (
                    <SideImage
                        key={key}
                        overlap={true}
                        imageSrc={item.image}
                        imageStyle={imageStyle}
                        contentStyle={contentStyle}
                        style={restProps}>
                        {item.headerContent}
                    </SideImage>
                ))}
            </ConsoleContent>
            {contentTransition(({props, key, item}) => item({style: props, key}))}
            <Footer />
        </div>
    );
};

export const DefaultLayout = styled(DefaultLayoutComponent)`
    display: grid;
    position: relative;
    grid-template-columns: minmax(0, 4fr) 3fr;
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

    ${ConsoleContent} {
        grid-column: 1 / -1;
    }

    ${Footer} {
        grid-column: 1 / -1;
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
