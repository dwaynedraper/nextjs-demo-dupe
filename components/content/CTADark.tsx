import React from "react";
import Button from "@/components/basic/Button";

interface CTADarkProps {
  className?: string;
  heading?: string;
  subheading?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CTADark({
  className = "",
  heading = "Better Solutions for Business",
  subheading = "We are team of talented designers making websites",
  buttonText = "Get Started",
  buttonHref = "#about",
}: CTADarkProps): React.ReactElement {
  return (
    <div className={`h-72 flex flex-col grow-0 justify-between ${className}`}>
      <h1 className='text-brand-900 text-6xl font-bold'>{heading}</h1>
      <h2 className='text-brand-dark text-3xl'>{subheading}</h2>
      <Button
        name={buttonText}
        url={buttonHref}
      />
    </div>
  );
}
