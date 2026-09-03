import React from "react";
import styles from "./CustomButton.module.scss";

const CustomButton = (props: any) => {
  const {
    backgroundColor,
    color,
    border,
    onClick,
    value,
    href
  } = props;

  return (
    <button
      className={styles.Btn}
      style={{
        backgroundColor,
        color,
        border,
      }}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default CustomButton;
.Btn {
  /* Kill Safari default blue button */
  appearance: none;
  -webkit-appearance: none;

  /* Your brand styling */
  background-color: #f9710b !important;
  color: white !important;
  border: none !important;

  font-family: 'Glacial Indifference', sans-serif;
  font-size: 1rem;
  padding: 12px 28px;
  border-radius: 6px;
  letter-spacing: 0.5px;

  cursor: pointer;
  transition: transform 0.15s ease, opacity 0.15s ease;

  &:active {
    transform: scale(0.97);
    opacity: 0.9;
  }
}
