import Layout from "@/components/layout";
import React, { useCallback } from "react";
import { useForm } from 'react-hook-form';
import emailjs from "@emailjs/browser";
import styles from "../../styles/contact.module.css";
import utilStyles from "../../styles/utils.module.css";


export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset, } = useForm();

  const resetForm = useCallback(() => {
    const result = {name: "", email: "", message: ""}
    reset(result);
  }, [reset]);

  const sendEmail = (data, e) => {
    e.preventDefault()
    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      data,
      process.env.REACT_APP_EMAILJS_USER_ID,

    )
      .then(resetForm())
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <Layout contact>
      <div className={styles.container}>
        <h2>CONTACT</h2>
        <p>FOR BOOKING AND PRESS INQUIRIES, PLEASE MAIL BELOW</p>
      <form onSubmit={handleSubmit(sendEmail)}>
        <div className={styles.nameEmailCont}>
          <div>
            <input placeholder='Name' {...register('name', {
              required: {
                value: true,
                message: "Please add your name."
              }
             })}/>
            {errors.name && <p className={utilStyles.errorMessage}>{errors.name.message}</p>}
          </div>
          <div>
            <input placeholder='Email' {...register('email', {
              required: {
                value: true,
                message: "You need to specify an email address so we can contact you back."
              },
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Make sure your email is in the right format!"
              }
             })} />
            {errors.email && <p className={utilStyles.errorMessage}>{errors.email.message}</p>}
          </div>
        </div>
        <textarea placeholder='Message' {...register('message', {
           maxLength: {
            value: 300,
            message: "300 characters should be more than enough!"
          }
          })}/>

          {errors.message && <p className={utilStyles.errorMessage}>{errors.message.message}</p>}
        <input className={styles.formSubmit} type='submit' value='Send' />
      </form>
      </div>
    </Layout>
  )
}
