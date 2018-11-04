import {useEffect} from 'react';

const APP_NAME = 'Gregor Menih';

export function useDocumentTitle (pageTitle) {
    useEffect(
        () => {
            const title = `${APP_NAME} / ${pageTitle}`;
            document.title = title;
        },
        [pageTitle],
    );
}
