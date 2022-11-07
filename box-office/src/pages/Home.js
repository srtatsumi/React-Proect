import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';
import { apiGet } from '../misc/config';

const Home = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);
  const [searchOption, setSearchOption] = useState('shows');

  const isShowsSearch = searchOption === 'shows';

  const onInputChange = ev => {
    setInput(ev.target.value);
  };
  const onRadioChange = ev => {
    setSearchOption(ev.target.value);
  };

  const onSearch = () => {
    apiGet(`search/${searchOption}?q=${input}`).then(result => {
      setResults(result);
    });
  };
  const onKeyDown = ev => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };
  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>No Results</div>;
    }
    if (results && results.length > 0) {
      return results[0].show
        ? results.map(item => <div key={item.show.id}> {item.show.name} </div>)
        : results.map(item => (
            <div key={item.person.id}> {item.person.name} </div>
          ));
    }

    return null;
  };
  return (
    <MainPageLayout>
      <input
        type="text"
        placeholder="Search For Something"
        onChange={onInputChange}
        value={input}
        onKeyDown={onKeyDown}
      />
      <div>
        <label htmlFor="shows-search">
          Shows
          <input
            id="shows-search"
            type="radio"
            value="shows"
            checked={isShowsSearch}
            onChange={onRadioChange}
          />
        </label>
        <label htmlFor="actor-search">
          Actors
          <input
            id="actor-search"
            type="radio"
            value="people"
            checked={!isShowsSearch}
            onChange={onRadioChange}
          />
        </label>
      </div>
      <button type="button" onClick={onSearch}>
        Search
      </button>
      {renderResults(results)}
    </MainPageLayout>
  );
};

export default Home;
