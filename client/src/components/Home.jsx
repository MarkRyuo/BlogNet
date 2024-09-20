import MainContent from './Home.module.css' ;


//* Css Module 
/* 

Create a Css Module : e.g Home.module.css 
import the module: e.g import MainContent from './Home.module.css' ;

*/
export const Home = () => {

    const handleRepost = () => {
        
    }
    
    const Title = 'Homepage' ;
    
    return (
        <main className={MainContent.Main}>
            <div className={MainContent.MainContent}>
                <h1 className={MainContent.Title}>{Title}</h1>

                <div className={MainContent.blogContent}>
                    <div className={MainContent.blogImg}>
                        <img src='https://i.pinimg.com/originals/c2/fc/1c/c2fc1c0469a53d9d5a9d53e56fb96170.jpg' alt='Error Image' className='' style={{width: "100%", borderRadius: "100px", maxWidth: "100px"}} />
                    </div>
                    <div className={MainContent.blogCredential}>
                        <a href='' style={{textDecoration: "none", fontSize: "1.5rem"}}>Jhon Mark Malupa</a> 
                        <p>Post: Hello World</p>
                        <button type='button' onClick={() => {}}>Repost</button>
                    </div>
                </div>
            </div>
        </main>
    );
}