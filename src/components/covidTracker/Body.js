import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import StaticsticsCard from "./Components/StaticsticsCard";
import api from "./API";
import IndiaCard from "./Components/IndiaCard";
const useStyles = makeStyles((theme) => ({
  mainBody: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const Body = () => {
  const classes = useStyles();
  const [Data, setData] = useState([]);

  const getDataFromApi = async () => {
    let data = {};
    try {
      data = await fetch(api);
      const tempData = await data.json();
      data = tempData.statewise;
      console.log(data);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDataFromApi();
  }, []);

  return (
    <div className={classes.mainBody}>
      {Data.map((state, i) => {
        if (i) {
          return <StaticsticsCard key={i} data={state} />;
        } else return <IndiaCard key={i} data={state} />;
      })}
    </div>
  );
};

export default Body;
