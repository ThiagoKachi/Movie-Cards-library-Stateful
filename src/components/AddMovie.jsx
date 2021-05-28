import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action'
    }
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return(
      <form data-testid="add-movie-form">
        <label htmlFor="add-movie-input-title" data-testid="title-input-label">
          Título
          <input
            data-testid="title-input"
            name="title"
            type="text" 
            id="add-movie-input-title" 
            value={ title } 
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="add-movie-input-subtitle" data-testid="subtitle-input-label">
        Subtítulo
          <input
            data-testid="subtitle-input"
            name="subtitle"
            type="text" 
            id="add-movie-input-subtitle" 
            value={ subtitle } 
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="add-movie-input-image" data-testid="image-input-label">
          Imagem
          <input 
            data-testid="image-input"
            name="imagePath"
            type="text"
            value={ imagePath }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="add-movie-input-storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            data-testid="storyline-input"
            type="text"
            name="storyline"
            value={ storyline }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="add-movie-input-rating" data-testid="rating-input-label">
          Avaliação
          <input 
            data-testid="rating-input"
            id="add-movie-input-rating" 
            type="number"
            name="rating"
            value={ rating }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="add-movie-input-genre" data-testid="genre-input-label">
          Gênero
          <select 
            name="genre" 
            id="add-movie-input-genre"
            value={ genre }
            data-testid="genre-input"
            onChange={ this.handleChange }
          >
            <option value="action" ata-testid="genre-option">Ação</option>
            <option value="comedy" ata-testid="genre-option">Comédia</option>
            <option value="thriller" ata-testid="genre-option">Suspense</option>
          </select>
        </label>
      </form>
    )
  }
}

export default AddMovie;
