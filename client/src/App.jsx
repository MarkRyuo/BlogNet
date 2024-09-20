import './App.css'
import { NavBar } from './components/NavBar';
import { Home } from './components/Home' ;

//? Dynamic Values and Templates

function App() {


  return (
    <>
      <div className='App'>
        <NavBar />
        <div className='Content'>
            <Home />
        </div>
      </div>
    </>
  )
}

export default App
