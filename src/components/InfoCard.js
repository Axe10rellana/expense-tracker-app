import React from "react";

const isIncome = Math.round(Math.random());

const InfoCard = () => {
  return (
    <div elevation={3} style={{ textAlign: "center", padding: "0 10%" }}>
      Intenta decir: <br />
      Agregue {isIncome ? "Ingresos " : "Expensas "}
      por {isIncome ? "$100 " : "$50 "}
      En La Categoria {isIncome ? "Salario " : "Viajes "}
      para el {isIncome ? "Lunes " : "Jueves "}
    </div>
  );
};

export default InfoCard;
