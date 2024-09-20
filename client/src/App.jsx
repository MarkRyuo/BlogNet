import './App.css'

function App() {

  const Title = 'New Blog' ;
  const Likes = '90 Likes' ;
  const Person = {
    name: 'Moda',
    age: 19
  }
  const GoogleSite = 'https://www.google.com/' ;


  return (
    <>
      <div className='App'>
        <nav>
          <h1>Navigation</h1>
        </nav>
        <div className='Content'>
            <h1>{Title}</h1>
            <a href={GoogleSite}>Google</a>
            <p>{Likes}</p>
        </div>
      </div>
    </>
  )
}

export default App
