import React from "react";

export default function Hero({ children }) {
  return (
    <div className='w-screen bg-brand-light flex items-center'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row items-center'>{children}</div>
      </div>
    </div>
  );
}
