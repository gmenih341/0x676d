import React, {FunctionComponent} from 'react';
import styled from 'styled-components/macro';
import {COLOR_GRAY, FONT_SERIF, SPACER, SPACER_BIG} from '../../style.contants';
import {mediaMax, mediaMin} from '../../utils/style.utils';

interface TimelineItemProps {
    company: string;
    title: string;
    year?: string;
    className?: string;
    isPresent?: boolean;
}

const TimelineItemComponent: FunctionComponent<TimelineItemProps> = ({children, className, company, isPresent, tags, title, year}) => {
    return (
        <li className={className}>
            <div className="indicator" />
            <div className="year">{!year && isPresent ? 'Present' : year}</div>
            <div className="meta">
                <div className="company">{company}</div>
                <div className="title">{title}</div>
            </div>
            <div className="content">{children}</div>
        </li>
    );
};

const INDICATOR_SIZE = 12;
const COLOR_TIMELINE = COLOR_GRAY[4];

export const TimelineItem = styled(TimelineItemComponent)`
    display: grid;
    grid-template-columns: ${SPACER}px 120px auto;
    grid-template-rows: repeat(max-content);
    grid-gap: ${SPACER}px;

    &:not(:last-of-type) {
        padding-bottom: ${SPACER_BIG - SPACER}px;
    }

    ${mediaMin('md')} {
        margin-left: ${INDICATOR_SIZE}px;
        border-left: 3px solid ${COLOR_TIMELINE};
    }

    .indicator {
        width: ${INDICATOR_SIZE}px;
        height: ${INDICATOR_SIZE}px;
        transform: translateX(${-INDICATOR_SIZE / 2 - 5}px) translateY(4px) rotate(45deg);
        border: 3px solid ${({isPresent}) => (isPresent ? COLOR_TIMELINE : COLOR_GRAY[8])};
        outline: 1px solid ${({isPresent}) => (isPresent ? COLOR_TIMELINE : COLOR_GRAY[8])};
        background: ${({isPresent}) => (isPresent ? COLOR_GRAY[9] : COLOR_TIMELINE)};

        ${mediaMax('md')} {
            display: none;
        }
    }

    .year {
        grid-column: 1 / -1;
        color: ${COLOR_TIMELINE};
        font-size: 12px;
        line-height: ${INDICATOR_SIZE}px;
        text-transform: uppercase;

        ${mediaMin('md')} {
            grid-column: 2 / 3;
            margin-top: 8px;
        }
    }

    .meta {
        grid-column: 1 / -1;
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

    .tags {
        grid-column: 2 / 3;
        overflow: hidden;
        color: ${COLOR_GRAY[6]};
        font-size: 11px;
        font-size: 30px;
        line-height: 0.8;
        text-align: justify;
        text-transform: uppercase;
        word-break: break-all;

        .tag {
            display: inline-block;
        }
    }

    .content {
        grid-column: 2 / -1;
        font-size: 14px;

        p {
            margin: 0 0 ${SPACER}px 0;
        }
    }
`;
