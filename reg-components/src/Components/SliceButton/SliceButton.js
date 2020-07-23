import React from "react";
import styles from "./sliceButton.module.scss";

const SliceButton = ({onClick, text="button", className, style={}, href="#"}) => {

// append classNames
  const classNames = [ styles.btn, styles.btnStyle, className].join(' ').trim();
  return (
        <a href={href} style={style} onClick={onClick} className={classNames}><span>{text}</span></a>
   
  );
};

export default SliceButton;
