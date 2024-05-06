import './App.css'
import Navbar2 from "./Components/Navbar2"
import Home from "./Pages/Home"
import Movies from "./Pages/Movies"
import TvShows from "./Pages/TvShows"
import BookMarks from "./Pages/BookMarks"
import BookMarkHelp from './Pages/BookMarkHelp'
import MovieDisplay from "./Pages/MovieDisplay"
import {Routes,Route} from "react-router-dom"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Loader from './Components/Loader'
import TvShowDisplay from "./Pages/TvShowDisplay"
import SearchPage from "./Pages/SearchPage"

function App() {

  return (
    <>
    <div className='main flex flex-col md:flex-row'>
          <Navbar2 className="z-100"/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/movies" element={<Movies/>}/>
          <Route path="/tvshows" element={<TvShows/>}/>
          <Route path="/bookmarks" element={<BookMarks/>}/>
          <Route path="/bmhelp" element={<BookMarkHelp/>}/>
          <Route path="/movie/:id" element={<MovieDisplay/>}/>
          <Route path="/tvshow/:id" element={<TvShowDisplay/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path='/search' element={<SearchPage/>}/>
          <Route path="/loader" element={<Loader/>}/>
          <Route path='*' element={<Home />} />
        </Routes>
    </div>
    </>
  )
}

export default App
