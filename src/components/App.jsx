import { GlobalStyle } from './Global-style';
import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";

export class App extends Component {
  state = {
    query: '',
    images: [],
  };

submitHandler = (newQuery) => {
  this.setState({
    query: newQuery,
  })
};

 render() {
  return (
    <>
      <GlobalStyle />
      <Searchbar changeQuery={this.submitHandler} />
    </>
  );
 };
};
