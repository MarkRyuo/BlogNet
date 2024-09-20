import './App.css'
import { NavBar } from './components/NavBar';

//? Dynamic Values and Templates

function App() {

  const Title = 'New Blog' ;
  const Likes = '90 Likes' ;
  //*const Person = { name: 'Moda', age: 19 }
  const Link = 'https://www.google.com/' ;


  return (
    <>
      <div className='App'>
        <NavBar/>
        <div className='Content'>
            <div className='main-Content'>
                <h1>{Title}</h1>
                <a href={Link}>Google</a>
                <p>{Likes}</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
