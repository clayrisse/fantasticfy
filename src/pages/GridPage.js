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
  // const [isActive, setIsActive] = useState(false);

  useEffect(() => setCards(showList) ,[showList])

  const iLastCard = currentPage * cardsPerPage;
  const iFirstCard = iLastCard - cardsPerPage;
  const currentCards = cards.slice(iFirstCard, iLastCard);
 
  const paginate = pageNum => {
    setCurrentPage(pageNum);
    // if(pageNum ===currentPage) setIsActive(current => !current);
    console.log('pageNum', pageNum, 'pageNum', pageNum)
    // if(pageNum ===currentPage) {
    //   setIsActive(!isActive);

    // }
  }

  return (
    <div>
      <SearchBar/>
      <Pagination
        cardsPerPage={cardsPerPage}
        totalCards={cards.length}
        paginate={paginate}
        currentPage={currentPage}
      />
      <div className="grid-container">
        { currentCards.map((user, index) => {
          return !user.isDone && <Card 
          key={user.uid} 
          userObj={user} 
          index={index} 
          />;
        })}
      </div>
    </div>
  );
};

export default GridPage;
