import { useState } from 'react';
import './searchInput.css'
import { FiSearch } from "react-icons/fi";

// eslint-disable-next-line react/prop-types
const SearchInput = ({placeHolder, onInputChange }) => {
    const [searchValue, setSearchValue] = useState('');

    const handleChange = (event) => {
        const newValue = event.target.value;
        setSearchValue(newValue);
        onInputChange(newValue);
    };
  return (
    <div className="px-8 relative">
        <span className="search__icon">
            <FiSearch size="24"/>
        </span>
        <input
            type="text" 
            name="search"
            id="search"
            placeholder={placeHolder} 
            className="page__search"
            value={searchValue}
            onChange={handleChange}
        />
    </div>
  )
}

export default SearchInput