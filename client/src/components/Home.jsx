


//* Css Module
export const Home = () => {
    
    const Title = 'New Blog' ;
    const Likes = '90 Likes' ;
    //*const Person = { name: 'Moda', age: 19 }
    const Link = 'https://www.google.com/' ;
    
    return (
        <>
            <div className='main-Content'>
                <h1>{Title}</h1>
                <a href={Link}>Google</a>
                <p>{Likes}</p>
            </div>
        </>
    );
}