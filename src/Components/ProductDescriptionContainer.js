import { Component } from 'react'
import Header from './Header'
import ProductDescription from './ProductDescription'

export default class ProductDescriptionContainer extends Component {
  render() {
    return (
      <div style={{ marginBottom: "40px"}}>
        <Header />
        <div style={{ paddingTop: "80px" }}>
          <ProductDescription id = {this.props.match.params.id} />
        </div>
      </div>
    )
  }
}
