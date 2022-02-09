import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [quoteNumber, setQuoteNumber] = useState(null);
  const [historyPosition, setHistoryPosition] = useState(null);
  const [quoteNumberHistory, setQuoteNumberHistory] = useState([]);
  const [quotes, setQuotes] = useState([]);

  const getRandomInt = (min, max) => {
    const num1 = Math.ceil(min);
    const num2 = Math.floor(max);
    return Math.floor(Math.random() * (num2 - num1)) + num1;
  };

  const getNewQuote = () => {
    const random = getRandomInt(0, quotes.length);
    setQuoteNumber(random);
    setQuoteNumberHistory([...quoteNumberHistory, random]);
    setHistoryPosition(null);
  };

  const getQuotes = async () => {
    const request = await fetch("https://type.fit/api/quotes");
    const res = await request.json();
    setQuotes(res);
  };

  const prevBtnHandler = () => {
    if (historyPosition > -(quoteNumberHistory.length - 1)) {
      setHistoryPosition(historyPosition - 1);
    }
  };
  const nextBtnHandler = () => {
    if (historyPosition < 0) {
      setHistoryPosition(historyPosition + 1);
    }
  };

  useEffect(() => {
    getQuotes();
  }, []);

  useEffect(() => {
    if (quotes.length !== 0) {
      const random = getRandomInt(0, quotes.length);
      setQuoteNumber(random);
      setQuoteNumberHistory([...quoteNumberHistory, random]);
    }
  }, [quotes]);

  useEffect(() => {
    if (historyPosition !== null) {
      setQuoteNumber(
        quoteNumberHistory[quoteNumberHistory.length - 1 + historyPosition]
      );
    }
  }, [historyPosition]);

  return (
    <main className="wrapper">
      <section className="container">
        <article className="quote">
          <h1 className="quote__author">{quotes[quoteNumber]?.author}</h1>
          <p className="quote_text">{quotes[quoteNumber]?.text}</p>
        </article>
        <section className="containerBtn">
          <button className="btn" onClick={prevBtnHandler} type="button">
            Poprzedni
          </button>
          <button className="btn" onClick={getNewQuote} type="button">
            Losuj cytat
          </button>
          <button className="btn" onClick={nextBtnHandler} type="button">
            Następny
          </button>
        </section>
      </section>
    </main>
  );
}

export default App;
