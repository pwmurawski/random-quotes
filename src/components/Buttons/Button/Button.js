import PropTypes from "prop-types";
import styles from "./Button.module.css";

const propTypes = {
  btnText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default function Button({ btnText, onClick }) {
  return (
    <button className={styles.btn} onClick={onClick} type="button">
      {btnText}
    </button>
  );
}

Button.propTypes = propTypes;
