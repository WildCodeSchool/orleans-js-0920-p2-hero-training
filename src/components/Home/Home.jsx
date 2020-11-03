import React from "react";
import "./Home.css";
import Header from "../header/Header.jsx"
import HeroCircle from "./HeroCircle";
let a = 0;

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      heros: null,
    };
  }

  getSuperHeros = () => {
    fetch("https://lit-badlands-40023.herokuapp.com/heros")
      .then((res) => res.json())
      .then((res) => this.setState({ heros: res }));
  };

  componentDidMount() {
    this.getSuperHeros();
  }

  render() {
    console.log(this.state.heros);
    console.log(a)

    return (
      <div className="home">
        <Header />
        <div className="heroLineUpContainer">
          {this.state.heros ? (
            <HeroCircle className="heroLine"  {...this.state.heros[3]} />
          ) : (
            <p>loading</p>
          )}
          {this.state.heros ? (
            <HeroCircle className="heroLine" {...this.state.heros[4]} />
          ) : (
            <p>loading</p>
          )}
          {this.state.heros ? (
            <HeroCircle className="heroLine" {...this.state.heros[5]} />
          ) : (
            <p>loading</p>
          )}
          {this.state.heros ? (
            <HeroCircle className="heroLine" {...this.state.heros[6]} />
          ) : (
            <p>loading</p>
          )}
          {this.state.heros ? (
            <HeroCircle className="heroLine" {...this.state.heros[7]} />
          ) : (
            <p>loading</p>
          )}
        </div>
        <div className="heroLineUpSmallContainer">
        {this.state.heros ? (
            <HeroCircle  {...this.state.heros[a]} />
          ) : (
            <p>loading</p>
          )}
        </div>
      </div>
    );
  }
}

export default Home;
