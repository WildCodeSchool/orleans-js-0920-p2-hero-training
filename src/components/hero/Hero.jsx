import React from "react";
import { useEffect, useState } from "react";
import Header from "../header/Header";
import NavBar from "../navbar/NavBar";
import "./Hero.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";
import runlogo from "../../assets/runlogo.png";

function Hero(props) {
  const [params] = useState(props.match.params);
  const [getHeros, setHeros] = useState([]);
  const [getProgram, setProgram] = useState([]);
  const [isLoadingHero, setLoadingHero] = useState(true);
  const [isLoadingSport, setLoadingSport] = useState(true);

  useEffect(() => {
    axios
      .get("https://lit-badlands-40023.herokuapp.com/heros")
      .then((response) => {
        setHeros(response.data);
        setLoadingHero(false);
      });
  }, []);
  useEffect(() => {
    axios.get("https://sporthero.herokuapp.com/sport").then((response) => {
      setProgram(response.data);
      setLoadingSport(false);
    });
  }, []);

  if (isLoadingHero || isLoadingSport) {
    return (
      <div className="loadingPage">
        <CircularProgress className="loading" />
      </div>
    );
  }

  let indexRandom = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
  let staminaProgram = getProgram.filter((res) => res.type === "stamina");
  let forceProgram = getProgram.filter((res) => res.type === "strength");
  let speedProgram = getProgram.filter((res) => res.type === "speed");
  let backGround = {
    backgroundImage: `url(${getHeros[params.id].image})`,
  };

  let result;
  if (getHeros[params.id].stamina > 80) {
    result = staminaProgram[indexRandom];
  } else if (getHeros[params.id].force > 80) {
    result = forceProgram[indexRandom];
  } else if (getHeros[params.id].speed > 80) {
    result = speedProgram[indexRandom];
  } else {
    result = "none";
  }
  return (
    <div>
      <div className="container" >
        <Header />
        <div
          style={getHeros[params.id] ? backGround : "red"}
          className="bg-image"
        >
          {" "}
        </div>
        <div className="largeContainer">
          {getHeros[params.id] !== undefined ? (
            <div className="heroCard" id="stats">
              <div className="heroName">
                <img
                  src={getHeros[params.id].image}
                  alt={getHeros[params.id].name}
                />
                <h3>{getHeros[params.id].name}</h3>
                <div className="containerList">
                  <div className="containerLineOption">
                    <li>Gender :</li>
                    <li>Race :</li>
                    <li>Height :</li>
                    <li>Weight :</li>
                  </div>
                  <div className="containerLineResult">
                    <li>{getHeros[params.id].gender}</li>
                    <li>{getHeros[params.id].race}</li>
                    <li>{getHeros[params.id].height} </li>
                    <li>{getHeros[params.id].weight}</li>
                  </div>
                </div>
              </div>

              <div className="subContainer1">
                <h3>Stats</h3>

                <div className="progressBar">
                  <div className="containerLabel">
                    <label for="speed">Speed : </label>
                    <label for="strength">Strength : </label>
                    <label for="stamina">Stamina : </label>
                  </div>

                  <div className="containerBar">
                    <progress
                      id="speed"
                      max="100"
                      value={getHeros[params.id].speed}
                    >
                      {" "}
                      {getHeros[params.id].speed}{" "}
                    </progress>
                    <progress
                      id="strength"
                      max="100"
                      value={getHeros[params.id].force}
                    >
                      {" "}
                      {getHeros[params.id].force}%{" "}
                    </progress>
                    <progress
                      id="stamina"
                      max="100"
                      value={getHeros[params.id].stamina}
                    >
                      {" "}
                      {getHeros[params.id].stamina}{" "}
                    </progress>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <p></p>
          )}

          <div className="subContainer" id="program">
            <h4>{result.name}</h4>
            <div className="liContainer">
              <li>{result.session1}</li>
              <li>{result.session2} </li>
              <li>{result.session3} </li>
              <li>{result.session4} </li>
              <li>{result.session5} </li>
              <li>{result.session6}</li>
              <li>{result.session7}</li>
              <li>{result.session8}</li>
              <li>{result.session9}</li>
            </div>
            <div className="difficultyLevels">
              <h6>Difficulty Level </h6>
              <div className="difficultyLevelsSmallContainer">
                <li>Easy : {result.level1} </li>
                <li>Medium : {result.level2} </li>
                <li>Hard :{result.level3}</li>
              </div>
            </div>

            <p>{result.info}</p>
          </div>

          <div className="subContainer lastContainer" id="food">
            <h4>{result.name1}</h4>

            <div className="liContainer">
              <li>{result.food1}</li>
              <li>{result.food2} </li>
              <li>{result.food3} </li>
              <li>{result.food4} </li>
              <li>{result.food5} </li>
              <li>{result.food6} </li>
              <li>{result.food7} </li>
              <li>{result.food8} </li>
            </div>
            <div className="difficultyLevels">
              <h6>Advice</h6>
              <div className="difficultyLevelsSmallContainer">
                <p>{result.quotes}</p>
              </div>
            </div>
            <img src={runlogo} className="runLogo" alt="run logo" />
          </div>

          <NavBar />
        </div>
      </div>
    </div>
  );
}

export default Hero;
