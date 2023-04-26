import React from "react";

/**
 * FiftyFifty is a composite component that takes two children and displays them side by side.
 * @param {*} param0
 * @returns A hero element with two children, each taking up 50% of the width
 */
export default function FiftyFifty({ children }) {
  const childrenArray = React.Children.toArray(children);
  return (
    <>
      <div className='w-full md:w-1/2'>{childrenArray[0]}</div>
      <div className='w-full md:w-1/2'>{childrenArray[1]}</div>
    </>
  )
}
