import React from "react";
const mapSrc =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d95854.27594641913!2d69.262273!3d41.342656!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8d0a3eff6793%3A0x374f8cd599c1c8fa!2sYagona%20Darcha%20Shaykhontokhur%20tumani!5e0!3m2!1sen!2sus!4v1732080762289!5m2!1sen!2sus";
function GoogleMap() {
  return (
    <div>
      <iframe
        src={mapSrc}
        style={{ border: 0, width: "100%", height: "500px" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default GoogleMap;
