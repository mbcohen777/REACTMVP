import React from "react";

export default function Quote({ quote }) {
  return (
    <ul className="indQuote">
      <li key={quote.id}>
        <span>{quote.id}</span>
        <span>{quote.quote}</span>
        <span>{quote.person_name}</span>
      </li>
    </ul>
  );
}
