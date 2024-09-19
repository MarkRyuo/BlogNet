import './App.css'

function App() {

  const Title = 'New Blog' ;
  const Likes = '90 Likes' ;
  const Person = {
    person1 : {
      name: 'Moda',
      age: 19
    }
  }


  return (
    <>
      <div className='App'>
        <nav>
          <h1>Navigation</h1>
        </nav>
        <div className='Content'>
            <h1>{Title}</h1>
            <p>{...Person.name}</p>
            <p>{Likes}</p>
        </div>
      </div>
    </>
  )
}

export default App
