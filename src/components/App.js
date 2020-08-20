import React, { Component } from 'react';



import './App.css';
import SearchBox from './Search';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';
import ImageDetail from './ImageDetail';


class App extends Component {

  state = {
    photos: [],
    selectedPic: null
  }

  onSearch = (term) => {
    unsplash.get('/search/photos', {
      params: {
        query: term,
        per_page: 30
      },
    })
      .then((res) => {
        let response = res.data.results
        console.log(response)
        this.setState({
          photos: response,
          selectedPic: null
        })
      })
      .catch((err) => console.log(err))
  }

  onPicSelect = (picture) => {
    console.log(picture)
    this.setState({
      selectedPic: picture
    })
  }

  render() {

    const { selectedPic } = this.state;

    return (
      
      <div className="ui container">
        <SearchBox
          search={this.onSearch}
        />

        {!selectedPic &&
          < ImageList
            onPicSelect={this.onPicSelect}
            photos={this.state.photos}
          />

        }
        {selectedPic &&
          <ImageDetail
            photo={selectedPic}
          />
        }

      </div>
    );
  }
}

export default App;
