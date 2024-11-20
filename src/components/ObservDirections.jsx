import React from "react";
import ObservTripCard from "./ObservTripCard";
import styles from "../assets/styles/observdirections.module.css";
import dubai from "../assets/images/dubai.jpg";
import istanbul from "../assets/images/istanbul.jpg";
import sharm from "../assets/images/sharm.jpg";

const cardsInfo = [
  {
    header: "Опыт роскоши в Дубае",
    subheader: "Городской пейзаж и не только",
    text: "Погрузитесь в роскошь небоскребов Дубая, роскошные шопинги и приключения в пустыне. Исследуйте город, где традиции переплетаются с современностью, предлагая удивительное сочетание культуры и роскоши.",
    image: dubai,
  },
  {
    header: "Откройте богатство культуры Турции",
    subheader: "Исторические чудеса и захватывающие пейзажи",
    text: "Погрузитесь в захватывающую историю Турции, от древних руин до живописных рынков. Наслаждайтесь живописными пейзажами, вкусной кухней и теплым гостеприимством, которые делают Турцию обязательным к посещению направлением.",
    image: istanbul,
  },
  {
    header: "Отдых в раю Шарм-эль-Шейха",
    subheader: "Солнце, море и умиротворение",
    text: "Отправьтесь на потрясающие пляжи и коралловые рифы Шарм-эль-Шейха. Погрузитесь в кристально чистые воды, отдыхайте в роскошных курортах и почувствуйте абсолютное умиротворение в этом тропическом раю.",
    image: sharm,
  },
];

function ObservDirections() {
  return (
    <div className={`section ${styles.section}`}>
      <h2>Исследуйте наши направления</h2>
      <p>Откройте для себя Дубай, Турцию и Шарм-эль-Шейх</p>
      <div className="container">
        <div className={styles.trip_cards}>
          {cardsInfo.map((item) => (
            <ObservTripCard key={item.header} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ObservDirections;
