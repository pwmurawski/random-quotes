import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Buttons.module.css";
import getRandomInt from "../../helpers/getRandom";
import Button from "./Button/Button";

const propTypes = {
  quotes: PropTypes.array.isRequired,
  setQuoteNumber: PropTypes.func.isRequired,
  quoteHistory: PropTypes.array.isRequired,
  setQuoteHistory: PropTypes.func.isRequired,
};

export default function Buttons({
  quotes,
  setQuoteNumber,
  quoteHistory,
  setQuoteHistory,
}) {
  const [historyPosition, setHistoryPosition] = useState(null);

  const getNewQuote = () => {
    const random = getRandomInt(0, quotes.length);
    setQuoteNumber(random);
    setQuoteHistory([...quoteHistory, random]);
    setHistoryPosition(null);
  };

  const prevBtnHandler = () => {
    if (historyPosition > -(quoteHistory.length - 1)) {
      setHistoryPosition(historyPosition - 1);
    }
  };

  const nextBtnHandler = () => {
    if (historyPosition < 0) {
      setHistoryPosition(historyPosition + 1);
    }
  };

  useEffect(() => {
    if (historyPosition !== null) {
      setQuoteNumber(quoteHistory[quoteHistory.length - 1 + historyPosition]);
    }
  }, [historyPosition]);

  return (
    <section className={styles.container}>
      <Button btnText="Poprzedni" onClick={prevBtnHandler} />
      <Button btnText="Losuj cytat" onClick={getNewQuote} />
      <Button btnText="Następny" onClick={nextBtnHandler} />
    </section>
  );
}

Buttons.propTypes = propTypes;
