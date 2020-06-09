import React, { useContext, useRef } from "react";
import { Content } from "./styles";
import searchIcon from "../../assets/icons/search-icon.svg";
import { Context } from "../../Context";

const SearchBar = () => {
  const { handleSearch, setSearchString } = useContext(Context);
  const searchRef = useRef(null);
  const checkboxRef = useRef(null);

  return (
    <Content>
      <div className="search-bar">
        <div className="search-input">
          <img src={searchIcon} alt="search icon" />
          <input
            ref={searchRef}
            className="search"
            placeholder="search"
            type="search"
            name="search"
            id="search"
            onChange={() => setSearchString(searchRef.current.value)}
          />
        </div>
        <div className="check-label">
          <input
            ref={checkboxRef}
            className="checkbox-input"
            type="checkbox"
            name="checkbox"
            id="checkbox"
            onChange={() => handleSearch()}
          />
          <label htmlFor="checkbox">search in tags only</label>
        </div>
      </div>
      <button>add</button>
    </Content>
  );
};

export default SearchBar;
