import React from "react";
import { Header, Segment } from "semantic-ui-react";

class Card extends React.Component {
  render() {
    return (
      <Segment>
        <Header as="h3">
          {this.props.word}
        </Header>
        <p>
          { this.props.body }
        </p>
      </Segment>
    )
  };
};

export default Card;