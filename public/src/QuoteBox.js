import React from "react";
import Quote from "./Quote.js";

export default function QuoteBox({ quotes }) {
  return quotes.map((quote) => {
    return <Quote quote={quote} />;
  });
}
