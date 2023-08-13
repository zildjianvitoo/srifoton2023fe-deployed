import React from "react";
import NarahubungCard from "./NarahubungCard";

export default function NarahubungGrid({ contact }) {
  return (
    <div className="flex flex-col justify-center gap-8 md:gap-20 lg:gap-32 lg:flex-row">
      {contact.map((contact, index) => (
        <NarahubungCard
          key={index}
          name={contact.name}
          number={contact.whatsappNumber}
        />
      ))}
    </div>
  );
}
