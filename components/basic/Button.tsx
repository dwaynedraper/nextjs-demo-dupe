import React from "react";

interface ButtonProps {
  url?: string;
  type?: "submit" | "button" | "reset";
  name?: string;
  className?: string;
}

export default function Button({
  url = "",
  type = "submit",
  name = "Submit",
  className = "",
}: ButtonProps): React.ReactElement {
  const classes = className
    ? className
    : `border-primary bg-primary hover:bg-primary-hover text-brand-lighter hover:text-brand-100 py-4 px-6 rounded focus:outline-none text-2xl font-bold w-fit`;

  return (
    <button
      className={classes}
      type={type as "submit" | "button" | "reset"}
      onClick={() => (url ? (window.location.href = url) : null)}
    >
      {name}
    </button>
  );
}
