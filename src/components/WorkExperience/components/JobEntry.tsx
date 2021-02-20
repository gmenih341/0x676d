import React, {FunctionComponent} from 'react';
import styled from 'styled-components/macro';
import {mediaMax, mediaMin} from '../../../utils/style.utils';
import {themeColor, themePx, themeSpacer} from '../../../utils/theme.utils';
import {TechStack} from './TechStack';

interface JobEntryProps {
    company: string;
    title?: string;
    year?: string;
    className?: string;
    isPresent?: boolean;
    stack?: string[];
}

const INDICATOR_SIZE = '14px';

const JobEntryComponent: FunctionComponent<JobEntryProps> = ({children, className, company, title, year, stack}) => {
    return (
        <li className={className}>
            <div className="indicator" />
            <div className="line" />
            <div className="year">{year}</div>
            {stack && stack.length && <TechStack stack={stack} />}
            <div className="meta">
                <div className="title">{title}</div>
                {title && <div className="company">at {company}</div>}
            </div>
            <div className="content">{children}</div>
        </li>
    );
};

export const JobEntry = styled(JobEntryComponent)`
    display: grid;
    grid-template-columns: ${themeSpacer(6)} 200px 1fr;
    grid-template-rows: max-content;
    grid-gap: ${themeSpacer(6)};
    grid-row-gap: ${themeSpacer(8)};
    padding-left: 4px;

    &:not(:last-of-type) {
        padding-bottom: calc(${themeSpacer(8)});
    }

    &:hover {
        .line {
            opacity: 0.4;
        }
    }

    .indicator {
        display: block;
        grid-column: 1 / 1;
        width: ${({isPresent}) => (isPresent ? '16px' : INDICATOR_SIZE)};
        height: ${({isPresent}) => (isPresent ? '16px' : INDICATOR_SIZE)};
        transform: translateY(4px) translateX(0) rotate(45deg);
        border: 3px solid;
        border-color: ${(p) => themeColor(p.isPresent ? 'mainLight' : 'pageBackground', 1)};

        ${mediaMax('sm')} {
            grid-row: 1 / 1;
            display: none;
        }
    }

    .line {
        display: block;
        grid-column: 1 / 1;
        grid-row: 2 / 4;
        width: 2px;
        height: 100%;
        transform: translateX(calc(${INDICATOR_SIZE} / 2));
        background: ${(p) => themeColor(p.isPresent ? 'mainLight' : 'pageBackground')};
        opacity: 0.2;
        transition: opacity 100ms ease-in;

        ${mediaMax('sm')} {
            display: none;
        }
    }

    .year {
        position: relative;
        grid-column: 1 / 3;
        grid-row: 1 / 1;
        z-index: 10;
        justify-self: start;
        padding-right: ${themeSpacer(9)};
        color: ${(p) => themeColor(p.isPresent ? 'mainLight' : 'pageBackground')};
        font-size: 14px;
        line-height: 24px;
        text-transform: uppercase;
    }

    .meta {
        display: flex;
        grid-column: 1 / -1;
        flex: 1 0;
        flex-direction: column;
        line-height: 1.1;

        ${mediaMin('sm')} {
            grid-column: 2 / -1;
        }

        .title {
            font-size: 18px;
            font-weight: 600;
            letter-spacing: 1px;
        }

        .company {
            /* color: ${(p) => themeColor(p.isPresent ? 'mainLight' : 'textLight')}; */
            font-size: 14px;
        }
    }

    ${TechStack} {
        grid-column: 3 / -1;
        grid-row: 1 / 1;
    }

    .content {
        grid-column: 1 / -1;
        font-size: 14px;

        p:last-child {
            margin: 0;
        }

        p:not(:last-child) {
            margin: 0 0 ${themeSpacer(4)} 0;
        }

        ${mediaMax('sm')} {
            margin-left: ${themeSpacer(4)};
        }
    }

    ${mediaMin('sm')} {
        .content,
        .meta,
        .year {
            grid-column: 2 / -1;
        }

        .content {
            padding-bottom: ${themeSpacer(2)};
        }

        .meta {
            padding-top: ${themeSpacer(2)};
        }
    }
`;
