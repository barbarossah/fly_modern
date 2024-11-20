import React from "react";
import styles from "../assets/styles/exclusiveoffers.module.css";
import ExclusiveOffersCard from "./ExclusiveOffersCard";

const cardInfo = [
  {
    header: "Essential Explorer",
    subheader: "Свяжитесь с нами",
    list: [
      "Индивидуальное планирование маршрута",
      "Персонализированные рекомендации по направлениям",
      "Экспертная консультация по путешествиям",
      "Круглосуточная поддержка",
      "Гибкая ценовая политика",
    ],
  },
  {
    header: "Premium Voyager",
    subheader: "Свяжитесь с нами",
    list: [
      "Роскошное проживание",
      "Эксклюзивные впечатления",
      "Частные экскурсии с гидом",
      "Индивидуальные туристические пакеты",
      "Ценообразование по договоренности",
    ],
  },
  {
    header: "Ultimate Wanderer",
    subheader: "Свяжитесь с нами",
    list: [
      "VIP туристический консьерж",
      "Индивидуальные роскошные впечатления",
      "Эксклюзивный доступ к мероприятиям",
      "Гибкая и ценообразование по договоренности",
      "Пожизненная членская карта для путешествий",
    ],
  },
];

function ExclusiveOffers() {
  return (
    <div className={`section`}>
      <h2>Эксклюзивные предложения</h2>
      <p>Разблокируйте свой мечтательный отпуск</p>
      <div className="container">
        <div className={styles.offer_cards}>
          {cardInfo.map((item) => (
            <ExclusiveOffersCard key={item.header} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExclusiveOffers;
