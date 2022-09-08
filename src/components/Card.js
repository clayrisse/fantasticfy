import React, { useContext } from 'react';
import DataContext from '../context/DataContext';
import { useNavigate, Link } from 'react-router-dom';
import './Card.css';

const Card = ({ userObj, index}) => {
  
  const { setUserProfile, setSkill, showList, setShowList} = useContext(DataContext);
  let navigate = useNavigate();
  const removeCard = (id, index) => {
    console.log('REMOVE');
    // let xx = showList.splice(index,1)
    // setShowList(xx)
    setShowList(showList.filter((u)=>u.uid!==id))
    // showList.splice(index,1)
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
      {/* <p className="mini">{`${userObj.employment.title} | ${userObj.employment.key_skill}`}</p> */}
      {/* <p>Harvard University</p> */}
      {/* <a href="#"><i class="fa fa-dribbble"></i></a>
      <a href="#"><i class="fa fa-twitter"></i></a>
      <a href="#"><i class="fa fa-linkedin"></i></a>
      <a href="#"><i class="fa fa-facebook"></i></a> */}

      <button onClick={()=>removeCard(userObj.uid, index)}>Remove</button>

      <button onClick={openProfile}>View Profile</button>
      {/* <Link onClick={openProfile} to={`/user/${userId}`}>
          View Profile
        </Link> */}

      {/* <Link to={`/user/${userId}`}>Home</Link> */}
      {/* <button onClick={() => navigate(`/user/${userId}`)}>View Profile</button> */}
    </div>
  );
};

export default Card;
