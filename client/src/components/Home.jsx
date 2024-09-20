import MainContent from './Home.module.css' ;
import { useState } from 'react';

//* Css Module 
/* 

Create a Css Module : e.g Home.module.css 
import the module: e.g import MainContent from './Home.module.css' ;

*/
export const Home = () => {

    const [repost, setRepost] = useState("Jhon Mark Malupa") ;
    const [post, setPost] = useState("Hello World") ;

    const handleRepost = () => {
        setRepost("Moda Official")
        setPost("Hello World reposted by: ")
    }
    
    const Title = 'Homepage' ;
    
    return (
        <>

        </>
    );
}