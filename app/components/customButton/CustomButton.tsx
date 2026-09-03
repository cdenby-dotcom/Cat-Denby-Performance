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
