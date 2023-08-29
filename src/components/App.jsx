
import axios from 'axios';
import { FallingLines } from 'react-loader-spinner';
import { GlobalStyle } from './Global-style';
import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from './ImageGallery/ImageGallery';

axios.defaults.baseURL = 'https://pixabay.com/api';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
  };



submitHandler = (newQuery) => {
  if (newQuery !== '') {
    this.setState({
      query: `${Date.now()}/${newQuery}`,
      images: [],
      page: 1,
    })
  } else { 
    console.log('please, enter your query')
  }
};

async componentDidUpdate(prevProps, prevState) {
  if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
    const response = await axios.get(`?q=${this.state.query.slice(this.state.query.indexOf('/') + 1)}&page=${this.state.page}&key=38182493-8ca9f9673ab94459449d03b1c&image_type=photo&orientation=horizontal&per_page=12`);
    this.setState(prevState => ({ 
      images: prevState.images.concat(response.data.hits), 
    }));
  } else { 
    return; 
  };
};

loadMoreHendler = () => {
  this.setState(prevState => ({ page: prevState.page + 1 }));
};

 render() {
  return (
    <>
      <GlobalStyle />
      <Searchbar changeQuery={this.submitHandler} />
      <FallingLines
        color="#4fa94d"
        width="100"
        visible={false}
        ariaLabel='falling-lines-loading'
      />
      <ImageGallery imageList={this.state.images}/>
      {this.state.images.length !== 0 ? (
          <button onClick={this.loadMoreHendler}>Load more</button>
        ) : (
          <p />
        )}
    </>
  );
 };
};
