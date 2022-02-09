import React from 'react';

import SearchFormWidget from '../widgets/public/Search';

class WelcomePage extends React.Component {
  render() {
    return(
      <div>
        <div>
          Welcome
        </div>
        <SearchFormWidget />
        {/* Other JS widgets */}
      </div>
    );
  }
}

export default WelcomePage;
