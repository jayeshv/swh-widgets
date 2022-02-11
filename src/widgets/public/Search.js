import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class SearchFormWidget extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      query: props.query
    };
  }

  handleChange = (event) => {
    this.setState({query: event.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push('/results');
  }

  // redirect to the Results page
  render() {
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Search in SWH archive</Form.Label>
          <Form.Control type="text" placeholder="Enter query"
                        value={this.state.query}
                        onChange={this.handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>
    );
  }
}

export default SearchFormWidget;
