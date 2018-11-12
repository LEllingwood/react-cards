import React from "react";

const CardGroup = props => <div className="cardGroup">{props.children}</div>;

const Card = props => (
  <div className="card cardGroup__card">
    <div className="card__description cardGroup__cardDescription">
      <div className={`icon fa ${props.icon} card__descriptionIcon`} />
      <div className="card__descriptionText">
        {props.description}
        <br />
        {props.hint}
      </div>
    </div>
    <div className="card__price">{props.price}!</div>
  </div>
);
const App = () => (
  <CardGroup>
    <Card
      icon={"fa-thumbs-o-up"}
      description={"Trial"}
      hint={""}
      price={"Free!"}
      >
      {" "}
    </Card>

    <Card
        icon={"fa-trophy"}
        description={"Basic tier"}
        hint={"most popular"}
        price={"$10.00"}
        >
    </Card>
    <Card
        icon={"fa-bolt"}
        description={"Advanced tier"}
        hint={"only for entrprise-level professioanls"}
        price={"$6,000.00"}
    >
    </Card>
  </CardGroup>
);

export default App;
