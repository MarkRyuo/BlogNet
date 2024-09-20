import MainContent from './Home.module.css' ;


//* Css Module
export const Home = () => {
    
    const Title = 'New Blog' ;
    const Likes = '90 Likes' ;
    //*const Person = { name: 'Moda', age: 19 }
    const Link = 'https://www.google.com/' ;
    
    return (
        <>
            <div className={MainContent.MainContent}>
                <h1 className={}>{Title}</h1>
                <a href={Link}>Google</a>
                <p>{Likes}</p>
            </div>
        </>
    );
}