import './App.css'

function App() {

  const Title = 'New Blog' ; 


  return (
    <>
      <div className='App'>
        <nav>
          <h1>Navigation</h1>
        </nav>
        <div className='Content'>
            <h1>{Title}</h1>
            <p>Test Blog</p>
        </div>
      </div>
    </>
  )
}

export default App
