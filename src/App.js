
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Ticketplan from './features/booking/movieplan/Ticketplan';
import Seatplan from './features/booking/seatplan/Seatplan';
import { Home } from './features/movie/home/Home';
import MovieDetail from './features/movie/MovieDetail/MovieDetail';
import Signin from './features/user/signin/Signin';
import Sigup from './features/user/signup/Sigup';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <Home />}>
          </Route>
          <Route path='/sigin' element={
            <Signin />}>
          </Route>
          <Route path='/signup' element={
            <Sigup />}>
          </Route>
          <Route path='/movie/:id/' element={
            <MovieDetail />}>
          </Route>
          <Route path='/movie/:id/ticketplan' element={
            <Ticketplan/>
          }>
          </Route>
          <Route path='/seatplan' element={
           <Seatplan/>
          }>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
