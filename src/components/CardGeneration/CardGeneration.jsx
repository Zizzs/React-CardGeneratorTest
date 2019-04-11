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
    fiveRarity: 0,
    six: 0,
    sixRarity: 0,
    seven: 0,
    sevenRarity: 0,
    eight: 0,
    eightRarity: 0,
    nine: 0,
    nineRarity: 0,
    ten: 0,
    tenRarity: 0,
    savedCards: []
  };
  render() {
    let generateCard = () => {
      let item = createCard();
      let amountOfStats = item.stats.length;
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
      } else if (amountOfStats === 6) {
        let total = this.state.six;
        total++;
        let tempCards = this.state.savedCards.slice(0);
        tempCards.push(item);
        this.setState({ six: total, savedCards: tempCards });
      } else if (amountOfStats === 7) {
        let total = this.state.seven;
        total++;
        let tempCards = this.state.savedCards;
        tempCards.push(item);
        this.setState({ seven: total, savedCards: tempCards });
      } else if (amountOfStats === 8) {
        let total = this.state.eight;
        total++;
        let tempCards = this.state.savedCards;
        tempCards.push(item);
        this.setState({ eight: total, savedCards: tempCards });
      } else if (amountOfStats === 9) {
        let total = this.state.nine;
        total++;
        let tempCards = this.state.savedCards;
        tempCards.push(item);
        this.setState({ nine: total, savedCards: tempCards });
      } else if (amountOfStats === 10) {
        let total = this.state.ten;
        total++;
        let tempCards = this.state.savedCards;
        tempCards.push(item);
        this.setState({ ten: total, savedCards: tempCards });
      }
    };
    let calculateRarities = () => {
      let total =
        this.state.zero +
        this.state.one +
        this.state.two +
        this.state.three +
        this.state.four +
        this.state.five +
        this.state.six +
        this.state.seven +
        this.state.eight +
        this.state.nine +
        this.state.ten;
      let zeroRarity = (this.state.zero / total) * 100;
      zeroRarity = Math.max(Math.round(zeroRarity * 1000) / 1000).toFixed(4);
      this.setState({ zeroRarity });

      let oneRarity = (this.state.one / total) * 100;
      oneRarity = Math.max(Math.round(oneRarity * 1000) / 1000).toFixed(4);
      this.setState({ oneRarity });

      let twoRarity = (this.state.two / total) * 100;
      twoRarity = Math.max(Math.round(twoRarity * 1000) / 1000).toFixed(4);
      this.setState({ twoRarity });

      let threeRarity = (this.state.three / total) * 100;
      threeRarity = Math.max(Math.round(threeRarity * 1000) / 1000).toFixed(4);
      this.setState({ threeRarity });

      let fourRarity = (this.state.four / total) * 100;
      fourRarity = Math.max(Math.round(fourRarity * 1000) / 1000).toFixed(4);
      this.setState({ fourRarity });

      let fiveRarity = (this.state.five / total) * 100;
      fiveRarity = Math.max(Math.round(fiveRarity * 1000) / 1000).toFixed(4);
      this.setState({ fiveRarity });

      let sixRarity = (this.state.six / total) * 100;
      sixRarity = Math.max(Math.round(sixRarity * 1000) / 1000).toFixed(4);
      this.setState({ sixRarity });

      let sevenRarity = (this.state.seven / total) * 100;
      sevenRarity = Math.max(Math.round(sevenRarity * 1000) / 1000).toFixed(4);
      this.setState({ sevenRarity });

      let eightRarity = (this.state.eight / total) * 100;
      eightRarity = Math.max(Math.round(eightRarity * 1000) / 1000).toFixed(4);
      this.setState({ eightRarity });

      let nineRarity = (this.state.nine / total) * 100;
      nineRarity = Math.max(Math.round(nineRarity * 1000) / 1000).toFixed(4);
      this.setState({ nineRarity });

      let tenRarity = (this.state.ten / total) * 100;
      tenRarity = Math.max(Math.round(tenRarity * 1000) / 1000).toFixed(4);
      this.setState({ tenRarity });
    };

    let generateHundredCards = () => {
      let hundred = 100000;
      while (hundred > 0) {
        setTimeout(function() {
          generateCard();
          calculateRarities();
        }, 500);
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
            <div>
              <p>Total Items with Six Stats: {this.state.six}</p>
              <p>Six Stat Rarity: </p>
              <p>{this.state.sixRarity}%</p>
            </div>
            <div>
              <p>Total Items with Seven Stat: {this.state.seven}</p>
              <p>Seven Stat Rarity: </p>
              <p>{this.state.sevenRarity}%</p>
            </div>
            <div>
              <p>Total Items with Eight Stats: {this.state.eight}</p>
              <p>Eight Stat Rarity: </p>
              <p>{this.state.eightRarity}%</p>
            </div>
            <div>
              <p>Total Items with Nine Stats: {this.state.nine}</p>
              <p>Nine Stat Rarity: </p>
              <p>{this.state.nineRarity}%</p>
            </div>
            <div>
              <p>Total Items with Ten Stats: {this.state.ten}</p>
              <p>Ten Stat Rarity: </p>
              <p>{this.state.tenRarity}%</p>
            </div>
          </div>
        </div>
        <button onClick={generateCard}>Generate a Card</button>
        <button onClick={generateHundredCards}>Generate 100000 Cards</button>
        <div>
          {this.state.savedCards.map(card => {
            return (
              <div key={this.state.savedCards.indexOf(card)}>
                <hr />
                <p>
                  {card.type} Card ({card.stats.length})
                </p>
                {card.stats.map(stat => {
                  return (
                    <div className="statDiv" key={card.stats.indexOf(stat)}>
                      <div>
                        <p>{stat.name}</p>
                      </div>
                      <div>
                        <p>{stat.type}</p>
                      </div>
                      <div>
                        <p>{stat.modifier}</p>
                      </div>
                      <div>
                        <p>{stat.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CardGeneration;
