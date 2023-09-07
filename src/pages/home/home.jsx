import React from "react";
import Profile from "../../assets/img/photo64.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./home.css";

const home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>
              Jarkyn
              <svg
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="40"
                viewBox="0 0 24 24"
              >
                <path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z" />
              </svg>
              {/* 🤍 */}
            </span>
            Is My Love.
          </h1>

          <p className="home__description">
            Завтра на экзамене по английскому, Жаркын, ты будешь сиять!💯 Верь в
            себя, потому что я верю в твой огромный потенциал❤️ Ты обязательно
            наберешь необходимое количество баллов, чтобы успешно пройти этот
            экзамен. Ты сильна и умна, и сделаешь всё, что нужно✊ Удачи тебе,
            котик, завтра на этом важном испытании! У тебя получиться🤍
          </p>

          <Link to="/about" className="button">
            More About Me
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  );
};

export default home;
