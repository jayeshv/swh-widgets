import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import SearchWidget from './widgets/public/Search';
import SearchResultsWidget from './widgets/public/SearchResults';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="browse/" element={<WelcomePage />} />
          {/* Public Widgets */}
          <Route path="search/" element={<SearchWidget />} />
          <Route path="results/" element={<SearchResultsWidget />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
