import React, { useState } from "react";

import { useForm } from "react-hook-form";
import ErrorMessage from "./ErrorMs";
import style from "./SignUp.module.css";

function SignUp() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data, "data");
  };
  const handleChange = (e) => {};

  return (
    <div>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <h2 className={style.h2}>Delevery Details</h2>
        <label className={style.label}>Name</label>
        <input
          className={style.input}
          name="firstName"
          ref={register({ required: true, minLength: 5 })}
        />
        <ErrorMessage error={errors.firstName} />

        <label className={style.label}>Email</label>
        <input
          className={style.input}
          onChange={handleChange}
          name="email"
          ref={register({ required: true, pattern: /^\S+@\S+$/i })}
        />
        <ErrorMessage error={errors.email} />
        <label className={style.label}>Phone Number</label>
        <input
          className={style.input}
          onChange={handleChange}
          name="phonenumber"
          type="number"
          ref={register({ required: true, min: 11 })}
        />
        <ErrorMessage error={errors.phonenumber} />
        <label className={style.label}> Address</label>
        <textarea
          className={style.textarea}
          onChange={handleChange}
          name="deliveryaddress"
          ref={register({ required: true, min: 11 })}
        />
        <ErrorMessage error={errors.deliveryaddress} />
        {/*<input className={style.input} type="submit" />*/}
        <div className={style.submitButton}>
          <button type="submit" className={`ui brown button fluid`}>
            Order Now
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
