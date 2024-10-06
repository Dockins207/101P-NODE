import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { sanityClient as client } from '../sanity/lib/client';
import styles from './Search.module.css';

export default function Search() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);
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
        setNoResults(false);
      }
    }, 300);
  };

  const fetchSuggestions = async (searchValue) => {
    const results = await client.fetch(
      `*[_type in ["featuredProperties", "sellingNow", "offers", "newProperties"] && location match $location]{
        location
      }`,
      { location: `${searchValue}*` }
    );

    const uniqueLocations = [...new Set(results.map((item) => item.location))];
    setSuggestions(uniqueLocations);
    setDropdownVisible(true);
    setLoading(false);

    if (uniqueLocations.length === 0) {
      setNoResults(true);
      setTimeout(() => {
        setNoResults(false);
      }, 3000); 
    }
  };

  const handleLocationClick = (location) => {
    router.push(`/search-results?location=${location}`);
    setDropdownVisible(false);
    setQuery(''); 
    setSuggestions([]);
    setNoResults(false); 
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const dropdown = document.querySelector(`.${styles.suggestionsDropdown}`);
      const searchInput = document.querySelector(`.${styles.searchContainer} input`);

      if (dropdown && !dropdown.contains(event.target) && !searchInput.contains(event.target)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (debounceTimer) clearTimeout(debounceTimer);
    };
  }, []);

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
      {noResults && !loading && <div className={styles.noResults}>No location found</div>}
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
