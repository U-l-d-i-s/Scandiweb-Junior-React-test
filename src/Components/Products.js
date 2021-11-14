import React, {PureComponent } from "react";
import PropTypes from "prop-types";

import { ProductWindowH2, ProductWindowIMG, ProductWindowH4, BuyButtonContainer} from "./Header.style";
import BuyButton from "./BuyButton";
import { Link } from "react-router-dom";
import {ReactComponent as CartVect} from '../icons/Empty Cart White.svg';
import "../fonts/fonts.css"
import styled from "styled-components";

const HovEff = styled.div`
position: relative;
transition: 0.04s;
&:hover{
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  transform: scale(1.05);
}
`;

class Products extends PureComponent{
constructor(props){
  super(props);
  this.HovRef = React.createRef();

  this.state = {
    over: false,
    size: "",
    inStock: 1,
    hovered: false
  }
}
  componentDidMount = () =>{
    this.ifInStock();
  }

  ifInStock = () =>{
    if(!this.props.inStock){
      this.setState({
        inStock: .5,
      })
    }
  }

  handleBuyButton = (val)  => {
    this.setState({
      over : val
    })
  } 

  render(){
    if(this.state.over && this.HovRef.current && this.HovRef.current.matches(':hover') === false){
      this.setState({over: false});
    }
    const ProductWindow = styled.div`
    width: 320px;
    height: 400px;
    padding-top: 20px;
    padding-left: 20px;
    filter: opacity(${this.state.inStock});
    `;
    return(
        <HovEff ref={this.HovRef} onMouseEnter = {() => {this.setState({over: true})}} onMouseLeave = {() =>this.setState({over: false})}>
          <div   >
          {this.props.inStock ? null : <p style = {{position: "absolute", fontSize: "23px", color: "rgba(141, 143, 154, 1)",left: "50%", top: "50%",transform: "translate(-50%, -50%)"}} className ="Rale4" >OUT OF STOCK</p>}
          <Link to={`/ProductDescriptionContainer/${this.props.id}`} >
            <ProductWindow >
              <ProductWindowIMG src = {this.props.gallery} style= {{display: "block", width: "300px", height: "300px", objectFit: "cover", }}/>
              <ProductWindowH2 className ="Rale3 s18" style = {{color: "rgba(141, 143, 154, 1)"}}>{this.props.name}</ProductWindowH2>         
              <ProductWindowH4 className ="Rale5 s18" style = {{color: "rgba(141, 143, 154, 1)"}}>{this.props.currencySymbol} {this.props.amount}</ProductWindowH4>
              
            </ProductWindow>      
          </Link>
          <BuyButtonContainer >
            {this.state.over ? <BuyButton product = {this.props.product} id = {this.props.id}icon = {<CartVect style = {{ position:" absolute", right: "21px",bottom: "20px",transform: "scale(1.2)"}}/>}/>: null}
          </BuyButtonContainer>
          </div>
        </HovEff>

    );
  }
}
Products.propTypes = {
  product : PropTypes.object,
  inStock : PropTypes.bool,
  id : PropTypes.string,
  currencySymbol : PropTypes.string,
  amount : PropTypes.number,
} 
export default Products;