
import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.value);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
     <form onSubmit={this.handleSubmit}>
      <input className="inputText" id="venueType" onChange={this.handleChange} value={this.state.value} placeholder="I'm looking for..." />
      <input className = "btn btn-primary btn-lg" type="submit" value="Search" />
     </form>
    );
  }
}

export default Search;
