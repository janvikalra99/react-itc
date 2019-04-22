import React, { Component } from 'react';


class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { searchterm: '' };
    this.onInputChange = this.onInputChange.bind(this);
  }


  onInputChange(event) {
    this.setState({ searchterm: event.target.value });
  }


  render() {
    return (
      <div>
        <input onChange={this.onInputChange} />
        <p> State value: {this.state.searchterm} </p>
      </div>
    );
  }
}

export default SearchBar;
