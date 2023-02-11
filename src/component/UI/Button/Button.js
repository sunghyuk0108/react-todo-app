import React from "react";
import styles from "./Button.module.css";
//이렇게 작성 시 기본적으로 css모듈이 작동하도록 코드를 변환하라고 컴파일 프로세스에게 보내는 신호임.

const Button = (props) => {
  console.log(props.onClick)
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
    {props.children}
    {/* className={styles.button} styles객체를 활용하여 module 클래스 사용하기. */}
  </button>
  );
};

export default Button;
