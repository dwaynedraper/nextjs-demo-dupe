import React from "react";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

/**
 * This component is meant to be a top level wrapper component in the main content area of a page.
 * It is a container for a component in the components\composite folder.
 * @returns {React.ReactElement} A wrapper component for a layout element.
 */
export default function Container({ children, className="" }: ContainerProps): React.ReactElement {
  return (
    <div className={`flex items-center ${className}`}>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row items-center'>{children}</div>
      </div>
    </div>
  );
}
