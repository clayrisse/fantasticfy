import React, { useContext, useState, useEffect } from 'react';
import DataContext from '../context/DataContext';
import { useNavigate, useParams } from 'react-router-dom';
import './ProfilePage.css';

const ProfilePage = () => {
  const navigate = useNavigate();
  //acá tambien tenemos el usuario por params en el caso de que quisieramos
  //hacer una llamada de un objeto específico que traiga mas info de la api
  // const { userId } = useParams();

  //En este caso usamos context
  const { userProfile, setUserProfile, setSkill, userList} = useContext(DataContext);
  const [usersBySkill, setUsersBySkill ] = useState(userList.filter(u=> u.employment.key_skill === userProfile.employment.key_skill))
  const [isBtnSkill, setIsBtnSkill ] = useState(false)

  const openProfile = (userObj) => {
    console.log('OPEn');
    console.log('userObj.username', userObj.username);
    setUserProfile(userObj);
    setSkill(userObj.employment.key_skill)
    setIsBtnSkill(!isBtnSkill)
    navigate(`/user/${userObj.username}`);
  };

  return (
    <div>
      <div>Profile</div>
      <div className="profile">
        <img
          src={userProfile.avatar}
          alt="John"
          style={{ width: '100%', maxWidth: '300px' }}
        />
        <h1>{`${userProfile.first_name} ${userProfile.last_name}`}</h1>
        <p className="title">{userProfile.username}</p>
        <p className="title">{userProfile.employment.title}</p>
        <p className="title">{userProfile.employment.key_skill} 
          <button className="small-btn" onClick={()=>setIsBtnSkill(!isBtnSkill)}>{`${isBtnSkill? 'less' : 'more'}`}</button>
        </p>
        { isBtnSkill &&  <div className="grid-container">
          { usersBySkill.map((user) =>{
            return user.uid !== userProfile.uid && <div>
              <h4 key={user.uid}>{`${user.first_name} ${user.last_name}`}</h4>
              <button onClick={()=> openProfile(user)}>View Profile</button>
            </div>
          })}
        </div>
        }       
        
        <p className="info"><strong>Email:</strong> {userProfile.email}</p>
        <p className="info"><strong>Gender:</strong> {userProfile.gender}</p>
        <p className="info"><strong>Phone Number:</strong> {userProfile.phone_number}</p>
        <p className="info"><strong>Birthday:</strong> {userProfile.date_of_birth}</p>
        <p className="info"><strong>Address:</strong>
          {`${userProfile.address.street_name}. ${
            userProfile.address.stree_address
              ? userProfile.address.stree_address
              : ''
          }`}
        </p>
        <p className="info">{`${userProfile.address.city} ${userProfile.address.zip_code}`}</p>
        <p className="info">{`${userProfile.address.state} ${userProfile.address.country}`}</p>
        <button>View Profile</button>
      </div>
    </div>
  );
};

export default ProfilePage;
