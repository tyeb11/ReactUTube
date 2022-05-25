import React, { Component } from "react";

class SearchBar extends Component {
  state = { term: "" };
  onInputChange(e) {
    this.setState({ term: e.target.value });
  }
  onFormSubmit(e) {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
  }
  render() {
    return (
      <>
        <form onSubmit={(e) => this.onFormSubmit(e)} className="ui form">
          <div className="field">
            <div className="ui category search">
              <div className="ui icon input">
                <input
                  className="prompt"
                  type="text"
                  placeholder="Search Videos..."
                  value={this.state.term}
                  onChange={(e) => this.onInputChange(e)}
                />
                <i className="search icon"></i>
              </div>
              <div className="results"></div>
            </div>
          </div>
        </form>
      </>
    );
  }
}
export default SearchBar;
