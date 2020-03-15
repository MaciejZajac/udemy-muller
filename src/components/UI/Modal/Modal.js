import React from "react";
import classes from "./Modal.module.css";
import Aux from "../../../hoc/Aux/Aux";
import Backdrop from "../Backdrop/Backdrop";

export default class Modal extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }

  componentDidUpdate() {
    console.log("[modal] did update");
  }
  render() {
    const { show, children, modalClosed } = this.props;

    return (
      <Aux>
        <Backdrop show={show} clicked={modalClosed} />
        <div
          className={classes.Modal}
          style={{
            transform: show ? "translateY(0)" : "translateY(-100vh)",
            opacity: show ? "1" : "0"
          }}
        >
          {children}
        </div>
      </Aux>
    );
  }
}
