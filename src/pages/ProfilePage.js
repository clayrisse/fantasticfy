import React, { useContext, useState, useEffect } from 'react';
import DataContext from '../context/DataContext';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './ProfilePage.css';
import InfoLine from '../components/InfoLine';

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
      <nav>
          <Link to="/">return</Link>
        </nav>

      <div className="profile">
        <img
          src={userProfile.avatar}
          alt="John"
          style={{ width: '100%', maxWidth: '300px' }}
        />
        <h1>{`${userProfile.first_name} ${userProfile.last_name}`}</h1>
        <p>{userProfile.username}</p>
        <p className="title">{userProfile.employment.title}</p>
        <p className="title">{userProfile.employment.key_skill} 
          <button className="small-btn" onClick={()=>setIsBtnSkill(!isBtnSkill)}>{`${isBtnSkill? 'see less' : 'see more'}`}</button>
        </p>
        { isBtnSkill &&  <div className="line-container">
          { usersBySkill.map( user =>
            user.uid !== userProfile.uid && <InfoLine user={user} openProfile={openProfile}/>
          )
        }
        </div>
        }       
        <div className="info-detail">
          <div className="info-personal">
            <p className="info"><strong>Email: </strong>{userProfile.email}.</p>
            <p className="info"><strong>Gender: </strong>{userProfile.gender}.</p>
            <p className="info"><strong>Phone Number: </strong>{userProfile.phone_number}.</p>
            <p className="info"><strong>Birthday: </strong>{userProfile.date_of_birth}.</p>
            <p className="info"><strong>Address: </strong>
              {`${userProfile.address.street_name} ${
                userProfile.address.stree_address
                  ? userProfile.address.stree_address
                  : ''
              }. ${userProfile.address.city} ${userProfile.address.zip_code}`}
            </p>
            <p className="info"><strong>City/Country: </strong>{`${userProfile.address.state}, ${userProfile.address.country}`}</p>
          </div>
          <div className="info-plan">
            
            <p className="info"><strong>Subscription</strong></p>
            <p className="info"><strong>Plan: </strong>{userProfile.subscription.plan}.</p>
            <p className="info"><strong>Status: </strong>{userProfile.subscription.status}.</p>
            <p className="info"><strong>Payment Method: </strong>{userProfile.subscription.payment_method}.</p>
            <p className="info"><strong>Term: </strong>{userProfile.subscription.term}.</p>
            <p className="info"><strong>CredictCard: </strong>{userProfile.credit_card.cc_number}.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
