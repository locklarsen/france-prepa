import React from "react";

const Notification = ({ type, message }) => {
  // Définir les styles selon le type de notification
  const notificationStyles = {
    success: {
      backgroundColor: "green",
      color: "white",
      padding: "10px",
      borderRadius: "5px",
      fontWeight: "bold",
    },
    error: {
      backgroundColor: "red",
      color: "white",
      padding: "10px",
      borderRadius: "5px",
      fontWeight: "bold",
    },
  };

  // Choisir le style en fonction du type de notification
  const style =
    type === "success" ? notificationStyles.success : notificationStyles.error;

  return <div style={style}>{message}</div>;
};

export default Notification;
