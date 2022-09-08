import React, { useContext, useEffect, useState } from 'react';
import DataContext from '../context/DataContext';
import './GridPage.css';
import Card from '../Card';

const GridPage = () => {
  const { userList } = useContext(DataContext);
  // console.log('userList', userList);

  // const showList = userList.filter((user) => user.gender === 'TeamA');
  // console.log('showList', sh wList)
  // useEffect

  return (
    <div>
      GridPage
      <div className="grid-container">
        { userList.map((user) => {
          return !user.isDone && <Card key={user.uid} userObj={user} />;
        })}
      </div>
    </div>
  );
};

export default GridPage;
