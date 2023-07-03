import React from "react";
import "./contact.css";
import {
  FaInstagram,
  FaTelegramPlane,
  FaYoutube,
  FaTiktok,
  FaHome,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const contact = () => {
  return (
    <section className="contact section">
      <div className="contact__content container grid">
        <div className="contact__socials">
          <a
            href="https://www.instagram.com/zholdubaevva"
            className="contact__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>

          <a
            href="https://t.me/zholdubaevva"
            className="contact__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegramPlane />
          </a>

          <a
            href="https://www.youtube.com/@zholdubaevva"
            className="contact__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </a>

          <a
            href="https://www.tiktok.com/@zholdubaevva"
            className="contact__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok />
          </a>
        </div>

        <div className="contact__img"></div>

        <div className="contact__data">
          <h2 className="data__title">
            Con<span>tact</span>
          </h2>
          <h3 className="contact__title">Talk to me</h3>
          <p className="home__description">
            На данной странице вы можете обнаружить иконки различных социальных
            сетей. Кликнув по ним, вы сможете перейти на мои профили в этих
            социальных сетях (´｡• ᵕ •｡`)
          </p>
          {/* <div className="contact__info">
              <div className="info__item">
                <FaInstagram className="info__icon" />

                <div>
                  <span className="info__title">Instagram</span>
                  <h4 className="info__desc">bekaspirit@gmail.com</h4>
                </div>
              </div>

              <div className="info__item">
                <FaPhoneSquareAlt className="info__icon" />

                <div>
                  <span className="info__title">Call me</span>
                  <h4 className="info__desc">+996 700 997 290</h4>
                </div>
              </div>
            </div> */}
          <Link to="/" className="button">
            Home Page
            <span className="button__icon">
              <FaHome />
            </span>
          </Link>
        </div>

        {/* <form className="contact__form">
            <div className="form__input-group">
              <div className="form__input-div">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="form__control"
                />
              </div>

              <div className="form__input-div">
                <input
                  type="email"
                  placeholder="Your email"
                  className="form__control"
                />
              </div>

              <div className="form__input-div">
                <input
                  type="text"
                  placeholder="Your Subject"
                  className="form__control"
                />
              </div>
            </div>

            <div className="form__input-div">
              <textarea
                placeholder="Your Message"
                className="form__control textarea"
              ></textarea>
            </div>
            <button className="button">
              Send Message
              <span className="button__icon contact__button-icon">
                <FiSend />
              </span>
            </button>
          </form> */}
      </div>
      <div className="error">
        {/* <div className="error-box">
          <img
            className="world"
            src="https://i.pinimg.com/236x/f0/a2/26/f0a226871a4263eabee2e578a03d7742.jpg"
            alt=""
          />
        </div> */}
        {/* <div className="error-box">
          <img
            className="world"
            src="https://i.pinimg.com/236x/a8/14/ae/a814aefdb866ee497338ec64e45433f6.jpg"
            alt=""
          />
        </div> */}
        <div className="error-box">
          <img
            className="world"
            src="https://i.pinimg.com/originals/de/68/a1/de68a10f13a95e7f412d79a2c3e5336b.gif"
            alt=""
          />
        </div>
        <div className="error-box">
          <img
            className="world"
            src="https://i.pinimg.com/236x/c1/51/41/c15141a7b71274eaece9537ae4540071.jpg"
            alt=""
          />
        </div>
        <div className="error-box">
          <img
            className="world"
            src="https://i.pinimg.com/originals/78/6f/27/786f279b6c5684954e71b94c2f85ec9c.gif"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default contact;
