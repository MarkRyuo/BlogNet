import './App.css'

//* Dynamic Values and Templates

function App() {

  const Title = 'New Blog' ;
  const Likes = '90 Likes' ;
  //*const Person = { name: 'Moda', age: 19 }
  const Link = 'https://www.google.com/' ;


  return (
    <>
      <div className='App'>
        <nav>
          <h1>Navigation</h1>
        </nav>
        <div className='Content'>
            <h1>{Title}</h1>
            <a href={Link}>Google</a>
            <p>{Likes}</p>
        </div>
      </div>
    </>
  )
}

export default App
