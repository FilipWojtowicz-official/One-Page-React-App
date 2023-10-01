import React from "react";
import Container from "../Container/Container";
import "./OfferSection.css";
import { offers } from "../data/offers";
import Box from "./Box";

const OfferSection = () => {
  return (
    <section className="offer-section" id="offer-section">
      <Container>
        <h2 className="offer-text">Czym zajmuje się nasza firma?</h2>
        <div className="offer-six-photos">
          {offers.map((offer) => (
            <Box name={offer.name} isNew={offer.isNew} key={offer.name}></Box>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default OfferSection;
