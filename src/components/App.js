import React, { Component } from 'react';
import './App.css';
import SearchBox from './Search';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';


class App extends Component {

  state = {
    photos: []
  }

  onSearch = (term) => {
    unsplash.get('/search/photos', {
      params: {
        query: term
      },
    })
      .then((res) => {
        let response = res.data.results
        console.log(response)
        this.setState({
          photos: response
        })
      })
      .catch((err) => console.log(err))
  }

  render() {

    return (
      <div className="ui container">
        <SearchBox
          search={this.onSearch}
        />
        <ImageList
          photos={this.state.photos}
        />
      </div>
    );
  }
}

export default App;
