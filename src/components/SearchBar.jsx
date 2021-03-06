import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { 
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
     } = this.props;

    return(
      <form data-testid="search-bar-form">
        <label htmlFor="text-input" data-testid="text-input-label">
          Inclui o texto:
          <input
            id="text-input"
            data-testid="text-input"
            type="text" 
            value={ searchText }
            onChange={ onSearchTextChange }
            />
        </label>

        <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            data-testid="checkbox-input"
            checked={ bookmarkedOnly }
            type="checkbox" 
            name="" 
            id="checkbox-input"
            onChange={ onBookmarkedChange }
          />
        </label>

        <label htmlFor="select-input" data-testid="select-input-label">
          Filtrar por gênero
          <select 
            data-testid="select-input"
            id="select-input"
            value={ selectedGenre } 
            onChange={ onSelectedGenreChange }
          >
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    )
  }
}

export default SearchBar;
