import React from 'react';
import { createContext, useState, useEffect } from 'react';

import axios from 'axios';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  // const [filter, setFilter] = useState('')
  // const [gender, setGender] = useState(null)
  const [userList, setUserList] = useState([]);
  const [showList, setShowList] = useState([]);
  const [userProfile, setUserProfile] = useState({});
  const [skill, setSkill] = useState('');
  const [skillList, setSkillList] = useState([]);

  useEffect(() => {
    let mounted = true;
    axios
      .get('https://random-data-api.com/api/v2/users?size=100')
      .then((data) => {
        // console.log(data.data);
        if (mounted) setUserList(data.data);
      })
      .catch((error) => console.log(error));
    return () => (mounted = false);
  }, []);

  // handleUserCard(id) {
  //   const transformedEmployees = employees.map((employee) => employee.id === parseInt(event.currentTarget.id)
  //     ? employee.teamName === selectedTeam ? { ...employee, teamName: '' }
  //     : { ...employee, teamName: selectedTeam } : employee);
  //   setEmployees(transformedEmployees);
  // }

  return (
    <DataContext.Provider
      value={{
        // filter,
        // setFilter,
        // gender,
        // setGender,
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
