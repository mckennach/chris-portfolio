
import React, { useState } from 'react';
import Image from 'next/image';


const Photos = props => {
    // const [imageIsLoaded, setImageIsLoaded] = useState(false)  
    const renderPhotos = () => {
        
       const array = Array.from(Array(10).keys());
       return array.map(index => (
         <li className="page--photos__li" key={index}>
                <Image 
                    src={`/photos/chris-${index}.jpg`}
                    layout="fill"
                    alt="Photo Gallery Image"
                    loading="lazy"
                />
            </li>
       ));
      
    }
    
    return (
        <main className="page--photos">
            <div className="page--photos__heading">
                    <h2 className="page--photos__title">Photos</h2>
                    <div className="page--photos__desc">
                        <p>A place to store good times</p>
                    </div>
                </div>
            <div className="page--photos__container">
                <ul className="page--photos__ul">
                    {renderPhotos()}
                </ul>
            </div>
        </main>  
    );
  };

  export default Photos;