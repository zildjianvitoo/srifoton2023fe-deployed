import React from "react";

export default function CredentialsCard({ children }) {
  return (
    <div className="px-3 pt-8  lg:px-6 pb-14 gradient-border-credentials lg:w-1/2">
      {children}
    </div>
  );
}
