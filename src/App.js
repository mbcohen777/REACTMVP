/* eslint-disable no-unused-vars */
import "./App.css";
import QuoteBox from "./QuoteBox.js";
import { useEffect, useState } from "react";

function App() {
  const [quotes, selectQuote] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/quotes", {
      mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        selectQuote(data);
      });
  }, []);

  // Submit a quote
  function submitQuote(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch("http://localhost:8000/quotes", {
      method: "POST",
      mode: "cors",

      body: JSON.stringify({
        quote: formData.get("quote"),
        original_language: formData.get("language"),
        person_name: formData.get("author"),
      }),

      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())

      // Displaying results to console
      .then((quote) => {
        selectQuote([...quotes, quote]);
      });
  }

  // Delete a quote

  function deleteQuote(event) {
    event.preventDefault();
    const delFormData = new FormData(event.target);
    fetch(`http://localhost:8000/quotes/${delFormData.get("toDelete")}`, {
      method: "DELETE",
      mode: "cors",

      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())

      .then((deletedQuote) => {
        const newQuotes = quotes.filter(quote => quote.id !== deletedQuote.id)
        console.log(newQuotes);
        selectQuote(newQuotes);
      });
  }

  return (
    <>
      <h1 id="banner">Quotes By Dead People</h1>
      <div className="quoteContainer">
        <QuoteBox quotes={quotes} />
      </div>
      <form onSubmit={submitQuote}>
        <h1>Add a Quote</h1>
        <input
          name="author"
          id="authorEntry"
          type="text"
          placeholder="author"
        />{" "}
        Author
        <br></br>
        <input
          name="language"
          id="langEntry"
          type="text"
          placeholder="language"
        />{" "}
        Original Language
        <br></br>
        <input
          name="quote"
          id="quoteEntry"
          type="text"
          placeholder="quote"
        />{" "}
        Quote
        <br></br>
        <button type="submit">add quote</button>
      </form>
      <form onSubmit={deleteQuote}>
        <br></br>
        <h1>Delete A Quote</h1>
        <input
          name="toDelete"
          id="toDelete"
          type="text"
          placeholder="delete by id"
        />{" "}
        delete
        <br></br>
        <button type="submit">delete quote</button>
      </form>
    </>
  );
}

export default App;
