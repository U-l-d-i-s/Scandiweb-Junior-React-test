import { Component } from "react";
import {BigImgObject} from '../Body.styles'

export default class BigImg extends Component {
  render() {
    return (
        <BigImgObject
          data={this.props.data}
          type="image/jpg"
          aria-labelledby="picture"
        ></BigImgObject>
    );
  }
}
