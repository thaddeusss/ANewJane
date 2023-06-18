import React from "react";
import PortfolioItem from "../../components/PortfolioItem";
import { Portfolio } from "../../data";
import "./portfolio.css";

const portfolio = () => {
  return (
    <section className="portfolio section">
      <h3 className="section__title">
        My <span>Portfolio</span>
      </h3>

      <div className="portfolio__container container grid">
        {Portfolio.map((item) => {
          return <PortfolioItem key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default portfolio;
