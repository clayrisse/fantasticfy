import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Card = (props) => {
  let navigate = useNavigate();
  let { userId } = useParams();
  
  return (
    <div>
      Card
      <button onClick={() => navigate(`/user/${userId}`)}> click</button>
    </div>
  );
};

export default Card;
