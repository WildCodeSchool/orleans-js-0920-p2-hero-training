import React from "react";
import "./Home.css";
import Header from "../header/Header.jsx";
import CircularProgress from "@material-ui/core/CircularProgress";
import shortid from "shortid";

function HeroCircle({ image, name }) {
  return (
    <div className="mainHero ">
      <img src={image} alt={name} className="rotateOut " />
      <div>
        <h3>{name}</h3>
      </div>
    </div>
  );
}

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heros: null,
      firstHero: 0,
      secondHero: 1,
      thirdHero: 2,
      fourthHero: 3,
      fifthHero: 4,
      sixHero: 0,
    };
    this.incrementHero = this.incrementHero5.bind(this);
    this.decrementHero = this.decrementHero5.bind(this);
    this.incrementHero1 = this.incrementHero1.bind(this);
    this.decrementHero1 = this.decrementHero1.bind(this);
  }

  getSuperHeros = () => {
    fetch("https://lit-badlands-40023.herokuapp.com/heros")
      .then((res) => res.json())
      .then((res) => this.setState({ heros: res }));
  };

  componentDidMount() {
    this.getSuperHeros();
  }

  incrementHero5 = () => {
    const firstHero = this.state.firstHero;
    const secondHero = this.state.secondHero;
    const thirdHero = this.state.thirdHero;
    const fourthHero = this.state.fourthHero;
    const fifthHero = this.state.fifthHero;

    if (fifthHero <= 24) {
      this.setState({ firstHero: firstHero + 5 });
      this.setState({ secondHero: secondHero + 5 });
      this.setState({ thirdHero: thirdHero + 5 });
      this.setState({ fourthHero: fourthHero + 5 });
      this.setState({ fifthHero: fifthHero + 5 });
    }
  };
  decrementHero5 = () => {
    const firstHero = this.state.firstHero;
    const secondHero = this.state.secondHero;
    const thirdHero = this.state.thirdHero;
    const fourthHero = this.state.fourthHero;
    const fifthHero = this.state.fifthHero;

    if (fifthHero > 4) {
      this.setState({ firstHero: firstHero - 5 });
      this.setState({ secondHero: secondHero - 5 });
      this.setState({ thirdHero: thirdHero - 5 });
      this.setState({ fourthHero: fourthHero - 5 });
      this.setState({ fifthHero: fifthHero - 5 });
    }
  };
  incrementHero1 = () => {
    const sixHero = this.state.sixHero;

    if (sixHero <= 28) {
      this.setState({ sixHero: sixHero + 1 });
    }
  };
  decrementHero1 = () => {
    const sixHero = this.state.sixHero;
    if (sixHero >= 1) {
      this.setState({ sixHero: sixHero - 1 });
    }
  };
  getId = () => {
    const id = shortid.generate();
    return id;
  };

  render() {
    return (
      <div className="home">
        <Header />
        <div className="primaryContainer" key={this.getId()}>
          <button className="glow-on-hover" onClick={this.decrementHero5}>
            {" "}
            Previous{" "}
          </button>
          <div className="heroLineUpContainer">
            {this.state.heros ? (
              <HeroCircle
                className="heroLine"
                {...this.state.heros[this.state.firstHero]}
              />
            ) : (
              <CircularProgress className="loading" />
            )}
            {this.state.heros ? (
              <HeroCircle
                className="heroLine"
                {...this.state.heros[this.state.secondHero]}
              />
            ) : (
              <p></p>
            )}
            {this.state.heros ? (
              <HeroCircle
                className="heroLine"
                {...this.state.heros[this.state.thirdHero]}
              />
            ) : (
              <p></p>
            )}
            {this.state.heros ? (
              <HeroCircle
                className="heroLine"
                {...this.state.heros[this.state.fourthHero]}
              />
            ) : (
              <p></p>
            )}
            {this.state.heros ? (
              <HeroCircle
                className="heroLine"
                {...this.state.heros[this.state.fifthHero]}
              />
            ) : (
              <p></p>
            )}
          </div>
          <button className="glow-on-hover" onClick={this.incrementHero5}>
            Next
          </button>
        </div>
        <div className="heroLineUpSmallContainer" key={this.getId()}>
          <section>
            {this.state.heros ? (
              <HeroCircle {...this.state.heros[this.state.sixHero]} />
            ) : (
              <p>loading</p>
            )}
            <div className="smallButtonContainer">
              <button className="glow-on-hover" onClick={this.decrementHero1}>
                Previous
              </button>

              <button className="glow-on-hover" onClick={this.incrementHero1}>
                Next
              </button>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Home;
