import React from "react";

import styles from "../assets/styles/tripcard.module.css";

function TripCard({ info }) {
  return (
    <div className={styles.trip_card}>
      <img src={info.image} alt="pic" />
      <div className={styles.trip_card_info}>
        <h4>{info.header}</h4>
        <p>{info.subheader}</p>
        <p>{info.text}</p>
      </div>
    </div>
  );
}

export default TripCard;
