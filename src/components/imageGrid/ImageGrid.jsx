import React, {useState} from 'react'
import '../imageGrid/ImageGrid.scss'
import closeIcon from '../../Assets/close.png'
// import CloseIcon from '@mui/icons-material/Close';
// import { Component } from 'react/cjs/react.production.min'

export default function ImageGrid( {photos, filteredResults, searchInput}) {
    

    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('')
    
    const getImg = (urls) => {
        setTempImgSrc(urls)
        
        setModel(true)
    }
    
    const close = ()=> {
        setModel(false)
    }
    return(
        
        <>
        
            <div className={model? 'model open' : 'model'}>
                <img src={tempImgSrc} alt="" className='img'/>
                <div className="svg">
                <img src={closeIcon} alt="" height={50} onClick={()=> close()}/>
                </div>
            </div>
            <div className='imageGrid'>
                {searchInput.length > 1 ?(
                filteredResults.map((photo, index) => {
                    return(
                        <div>
                            <div className='imageGrid-img'>
                                <img src={photo.urls.small} alt="" key={index} />
                            </div>
                            <p>{photo.description}</p>
                        </div>
                    
                )})):
                photos.map((img, index) =>(
                    <div>
                        <div className='imageGrid-img' onClick={()=> getImg(img.urls.small)}>
                            <img src={img.urls.small} alt="" key={index}/>
                            <div className='details'>
                            <span>{img.description}</span>
                        </div>
                        </div>
                        
                    </div>
                ))
                }
            </div>
        </>
    )
  
}


