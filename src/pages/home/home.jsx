import React from "react";
import Profile from "../../assets/img/photo15.jpg";
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
              Jar
              {/* 🤍 */}
              kyn...
            </span>
            <svg
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="40"
              viewBox="0 0 24 24"
            >
              <path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z" />
            </svg>
          </h1>

          <p className="home__description">
            Эхххк
            <br />
            Мне остро не нравится наше общение, которое, кажется, идет только от
            меня к тебе. Это причиняет боль моему сердцу. Каждый раз, когда я
            проявляю к тебе внимание, ожидая ответной реакции, я ощущаю
            разочарование. Это причиняет мне боль больше всего.
            <br />
            Мне так не хватает твоего присутствия, наших увлекательных прогулок,
            продолжительных разговоров, будь то в виртуальном мире социальных
            сетей или вживую. Как тоскливо мне без твоего искреннего интереса ко
            мне, без твоей нежности и любви.
            <br />
            Ты играешь важную роль в моей жизни, Жаркын, и я глубоко тебя ценю.
            Мои чувства к тебе нежны и искренни. Я тебя люблю.
            <br />
            Если ты все ещё питаешь ко мне любовь, то у нас есть все шансы на
            успех. Но если та любовь, которая когда-то пылала в тебе, угасла, то
            просто отпусти меня...позволь мне отпустить тебя.
            <br />
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
