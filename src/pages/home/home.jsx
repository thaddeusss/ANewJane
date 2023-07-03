import React from "react";
import Profile from "../../assets/img/photo35.jpg";
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
            20.04.23 (Шо я тогда писал? ahahaha) <br />
            Сегодня, в день суеты и суетных забот, <br />
            Ждем мы с Жаркын друга, в студии занятого в фотоснимках. <br />
            Нас ожидают занятия на курсах, но мы наедине,
            <br />
            И вдруг Жаркын мое тело обвила руками своими. <br />
            Она - моя возлюбленная, моя нежность и мое сердце.
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
