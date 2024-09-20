import MainContent from './Home.module.css' ;
import { useState } from 'react';


//* Use Map() Method 
//* blogs.id is a unique identifier

export const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: "Beyond to the Infinite", author: "Moda", id: "1"},
        {title: "Beyond to the Infinite: Moon Arc", author: "Niyari", id: "2"},
        {title: "Beyond to the Infinite: The End Arc", author: "Riyuo", id: "3"}
    ])


    return (
        <>
            <div className={MainContent.MainContainer}>
                <div className={MainContent.blogContainer}>
                    {blogs.map(() => (
                        <div className={MainContent.blogConte} key={blogs.id}>

                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}