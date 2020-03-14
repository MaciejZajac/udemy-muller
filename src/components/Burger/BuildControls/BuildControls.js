import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];
const BuildControls = ({
  ingredientAdded,
  ingredientDed,
  disabledInfo,
  price,
  purchaseable,
  ordered
}) => (
  <div className={classes.BuildControls}>
    <p>
      Current Price: <strong>{price.toFixed(2)}</strong>
    </p>
    {controls.map(item => (
      <BuildControl
        key={item.label}
        label={item.label}
        isDisabled={disabledInfo[item.type]}
        added={() => ingredientAdded(item.type)}
        removed={() => ingredientDed(item.type)}
      />
    ))}
    <button
      className={classes.OrderButton}
      disabled={!purchaseable}
      onClick={ordered}
    >
      ORDER NOW
    </button>
  </div>
);

export default BuildControls;
