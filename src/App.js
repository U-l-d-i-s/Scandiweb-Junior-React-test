import QueryProducts from "./Components/Body/QueryProducts/QueryProducts";
import Header from "./Components/Header/Header";
import CurrentCategory from "./Components/Body/CurrentCategory";
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
