import React, { useContext, useState, useEffect } from 'react';
import DataContext from '../context/DataContext';
import { useNavigate, useParams } from 'react-router-dom';
import './ProfilePage.css';

const ProfilePage = () => {
  const navigate = useNavigate();
  //acá tambien tenemos el usuario por params en el caso de que quisieramos
  //hacer una llamada de un objeto específico que traiga mas info de la api
  const { userId } = useParams();
  //En este caso usamos context
  const { userProfile, setUserProfile, userList} = useContext(DataContext);
  const [usersBySkill, setUsersBySkill ] = useState(userList.filter(u=> u.employment.key_skill === userProfile.employment.key_skill))

  console.log('*-------', usersBySkill);

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
        <p className="title">{userProfile.employment.key_skill} <button className="small-btn">more</button></p>
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
