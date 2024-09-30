import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { sanityClient as client } from '../sanity/lib/client'; // Adjust the import
import styles from './Search.module.css';

export default function Search() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  let debounceTimer;

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }

    debounceTimer = setTimeout(() => {
      if (value.length > 1) {
        setLoading(true);
        fetchSuggestions(value);
      } else {
        setSuggestions([]);
        setDropdownVisible(false);
        setLoading(false);
      }
    }, 300);
  };

  const fetchSuggestions = async (searchValue) => {
    const results = await client.fetch(
      `*[_type in ["featuredProperties", "sellingNow", "offers", "newProperties", "soldOut"] && location match $location]{
        location
      }`,
      { location: `${searchValue}*` }
    );

    const uniqueLocations = [...new Set(results.map((item) => item.location))];
    setSuggestions(uniqueLocations);
    setDropdownVisible(true);
    setLoading(false);
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
