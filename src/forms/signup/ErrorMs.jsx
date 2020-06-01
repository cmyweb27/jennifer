import React from "react";
import style from "./SignUp.module.css";
export default function ErrroMessage({ error }) {
  if (error) {
    switch (error.type) {
      case "required":
        return <p className={style.errorMessage}> required</p>;
      case "minLength":
        return <p className={style.errorMessage}> minmium of 2 charcaters</p>;
      case "pattern":
        return <p className={style.errorMessage}>*email not valid</p>;
      case "min":
        return <p className={style.errorMessage}>Minmium age is 18</p>;
      case "validate":
        return <p className={style.errorMessage}>Username is already used</p>;
      default:
        return null;
    }
  }

  return null;
}
