import React from 'react';
import '../Home/Home.css'
import Header from '../header/Header'

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = [];
  }

  render() {
    return (
      <div className="home">
        <Header />
        <div className="heroLineUp">
          <img
            className="heroOne"
            src="https://www.superherodb.com/pictures2/portraits/10/100/1111.jpg"
            alt="firstHero"
          />
          <img
            className="mainHero"
            src="https://www.superherodb.com/pictures2/portraits/10/100/133.jpg"
            alt="secondhero"
          />
          <img
            className="heroOne"
            src="https://www.superherodb.com/pictures2/portraits/10/100/807.jpg"
            alt="thridhero"
          />
        </div>
        <div className="heroLineDown">
          <img className="heroOne"
            src="https://www.superherodb.com/pictures2/portraits/10/100/10590.jpg"
            alt="firstHero"
          />
          <img className="heroOne"
            src="https://www.superherodb.com/pictures2/portraits/10/100/52.jpg"
            alt="firstHero"
          />
        </div>
      </div>
    );
  }
}

export default Home;