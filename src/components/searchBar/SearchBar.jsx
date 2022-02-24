import React,  { useState }  from 'react'
import ImageGrid from '../imageGrid/ImageGrid';
import './SearchBar.scss'

export default function SearchBar({photos}) {
  const [searchInput, setSearchInput] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
    if (searchInput !=="") {
    const filteredPhoto = Object.values(photos).filter((photos) => {
      return Object.values(photos).join('').toLowerCase().includes(searchInput.toLowerCase())
    })
    console.log(filteredPhoto)
    setFilteredResults(filteredPhoto)
    }
      else{
        setFilteredResults(photos)
      }
    }
      return (
        <div>
          <div className='input'>
            <div className="input-fontSearch">
                <input type="text" 
                    placeholder="Search Image"
                    onChange={(e) => searchItems(e.target.value)}
                /> 
                <i className="fa fa-user fa-lg"></i>
            </div>
          </div> 
          {
            photos.length>0&&
            <ImageGrid filteredResults={filteredResults} searchInput={searchInput} photos={photos}/>
          }
          
      </div>
        
      )
}
