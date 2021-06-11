import React from "react";
import selfie from "./selfie.png";

class Header extends React.Component {
  state = {};

  stylesBoxOne = {
    width: '15%',
    height: this.width,
    float: 'left',
    borderColor: 'red',
    borderStyle: 'solid'
  };

  stylesBoxTwo = {
    width: '80%',
    float: 'right',
    borderColor: 'blue',
    borderStyle: 'solid'
  };

  stylesSelfie = {
    width: '100%',
    height: this.width,
  };

  stylesName = {
      fontSize: 50
  };

  render() {
    return (
      <React.Fragment>
        <header>
          <div style={this.stylesBoxOne}>
          <a href="index.html">
            <img src={selfie} style={this.stylesSelfie} alt="Selfie" />
          </a>
          </div>
          <div style={this.stylesBoxTwo}>
          <h1 style={this.stylesName}>Cade Heinberg</h1>
          </div>
        </header>
      </React.Fragment>
    );
  }
}
export default Header;
