import React from "react";
import OurServicesCard from "./OurServicesCard";
import styles from "../assets/styles/ourservices.module.css";
import icon_settings from "../assets/icons/service_icon_1.png";
import icon_random from "../assets/icons/service_icon_2.png";
import icon_power from "../assets/icons/service_icon_3.png";

const servicesCard = [
  {
    header: `Тщательно отобранные путешествия`,
    text: "Откройте для себя тщательно разработанные маршруты, обеспечивающие высококачественные впечатления, созданные с учетом ваших предпочтений. Наши экспертно созданные пакеты гарантируют незабываемые приключения.",
    icon: icon_settings,
  },
  {
    header: "Индивидуальные маршруты",
    text: "Наслаждайтесь полностью настраиваемыми планами путешествий, которые соответствуют вашим уникальным интересам и желаниям. Мы специализируемся на создании путешествий, отражающих ваши индивидуальные предпочтения и стремления.",
    icon: icon_random,
  },
  {
    header: "Экспертно созданные путешественные пакеты",
    text: "Наши пакеты обеспечивают гармоничное сочетание комфорта, приключений и погружения в культуру, обеспечивая исключительный опыт путешествия.",
    icon: icon_power,
  },
];
function OurServices() {
  return (
    <div className={`section ${styles.section}`}>
      <h2>Наши услуги</h2>
      <p>Исследуйте с уверенностью</p>
      <div className="container">
        <div className={styles.services_cards}>
          {servicesCard.map((item) => (
            <OurServicesCard key={item.header} {...item} />
          ))}
        </div>
        <div className={styles.plan_tour}>
          <div className={styles.plan_tour_left}>
            <h3>Запланируйте свой мечтанный отдых</h3>
            <p>
              Позвольте нам позаботиться о каждой детали, когда вы отправляетесь
              в свое мечтанное путешествие. Будь то культурный отпуск,
              приключенческая экспедиция или спокойный отдых на пляже, мы
              гарантируем беспроблемный и незабываемый опыт путешествия.
            </p>
            <button className="button">Начать планирование</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
