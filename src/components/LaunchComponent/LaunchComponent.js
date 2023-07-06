import React, { useEffect, useState } from "react";
import LaunchItem from "../LaunchItem/LaunchItem";
import launchComponent from "./LaunchComponent.module.css";

function LaunchComponent() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/launches/")
      .then((response) => response.json())
      .then((launches) =>
        setLaunches(launches.filter((launch) => launch.launch_year !== "2020"))
      );
  }, []);

  console.log(launches);
  return (
    <div className={launchComponent.wrapper}>
      {launches.map((launch) => (
        <LaunchItem key={launch.flight_number} launch={launch} />
      ))}
    </div>
  );
}

export default LaunchComponent;
