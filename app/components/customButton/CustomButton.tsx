import React from "react";
import Link from "next/link";
import styles from "./CustomButton.module.scss";

const CustomButton = (props: any) => {
  const backgroundColor = props.backgroundColor;
  const href = props.href;
  // console.log(background)



  return (
    <button
      className={styles.Btn}
      style={{backgroundColor: backgroundColor}}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
};

export default CustomButton;
