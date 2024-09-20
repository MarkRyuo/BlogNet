import MainContent from './Home.module.css' ;
import { useState } from 'react';


//* Use Map() Method 

export const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: "Beyond to the Infinite", author: "Moda", id: "1"},
        {title: "Beyond to the Infinite", author: "Niyari", id: "2"},
        {title: "Beyond to the Infinite", author: "Riyuo", id: "3"}
    ])


    return (
        <>
            <div className=''>
                {blogs.map(() => (
                    
                ))}
            </div>
        </>
    );
}