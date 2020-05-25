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

const INDICATOR_SIZE = '16px';

const JobEntryComponent: FunctionComponent<JobEntryProps> = ({children, className, company, isPresent, title, year, stack}) => {
    return (
        <li className={className}>
            <div className="indicator" />
            <div className="line" />
            <div className="year">{year}</div>
            {stack && stack.length && <TechStack stack={stack} />}
            <div className="meta">
                <div className="company">{title}</div>
                {title && <div className="title">at {company}</div>}
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

    &:not(:last-of-type) {
        padding-bottom: ${themePx((t) => t.spacers[9] - t.spacers[5])};
    }

    .indicator {
        display: block;
        grid-column: 1 / 1;
        width: ${INDICATOR_SIZE};
        height: ${INDICATOR_SIZE};
        transform: translateY(4px) translateX(-50%) rotate(45deg);
        border: 3px solid;
        border-color: ${(p) => themeColor(p.isPresent ? 'mainLight' : 'pageBackground', 1)};

        ${mediaMax('sm')} {
            display: none;
        }
    }

    .line {
        display: block;
        grid-column: 1 / 1;
        grid-row: 2 / 4;
        width: 2px;
        height: 100%;
        transform: translateX(-50%);
        background: ${(p) => themeColor(p.isPresent ? 'mainLight' : 'pageBackground', 0.4)};

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

        ${mediaMin('sm')} {
            margin-left: ${themeSpacer(5, -1)};
        }
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

        .company {
            font-size: 18px;
            font-weight: 600;
            letter-spacing: 1px;
        }

        .title {
            color: ${(p) => themeColor(p.isPresent ? 'mainLight' : 'textLight')};
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
        margin: 0 ${INDICATOR_SIZE};
        .content,
        .meta,
        .year {
            grid-column: 2 / -1;
        }
    }
`;
