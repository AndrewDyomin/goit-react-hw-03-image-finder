import { GlobalStyle } from './Global-style';
import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";

export class App extends Component {
  state = {
    query: '',
  };

submitHandler = async evt => {
  evt.preventDefault();
  console.log(evt);
};

 render() {
  return (
    <>
      <GlobalStyle />
      <Searchbar onSubmit={this.submitHandler} />
    </>
  );
 };
};
