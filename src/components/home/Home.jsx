import React from "react";
import "./Home.css";
import Header from "../header/Header.jsx";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Link } from "react-router-dom";
import shortid from "shortid";
import { AiOutlineFileSearch } from "react-icons/ai";

function HeroCircle({ image, name }) {
  return (
    <div className="mainHero">
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
      page: 1,
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
    const page = this.state.page;

    if (fifthHero <= 24) {
      this.setState({ firstHero: firstHero + 5 });
      this.setState({ secondHero: secondHero + 5 });
      this.setState({ thirdHero: thirdHero + 5 });
      this.setState({ fourthHero: fourthHero + 5 });
      this.setState({ fifthHero: fifthHero + 5 });
      this.setState({ page: page + 1 });
    }
  };
  decrementHero5 = () => {
    const firstHero = this.state.firstHero;
    const secondHero = this.state.secondHero;
    const thirdHero = this.state.thirdHero;
    const fourthHero = this.state.fourthHero;
    const fifthHero = this.state.fifthHero;
    const page = this.state.page;

    if (fifthHero > 4) {
      this.setState({ firstHero: firstHero - 5 });
      this.setState({ secondHero: secondHero - 5 });
      this.setState({ thirdHero: thirdHero - 5 });
      this.setState({ fourthHero: fourthHero - 5 });
      this.setState({ fifthHero: fifthHero - 5 });
      this.setState({ page: page - 1 });
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
    let firstHeroUrl = `/hero/${this.state.firstHero}`;
    let secondeHeroUrl = `/hero/${this.state.secondHero}`;
    let thirdHeroUrl = `/hero/${this.state.thirdHero}`;
    let fourthHeroUrl = `/hero/${this.state.fourthHero}`;
    let fifthHeroUrl = `/hero/${this.state.fifthHero}`;
    let sixHeroUrl = `/hero/${this.state.sixHero}`;
    return (
      <div>
        <Header />
        <div className="home">
          <div>
            <div className="primaryContainer" key={this.getId()}>
              <button className="glow-on-hover" onClick={this.decrementHero5}>
                {" "}
                Previous{" "}
              </button>
              <div className="heroLineUpContainer">
                {this.state.heros ? (
                  <Link to={firstHeroUrl} style={{ textDecoration: "none" }}>
                    <HeroCircle
                      className="heroLine"
                      {...this.state.heros[this.state.firstHero]}
                    />
                  </Link>
                ) : (
                  <CircularProgress className="loading" />
                )}
                {this.state.heros ? (
                  <Link to={secondeHeroUrl} style={{ textDecoration: "none" }}>
                    <HeroCircle
                      className="heroLine"
                      {...this.state.heros[this.state.secondHero]}
                    />
                  </Link>
                ) : (
                  <p></p>
                )}
                {this.state.heros ? (
                  <Link to={thirdHeroUrl} style={{ textDecoration: "none" }}>
                    <HeroCircle
                      className="heroLine"
                      {...this.state.heros[this.state.thirdHero]}
                    />
                  </Link>
                ) : (
                  <p></p>
                )}
                {this.state.heros ? (
                  <Link to={fourthHeroUrl} style={{ textDecoration: "none" }}>
                    <HeroCircle
                      className="heroLine"
                      {...this.state.heros[this.state.fourthHero]}
                    />
                  </Link>
                ) : (
                  <p></p>
                )}
                {this.state.heros ? (
                  <Link to={fifthHeroUrl} style={{ textDecoration: "none" }}>
                    <HeroCircle
                      className="heroLine"
                      {...this.state.heros[this.state.fifthHero]}
                    />
                  </Link>
                ) : (
                  <p></p>
                )}
              </div>
              <button className="glow-on-hover" onClick={this.incrementHero5}>
                Next
              </button>
            </div>
            <div className="pagination">
              <p> Page {this.state.page} on 6</p>
            </div>
          </div>
          <div className="heroLineUpSmallContainer" key={this.getId()}>
            <section>
              {this.state.heros ? (
                <Link to={sixHeroUrl} style={{ textDecoration: "none" }}>
                  <HeroCircle {...this.state.heros[this.state.sixHero]} />
                </Link>
              ) : (
                <CircularProgress className="mainHero" />
              )}
              <div className="smallButtonContainer">
                <button className="glow-on-hover" onClick={this.decrementHero1}>
                  Previous
                </button>

                <button className="glow-on-hover" onClick={this.incrementHero1}>
                  Next
                </button>
              </div>
              <Link to="/list" style={{ textDecoration: "none" }}>
                <button className="btnList">
                  <AiOutlineFileSearch className="" size={30} color={"white"} />{" "}
                  All heroes
                </button>
              </Link>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
