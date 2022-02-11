import React from 'react';
// import ApiGet from '../../utils/ApiClient';
import SearchFormWidget from './Search';

class SearchResultsWidget extends React.Component{

  constructor(props) {
    super(props);
    const params = new URLSearchParams(window.location.search);
    this.state = {
      loading: true,
      query: params.get('q'),
      results: []
    };
  }

  async componentDidMount() {
    //Make the API call and alter the state
    // Add try catch
    if (this.state.query) {
      const api = 'https:archive.softwareheritage.org/api/1/origin/search/' + this.state.query;
      const response = await fetch(api);
      const results = await response.json();
      this.setState({results: results, loading: false});
    }
  }

  render() {
    return(
      <div>
        <SearchFormWidget query={this.state.query} />
        Results
        <div>
          {
            this.state.loading ?
            <p>Loading</p>
            :
            this.state.results.map(record=> (
              <p key={record.url}>{record.url}</p>
            ))
          }
        </div>
      </div>
    );
  }
}

export default SearchResultsWidget;
