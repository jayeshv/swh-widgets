import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import SearchWidget from './widgets/public/Search';
import SearchResultsWidget from './widgets/public/SearchResults';
import BrowseWidget from './widgets/public/Browse';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          {/* Public Widgets */}
          <Route path="search/" element={<SearchWidget />} />
          <Route path="results/" element={<SearchResultsWidget />} />
          <Route path="browse/" element={<BrowseWidget />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
