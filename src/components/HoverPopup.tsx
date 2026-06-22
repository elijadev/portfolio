"use client";

import { useState, useRef } from 'react';
import {
    useFloating,
    useHover,
    useInteractions,
    autoUpdate,
    offset,
    flip,
    shift,
    arrow,
    FloatingArrow,
} from '@floating-ui/react';

interface HoverPopupProps {
    children: React.ReactNode;
    popupContent: React.ReactNode;
}

export const HoverPopup = ({ children, popupContent }: HoverPopupProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const arrowRef = useRef(null);
    const { refs, floatingStyles, context } = useFloating({
        open: isOpen,
        onOpenChange: setIsOpen,
        whileElementsMounted: autoUpdate, // Automatically update position on scroll or resize
        placement: 'top',
        middleware: [
            offset(10),
            flip(),
            shift(),
            arrow({
                element: arrowRef,
            }),
        ],
    });

  const hover = useHover(context, { move: false });
  const { getReferenceProps, getFloatingProps } = useInteractions([hover]);

    return (
        <>
            <div className="w-fit" ref={refs.setReference} {...getReferenceProps()}>
                {children}
            </div>

            {isOpen && (
            <div
                ref={refs.setFloating}
                style={floatingStyles}
                {...getFloatingProps()}
                className="bg-gray-800 text-white text-sm rounded-lg py-1.5 px-3 shadow-lg z-50 text-wrap max-w-80">
                {popupContent}
                <FloatingArrow className="bg-gray-800" ref={arrowRef} context={context} />
            </div>
            )}
        </>
    );
};
