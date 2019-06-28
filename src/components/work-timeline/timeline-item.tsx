import React, {FunctionComponent} from 'react';
import styled from 'styled-components/macro';
import {useBoundingBox} from '../../hooks/useBoundingBox';
import {COLOR_GRAY, COLOR_MAIN, FONT_SERIF, SPACER, SPACER_BIG} from '../../style.contants';
import {mediaMax, mediaMin} from '../../utils/style.utils';
import {PointerIcon} from '../icons/pointer-icon';

interface TimelineItemProps {
    company: string;
    title: string;
    year?: string;
    className?: string;
    isPresent?: boolean;
}

const INDICATOR_SIZE = 16;
const COLOR_TIMELINE = COLOR_GRAY[4];
const COLOR_PRESENT = COLOR_MAIN[4];

const TimelineItemComponent: FunctionComponent<TimelineItemProps> = ({children, className, company, isPresent, title, year}) => {
    const [yearRef, boundingBox] = useBoundingBox<HTMLDivElement>();

    return (
        <li className={className}>
            <div className="indicator" />
            <div className="line" />
            <div className="year" ref={yearRef}>
                <PointerIcon
                    width={(boundingBox && boundingBox.width) || 0}
                    height={24}
                    fill={isPresent ? COLOR_PRESENT : COLOR_TIMELINE}
                />
                {!year && isPresent ? 'Present' : year}
            </div>
            <div className="meta">
                <div className="company">{company}</div>
                <div className="title">{title}</div>
            </div>
            <div className="content">{children}</div>
        </li>
    );
};

export const TimelineItem = styled(TimelineItemComponent)`
    display: grid;
    grid-template-columns: ${SPACER}px 1fr;
    grid-template-rows: max-content;
    grid-gap: ${SPACER}px;

    &:not(:last-of-type) {
        padding-bottom: ${SPACER_BIG - SPACER}px;
    }

    ${mediaMin('md')} {
        margin: 0 ${INDICATOR_SIZE}px;
    }

    .indicator {
        display: block;
        grid-column: 1 / 1;
        width: ${INDICATOR_SIZE}px;
        height: ${INDICATOR_SIZE}px;
        transform: translateY(4px) translateX(-50%) rotate(45deg);
        border: 3px solid;
        border-color: ${({isPresent}) => (isPresent ? COLOR_PRESENT : COLOR_TIMELINE)};

        ${mediaMax('md')} {
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

        ${mediaMax('md')} {
            display: none;
        }
    }

    .year {
        position: relative;
        grid-column: 1 / -1;
        justify-self: start;
        padding-right: ${SPACER_BIG}px;
        color: ${COLOR_GRAY[9]};
        font-size: 12px;
        line-height: 24px;
        text-transform: uppercase;

        svg {
            position: absolute;
            z-index: -1;
            top: 0;
            left: -27px;

            ${mediaMin('md')} {
                left: -12px;
            }
        }
    }

    .meta {
        grid-column: 1 / -1;
        flex: 1 0;
        line-height: 1.4;

        ${mediaMin('md')} {
            grid-column: 2 / -1;
        }

        .company {
            font-size: 18px;
            font-weight: 700;
        }

        .title {
            color: ${COLOR_TIMELINE};
            font-family: ${FONT_SERIF};
            font-size: 14px;
        }
    }

    .content {
        grid-column: 1 / -1;
        font-size: 14px;

        p {
            margin: 0 0 ${SPACER}px 0;
        }

        ${mediaMax('md')} {
            margin-left: ${SPACER}px;
        }
    }

    ${mediaMin('md')} {
        .content,
        .meta,
        .year {
            grid-column: 2 / -1;
        }
    }
`;
