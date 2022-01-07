//importaciones
import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";
import useTransactions from "../../hooks/useTransactions";
import useStyles from "./styles";

const DetailsCard = ({ title, subheader }) => {
  //estilos
  const classes = useStyles();
  const { total, chartData } = useTransactions(title);

  return (
    <Card className={title === "Income" ? classes.income : classes.expense}>
      <CardHeader
        style={{ textAlign: "center" }}
        title={title}
        subheader={subheader}
      />
      <CardContent>
        <Typography align="center" variant="h5">
          ${total}
        </Typography>
        <Doughnut data={chartData} />
      </CardContent>
    </Card>
  );
};

export default DetailsCard;
