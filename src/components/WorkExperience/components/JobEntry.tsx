import React, {FunctionComponent} from 'react';
import styled from 'styled-components/macro';
import {COLOR_GRAY, COLOR_MAIN, FONT_SERIF} from '../../../constants/style.constants';
import {useBoundingBox} from '../../../hooks/useBoundingBox';
import {mediaMax, mediaMin} from '../../../utils/style.utils';
import {themePx, themeSpacer} from '../../../utils/theme.utils';
import {JobPointerIcon} from '../icons/JobPointerIcon';
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
const COLOR_TIMELINE = COLOR_GRAY[4];
const COLOR_PRESENT = COLOR_MAIN[4];

const JobEntryComponent: FunctionComponent<JobEntryProps> = ({children, className, company, isPresent, title, year, stack}) => {
    const [yearRef, boundingBox] = useBoundingBox<HTMLDivElement>();

    return (
        <li className={className}>
            <div className="indicator" />
            <div className="line" />
            <div className="year" ref={yearRef}>
                <JobPointerIcon
                    width={(boundingBox && boundingBox.width) || 0}
                    height={24}
                    fill={isPresent ? COLOR_PRESENT : COLOR_TIMELINE}
                />
                {!year && isPresent ? 'Present' : year}
            </div>
            {stack && stack.length && <TechStack stack={stack} />}
            <div className="meta">
                <div className="company">{company}</div>
                {title && <div className="title">{title}</div>}
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

    ${mediaMin('sm')} {
        margin: 0 ${INDICATOR_SIZE};
    }

    .indicator {
        display: block;
        grid-column: 1 / 1;
        width: ${INDICATOR_SIZE};
        height: ${INDICATOR_SIZE};
        transform: translateY(4px) translateX(-50%) rotate(45deg);
        border: 3px solid;
        border-color: ${({isPresent}) => (isPresent ? COLOR_PRESENT : COLOR_TIMELINE)};

        ${mediaMax('sm')} {
            display: none;
        }
    }

    .line {
        display: block;
        grid-column: 1 / 1;
        grid-row: 2 / 4;
        width: 3px;
        height: 100%;
        transform: translateX(-50%);
        background: ${({isPresent}) => (isPresent ? COLOR_PRESENT : COLOR_TIMELINE)};

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
        color: ${COLOR_GRAY[8]};
        font-size: 12px;
        line-height: 24px;
        text-transform: uppercase;

        svg {
            position: absolute;
            z-index: -1;
            top: 0;
            right: 0;
            transform: scaleX(-1);

            ${mediaMin('sm')} {
                right: -24px;
            }
        }
    }

    .meta {
        display: flex;
        flex-direction: row;
        grid-column: 1 / -1;
        flex: 1 0;
        line-height: 1.1;

        ${mediaMin('sm')} {
            grid-column: 2 / -1;
        }

        .company {
            font-size: 18px;
            font-weight: 600;
        }

        .title {
            color: ${COLOR_TIMELINE};
            font-family: ${FONT_SERIF};
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

        p {
            margin: 0 0 ${themeSpacer(6)} 0;
        }

        ${mediaMax('sm')} {
            margin-left: ${themeSpacer(6)};
        }
    }

    ${mediaMin('sm')} {
        .content,
        .meta,
        .year {
            grid-column: 2 / -1;
        }
    }
`;
