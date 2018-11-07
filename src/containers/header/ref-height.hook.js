import {useRef, useState, useEffect} from 'react';

const DEFAULT_HEIGHT = 177;

export function useRefHeight () {
    const scrollableRef = useRef();
    const [height, setHeight] = useState(DEFAULT_HEIGHT);

    useEffect(
        () => {
            setHeight(scrollableRef.current.firstChild.clientHeight);
        },
        [scrollableRef],
    );

    return [height, scrollableRef];
}
