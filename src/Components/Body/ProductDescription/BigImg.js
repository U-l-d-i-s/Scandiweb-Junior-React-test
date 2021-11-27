import { Component } from "react";

export default class BigImg extends Component {
  render() {
    return (
        <object
          style={{height: "500px", width: "auto" , paddingLeft: "30px", paddingTop: "5px"}}
          data={this.props.data}
          type="image/jpg"
        ></object>
    );
  }
}
// style={{ minHeight: "600px", width: "1000px" }}