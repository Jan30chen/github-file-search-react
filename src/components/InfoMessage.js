/*
 * @Date: 2021-04-13 11:03:31
 * @Author: chenwb
 * @LastEditTime: 2021-04-13 11:03:46
 * @LastEditors: chenwb
 * @FilePath: \github-file-search-react\src\components\InfoMessage.js
 * @Descripttion: 
 */
import React from 'react';
const InfoMessage = () => {
  return (
    <div className="info-message">
      You've activated the <em>file finder</em>. Start typing to filter the file
      list. Use <span className="navigation">↑</span> and{' '}
      <span className="navigation">↓</span> to navigate,{' '}
      <span className="navigation">esc</span> to exit.
    </div>
  );
};
export default InfoMessage;