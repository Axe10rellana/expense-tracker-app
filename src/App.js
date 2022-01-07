//importaciones
import React, { useRef } from "react";
import { Grid } from "@material-ui/core";
import useStyles from "./styles";

//componentes
import Details from "./components/Details/Details";
import Main from "./components/Main/Main";

const App = () => {
  //estilos
  const classes = useStyles();
  const main = useRef(null);

  return (
    <div>
      <Grid
        className={classes.grid}
        container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        style={{ height: "100vh" }}
      >
        <Grid item xs={12} sm={10} md={5} lg={4} className={classes.desktop}>
          <Details title="Income" />
        </Grid>
        <Grid
          ref={main}
          item
          xs={12}
          sm={10}
          md={8}
          lg={3}
          className={classes.main}
        >
          <Main />
        </Grid>
        <Grid item xs={12} sm={10} md={5} lg={4} className={classes.mobile}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={10} md={5} lg={4} className={classes.last}>
          <Details title="Expense" />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
