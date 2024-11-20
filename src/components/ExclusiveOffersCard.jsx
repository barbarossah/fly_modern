import React from "react";
import styles from "../assets/styles/exclusiveofferscard.module.css";
import Button from "../ui/Button";

function ExclusiveOffersCard(props) {
  return (
    <div className={styles.offer_card}>
      <div className={styles.top}>
        <h4>{props.header}</h4>
        <p>{props.subheader}</p>
      </div>
      <div className={styles.mid}>
        <ul>
          {props.list.map((item) => (
            <li key={item}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.bottom}>
        <Button>
          <a href="tel:+998974420308">Получить предложение</a>
        </Button>
      </div>
    </div>
  );
}

export default ExclusiveOffersCard;
