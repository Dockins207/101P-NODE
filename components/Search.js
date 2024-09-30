// components/Search.js
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { client } from '../sanity/lib/client';
import styles from './Search.module.css';

export default function Search() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  let debounceTimer;

  // Handle input change and debounce the API call
  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    // Clear previous timer
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }

    // Set a new debounce timer
    debounceTimer = setTimeout(() => {
      if (value.length > 1) {
        setLoading(true); // Show loading indicator
        fetchSuggestions(value);
      } else {
        setSuggestions([]);
        setDropdownVisible(false);
        setLoading(false);
      }
    }, 300); // Delay of 300ms before fetching data
  };

  // Fetch matching locations from Sanity
  const fetchSuggestions = async (searchValue) => {
    const results = await client.fetch(
      `*[_type in ["featuredProperties", "sellingNow", "offers", "newProperties", "soldOut"] && location match $location]{
        location
      }`,
      { location: `${searchValue}*` } // Perform location search
    );

    const uniqueLocations = [...new Set(results.map((item) => item.location))];
    setSuggestions(uniqueLocations);
    setDropdownVisible(true);
    setLoading(false); // Hide loading indicator
  };

  const handleLocationClick = (location) => {
    router.push(`/search-results?location=${location}`);
    setDropdownVisible(false);
    setQuery(location);
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search by location..."
        value={query}
        onChange={handleInputChange}
        onFocus={() => setDropdownVisible(true)}
      />
      {loading && <div className={styles.loading}>Loading...</div>}
      {isDropdownVisible && suggestions.length > 0 && (
        <ul className={styles.suggestionsDropdown}>
          {suggestions.map((location, index) => (
            <li
              key={index}
              onClick={() => handleLocationClick(location)}
              className={styles.suggestionItem}
            >
              {location}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
