import { Component } from "react";
import {TopDroCartTextWrapper, TopDroCartTextContainer, TopDroCartText} from '../Header.style'
export default class DropdownCartTopText extends Component {
  render() {
    return (
      <TopDroCartTextWrapper >
        <TopDroCartTextContainer className="Rale5 s16">
          <TopDroCartText className="Rale7 s16">
            My Bag,{" "}
          </TopDroCartText>
          {this.props.quantityOfProducts} items
        </TopDroCartTextContainer>
      </TopDroCartTextWrapper>
    );
  }
}
