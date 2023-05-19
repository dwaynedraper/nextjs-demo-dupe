import React from "react";
import Image from "next/image";

interface CardUserProps {
  name?: string;
  title?: string;
  imageUrl?: string;
}

export default function CardUser({
  name = "John Doe",
  title = "Software Engineer",
  imageUrl = "https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
}: CardUserProps): React.ReactElement {
  return (
    <div className='w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800'>
      <Image className='object-cover w-full h-56' height={224} width={336} src={imageUrl} alt='avatar' />
      <div className='py-5 text-center'>
        <a
          href='#'
          className='block text-xl font-bold text-gray-800 dark:text-white'
          tabIndex={0}
          role='link'
        >
          {name}
        </a>
        <span className='text-sm text-gray-700 dark:text-gray-200'>
          {title}
        </span>
      </div>
    </div>
  );
}
