import MainContent from './Home.module.css' ;


//* Css Module 
/* 

Create a Css Module : e.g Home.module.css 
import the module: e.g import MainContent from './Home.module.css' ;

*/
export const Home = () => {
    
    const Title = 'Homepage' ;
    
    return (
        <main className={MainContent.Main}>
            <div className={MainContent.MainContent}>
                <h1 className={MainContent.Title}>{Title}</h1>

                <div className={MainContent.blogContent}>
                    <div className={MainContent.blogName}>
                        <p>Img</p>
                    </div>
                    <div className={MainContent.blogCredential}>
                        <a href=''>Jhon Mark Malupa</a> 
                        <p>Post: Hello World</p>
                    </div>
                </div>
            </div>
        </main>
    );
}