import React, { useContext } from 'react';
import DataContext from '../context/DataContext';
import { useNavigate, Link } from 'react-router-dom';
import './Card.css';

const Card = ({ userObj, index}) => {
  
  const { setUserProfile, setSkill, showList, setShowList} = useContext(DataContext);
  let navigate = useNavigate();
  const removeCard = (id, index) => {
    console.log('REMOVE');
    setShowList(showList.filter((u)=>u.uid!==id))
  };

  const openProfile = () => {
    console.log('OPEn');
    console.log('userObj.username', userObj.username);
    setUserProfile(userObj);
    setSkill(userObj.employment.key_skill)
    navigate(`/user/${userObj.username}`);
  };
  return (
    <div className="card">
      <img src={userObj.avatar} alt="John" style={{ width: '65%' }} />
      <h1>{`${userObj.first_name} ${userObj.last_name}`}</h1>
      <p className="title">{userObj.username}</p>
      <button onClick={()=>removeCard(userObj.uid, index)}>Remove</button>
      <button onClick={openProfile}>View Profile</button>
    </div>
  );
};

export default Card;
