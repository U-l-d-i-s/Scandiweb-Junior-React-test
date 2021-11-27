import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactHtmlParser from "react-html-parser";
import DOMPurify from "dompurify";
import "../../../fonts/fonts.css";
import styled from "styled-components";



export default class DangerousHtml extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: true,
    };
  }

  render() {
    const DangerousHtmlContainer = styled.div`
      margin-top: 30px;
`;
    let clean = DOMPurify.sanitize(this.props.text, {
      USE_PROFILES: { html: true },
    });

    if (this.props.text.length < 250) {
      return <DangerousHtmlContainer className="Rob4 s16" id="desc">{ReactHtmlParser(clean)}</DangerousHtmlContainer>;
    }
    return (
      <DangerousHtmlContainer>
        <div id="desc">
          {ReactHtmlParser(
            this.state.showMore
              ? `${this.props.text.slice(0, 250)}...`
              : this.props.text
          )}
        </div>
        <p
          href=""
          className="Rob4 s16"
          style={{ cursor: "pointer", color: "blue" }}
          onClick={() => this.setState({ showMore: !this.state.showMore })}
        >
          &nbsp; View {this.state.showMore ? "More" : "Less"}
        </p>
      </DangerousHtmlContainer>
    );
  }
}
DangerousHtml.propTypes = {
  text: PropTypes.string,
};
