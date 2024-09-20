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
                        <p>{'Moda'}</p>
                    </div>
                    <div>
                        <a href=''>Unknown Link</a>
                        <p>Unknown</p>
                    </div>
                </div>
            </div>
        </main>
    );
}