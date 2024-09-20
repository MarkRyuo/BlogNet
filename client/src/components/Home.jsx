import MainContent from './Home.module.css' ;
import { useState } from 'react';


//* Use Map() Method 
//* blogs.id is a unique identifier

export const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: "Beyond to the Infinite", author: "Moda", id: "1"},
        {title: "Beyond to the Infinite: Moon Arc", author: "Niyari", id: "2"},
        {title: "Beyond to the Infinite: Moon End Arc", author: "Riyuo", id: "3"}
    ])


    return (
        <>
            <div className={MainContent.MainContainer}>
                <div className={MainContent.blogContainer}>
                    {blogs.map((blog) => (
                        <div className={MainContent.blogContent} key={blogs.id}>
                            <h1>Title: {blog.title}</h1>
                            <p>Author: {blog.author}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}