import React, { Component } from 'react'
import styled from 'styled-components';


export default class OutOfStockButton extends Component {
  render() {
    const CustomButton = styled.div`
    margin-top: 5px;
    margin-right: 10px;
    width: ${this.props.width};
    height: ${this.props.height};
    border: ${this.props.BorderColor};
    Background-color: ${this.props.BackgroundColor};
    display: flex;
    justify-content: center;
    align-items: center;
    filter: ${this.props.opacity};
  `;
    return (
      <CustomButton className="Sans4">
        {this.props.value}
      </CustomButton>
    )
  }
}
