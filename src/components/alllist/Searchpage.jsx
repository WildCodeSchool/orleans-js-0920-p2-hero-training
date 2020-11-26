import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../header/Header";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./Searchpage.css";
import { Link } from "react-router-dom";

function Searchpage() {
  const [getHeros, setHeros] = useState([]);
  const [isLoadingHero, setLoadingHero] = useState(true);
  const [result, setResult] = useState([]);
  const [isFilter, setIsFilter] = useState(false);

  useEffect(() => {
    axios
      .get("https://lit-badlands-40023.herokuapp.com/heros")
      .then((response) => {
        setHeros(response.data);
        setLoadingHero(false);
      });
  }, []);

  if (isLoadingHero) {
    return (
      <div className="loadingPage">
        <CircularProgress className="loading" />
      </div>
    );
  }

  const handleshowAll = () => {
    setIsFilter(false);
  };

  const handleshowStrenght = () => {
    setResult(getHeros.filter((stat) => stat.force >= 80));
    setIsFilter(true);
  };
  const handleshowSpeed = () => {
    setResult(getHeros.filter((stat) => stat.speed >= 80));
    setIsFilter(true);
  };
  const handleshowStamina = () => {
    setResult(getHeros.filter((stat) => stat.stamina >= 80));
    setIsFilter(true);
  };

  return (
    <div className="fullComponentSearch">
      <Header />
      <div className="bgSearch-image"></div>
      <div className="containerSelect">
        <select id="monselect">
          <option value="all" onClick={handleshowAll} selected>
            All Characters
          </option>
          <option value="speed" onClick={handleshowSpeed}>
            Speed Heroes
          </option>
          <option value="stamina" onClick={handleshowStamina}>
            Stamina Heroes
          </option>
          <option value="strenght" onClick={handleshowStrenght}>
            Strength Heroes
          </option>
        </select>
      </div>

      <div className="fullSearchContainer">
        {isFilter
          ? result.map((herosFiltered) => (
              <div className="searchContainer">
                <h4>{herosFiltered.name}</h4>
                <img src={herosFiltered.image} alt={herosFiltered.name} />
                <div className="progressBar">
                  <div className="containerLabel">
                    <label for="speed">Speed : </label>
                    <label for="strenght">Strength : </label>
                    <label for="stamina">Stamina : </label>
                  </div>

                  <div className="containerBar">
                    <progress id="speed" max="100" value={herosFiltered.speed}>
                      {" "}
                      {herosFiltered.speed}{" "}
                    </progress>
                    <progress
                      id="strenght"
                      max="100"
                      value={herosFiltered.force}
                    >
                      {" "}
                      {herosFiltered.force}%{" "}
                    </progress>
                    <progress
                      id="stamina"
                      max="100"
                      value={herosFiltered.stamina}
                    >
                      {" "}
                      {herosFiltered.stamina}{" "}
                    </progress>
                  </div>
                </div>
                <Link
                  to={{ pathname: `/hero/${herosFiltered.id}` }}
                  style={{ textDecoration: "none" }}
                >
                  <p>Start training </p>
                </Link>
              </div>
            ))
          : getHeros.map((herosFiltered) => (
              <div className="searchContainer">
                <h4>{herosFiltered.name}</h4>
                <img src={herosFiltered.image} alt={herosFiltered.name} />
                <div className="progressBar">
                  <div className="containerLabel">
                    <label for="speed">Speed : </label>
                    <label for="strenght">Strength : </label>
                    <label for="stamina">Stamina : </label>
                  </div>

                  <div className="containerBar">
                    <progress id="speed" max="100" value={herosFiltered.speed}>
                      {" "}
                      {herosFiltered.speed}{" "}
                    </progress>
                    <progress
                      id="strenght"
                      max="100"
                      value={herosFiltered.force}
                    >
                      {" "}
                      {herosFiltered.force}%{" "}
                    </progress>
                    <progress
                      id="stamina"
                      max="100"
                      value={herosFiltered.stamina}
                    >
                      {" "}
                      {herosFiltered.stamina}{" "}
                    </progress>
                  </div>
                </div>
                <Link
                  to={{ pathname: `/hero/${herosFiltered.id}` }}
                  style={{ textDecoration: "none" }}
                >
                  <p>Start training </p>
                </Link>
              </div>
            ))}
      </div>
    </div>
  );
}

export default Searchpage;
