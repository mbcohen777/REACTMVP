/* eslint-disable no-unused-vars */
import "./App.css";
import QuoteBox from "./QuoteBox.js";
import { useEffect, useState } from "react";

function App() {
  const [quotes, selectQuote] = useState([]);

function clickRed() {
    document.getElementById("demo").style.color = "red";
}

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
      alert('quote submitted!');
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
      alert('quote deleted!');
  }

  return (
    <>
      <h1 id="banner" title="Obviously the quotes are from when they were ALIVE.  We all know that dead people can't be quoted... reliably, anyway.">Quotes By Dead People</h1>
      <div className="quoteContainer">
        <QuoteBox quotes={quotes} />
      </div>
      <form onSubmit={submitQuote}>
        <h1 title="this is where you can add a quote">Add a Quote</h1>
        <input
          name="author"
          id="authorEntry"
          type="text"
          placeholder="author"
          required
        />{" "}
        <br></br>
        <input
          name="language"
          id="langEntry"
          type="text"
          placeholder="language"
          required
        />{" "}
        <br></br>
        <input
          name="quote"
          id="quoteEntry"
          type="text"
          placeholder="quote"
          required
        />{" "}
        <br></br>
        <button type="submit">add quote</button>
      </form>
      <form onSubmit={deleteQuote}>
        <br></br>
        <h1 title="this is where you can delete a quote">Delete A Quote</h1>
        <input
          name="toDelete"
          id="toDelete"
          type="text"
          placeholder="delete by id"
        />{" "}
        <br></br>
        <button type="submit">delete quote</button>
      </form>
    </>
  );
}

export default App;
