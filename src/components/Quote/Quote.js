import PropTypes from "prop-types";
import styles from "./Quote.module.css";

const propTypes = {
  quotes: PropTypes.array.isRequired,
  quoteNumber: PropTypes.number.isRequired,
};

export default function Quote({ quotes, quoteNumber }) {
  return (
    <article className={styles.quote}>
      <h1 className={styles.quote__author}>{quotes[quoteNumber]?.author}</h1>
      <p className={styles.quote__text}>{quotes[quoteNumber]?.text}</p>
    </article>
  );
}

Quote.propTypes = propTypes;
