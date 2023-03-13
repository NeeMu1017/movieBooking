
import './App.css';
import { Home } from './features/movie/home/Home';
import Signin from './features/user/signin/Signin';
import Sigup from './features/user/signup/Sigup';

function App() {
  return (
    <div className='App'>
      <Home/>
     {/* <Signin/> */}
    </div>
  );
}

export default App;
