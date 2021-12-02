import { Component } from 'react'
import Header from '../../Header/Header'
import ProductDescription from './ProductDescription'
import {ProductDescriptionContainerOutter, ProductDescriptionContainerInner} from '../Body.styles'

export default class ProductDescriptionContainer extends Component {
  render() {
    return (
      <ProductDescriptionContainerOutter>
        <Header />
        <ProductDescriptionContainerInner>
          <ProductDescription id = {this.props.match.params.id} />
        </ProductDescriptionContainerInner>
      </ProductDescriptionContainerOutter>
    )
  }
}
