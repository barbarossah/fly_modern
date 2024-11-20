import React from "react";
import styles from "../assets/styles/observtripcard.module.css";

function ObservTripCard(props) {
  return (
    <div className={styles.trip_card}>
      <img src={props.image} alt="dubai" />
      <div className={styles.trip_card_info}>
        <h4>{props.header}</h4>
        <p>{props.subheader}</p>
        <p>{props.text}</p>
      </div>
      <div className={styles.trip_card_buttons}>
        <a href="tel:+998974420308">Узнать больще</a>
        <a href="#bron">Забронировать сейчас</a>
      </div>
    </div>
  );
}

export default ObservTripCard;
