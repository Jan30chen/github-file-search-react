/*
 * @Date: 2021-04-12 17:40:17
 * @Author: chenwb
 * @LastEditTime: 2021-04-12 17:56:20
 * @LastEditors: chenwb
 * @FilePath: \github-file-search-react\src\components\SearchView.js
 * @Descripttion: 
 */
import React, { useState, useEffect, useRef } from 'react';
const SearchView = ({ onSearch }) => {
  const [input, setInput] = useState('');
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const onInputChange = (event) => {
    const input = event.target.value;
    setInput(input);
    onSearch(input);
  };
  return (
    <div className="search-box">
      My Repository <span className="slash">/</span>
      <input
        type="text"
        name="input"
        value={input}
        ref={inputRef}
        autoComplete="off"
        onChange={onInputChange}
      />
    </div>
  );
};
export default SearchView;