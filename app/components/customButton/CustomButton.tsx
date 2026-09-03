import React from "react";
import styles from "./CustomButton.module.scss";

const CustomButton = (props: any) => {
  const {
    value,
    onClick,
    href,

    // SAFE DEFAULTS — prevents Chrome mobile blue text
    backgroundColor = "#f9710b",
    color = "white",
    border = "none",
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
