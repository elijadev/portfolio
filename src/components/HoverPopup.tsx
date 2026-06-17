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

// Define the props for our component
interface HoverPopupProps {
  children: React.ReactNode; // The element that triggers the popup
  popupContent: React.ReactNode; // The content to show in the popup
}

export const HoverPopup = ({ children, popupContent }: HoverPopupProps) => {
  const [isOpen, setIsOpen] = useState(false);
    const arrowRef = useRef(null);
  const { refs, floatingStyles, context } = useFloating({
    // Keep the popup open or closed
    open: isOpen,
    onOpenChange: setIsOpen,
    // Automatically update position on scroll or resize
    whileElementsMounted: autoUpdate,
    // The initial placement of the popup
    placement: 'top',
    // Middleware handles the "smart" positioning
    middleware: [
      offset(10), // Add 10px of space between the trigger and the popup
      flip(),     // Flip to the opposite side if it's out of view
      shift(),    // Shift it along the axis to keep it in view
    arrow({
        element: arrowRef,
    }),
    ],
  });

  // useHover hook handles the mouse enter/leave logic
  const hover = useHover(context, { move: false });

  // useInteractions merges the hooks into props to be spread on elements
  const { getReferenceProps, getFloatingProps } = useInteractions([hover]);

  return (
    <>
      {/* The trigger element */}
      <div className="w-fit" ref={refs.setReference} {...getReferenceProps()}>
        {children}
      </div>

      {isOpen && (
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
          className="bg-gray-800 text-white text-sm rounded-lg py-1.5 px-3 shadow-lg z-50 text-wrap max-w-80"
        >
          {popupContent}
            <FloatingArrow className="bg-gray-800" ref={arrowRef} context={context} />
        </div>
      )}
    </>
  );
};
