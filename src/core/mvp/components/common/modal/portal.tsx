import { createPortal } from 'react-dom';
import { ReactNode, useLayoutEffect, useState } from "react";

interface Portal {
    children: ReactNode
    wrapperId: string
}

function createWrapperAndAppendToBody(wrapperId: string) {
    const wrapperElement = document.createElement('div');
    wrapperElement.setAttribute("id", wrapperId);
    document.body.appendChild(wrapperElement);
    return wrapperElement;
}


export const Portal = ({children, wrapperId = "react-portal-wrapper"}: Portal) => {
    const [wrapperElement, setWrapperElement] = useState<any>(null);

    useLayoutEffect(() => {
        let element = document.getElementById(wrapperId);
        let systemCreated = false;
        // if element is not found with wrapperId or wrapperId is not provided,
        // create and append to body
        if (!element) {
            systemCreated = true;
            element = createWrapperAndAppendToBody(wrapperId);
        }
        setWrapperElement(element);

        return () => {
            // delete the programatically created element
            if (systemCreated && element!.parentNode) {
                element!.parentNode!.removeChild(element as Node);
            }
        }
    }, [wrapperId]);

    // wrapperElement state will be null on very first render.
    if (wrapperElement === null) return null;

    return createPortal(children, wrapperElement);
}

