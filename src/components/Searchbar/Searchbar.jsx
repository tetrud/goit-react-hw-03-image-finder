import { Component } from 'react';

import './Searchbar.scss';

class Searchbar extends Component {
  state = { query: '' };

  handleChange = event => {
    this.setState({ query: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    console.log(this.props.onSubmit(this.state.query));

    this.props.onSubmit(this.state.query.trim());
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;

    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>
          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;
