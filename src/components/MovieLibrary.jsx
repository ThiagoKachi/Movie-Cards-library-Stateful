import React from 'react';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
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

  searchForMovies(searchText, bookmarkedOnly, selectedGenre, movies) {
    let searchByParameter = movies;
    if (searchText !== '') {
      searchByParameter = movies
        .filter(({ title, subtitle, storyline }) => title.toLowerCase().includes(searchText)
        || subtitle.toLowerCase().includes(searchText)
        || storyline.toLowerCase().includes(searchText));
    }
    if (bookmarkedOnly) {
      return searchByParameter
        .filter(({ bookmarked }) => bookmarked);
    }
    if (selectedGenre !== '') {
      return searchByParameter
        .filter(({ genre }) => genre === selectedGenre);
    }
    return searchByParameter;
  }

  addMovie(newMovie, movies) {
    this.setState({ movies: [...movies, newMovie] });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return(
      <div>
        <SearchBar 
          SearchBar={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.handleSearchText }
          onBookmarkedChange={ this.handleBookmarkedOnly }
          onSelectedGenreChange={ this.handleSelectedGenre }
        />
        <MovieList movies={ this.searchForMovies(
          searchText, bookmarkedOnly, selectedGenre, movies
        ) }
        />

        <AddMovie onClick={ (newMovie) => this.addMovie(newMovie, movies) } />

      </div>
    )
  }
}

export default MovieLibrary;
