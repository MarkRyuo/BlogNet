import { Home } from './components/Home';
import { NavBar } from './components/NavBar';

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
