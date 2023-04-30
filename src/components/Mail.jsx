import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom";

export const Mail = () => {

  const navigate = useHistory();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const loading = document.querySelector(".contact__overlay--loading");
    const success = document.querySelector(".contact__overlay--complete");

    loading.classList += " contact__overlay--visible";

    emailjs
      .sendForm(
        "service_gym010n",
        "template_h4dfitb",
        form.current,
        "EauK6lZM623AA1VCY"
      )
      .then(() => {
        loading.classList.remove("contact__overlay--visible");
        success.classList += " contact__overlay--visible";
      })
      .catch(() => {
        loading.classList.remove("contact__overlay--visible");
        alert("The email service appears to be down. Please try again later.");
      });
  };

  let contactOpen = false;

  function toggleContact() {
    if (contactOpen) {
      contactOpen = false;
      return document.body.classList.remove("contact--open");
    }
    contactOpen = true;
    document.body.classList += " contact--open";
  }

  return (
    <>
      <div className="mainpage__contact">
        
        <FontAwesomeIcon
            icon="times"
            className="urgent__contact--exit click"
            onClick={() => toggleContact()}

        />

        <div className="contact__form contact__description">
          <h3 className="contact__title contact__title--description">
            Send us an E-mail!
          </h3>

          <h4 className="contact__sub-title contact__sub-title--description">
            We are working hard to respond to every question you may have.
          </h4>

          <p className="contact__para">
            We are available to answer any <b className="green">questions</b>{" "}
            you may have regarding our <b className="green">company</b>, whether
            you are a <b className="green">tenant</b> or someone who is
            interested in <b className="green">becoming one</b>.
            <br />
            Inquire <b className="green">here</b> about available properties,{" "}
            <b className="green">future</b> housing we intend to put up for
            rent, to voice a <b className="green">complaint</b> or{" "}
            <b className="green">concern</b>, and to find out
            <b className="green"> more</b> about us.
          </p>
        </div>

        <div className="contact__form contact__submit">
          <form ref={form} onSubmit={sendEmail} id="contact__information">
            <div className="info__item">
              <label className="info__item--label">Name</label>
              <input
                className="input__mail"
                name="user_name"
                type="text"
                required
              ></input>
            </div>

            <div className="info__item">
              <label className="info__item--label">Email</label>
              <input
                className="input__mail"
                name="user_email"
                type="email"
                required
              ></input>
            </div>

            <div className="info__item">
              <label className="info__item--label">Inquiry</label>
              <textarea
                className="input__mail"
                name="user_inquiry"
                type="text"
                required
              ></textarea>
            </div>

            <button id="contact__submit" className="form__submit">
              Submit
            </button>
          </form>

          <div className="contact__overlay contact__overlay--loading">
            <FontAwesomeIcon icon="spinner" />
          </div>

          <div className="contact__overlay contact__overlay--complete">
            Your inquiry has been submitted. Responses usually take around 1-3
            working days.
          </div>
        </div>
      </div>

      
      <button className="email__icon click" onClick={toggleContact}>
        <FontAwesomeIcon icon="envelope" />
      </button>
      
    </>
  );
};

export default Mail;
