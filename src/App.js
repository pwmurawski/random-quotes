import { useEffect, useState } from "react";
import styles from "./App.module.css";
import getRandomInt from "./helpers/getRandom";
import Quote from "./components/Quote/Quote";
import Buttons from "./components/Buttons/Buttons";

function App() {
  const [quoteNumber, setQuoteNumber] = useState(0);
  const [quoteHistory, setQuoteHistory] = useState([]);
  const [quotes, setQuotes] = useState([]);

  const getQuotes = async () => {
    const request = await fetch("https://type.fit/api/quotes");
    const res = await request.json();
    setQuotes(res);
  };

  useEffect(() => {
    getQuotes();
  }, []);

  useEffect(() => {
    if (quotes.length !== 0) {
      const random = getRandomInt(0, quotes.length);
      setQuoteNumber(random);
      setQuoteHistory([...quoteHistory, random]);
    }
  }, [quotes]);

  return (
    <main className={styles.wrapper}>
      <section className={styles.container}>
        <Quote quotes={quotes} quoteNumber={quoteNumber} />
        <Buttons
          quotes={quotes}
          setQuoteNumber={setQuoteNumber}
          quoteHistory={quoteHistory}
          setQuoteHistory={setQuoteHistory}
        />
      </section>
    </main>
  );
}

export default App;
