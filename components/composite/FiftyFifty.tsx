import React from "react";

interface FiftyFiftyProps {
  children?: [React.ReactNode, React.ReactNode];
}

/**
 * This component is meant to be a direct child of Container, ContainerDark, ContainerReverse, or ContainerReverseDark.
 * It is a container for pieces of content. It is recommended to use or create a component
 * in the components\content folder to use as a child of this component.
 * @returns A layout element with two children, each taking up
 */
export default function FiftyFifty({ children }: FiftyFiftyProps): React.ReactElement {
  const childrenArray: React.ReactNode[] = React.Children.toArray(children);
  return (
    <>
      <div className='w-full md:w-1/2'>{childrenArray[0]}</div>
      <div className='w-full md:w-1/2'>{childrenArray[1]}</div>
    </>
  );
}
