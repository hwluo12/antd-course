import React, { Component } from "react";
import { Card, Button } from "antd";

export default class PuzzleCards extends Component {
  constructor(props) {
    super(props);
    this.counter = 100;
    this.state = {
      cardList: [
        {
          id: 1,
          setup: "Did you hear about the two silk worms in a race?",
          punchline: "It ended in a tie"
        },
        {
          id: 2,
          setup: "What happens to a frog's car when it breaks down?",
          punchline: "It gets toad away"
        }
      ]
    };
  }

  addNewCard = () => {
    this.setState(prevState => {
      const prevCardList = prevState.cardList;
      this.counter += 1;
      const card = {
        id: this.counter,
        setup: "this is a test setup",
        punchline: "this is a test punchline"
      };
      return {
        cardList: prevCardList.concat(card)
      };
    });
  };

  render() {
    return (
      <div>
        {this.state.cardList.map(card => {
          return (
            <Card key={card.id}>
              <div>Q: {card.setup}</div>
              <div>
                <strong>A: {card.punchline}</strong>
              </div>
            </Card>
          );
        })}
        <div>
          <Button onClick={this.addNewCard}>添加卡片</Button>
        </div>
      </div>
    );
  }
}
