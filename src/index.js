import React from "react";
import ReactDOM from "react-dom";

const Title = props => {
  return (
    <div>
      <h1 style={{ color: props.color }}>{props.titleText}</h1>
    </div>
  );
};

const TitleList = () => {
  return (
    <div>
      <Title color="rebeccapurple" titleText="This is the First title" />
      <Title color="dimgray" titleText="This is the Second title" />
      <Title color="fuchsia" titleText="This is the Third title" />
      <Title color="yellowgreen" titleText="This is the Fourth title" />
      <Title color="peru" titleText="This is the Fifth title" />
    </div>
  );
};

ReactDOM.render(<TitleList />, document.getElementById("root"));
