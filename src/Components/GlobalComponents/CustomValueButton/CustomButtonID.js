import React, { Component } from "react";

export default class CustomButtonID extends Component {
  render() {
    const id = this.props.id;
    return (
      <div>
        {id === "Capacity" || id === "Size" || id === "Color" ? null : (
          <h3 className= {`${this.props.FontClassName}`} >
            {id}
          </h3>
        )}
        {this.props.fakeText === "yes" && (id === "Capacity" || id === "Size" || id === "Color")? <div style={{height: "18px"}} /> : null}
      </div>
    );
  }
}
