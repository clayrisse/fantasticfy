import React, { useState, useContext } from 'react'
import DataContext from '../context/DataContext';
import './SearchBar.css'

export const SearchBar = ({ setCurrentPage }) => {

  const [filterList, setFilterList] = useState([])
  const {searchText, setSearchText, showList, setShowList, genderList, userList} = useContext(DataContext);
  const [genderFilter, setGenderFilter] = useState('')

  const handleChange = (e) => {
      setSearchText(e.target.value)
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log('searchText-----', searchText)
      let xxx = userList.filter((user) => { 
        console.log(user.username, ' ==? ', searchText)
        if (searchText.split(' ').length === 2){ 
          console.log('------------', searchText.split(' ')[0], "  ", user.first_name)
          return searchText.split(' ')[0] === user.first_name 
          && searchText.split(' ')[1] === user.last_name
        }
        return searchText === user.username
      })
      setShowList(xxx)
      setFilterList(xxx)
    }


  const handleGenderFilter = (e) => {
    console.log('geeeeeeeeeeeeeender', e.target.value)
    if (e.target.value !== 'All Genders') {
      setShowList(userList.filter((user) => user.gender === e.target.value))
      setCurrentPage(1)
    } else {
      setShowList(userList)
      setCurrentPage(1)
    }
  }

  const resetFilters = (userList) => {

    setShowList(userList)
    setSearchText('')
  }

  return (
    <div className="search-bar ">

      <div className="search-element search-pair">
        <div>
          <form onSubmit={handleSubmit} className="ui form">
              <div className="field">
                  <input 
                      id="inputsearch"   type="text" 
                      value={searchText} onChange={handleChange}
                      placeholder="Search full name or username"
                  />
              </div>
          </form>
        </div>
        <div>
          <button id="search-btn" onClick={handleSubmit}>Search</button>
        </div>
      </div>
      {/* <div className="search-element">
      </div> */}
      <div className="search-element">
        <select name="gender" id="gender"  placeholder="Gender" onChange={handleGenderFilter}>
          { genderList.map((gender) => <option key={gender} value={gender}>{gender}</option>)}
        </select>
      </div>

      <div className="search-element">
        <button id="reset-btn" onClick={()=>resetFilters(userList)}>Reset all users</button>
      </div>

    </div>
  )
}
