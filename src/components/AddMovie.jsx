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
    const { title, subtitle, imagePath, storyline } = this.state;

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
      </form>
    )
  }
}

export default AddMovie;
