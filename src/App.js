import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import './App.scss';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import SearchBar from './components/searchBar/SearchBar.jsx'
// import ImageGrid from './components/imageGrid/ImageGrid';

function App() {

  const [photos, getPhotos] = useState([])
    
  const url = "https://api.unsplash.com/photos";
  const accessKey = "BEb14Zx75K9ih6aZaZegmdlsiu5VvKpwnDo92hADf0M"

  useEffect(() => {
      const fetchData = async () =>{
      //   setLoading(true);
        try {
          const  response = await axios.get(`${url}?query=london&client_id=${accessKey}`);
          const data = await response.data;
          getPhotos(data);
          console.log(data)
        } catch (error) {
          console.error(error.message);
        }
      //   setLoading(false);
      }
  
      fetchData();
    }, []);

  // const image = photos.toString().split(',');

  return (
    <div className="App">
      <SearchBar photos={photos}/>
      {/* {
        photos.length>0&&(
          <ImageGrid photos={photos}/>
        )} */}
    </div>
  );
}

export default App;
