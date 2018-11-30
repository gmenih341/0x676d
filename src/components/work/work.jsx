import React from 'react';
import {GridRow, GridCol} from '../grid/grid.component';
import {ConsoleBox} from '../console-box/console-box.component';

export function Work () {
    return (
        <>
            <GridRow>
                <GridCol>
                    <ConsoleBox title="Projects I'm proud of">None</ConsoleBox>
                </GridCol>
            </GridRow>
            <GridRow>
                <GridCol>
                    <ConsoleBox title="Open source">None</ConsoleBox>
                </GridCol>
            </GridRow>
        </>
    );
}
