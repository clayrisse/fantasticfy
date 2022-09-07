import React, { useContext } from 'react';
import DataContext from '../context/DataContext';
import Card from '../Card';

const GridPage = () => {
  const { userList } = useContext(DataContext);
  console.log('userList', userList);
  return (
    <div>
      GridPage
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default GridPage;
