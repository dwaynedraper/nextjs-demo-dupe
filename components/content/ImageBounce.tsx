import React from "react";
import Image from "next/image";

interface ImageBounceProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ImageBounce({ src, alt, className }: ImageBounceProps): React.ReactElement {
  return (
    <div className={className}>
      <Image src={src} alt={alt} className='bounce' />
    </div>
  );
}
