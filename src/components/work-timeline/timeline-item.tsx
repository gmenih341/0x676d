import React, {FunctionComponent} from 'react';
import styled from 'styled-components/macro';
import {COLOR_GRAY, FONT_SERIF, SPACER, SPACER_SMALL, SPACER_BIG} from '../../style.contants';
import {mediaMax, mediaMin} from '../../utils/style.utils';

interface TimelineItemProps {
    company: string;
    title: string;
    year?: string;
    className?: string;
    isPresent?: boolean;
    tags?: string[];
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
            {/* {tags && tags.length && 
            <div className="tags">{tags.map(tag => <span className='tag'>{tag}</span>)}</div>
        } */}
            <div className="content" style={{flexBasis: '100%'}}>
                {children}
            </div>
        </li>
    );
};

const INDICATOR_SIZE = 12;
const COLOR_TIMELINE = COLOR_GRAY[5];

export const TimelineItem = styled(TimelineItemComponent)`
    display: grid;
    grid-template-columns: 0px 120px auto;
    grid-template-rows: repeat(max-content);
    grid-gap: ${SPACER}px;

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
        background: ${({isPresent}) => (isPresent ? COLOR_GRAY[8] : COLOR_TIMELINE)};

        ${mediaMax('md')} {
            display: none;
        }
    }

    .year {
        color: ${COLOR_TIMELINE};
        font-size: 12px;
        line-height: ${INDICATOR_SIZE}px;
        text-transform: uppercase;

        ${mediaMin('md')} {
            flex: 0 0 120px;
            margin-top: 8px;
            margin-left: ${SPACER_SMALL}px;
        }
    }

    .meta {
        flex: 1 0;
        line-height: 1.4;

        .company {
            font-size: 18px;
            font-weight: 700;
        }

        .title {
            color: ${COLOR_GRAY[4]};
            font-family: ${FONT_SERIF};
            font-size: 14px;
        }
    }

    .tags {
        grid-column: 2 / 3;
        margin: 0 ${-SPACER_SMALL / 2}px;
        font-size: 11px;

        .tag {
            display: inline-block;
            margin: 0 ${SPACER_SMALL / 2}px;
            margin-bottom: ${SPACER_SMALL}px;
            padding: 2px;
            border-radius: 3px;
            background: ${COLOR_GRAY[4]};
        }
    }

    .content {
        grid-column: 3 / -1;
        font-size: 14px;

        p {
            margin: 0 0 ${SPACER_BIG}px 0;
        }

        ${mediaMax('md')} {
            margin-left: ${SPACER}px;
        }
    }
`;
