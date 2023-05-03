import React from "react";
import PropTypes from "prop-types";

export default function Button({
  url = "",
  type = "submit",
  children,
  className = "",
}) {
  const classes = className
    ? className
    : `border-primary bg-primary hover:bg-primary-hover text-brand-lighter hover:text-brand-100 py-4 px-6 rounded focus:outline-none text-2xl font-bold w-fit`;

  return (
    <button
      className={classes}
      type={type}
      onClick={() => (url ? (window.location.href = url) : null)}
    >
      {children || "Submit"}
    </button>
  );
}
