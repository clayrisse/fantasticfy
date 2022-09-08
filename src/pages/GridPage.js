import React, { useContext, useEffect, useState } from 'react';
import DataContext from '../context/DataContext';
import './GridPage.css';
import Card from '../components/Card';
import { SearchBar } from '../components/SearchBar';
import Pagination from '../components/Pagination';

const GridPage = () => {
  const { userList, showList } = useContext(DataContext);
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState(showList);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(10);
  // console.log('userList', userList);

  // const showList = userList.filter((user) => user.gender === 'TeamA');
  // console.log('showList', sh wList)
  // useEffect

  useEffect(() => setCards(showList) ,[showList])
  
  //  Get current cards
  const iLastCard = currentPage * cardsPerPage;
  const iFirstCard = iLastCard - cardsPerPage;
  const currentCards = cards.slice(iFirstCard, iLastCard);
 
  //  // Change page
  const paginate = pageNum => setCurrentPage(pageNum);

  // console.log('showList', showList)
  console.log('cards', cards)
  return (
    <div>
      GridPage
      <SearchBar/>
      <br/>
      <br/>
      <br/>
      <Pagination
        cardsPerPage={cardsPerPage}
        totalCards={cards.length}
        paginate={paginate}
      />
      <div className="grid-container">
        {/* { showList.map((user, index) => { */}
        { currentCards.map((user, index) => {
          return !user.isDone && <Card key={user.uid} userObj={user} index={index}/>;
        })}
      </div>
    </div>
  );
};

export default GridPage;
