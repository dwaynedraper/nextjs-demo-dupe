import React from "react";
import Button from "@/components/basic/Button";

export default function CTA({
  className = "",
  heading = "Better Solutions for Business",
  subheading = "We are team of talented designers making websites",
  buttonText = "Get Started",
  buttonHref = "#about",
}) {
  return (
    <div className={`h-72 flex flex-col grow-0 justify-between ${className}`}>
      <h1 className='text-brand-900 text-6xl font-bold'>{heading}</h1>
      <h2 className='text-brand-dark text-3xl'>{subheading}</h2>
      <Button />
    </div>
  );
}
