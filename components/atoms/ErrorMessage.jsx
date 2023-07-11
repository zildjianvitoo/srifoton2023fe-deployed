import React from "react";

export default function ErrorMessage({ message }) {
  return (
    <p className="text-red-600 dark:text-red-400 dark:md:text-red-500">
      {message}
    </p>
  );
}
