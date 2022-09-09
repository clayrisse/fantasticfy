import React, { useState, useContext } from 'react'
import DataContext from '../context/DataContext';
import './SearchBar.css'

export const SearchBar = () => {

  const [filterList, setFilterList] = useState([])
  const {searchText, setSearchText, showList, setShowList, genderList, userList} = useContext(DataContext);
  const [genderFilter, setGenderFilter] = useState('')

  const handleChange = (e) => {
      setSearchText(e.target.value)
      // let xxx = userList.filter((user) => {  
      //   let fullName = `${user.first_name} ${user.last_name}`
      //   return user.username.toLowerCase().includes(searchText) 
      //   || fullName.toLowerCase().includes(searchText.toLowerCase()) 
      // })
      // setShowList(xxx)
      // setFilterList(xxx)

      // console.log('filterList1---', filterList)
      // console.log('filterList2-', filterList)
      // setSearchText('')
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

        
        // if (searchText.split(' ').length === 1){
          return searchText === user.username
        // }


      })
      setShowList(xxx)
      console.log('filterList1---', filterList)
      setFilterList(xxx)
      console.log('filterList2-', filterList)
      // setSearchText('')


      // console.log(`this.state.term`, this.state.term)
      // this.props.onFormSubmit(searchText)
  }

  const handleGenderFilter = (e) => {
    console.log('geeeeeeeeeeeeeender', e.target.value)
    if (e.target.value !== 'All') {
      setShowList(userList.filter((user) => user.gender === e.target.value))
    } else {
      setShowList(userList)
    }
  }

  return (
    <div className="search-bar ">

      <div className="search-element">
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

      <div className="search-element">
        <select name="gender" id="gender"  placeholder="Gender" onChange={handleGenderFilter}>
          { genderList.map((gender) => <option key={gender} value={gender}>{gender}</option>)}
        </select>
      </div>

      <div className="search-element">
        <button id="reset-btn" onClick={()=>setShowList(userList)}>Reset all users</button>
      </div>

    </div>
  )
}
