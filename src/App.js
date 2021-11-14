import QueryProducts from "./Components/QueryProducts";
import Header from "./Components/Header";
import CurrentCategory from "./Components/CurrentCategory";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <CurrentCategory />
        <QueryProducts />
      </div>
    );
  }
}
export default App;
