/*
 * @Date: 2021-04-12 15:31:15
 * @Author: chenwb
 * @LastEditTime: 2021-04-13 14:20:03
 * @LastEditors: chenwb
 * @FilePath: \github-file-search-react\src\components\FilesList.js
 * @Descripttion: 
 */
import React from 'react';
import ListItem from './ListItem';

const FilesList = ({ files, isSearchView, counter }) => {
  return (
    <div className="list">
      {files.length > 0 ? (
        files.map((file, index) => {
          return <ListItem key={file.id} index={index} isSearchView={isSearchView} counter={counter} {...file} />;
        })
      ) : (
        <div>
          <h3 className="no-result">No matching files found</h3>
        </div>
      )}
    </div>
  );
};
export default FilesList;