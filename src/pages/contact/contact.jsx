import React from "react";
import "./contact.css";
import {
  FaInstagram,
  FaTelegramPlane,
  FaYoutube,
  FaTiktok,
  FaSitemap,
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
            href="https://t.me/witchzharkyn"
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
          <a
            href="https://thaddeusss.github.io/Jane/"
            className="contact__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSitemap />
          </a>
        </div>
        <div className="contact__img"></div>
        <div className="contact__data">
          <h2 className="data__title">
            Con<span>tact</span>
          </h2>
          {/* <h3 className="contact__title">Talk to me</h3> */}
          <p className="home__description">
            Здесь представлены различные иконки, по которым вы можете
            навигироваться к разным страницам и социальным сетям... (За
            исключением случаев, когда вы внесли изменения в адресную строку на
            своих страницах/аккаунтах.)
          </p>
        </div>
      </div>
      <div className="error">
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

        {/* <div className="error-box">
          <img
            className="world"
            src="https://i.pinimg.com/originals/78/6f/27/786f279b6c5684954e71b94c2f85ec9c.gif"
            alt=""
          />
        </div> */}
        {/* <div className="error-box">
          <img
            className="world"
            src="https://i.pinimg.com/236x/c1/51/41/c15141a7b71274eaece9537ae4540071.jpg"
            alt=""
          />
        </div> */}
      </div>
    </section>
  );
};
export default contact;
