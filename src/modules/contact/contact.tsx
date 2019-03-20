import React, {FunctionComponent} from 'react';
import styled from 'styled-components/macro';
import {Button} from '../../components/button/button';
import {ObfuscateText} from '../../components/obfuscate/obfuscate';
import {COLOR_GRAY, SPACER, SPACER_BIG} from '../../style.contants';
import {mediaMin} from '../../utils/style.utils';
import {FormSelect} from '../form-select/form-select';
import {FormText} from '../form-text/form-text';

const ContactPage = styled('section')`
    display: block;
`;

const ContactForm = styled('form')`
    display: grid;
    grid-template-rows: min-content min-content 300px min-content;
    grid-gap: ${SPACER}px;
    margin: ${SPACER_BIG}px 0;

    ${mediaMin('md')} {
        grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
        grid-template-rows: 1fr 300px;
    }
`;

const TextArea = styled(FormText)`
    ${mediaMin('md')} {
        grid-column: 1 / -1;
    }
`;

const MapSection = styled('div')`
    position: relative;
    text-align: center;
    text-shadow: 1px 1px 0 ${COLOR_GRAY[9]}, -1px 1px 0 ${COLOR_GRAY[9]};

    .info {
        margin-bottom: ${SPACER}px;
        padding: ${SPACER_BIG}px 0;
        text-align: center;

        ${mediaMin('md')} {
            display: inline-block;
            width: 250px;
            padding-right: ${SPACER_BIG}px;
            border-right: 1px solid ${COLOR_GRAY[5]};
            text-align: right;
            vertical-align: middle;
        }
    }

    .map {
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0.2;
        background: url(/static/maribor.png) no-repeat center top;
        background-size: 100% auto;

        ${mediaMin('md')} {
            display: inline-block;
            position: static;
            width: 250px;
            height: 250px;
            margin: 0 auto;
            margin-left: ${SPACER_BIG}px;
            opacity: 1;
            background-size: auto 100%;
            vertical-align: middle;
        }
    }

    h3 {
        margin: 0;
        margin-bottom: ${SPACER}px;
    }
`;

export const Contact: FunctionComponent = () => {
    const subjectOptions: string[] = [
        'I want to work with you',
        'I need help with a library you contributed to and stuff',
        'Option 3',
        'Option 4',
        'T',
    ];
    return (
        <ContactPage>
            <MapSection>
                <div className="info">
                    <h3>Gregor Menih</h3>
                    <div>
                        Web developer @<br />
                        Equaleyes Solutions Ltd
                        <br />
                        Maribor, Slovenia
                        <br />
                        <br />
                        <ObfuscateText text="+386 (0)31 336 909" />
                        <br />
                        <ObfuscateText text="gregor@menih.si" />
                    </div>
                </div>
                <div className="map" />
            </MapSection>
            <ContactForm>
                <FormText placeholder="Your email" type="email" />
                <FormSelect name="subject" options={subjectOptions} placeholder="Subject" />
                <TextArea placeholder="What do you want to say?" multiline={true} />
                <Button>Send</Button>
            </ContactForm>
        </ContactPage>
    );
};
