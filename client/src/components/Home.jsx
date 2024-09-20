import MainContent from './Home.module.css' ;


//* Css Module 
/* 

Create a Css Module : e.g Home.module.css 
import the module: e.g import MainContent from './Home.module.css' ;

*/
export const Home = () => {
    
    const Title = 'New Blog' ;
    const Likes = '90 Likes' ;
    //*const Person = { name: 'Moda', age: 19 }
    const Link = 'https://www.google.com/' ;
    
    return (
        <main className={MainContent.Main}>
            <div className={MainContent.MainContent}>
                <h1 className={MainContent.Title}>{Title}</h1>
                <div className={MainContent.blogContent}>
                    <div className=''>
                        <p>{'Moda'}</p>
                    </div>
                    <div className={MainContent.blog}>
                        <a href={Link}>Google</a>
                        <p>{Likes}</p>
                    </div>
                </div>
            </div>
        </main>
    );
}