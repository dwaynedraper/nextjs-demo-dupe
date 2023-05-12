import React from "react";

interface UnsetProps {
  children: React.ReactNode;
}

export default function Unset({ children }: UnsetProps): React.ReactElement {
  return <div className='unset'>{children}</div>;
}
