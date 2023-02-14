import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Auth } from './components/auth'
import { db } from '../config/firebase'
import { useEffect, useState } from 'react'
import { getDocs, collection } from 'firebase/firestore'
function App() {

  const [MovieList, setMovieList] = useState([])
  const moviesColletionRef = collection(db, "movies")

  useEffect(() => {
    const getMovieList = async () => {
      try {
        const data = await getDocs(moviesColletionRef);
        const filteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        setMovieList(filteredData)
      } catch (err) {
        console.log(err);
      }
    }

    getMovieList();
  }, [])

  return (
    <>
      <Auth />

      <div>
        <input type="text" placeholder='Movie Title...' />
        <input type="number" placeholder='Release Date...' />
        <input type="checkbox" placeholder='Release Date...' />
        <label htmlFor="">Premiadas</label>
        <button>Submit Movie</button>
      </div>


      <div>
        {MovieList.map((movie) => (
          <div>
            <h1>{movie.title}</h1>
            <p>Year of release:{movie.realeaseDate}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
