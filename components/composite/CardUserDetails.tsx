import React from "react";
import { BiBrain, BiBriefcase } from "react-icons/bi";
import { GoLocation, GoMail } from "react-icons/go";

interface CardUserDetailsProps {
  imageUrl?: string;
  emotion?: string;
  name?: string;
  description?: string;
  title?: string;
  location?: string;
  email?: string;
  className?: string;
}

/**
 * This component has an image, a user name, and several details about the user.
 * @param {string} imageUrl The image to display at the top of the card
 * @param {string} emotion How the user is feeling today
 * @param {string} name The user's full name
 * @param {string} description A freeform description of the user
 * @param {string} title The user's job title at the company
 * @param {string} location The user's physical location in the world
 * @param {string} email The user's email address
 * @param {string} className Any additional CSS class names you want to pass to the component
 * @returns
 */
export default function CardUserDetails({
  imageUrl,
  emotion,
  name,
  description,
  title,
  location,
  email,
  className = "",
}: CardUserDetailsProps): React.ReactElement | null {
  return (
    <div
      className={`flex-shrink flex-grow flex flex-wrap md:w-1/2 lg:w-1/3 ${className}`}
    >
      <div className='flex-shrink flex-grow overflow-hidden bg-brand-lighter rounded-lg shadow-lg dark:bg-brand-800 my-10 mx-3'>
        <img
          className='object-cover object-center w-full h-56'
          src={
            imageUrl
              ? imageUrl
              : "https://source.unsplash.com/random/?portrait,landscape"
          }
          alt='avatar'
        />

        <div className='flex items-center px-6 py-3 bg-brand-900'>
          <BiBrain className='text-3xl text-brand-lighter' />
          <h1 className='mx-3 text-lg font-semibold text-brand-lighter'>
            {emotion}
          </h1>
        </div>

        <div className='px-6 py-4'>
          <h1 className='text-xl font-semibold text-brand-800 dark:text-brand-lighter'>
            {name}
          </h1>

          <p className='py-2 text-brand-700 dark:text-brand-200'>
            {description}
          </p>

          <div className='flex items-center mt-4 text-brand-700 dark:text-brand-200'>
            <BiBriefcase className='text-2xl text-brand-800 dark:text-brand-200' />
            <h1 className='px-2 text-sm'>{title}</h1>
          </div>

          <div className='flex items-center mt-4 text-brand-700 dark:text-brand-200'>
            <GoLocation className='text-2xl text-brand-800 dark:text-brand-200' />
            <h1 className='px-2 text-sm'>{location}</h1>
          </div>

          <div className='flex items-center mt-4 text-brand-700 dark:text-brand-200'>
            <GoMail className='text-2xl text-brand-800 dark:text-brand-200' />
            <h1 className='px-2 text-sm'>{email}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
