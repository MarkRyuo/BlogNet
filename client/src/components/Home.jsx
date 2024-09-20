import MainContent from './Home.module.css' ;
import { useState } from 'react';


//* Use Map() Method 

export const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: "Beyond to the Infinite", author: "Moda", id: "1"},
        {title: "Beyond to the Infinite: Moon Arc", author: "Niyari", id: "2"},
        {title: "Beyond to the Infinite: The End Arc", author: "Riyuo", id: "3"}
    ])


    return (
        <>
            <div className={MainContent.MainContainer}>
                {blogs.map(() => (
                    <div className=''></div>
                ))}
            </div>
        </>
    );
}