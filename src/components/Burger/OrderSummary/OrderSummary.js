import React from "react";
import Button from "../../UI/Button/Button";
import Aux from "../../../hoc/Aux/Aux";

export default class OrderSummary extends React.Component {
  render() {
    const {
      ingredients,
      price,
      purchaseCanceled,
      purchaseContinue
    } = this.props;
    const ingredientSummary = Object.keys(ingredients).map(igKey => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
          {ingredients[igKey]}
        </li>
      );
    });

    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: {price.toFixed(2)}</strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" onClick={purchaseCanceled}>
          CANCEL
        </Button>
        <Button btnType="Success" onClick={purchaseContinue}>
          CONTINUE
        </Button>
      </Aux>
    );
  }
}
