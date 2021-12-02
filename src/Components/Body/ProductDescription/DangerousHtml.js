import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactHtmlParser from "react-html-parser";
import DOMPurify from "dompurify";
import "../../../fonts/fonts.css";
import {ShowMore, DangerousHtmlContainer} from '../Body.styles'


export default class DangerousHtml extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: true,
    };
  }

  render() {

    let clean = DOMPurify.sanitize(this.props.text, {
      USE_PROFILES: { html: true },
    });

    if (this.props.text.length < 250) {
      return <DangerousHtmlContainer className="Rob4 s16">{ReactHtmlParser(clean)}</DangerousHtmlContainer>;
    }
    return (
      <DangerousHtmlContainer>
        <div >
          {ReactHtmlParser(
            this.state.showMore
              ? `${this.props.text.slice(0, 250)}...`
              : this.props.text
          )}
        </div>
        <ShowMore
          href=""
          className="Rob4 s16"
          
          onClick={() => this.setState({ showMore: !this.state.showMore })}
        >
          &nbsp; View {this.state.showMore ? "More" : "Less"}
        </ShowMore>
      </DangerousHtmlContainer>
    );
  }
}
DangerousHtml.propTypes = {
  text: PropTypes.string,
};
