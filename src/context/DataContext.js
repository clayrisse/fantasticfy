import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [searchText, setSearchText] = useState('')
  const [userList, setUserList] = useState([]);
  const [showList, setShowList] = useState([]);
  const [userProfile, setUserProfile] = useState({});
  const [skill, setSkill] = useState('');
  const [skillList, setSkillList] = useState([]);
  const [genderList, setGenderList] = useState([]);
  

  useEffect(() => {
    let mounted = true;
    axios
    .get('https://random-data-api.com/api/v2/users?size=50')
    .then((data) => {
      if (mounted) { 
        setUserList(data.data);
        setShowList(data.data);
        let listGender = ['All']
        data.data.forEach((user) => {
          if (!listGender.includes(user.gender)) listGender.push(user.gender)
        })
        setGenderList(listGender);
      }
    })
    .catch((error) => console.log(error));
    return () => (mounted = false);
  }, []);
    


  return (
    <DataContext.Provider
      value={{
        genderList, setGenderList,
        searchText, setSearchText,
        showList, setShowList,
        skill, setSkill,
        skillList, setSkillList,
        userProfile, setUserProfile,
        userList,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
