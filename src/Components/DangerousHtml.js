import React, { Component } from 'react'
import PropTypes from "prop-types";

import "../fonts/fonts.css"

export default class DangerousHtml extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: true
    };
  }

  render() {
    if(this.props.text.length < 250){
      return  <p className = "Rob4 s16" dangerouslySetInnerHTML={{ __html: this.props.text}}>
      </p>
    }
    return (
      <div>
        <p className = "Rob4 s16" dangerouslySetInnerHTML={{ __html: this.state.showMore ? `${this.props.text.slice(0, 250)}...` : this.props.text }}>
        </p>
        <p href = "" className = "Rob4 s16" style = {{cursor: "pointer", color: "blue"}}
        onClick = {() => this.setState({showMore: !this.state.showMore})}>
          &nbsp; View {this.state.showMore ? "More" : "Less"}
        </p>
      </div>
    )
  }
}
DangerousHtml.propTypes = {
  text: PropTypes.string,
};
