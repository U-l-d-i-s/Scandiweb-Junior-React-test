import { Component } from "react";

export default class DropdownCartTopText extends Component {
  render() {
    return (
      <div style={{ width: "140px", marginBottom: "20px" }}>
        <h5 style={{ display: "flex" }} className="Rale5 s16">
          <p style={{ marginRight: "4px" }} className="Rale7 s16">
            My Bag,{" "}
          </p>
          {this.props.quantityOfProducts} items
        </h5>
      </div>
    );
  }
}
