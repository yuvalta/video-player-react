import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit(event) {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div lass="ui segment">
        <form class="ui form" onSubmit={(event) => this.onFormSubmit(event)}>
          <div class="field">
            <label>Search something...</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
