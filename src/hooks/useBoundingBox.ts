import {useState, useEffect, useRef, RefObject} from 'react';

export function useBoundingBox<T extends HTMLElement>(): [RefObject<T>, ClientRect | DOMRect | undefined] {
    const elRef = useRef<T>(null);
    const [boundingBox, setBoundingBox] = useState<ClientRect | DOMRect>();
    useEffect(() => {
        if (elRef.current) {
            setBoundingBox(elRef.current.getBoundingClientRect());
        }
    }, [elRef]);

    return [elRef, boundingBox];
}
