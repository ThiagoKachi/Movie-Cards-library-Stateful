import React from 'react';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearchText = this.handleSearchText.bind(this);
    this.handleBookmarkedOnly = this.handleBookmarkedOnly.bind(this);
    this.handleSelectedGenre = this.handleSelectedGenre.bind(this);
    
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    }
  }

  handleSearchText(event) {
    this.setState({
      searchText: event.target.value
    })
  }

  handleBookmarkedOnly(event) {
    this.setState({
      bookmarkedOnly: event.target.checked
    })
  }

  handleSelectedGenre(event) {
    this.setState({
      selectedGenre: event.target.value
    })
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return(
      <SearchBar 
        SearchBar={ searchText }
        bookmarkedOnly={ bookmarkedOnly }
        selectedGenre={ selectedGenre }
        onSearchTextChange={ this.handleSearchText }
        onBookmarkedChange={ this.handleBookmarkedOnly }
        onSelectedGenreChange={ this.handleSelectedGenre }
      />
    )
  }
}

export default MovieLibrary;
