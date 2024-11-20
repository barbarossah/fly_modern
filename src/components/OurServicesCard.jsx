import React from "react";
import styles from "../assets/styles/ourservicescard.module.css";

function OurServicesCard(props) {
  return (
    <div className={styles.services_card}>
      <img src={props.icon} alt="icon" />
      <h4>{props.header}</h4>
      <p>{props.text}</p>
    </div>
  );
}

export default OurServicesCard;
