
 
import Image from 'next/image'


  const Photos = props => {

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
                    <li className="page--photos__li">
                        <Image 
                            src="/img-1.jpg" 
                            layout="fill"
                            alt="Photo Gallery Image" />
                    </li>
                    <li className="page--photos__li">
                        <Image src="/mike.jpg" layout="fill"
                        alt="Photo Gallery Image" />
                    </li>
                    <li className="page--photos__li">
                        <Image src="/img-3.jpg" layout="fill"
                        alt="Photo Gallery Image" />
                    </li>
                    <li className="page--photos__li">
                        <Image src="/img-2.jpg" layout="fill"
                        alt="Photo Gallery Image" />
                    </li>
                    <li className="page--photos__li">
                        <Image src="/josh.jpg" layout="fill"
                        alt="Photo Gallery Image" />
                    </li>
                    <li className="page--photos__li">
                        <Image 
                        src="/jeffesss.jpg"
                        layout="fill"
                        alt="Photo Gallery Image" />
                    </li>
                </ul>
            </div>
        </main>  
    );
  };

  export default Photos;