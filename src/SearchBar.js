import React, { useState } from 'react'
import JSONDATA from './MOCK_DATA.json'
import './App.css'
function SearchBar() {
    const [search, setSearch] = useState("");
  return (
    <div>
        <input type='text' 
        placeholder='search'
        onChange={(e)=>{setSearch(e.target.value)}}
        />
      <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
    </tr>
  </thead>
      {
          JSONDATA.filter((val)=>{
              if(search == " "){
                  return val
              }else if(val.first_name.toLowerCase().includes(search.toLowerCase())){
                  return val
              }
          }).map((val,key)=>{
              return(
                <tbody>
                <tr>
                  <th scope="row">{val.id}</th>
                  <td>{val.first_name}</td>
                  <td>{val.last_name}</td>
                </tr>
                </tbody>
              )
          })
      }
      </table>
    </div>
  )
}

export default SearchBar
