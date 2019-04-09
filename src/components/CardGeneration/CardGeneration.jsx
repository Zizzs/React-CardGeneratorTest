import React, { Component } from "react";
import createCard from "../../utils/CardGeneration";
import "./CardGeneration.css";

class CardGeneration extends Component {
  state = {
    zero: 0,
    zeroRarity: 0,
    one: 0,
    oneRarity: 0,
    two: 0,
    twoRarity: 0,
    three: 0,
    threeRarity: 0,
    four: 0,
    fourRarity: 0,
    five: 0,
    fiveRarity: 0
  };
  render() {
    let generateCard = () => {
      let amountOfStats = createCard();
      if (amountOfStats === 0) {
        let total = this.state.zero;
        total++;
        this.setState({ zero: total });
      } else if (amountOfStats === 1) {
        let total = this.state.one;
        total++;
        this.setState({ one: total });
      } else if (amountOfStats === 2) {
        let total = this.state.two;
        total++;
        this.setState({ two: total });
      } else if (amountOfStats === 3) {
        let total = this.state.three;
        total++;
        this.setState({ three: total });
      } else if (amountOfStats === 4) {
        let total = this.state.four;
        total++;
        this.setState({ four: total });
      } else if (amountOfStats === 5) {
        let total = this.state.five;
        total++;
        this.setState({ five: total });
      }
    };
    let calculateRarities = () => {
      let total =
        this.state.zero +
        this.state.one +
        this.state.two +
        this.state.three +
        this.state.four +
        this.state.five;
      let zeroRarity = (this.state.zero / total) * 100;
      zeroRarity = Math.max(Math.round(zeroRarity * 100) / 100).toFixed(3);
      this.setState({ zeroRarity });

      let oneRarity = (this.state.one / total) * 100;
      oneRarity = Math.max(Math.round(oneRarity * 100) / 100).toFixed(3);
      this.setState({ oneRarity });

      let twoRarity = (this.state.two / total) * 100;
      twoRarity = Math.max(Math.round(twoRarity * 100) / 100).toFixed(3);
      this.setState({ twoRarity });

      let threeRarity = (this.state.three / total) * 100;
      threeRarity = Math.max(Math.round(threeRarity * 100) / 100).toFixed(3);
      this.setState({ threeRarity });

      let fourRarity = (this.state.four / total) * 100;
      fourRarity = Math.max(Math.round(fourRarity * 100) / 100).toFixed(3);
      this.setState({ fourRarity });

      let fiveRarity = (this.state.five / total) * 100;
      fiveRarity = Math.max(Math.round(fiveRarity * 100) / 100).toFixed(3);
      this.setState({ fiveRarity });
    };

    let generateHundredCards = () => {
      let hundred = 100000;
      while (hundred > 0) {
        setTimeout(function() {
          generateCard();
          calculateRarities();
        }, 250);
        hundred--;
      }
    };

    return (
      <div>
        <div>
          <div className="mainGrid">
            <div>
              <p>Total Items with Zero Stats: {this.state.zero}</p>
              <p>Zero Stat Rarity: </p>
              <p>{this.state.zeroRarity}%</p>
            </div>
            <div>
              <p>Total Items with One Stat: {this.state.one}</p>
              <p>One Stat Rarity: </p>
              <p>{this.state.oneRarity}%</p>
            </div>
            <div>
              <p>Total Items with Two Stats: {this.state.two}</p>
              <p>Two Stat Rarity: </p>
              <p>{this.state.twoRarity}%</p>
            </div>
            <div>
              <p>Total Items with Three Stats: {this.state.three}</p>
              <p>Three Stat Rarity: </p>
              <p>{this.state.threeRarity}%</p>
            </div>
            <div>
              <p>Total Items with Four Stats: {this.state.four}</p>
              <p>Four Stat Rarity: </p>
              <p>{this.state.fourRarity}%</p>
            </div>
            <div>
              <p>Total Items with Five Stats: {this.state.five}</p>
              <p>Five Stat Rarity: </p>
              <p>{this.state.fiveRarity}%</p>
            </div>
          </div>
        </div>
        <button onClick={generateCard}>Generate a Card</button>
        <button onClick={generateHundredCards}>Generate 100000 Cards</button>
      </div>
    );
  }
}

export default CardGeneration;
